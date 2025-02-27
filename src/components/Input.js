const Input = ({ label, type = "text", value, onChange, placeholder, required = false }) => {
    return (
      <div className="flex flex-col mb-4">
        {label && <label className="mb-1 font-semibold">{label}</label>}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    );
  };
  
  export default Input;
  