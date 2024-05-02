import axios from "axios";
import { useEffect, useState } from "react";
import Error from "../util/Error";
import Loader from "../util/Loader";
import ShouldRender from "../util/ShouldRender";
import ProductItem from "./ProductItem";

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

    const onPrev = () => {
        if (page > 1) setPage(page - 1);
    }

    const onNext = () => {
        if (page < metadata.pages) setPage(page + 1);
    }

    const fetchData = async () => {
        setLoading(true);
        const url = `https://cgc-node-b1.onrender.com/api/v1/products/page/${page}/size/10?search=${search}&sort=${sort}&direction=${direction}`;
        try {
            const res = await axios.get(url);
            setProducts(res.data.data);
            setMetadata(res.data.metadata);
        } catch (err) {
            setError(true);
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

    // fetch
    return <div>
        <div className="flex m-2">
            <h1 className="text-xl font-semibold text-gray-500 m-2">Products</h1>
            <div className="flex">
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
                <div class="flex">
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input onKeyUp={onKeyUp} onChange={onTextChange} type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search brand or model" required />
                        <button onClick={onSearch} type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                    </div>
                </div>
                <div>
                    <select onChange={onSortChange} className="border border-orange-500 h-10 rounded m-2">
                        <option value="">Sort</option>
                        <option value="price:asc">Price Low to High</option>
                        <option value="price:desc">Price High to Low</option>
                        <option value="discount:asc">Discount Low to High</option>
                        <option value="discount:desc">Discount High to Low</option>
                    </select>
                </div>

            </div>
        </div>
        <ShouldRender when={loading}>
            <Loader />
        </ShouldRender>
        <ShouldRender when={hasError}>
            <Error />
        </ShouldRender>
        <div className="grid md:grid-cols-3 sm:grid-cols-2">
            {products.map(product => <ProductItem product={product} />)}
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