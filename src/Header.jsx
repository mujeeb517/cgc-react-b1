import { Link, useNavigate } from "react-router-dom";

// SPA: Single Page Application
function Header() {

    const navigate = useNavigate();

    const onLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (<header>
        <nav className="flex bg-orange-500 text-white h-9 flow-root">
            <div className="text-2xl font-lighter flex float-left hover:text-orange-600">
                <a href="" className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                    Products
                </a>
            </div>
            <ul className="flex ml-4 float-right mr-4">
                <li className="p-1 hover:text-orange-600"><Link to="/">Home</Link></li>
                <li className="p-1 hover:text-orange-600"><Link to="/about">About</Link></li>
                <li className="p-1 hover:text-orange-600"><Link to="/products">Products</Link></li>
                <li className="p-1 hover:text-orange-600"><Link to="/contact">Contact</Link></li>
                <li className="p-1 hover:text-orange-600"><a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </a></li>
                <li className="p-1">
                    <Link to="/login">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </Link>
                </li>
                <li>
                    <button onClick={onLogout} className="m-1">Logout</button>
                </li>
            </ul>
        </nav >
    </header >);
}

export default Header;