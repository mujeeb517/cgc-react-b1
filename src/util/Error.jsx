function Error({ msg }) {
    const errMsg = msg || 'Failed to load data, please try again';
    return <div>
        <h1 className="bg-red-500 m-4 p-2 rounded text-white">{errMsg}</h1>
    </div>;
}

export default Error;