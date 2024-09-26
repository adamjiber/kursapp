import styles from './InputFields.module.css';
const UserAtom = ({ value, onChange }) => {
    return (
        <div>
            <input 
                placeholder="username" 
                type="text" 
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default UserAtom;
