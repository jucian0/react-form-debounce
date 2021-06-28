import React, { useState, useRef, useEffect, useCallback } from "react";
import { debounce } from "../Debounce";

const Input = ({ error, label, onChange, ...rest }) => {
  const [touched, setTouched] = useState(false);
  const inputRef = useRef(null);
  const debounceInput = debounce(onChange, 1000);

  function handleBlur() {
    setTouched(true);
  }

  useEffect(() => {
    inputRef.current.addEventListener("input", debounceInput);
    inputRef.current.addEventListener("blur", handleBlur);

    return () => {
      inputRef.current.removeEventListener("input", debounceInput);
      inputRef.current.removeEventListener("blur", handleBlur);
    };
  }, [debounceInput, inputRef]);

  return (
    <>
      <label htmlFor={rest.name}>{label}</label>
      <input className="form-control" {...rest} ref={inputRef} />
      <span className="text-danger">{touched && error}</span>
    </>
  );
};

export default Input;
