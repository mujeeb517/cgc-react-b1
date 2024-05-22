import { useState } from "react";
import axiosInstance from '../util/axios';
import ShouldRender from "../util/ShouldRender";
import Error from "../util/Error";
import { useNavigate } from "react-router-dom";

function NewProduct() {

    const [product, setProduct] = useState({
        brand: '',
        model: '',
        price: '',
        discount: '',
        inStock: false,
        image: null
    });

    const navigate = useNavigate();

    const [hasError, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const onInputChange = (evt) => {
        const newState = { ...product, [evt.target.name]: evt.target.value };
        setProduct(newState);
    };

    const onFileChange = (evt) => {
        const newState = { ...product, image: evt.target.files[0] };
        setProduct(newState);
    };

    const onSave = async () => {
        try {
            const fd = new FormData();
            for (let key in product) {
                fd.append(key, product[key]);
            }
            await axiosInstance().post('/api/v1/products', fd);
            setSuccess(true);
            setProduct({
                brand: '',
                model: '',
                price: '',
                discount: '',
                inStock: false,
                image: null
            });
            navigate('/products/');
        } catch (err) {
            setError(true);
        }
    };

    return (<div className="m-2 p-2">
        <h1 className="text-xl font-bold">New Product</h1>
        <ShouldRender when={hasError}>
            <Error msg="Failed to save data, please try again" />
        </ShouldRender>
        <ShouldRender when={success}>
            <div className="p-2 my-4 w-1/2 bg-green-500 text-white rounded">Successfully saved data.</div>
        </ShouldRender>
        <div className="mb-4">
            <label className="block py-1">Brand</label>
            <select value={product.brand} name="brand" onChange={onInputChange} className="border border-gray-500 p-1 rounded w-1/3">
                <option value="">Brand</option>
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="Google">Google</option>
                <option value="Xiomi">Xiomi</option>
            </select>
            <ShouldRender when={!product.brand}>
                <div className="text-red-500 m-1 text-sm">Brand is required</div>
            </ShouldRender>
        </div>

        <div className="mb-4">
            <label className="block py-1">Model</label>
            <input value={product.model} name="model" onChange={onInputChange} type="text" placeholder="Model" className="border border-gray-500 p-1 rounded w-1/3" />
            <ShouldRender when={!product.model}>
                <div className="text-red-500 m-1 text-sm">Model is required</div>
            </ShouldRender>
            <ShouldRender when={product.model && product.model.length < 3}>
                <div className="text-red-500 m-1 text-sm">Min 3 chars</div>
            </ShouldRender>
            <ShouldRender when={product.model && product.model.length > 20}>
                <div className="text-red-500 m-1 text-sm">Max 20 chars</div>
            </ShouldRender>
        </div>

        <div className="mb-4">
            <label className="block py-1">Price</label>
            <input value={product.price} name="price" onChange={onInputChange} type="text" placeholder="Price" className="border border-gray-500 p-1 rounded w-1/3" />
            <ShouldRender when={!product.price}>
                <div className="text-red-500 m-1 text-sm">Price is required</div>
            </ShouldRender>
        </div>

        <div className="mb-4">
            <label className="block py-1">Discount</label>
            <input value={product.discount} name="discount" onChange={onInputChange} type="text" placeholder="Discount" className="border border-gray-500 p-1 rounded w-1/3" />
        </div>

        <div className="mb-4">
            <label className="block py-1">InStock</label>


            <input onChange={onInputChange} name="inStock" type="radio" value="true" />
            <label className="py-1 m-2">Yes</label>

            <input onChange={onInputChange} name="inStock" type="radio" value="false" />
            <label className="py-1 m-2">No</label>
        </div>

        <div className="mb-4">
            <input type="file" onChange={onFileChange} />
        </div>

        <div>
            <button disabled={!product.brand || !product.model || !product.price} onClick={onSave} className="bg-orange-500 hover:bg-orange-600 px-4 rounded py-1 text-white disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed">Save</button>
        </div>
    </div>);
}

export default NewProduct;