import { Button } from "../components";

export const App = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="text-4xl">Home page</h1>
      <Button className="primary-btn w-[120px]">Add book</Button>
    </div>
  );
};
