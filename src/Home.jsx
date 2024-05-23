import AutoCounter from "./AutoCounter";
import Parent from "./Parent";

function Home() {
    return (<div>
        <h1>Home Page</h1>
        <AutoCounter />

        <Parent />
    </div>);
}

export default Home;