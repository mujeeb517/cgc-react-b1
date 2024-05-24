import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Error from "../util/Error";
import Loader from "../util/Loader";
import ShouldRender from "../util/ShouldRender";
import ProductItem from "./ProductItem";
import axiosInstance from '../util/axios';

// constructor: 1x
// componentDidMount: 1x
// shouldComonentUpdate: nX
// componentWillUpdate: nX
// componentDidUpdate: nX
// componentWillUnmount: 1x
// useState, useEffect, useParams

function ProductList() {

    const [products, setProducts] = useState([]);
    const [metadata, setMetadata] = useState({});
    const [hasError, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('');
    const [direction, setDirection] = useState('');
    const navigate = useNavigate();

    const onPrev = () => {
        if (page > 1) setPage(page - 1);
    }

    const onNext = () => {
        if (page < metadata.pages) setPage(page + 1);
    }

    const authErr = (err) => err.response && err.response.status === 401;

    const fetchData = async () => {
        setLoading(true);
        const path = `/api/v1/products/page/${page}/size/10?search=${search}&sort=${sort}&direction=${direction}`;
        try {
            const res = await axiosInstance().get(path);
            setProducts(res.data.data);
            setMetadata(res.data.metadata);
        } catch (err) {
            if (authErr(err)) {
                navigate('/login');
                return;
            }
            setError(true);
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    // componentDidMount
    // componentDidUpdate
    // componentWilUnmount
    useEffect(() => {
        fetchData();
    }, [page, sort, direction]);

    const onTextChange = (evt) => setSearch(evt.target.value);

    const onSearch = () => fetchData();

    const onKeyUp = (evt) => {
        if (evt.keyCode === 13) fetchData();
    }

    const onSortChange = (evt) => {
        // price:asc
        const sortString = evt.target.value;
        const tokens = sortString.split(':');
        setSort(tokens[0]);
        setDirection(tokens[1]);
    }

    const refresh = (id) => {
        fetchData();
    }

    // fetch
    return <div>
        <div className="flex m-2">
            <h1 className="text-xl font-semibold text-gray-500 m-2">Products</h1>
            <div className="flex justify-between">
                <button style={{ backgroundColor: page === 1 ? 'gray' : '' }} onClick={onPrev} className="bg-orange-500 p-1 text-white m-1 hover:bg-orange-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <h1 className="mt-2">{page} of {metadata.pages} (Total: {metadata.rows})</h1>
                <button style={{ backgroundColor: page === metadata.pages ? 'gray' : '' }} onClick={onNext} className="bg-orange-500 p-1 text-white m-1 hover:bg-orange-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
                <div className="flex">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute w-full inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input onKeyUp={onKeyUp} onChange={onTextChange} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search brand or model" required />
                    </div>
                </div>
                <div>
                    <select onChange={onSortChange} className="ml-2 block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
                        <option value="">Sort</option>
                        <option value="price:asc">Price Low to High</option>
                        <option value="price:desc">Price High to Low</option>
                        <option value="discount:asc">Discount Low to High</option>
                        <option value="discount:desc">Discount High to Low</option>
                    </select>
                </div>
                <Link to="/products/new" className="mx-4 rounded my-2 p-2 bg-orange-500 text-white hover:bg-orange-600">Add Product</Link>

            </div>
        </div>
        <ShouldRender when={loading}>
            <Loader />
        </ShouldRender>
        <ShouldRender when={hasError}>
            <Error />
        </ShouldRender>
        <div className="grid md:grid-cols-3 sm:grid-cols-2">
            {products.map(product => <ProductItem key={product._id} product={product} onItemDelete={refresh} />)}
        </div>
    </div>;
}

export default ProductList;
/*
    << <  > >>

    https://cgc-node-b1.onrender.com/api/v1/products/page/1/limit/10
    https://cgc-node-b1.onrender.com/api/v1/products/page/2/limit/10
    https://cgc-node-b1.onrender.com/api/v1/products/page/3/limit/10
*/