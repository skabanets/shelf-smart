import { Oval } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50 backdrop-blur-[1px]">
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#3b81f6"
        secondaryColor="#2563eb"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
