import {forwardRef} from "react";
import S from "./Input.module.css";

const Input = forwardRef(function Input({label, id, ...restProps}, ref) {
  return (
    <>
      <div className={S.input}>
        <label htmlFor={id} className={S.label}>
          {label}
        </label>
        <input id={id} ref={ref} {...restProps} />
      </div>
    </>
  );
});

export default Input;
