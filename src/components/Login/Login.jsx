import React, { useState, useEffect } from 'react';
import PasswordAtom from "./PasswordAtom";
import UserAtom from "./UserAtom";
import LoginButtonAtom from "./LoginButtonAtom";
import styles from './InputField.module.css';

const Login = ({ onRegisterClick, onLoginSuccess }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");

    // Ladda användardata från JSON filen vid komponentens montering
    useEffect(() => {
        fetch('/users.json')
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error('Error fetching user data:', error));
    }, []);

    const handleLogin = () => {
        console.log("Username:", username);
        console.log("Password:", password);

        // Kolla om användarnamnet och lösenordet matchar någon användare i users.Json 
        const user = users.find(
            (user) => user.username === username && user.password === password
        );

        if (user) {
            alert("Login successful!");
            onLoginSuccess(); // Anropa onLoginSuccess för att indikera att inloggningen lyckades
        } else {
            setError("Fel användarnamn eller lösenord. Försök igen.");
        }
    };

    return (
        <div className={styles.loginWrapper}> { }
            <h2 className={styles.title}>Login</h2> { }
            { }
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
            {/* Ändring: Använd styles.loginButton för att styla Logga in knappen */}
            <LoginButtonAtom
                title="Logga In"
                onClick={handleLogin}
                className={styles.loginButton} 
            />

            {/* Visa felmeddelande om inloggningen misslyckas */}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {/* Text och länk för att navigera till registreringssidan */}
            <p className={styles.registerText}> {/* Använder stil för texten */}
                Har du inget konto?{' '}
                <button
                    style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer', border: 'none', background: 'none' }}
                    onClick={onRegisterClick} // Använd onRegisterClick för att navigera till registrering
                >
                    Registrera dig här
                </button>
            </p>
        </div>
    );
};

export default Login;
