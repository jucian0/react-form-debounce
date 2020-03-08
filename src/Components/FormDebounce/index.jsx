import React, { useState, useEffect } from "react";
import Input from "./Input";
import { FormValidations } from './index.validations'
import useValidation from './../../hooks/useValidation'

const initialFormState = {
   name: '',
   email: '',
   password: ''
}

const UserForm = () => {

   const [form, setForm] = useState(initialFormState)
   const { errors, isValid } = useValidation(form, FormValidations)

   const setInput = (newValue) => {
      setForm(form => ({ ...form, ...newValue }))
   }

   return (
      <>
         <h3>Form Debounce</h3>
         <form>
            <div className="form-group">
               <Input
                  name="name"
                  onChange={e => setInput({ name: e.target.value })}
                  label="Name"
                  error={errors.name}
               />
            </div>
            <div className="form-group">
               <Input
                  name="email"
                  onChange={e => setInput({ email: e.target.value })}
                  label="E-mail"
                  error={errors.email}
               />
            </div>
            <div className="form-group">
               <Input
                  name="password"
                  onChange={e => setInput({ password: e.target.value })}
                  label="Password"
                  error={errors.password}
               />
            </div>

            <div className="form-group">
               <button type="button" className="btn btn-primary" disabled={!isValid}>Submit</button>
            </div>
         </form>
      </>
   );
}

export default UserForm;