import React, { useState } from 'react';

const Input = ({ error, label, ...rest }) => {
   const [touched, setTouched] = useState(false)

   return (
      <>
         <label htmlFor={rest.name}>{label}</label>
         <input className="form-control" {...rest} onBlur={() => setTouched(true)} />
         <span className="text-danger">{touched && error}</span>
      </>
   );
}

export default Input

