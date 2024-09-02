import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { Button } from "..";
import { GrPowerReset } from "react-icons/gr";

export const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("query", value);
    window.history.pushState(null, "", `?${searchParams.toString()}`);
    window.dispatchEvent(new Event("popstate"));
  };

  const handleReset = () => {
    setQuery("");
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.delete("query");
    window.history.pushState(null, "", `?${searchParams.toString()}`);
    window.dispatchEvent(new Event("popstate"));
  };

  return (
    <div className="flex justify-center gap-4">
      <div className="relative">
        <input
          className="input-field w-[300px]"
          value={query}
          onChange={handleChangeQuery}
          placeholder="Search by ISBN or Title"
          maxLength={25}
        />
        <IoSearchSharp className="absolute right-3 top-1/2 size-6 -translate-y-1/2 fill-slate-400" />
      </div>
      <Button
        onClick={handleReset}
        className="flex size-10 items-center justify-center rounded-full bg-slate-400 shadow-sm hover:bg-red-400"
      >
        <GrPowerReset />
      </Button>
    </div>
  );
};
