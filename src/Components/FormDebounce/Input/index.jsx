import React, { useState, useRef, useEffect, useCallback } from "react";
import { debounce } from "../Debounce";

function Input({ error, label, onChange, ...rest }) {
  const [touched, setTouched] = useState(false);
  const inputRef = useRef(null);
  const debounceInput = useCallback(debounce(onChange, 500), [debounce]);
  const blurInput = useCallback(() => setTouched(true), [setTouched]);

  useEffect(() => {
    inputRef.current.addEventListener("input", debounceInput);
    inputRef.current.addEventListener("blur", blurInput);

    return () => {
      inputRef.current.removeEventListener("input", debounceInput);
      inputRef.current.removeEventListener("blur", blurInput);
    };
  }, [blurInput, debounceInput, inputRef]);

  return (
    <>
      <label htmlFor={rest.name}>{label}</label>
      <input className="form-control" {...rest} ref={inputRef} />
      <span className="text-danger">{touched && error}</span>
    </>
  );
}
export default Input;
