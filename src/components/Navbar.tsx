import { BsMoon, BsMoonFill } from "react-icons/bs";

type navProps = {
  lightMode: string;
  setLightMode: (state: string) => void;
};

const Navbar = ({ lightMode, setLightMode }: navProps) => {
  return (
    <div className="p-4 bg-white flex items-center justify-between dark:bg-gray-800 dark:text-white w-full shadow">
      <p className="font-semibold text-lg">Where in the world?</p>
      <div
        onClick={() =>
          lightMode === "dark" ? setLightMode("light") : setLightMode("dark")
        }
        className="flex items-center flex-evenly z-10  p-2 rounded-lg border-gray-400 text-gray-800 cursor-pointer hover:border-black dark:border-gray-400 dark:text-gray-200 dark:hover:border-gray-200 duration-150"
      >
        {" "}
        {lightMode==="dark" ? <BsMoonFill className='mr-[2.5px] text-sm'/> : <BsMoon className="mr-[2.5px] text-sm" />} <p className='text-sm'>Dark Mode</p>
      </div>
    </div>
  );
};

export default Navbar;
