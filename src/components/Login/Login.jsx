import React, { useState, useEffect } from 'react';
import PasswordAtom from "./PasswordAtom";
import UserAtom from "./UserAtom";
import LoginButtonAtom from "./LoginButtonAtom";
import styles from './InputField.module.css';  

const Login = ({ onRegisterClick }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");

    // Ladda användardata från JSON-filen
    useEffect(() => {
        fetch('/users.json')
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error('Error fetching user data:', error));
    }, []);

    const handleLogin = () => {
        console.log("Username:", username);
        console.log("Password:", password);

        // Kolla om användarnamnet och lösenordet matchar någon användare i JSON-filen
        const user = users.find(
            (user) => user.username === username && user.password === password
        );

        if (user) {
            alert("Login successful!");
        } else {
            setError("Fel användarnamn eller lösenord. Försök igen.");
        }
    };

    return (
        <div className={styles.loginWrapper}>
            <h2 className={styles.title}>Login</h2>
            {/* Använd stilen från `InputField.module.css` */}
            <div className={styles.passwordWrapper}>
                <UserAtom
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={styles.inputField}  
                />
            </div>
            <div className={styles.passwordWrapper}>
                <PasswordAtom
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.inputField}  
                />
            </div>
            <LoginButtonAtom title="Logga In" onClick={handleLogin} className={styles.loginButton} />

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {/* Text och länk för att navigera till registreringssidan */}
            <p className={styles.registerText}>
                Har du inget konto?{' '}
                <button
                    style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer', border: 'none', background: 'none' }}
                    onClick={onRegisterClick}
                >
                    Registrera dig här
                </button>
            </p>
        </div>
    );
};

export default Login;
