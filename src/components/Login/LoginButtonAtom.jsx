const LoginButtonAtom = ({ title = "Logga In", onClick }) => {
    if (!title) {
        return (<div>Component must have title</div>);
    }
    return (
        <button onClick={onClick}>
            {title}
        </button>
    );
};

export default LoginButtonAtom;
