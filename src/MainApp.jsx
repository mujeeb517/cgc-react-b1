import ProductList from "./product/ProductList";
import UserList from "./user/UserList";
import { Routes, Route } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound";
import ProductItem from "./product/ProductItem";
import ProductDetail from "./product/ProductDetail";

function MainApp() {
    return (<main className="flex flex-grow flex-col justify-between">
        <div className="items-start">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/users" element={<UserList />} />
                {/* <Route path="*" element={<Home />} /> */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    </main>);
}

export default MainApp;