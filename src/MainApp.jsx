import ProductList from "./product/ProductList";
import UserList from "./user/UserList";
import { Routes, Route } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound";

function MainApp() {
    return (<main className="flex flex-col justify-between h-full">
        <div className="items-start">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/users" element={<UserList />} />
                {/* <Route path="*" element={<Home />} /> */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    </main>);
}

export default MainApp;