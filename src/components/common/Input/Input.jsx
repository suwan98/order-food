import S from "./Input.module.css";

function Input({label, id, ...restProps}) {
  return (
    <>
      <div className={S.input}>
        <label htmlFor={id} className={S.label}>
          {label}
        </label>
        <input id={id} {...restProps} />
      </div>
    </>
  );
}

export default Input;
