const RegisterInput = ({ username, setUsername, setEmail }) => {
  return (
    <div>
      <input
        placeholder="Username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="Email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
};

export default RegisterInput;
