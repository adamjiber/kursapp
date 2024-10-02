import { useState, useEffect } from 'react';
import PasswordAtom from "./PasswordAtom";
import UserAtom from "./UserAtom";
import LoginButtonAtom from "./LoginButtonAtom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");

    // Laddar användardata från Json filen 
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
            // Här kan du lägga till logik för att spara användarens inloggning eller navigera till en annan sida
        } else {
            setError("Fel användarnamn eller lösenord. Försök igen.");
        }
    };

    return (
        <>
            <UserAtom value={username} onChange={(e) => setUsername(e.target.value)} />
            <PasswordAtom value={password} onChange={(e) => setPassword(e.target.value)} />
            <LoginButtonAtom title="Logga In" onClick={handleLogin} />
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
    );
};

export default Login;
