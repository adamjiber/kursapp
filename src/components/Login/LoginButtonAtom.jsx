import React from 'react';

const LoginButtonAtom = ({ title, onClick, className }) => { // Lagt till classname som prop 
  return (
    <button className={className} onClick={onClick}> {/* använder den som styling */}
      {title}
    </button>
  );
};

export default LoginButtonAtom;
