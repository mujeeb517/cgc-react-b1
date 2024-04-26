import ProductList from "./product/ProductList";
import UserList from "./user/UserList";

function MainApp() {
    return (<main className="flex flex-col justify-between h-full">
        <div className="items-start">
            <ProductList />
        </div>
    </main>);
}

export default MainApp;