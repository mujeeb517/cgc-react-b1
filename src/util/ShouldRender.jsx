function ShouldRender({ children, when }) {
    return when ? children : null;
}

export default ShouldRender;