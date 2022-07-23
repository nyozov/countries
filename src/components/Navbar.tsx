

type navProps = {
  lightMode: string;
  setLightMode: (state: string) => void;
}

const Navbar = ({lightMode, setLightMode}: navProps) => {
  return (
    <div className='p-4 bg-white dark:bg-gray-800 dark:text-white w-screen shadow'>
      <p className='font-semibold text-lg'>Where in the world?</p>
      <div
      onClick={() =>
        lightMode === "dark" ? setLightMode("light") : setLightMode("dark")
      }
      className="absolute z-10 top-5 right-5 border p-2 rounded-lg border-gray-400 text-gray-800 cursor-pointer hover:border-black dark:border-gray-400 dark:text-gray-200 dark:hover:border-gray-200 duration-150"
    >
      {lightMode === "dark" ? 'Light Mode'  : 'Dark Mode'}
    </div>
      </div>
  )
}

export default Navbar