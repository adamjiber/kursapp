import RegisterButton from "./RegisterButton";
import RegisterInput from "./RegisterInput";
import RegisterPassword from "./RegisterPassword";
import styles from "./Register.module.css";
import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const newUser = { username, email, password };

    try {
      // Send a POST request to the server
      const response = await fetch("/users.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      // If the response is not OK (error case)
      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error); // Show error message from response
        setMessage(""); // Clear any previous success messages
        return;
      }

      // If the request is successful
      const data = await response.json();
      setMessage(data.message); // Show success message from response
      setError(""); // Clear any error messages
    } catch (error) {
      setError("Something went wrong"); // Show a generic error message in case of an exception
      setMessage(""); // Clear any previous success messages
    }
  };

  return (
    <form className={styles.form} onSubmit={handleRegister}>
      <h2 className={styles.title}>Register</h2>
      <RegisterInput
        username={username}
        setUsername={setUsername}
        setEmail={setEmail}
      />
      <RegisterPassword password={password} setPassword={setPassword} />
      <RegisterButton title="Register" onClick={handleRegister} />
      {message && <p className="message">{message}</p>}
      {error && <p className="error">{error}</p>}
    </form>
  );
};
export default Register;
