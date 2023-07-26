import { useState } from "react";

export default function FormInput({ id, name, type, hintText }) {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-extrabold">
        {hintText}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={hintText}
        value={value}
        onInput={(e) => {
          setValue(e.target.value);
        }}
        className="p-3 rounded-[5px] border-[1px] outline-none focus:outline-offset-0 focus:outline-2 focus:outline-white bg-zinc-900 border-zinc-400 hover:border-white placeholder:text-sm placeholder:font-bold transition-all"
      />
    </div>
  );
}
