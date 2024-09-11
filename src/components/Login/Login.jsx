import { useState } from 'react';
import PasswordAtom from "./PasswordAtom";
import UserAtom from "./UserAtom";
import LoginButtonAtom from "./LoginButtonAtom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        console.log("Username:", username);
        console.log("Password:", password);
        // ska fylla i logiken här här 
    };

    return (
        <> 
            <UserAtom value={username} onChange={(e) => setUsername(e.target.value)} />
            <PasswordAtom value={password} onChange={(e) => setPassword(e.target.value)} />
            <LoginButtonAtom title="Logga In" onClick={handleLogin} />
        </>
    );
};

export default Login;
