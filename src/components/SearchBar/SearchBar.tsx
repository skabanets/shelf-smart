import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { Button } from "..";
import { GrPowerReset } from "react-icons/gr";

export const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handelChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div className="flex justify-center gap-4">
      <div className="relative">
        <input
          className="input-field w-[300px]"
          value={query}
          onChange={handelChangeQuery}
          placeholder="Search by ISBN or Title"
          maxLength={30}
        />
        <IoSearchSharp className="absolute right-3 top-1/2 size-6 -translate-y-1/2 fill-slate-400" />
      </div>
      <Button
        onClick={() => setQuery("")}
        className="flex size-10 items-center justify-center rounded-full bg-slate-400 shadow-sm hover:bg-red-400"
      >
        <GrPowerReset />
      </Button>
    </div>
  );
};
