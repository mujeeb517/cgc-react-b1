// presentation component
function ProductItem({ item }) {
    return <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <td>{item.id}</td>
        <td>{item.brand}</td>
        <td>{item.model}</td>
        <td>${item.price}</td>
        <td>
            <img src={item.image} width="100" height="100" />
        </td>
    </tr>;
}

export default ProductItem;