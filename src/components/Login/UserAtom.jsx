import styles from './InputField.module.css';

const UserAtom = ({ value, onChange }) => {
    return (
        <div className={styles.passwordWrapper}>
            <input 
                className={styles.inputField} 
                placeholder="username" 
                type="text" 
                value={value}
                onChange={onChange}
                aria-label="Username"
            />
        </div>
    );
};

export default UserAtom;
