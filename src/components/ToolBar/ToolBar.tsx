import { Button, SearchBar } from "../../components";

export const ToolBar = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <SearchBar />
      <Button className="primary-btn w-[200px]">Add Book</Button>
    </div>
  );
};
