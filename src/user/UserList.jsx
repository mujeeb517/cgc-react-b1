import { Component } from "react";
import axios from 'axios';
import Error from "../util/Error";
import ShouldRender from "../util/ShouldRender";

function UserItem({ user }) {
    return <div className="m-4 p-2">
        <img width="100" height="100" className="rounded-full" src={user.avatar_url} />
        <h3 className="ml-5">{user.login}</h3>
    </div>;
}

// React -> UserList -> API -> State -> Rendering
class UserList extends Component {

    state = {
        users: [],
        hasError: false
    };

    constructor() {
        super();
        // fetch data
        // how do i know
        // how can I show err msg
        // conditional rendering
        axios.get('https://api.github.com/users')
            .then(res => this.setState({ users: res.data }))
            .catch(() => this.setState({ hasError: true }));
    }

    render() {
        return <div>
            <ShouldRender when={this.state.hasError}>
                <Error msg="Customized" />
            </ShouldRender>
            <h1 className="ml-4 text-xl font-semibold text-gray-500">Users</h1>
            {this.state.users.map(user => <UserItem user={user} />)}
        </div>;
    }
}

export default UserList;