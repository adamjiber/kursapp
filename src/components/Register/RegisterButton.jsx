const RegisterButton = ({title }) => {
    if (!title)
        return (<div> component must have title</div>)
    return ( 
        <button> {title}</button>
    );
};
export default RegisterButton;