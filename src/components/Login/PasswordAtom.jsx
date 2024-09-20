import { useState } from 'react';
import styles from './InputField.module.css'; 

const PasswordAtom = ({ value, onChange }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={styles.passwordWrapper}> 
            <input 
                className={styles.inputField}  
                placeholder="password"
                type={showPassword ? "text" : "password"}
                value={value}
                onChange={onChange}
                aria-label="Password"
            />
            <span 
                className={styles.togglePassword} 
                onClick={togglePasswordVisibility}
            > 
                {showPassword ? 'hide' : 'show'}
            </span>
        </div>
    );
};

export default PasswordAtom;
