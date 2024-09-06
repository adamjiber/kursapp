import { useState } from 'react';
import styles from './InputField.module.css'; 

const PasswordAtom = () => {
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



