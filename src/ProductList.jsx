import ProductItem from "./ProductItem";

// container component
function ProductList() {

    const items = [
        { id: 1, brand: 'Apple', model: 'Iphone 13', price: 1000, image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-2.jpg' },
        { id: 2, brand: 'Apple', model: 'Iphone 14', price: 1100, image: 'https://cdn.dxomark.com/wp-content/uploads/medias/post-125834/Apple-iPhone-14_FINAL_featured-image-packshot-review.jpg' },
        { id: 3, brand: 'Apple', model: 'Iphone 15', price: 1100, image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-1.jpg' }];

    return (<div class="m-2">
        <h1>Products</h1>
        {/* {
            items.map(item => <div>
                <h3>{item.brand} {item.model}</h3>
                <img width="200" height="200" src={item.image} />
                <div>${item.price}</div>
                <hr />
            </div>)
        } */}
        <table class="w-full text-sm text-left text-gray-500" width="100%" border="1">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th>Id</th>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Price</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {items.map(it => <ProductItem item={it} />)}
            </tbody>
        </table>
    </div>);
}

export default ProductList;