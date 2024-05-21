import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Error from "../util/Error";
import ShouldRender from "../util/ShouldRender";

function Login() {

    const [user, setUser] = useState({});
    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const onInputChange = (evt) => {
        const newUser = { ...user, [evt.target.name]: evt.target.value };
        setUser(newUser);
    };

    const onLogin = async (evt) => {
        evt.preventDefault();
        try {
            console.log('user', user);
            const res = await axios.post('https://cgc-node-b1.onrender.com/api/v1/users/signin', user);
            // redirect to products page
            navigate('/products');
        } catch (err) {
            setErr(true);
        }
    };

    return <div className="m-4 w-1/3">
        <form onSubmit={onLogin}>
            <ShouldRender when={err}>
                <Error msg="Wrong username or password" />
            </ShouldRender>
            <h1 className="font-semibold text-2xl">Login</h1>
            <div className="my-4">
                <label className="block m-1 text-gray-600">Email</label>
                <input onChange={onInputChange} className="m-1 p-2 border border-gray rounded w-full" type="text" placeholder="Email" name="email" />
            </div>

            <div className="my-4">
                <label className="block m-1 text-gray-600">Password</label>
                <input onChange={onInputChange} className="m-1 p-2 border border-gray rounded w-full" type="password" placeholder="Password" name="password" />
            </div>

            <div>
                <button type="submit" className="m-1 py-1 px-2 bg-orange-500 text-white hover:bg-orange-600">Login</button>
            </div>
        </form>
    </div>;
}

export default Login;