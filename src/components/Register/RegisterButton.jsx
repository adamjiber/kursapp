const RegisterButton = ({ title = "Register", onClick }) => {
  if (!title) {
    return <div>Component must have title</div>;
  }
  return <button onClick={onClick}>{title}</button>;
};

export default RegisterButton;
