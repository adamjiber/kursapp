const RegisterPassword = ({ password, setPassword }) => {
  return (
    <div>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
};

export default RegisterPassword;
