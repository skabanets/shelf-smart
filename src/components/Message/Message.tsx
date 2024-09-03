interface MessageProps {
  text: string;
}

export const Message = ({ text }: MessageProps) => {
  return (
    <div className="flex h-[60vh] w-full items-center justify-center font-montserrat-semibold text-2xl text-red-500">
      {text}
    </div>
  );
};
