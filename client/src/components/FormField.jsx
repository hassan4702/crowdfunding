import React from "react";

const FormField = ({
  labelName,
  placeholder,
  isTextArea,
  isCategory,
  inputType,
  value,
  multiple,
  handleChange,
}) => {
  return (
    <label className="flex-1 w-full flex flex-col">
      {labelName && (
        <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
          {labelName}
        </span>
      )}

      {isTextArea ? (
        <textarea
          required
          value={value}
          onChange={handleChange}
          rows={10}
          placeholder={placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
        />
      ) : isCategory ? (
        <select
          required
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="py-[20px] sm:px-[25px] px-[20px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
        >
          <option value="Fundraiser" className="dark:text-black">Fundraiser</option>
          <option value="Personal" className="dark: text-black">Personal</option>
          <option value="Nonprofit" className="dark: text-black">Nonprofit</option>
          <option value="Medical" className="dark: text-black">Medical</option>
          <option value="Crisis Relief" className="dark: text-black">Crisis Relief</option>
          <option value="Education" className="dark: text-black">Education</option>
          <option value="Emergency" className="dark: text-black">Emergency</option>
          <option value="Sports" className="dark: text-black">Sports</option>
          <option value="Environment" className="dark: text-black">Environment</option>
          <option value="Family" className="dark: text-black">Family</option>
          <option value="Competition" className="dark: text-black">Competition</option>
          <option value="Memorial" className="dark: text-black">Memorial</option>
          <option value="Research" className="dark: text-black">Research</option>
        </select>
      ) : (
        <input
          required
          value={value}
          onChange={handleChange}
          type={inputType}
          multiple={multiple}
          step="0.01"
          placeholder={placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
        />
      )}
    </label>
  );
};

export default FormField;
