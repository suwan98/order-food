function Input({label = "", ...props}) {
  return (
    <>
      <div className="wrapper flex items-center mb-2">
        <label className="font-bold mr-4">{label}</label>
        <input
          type="text"
          {...props}
          className="w-12 border border-[#ccc] rounded-[5px] pl-2"
        />
      </div>
    </>
  );
}

export default Input;
