import { FiSearch, FiMic } from 'react-icons/fi';

const SearchBar = () => {
  return (
    <div className="flex items-center px-4 py-2 gap-2">
      <div className="flex items-center bg-gray-100 w-full px-3 py-2 rounded-lg">
        <FiSearch className="text-gray-500 mr-2"/>
        <input
          type="text"
          placeholder="Search for Something Special'"
          className="bg-transparent outline-none w-full text-sm"
        />
        <FiMic className="text-orange-500" />
      </div>
    </div>
  );
};

export default SearchBar;
