import { FaUserCircle } from 'react-icons/fa';
import buyone from '../assets/buyone.png';
import { MdHome } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 shadow-sm">
      <div>
        <p className="text-sm font-bold text-black flex"> <MdHome className="text-orange-500 text-[18px] mr-1" />Home</p>
        <p className="text-xs text-gray-500">Samras Boys Hostel,132 Feet...</p>
      </div>
      <div className="bg-gradient-to-r from-orange-400 to-pink-500 px-2 py-1 rounded-full text-white text-center leading-none w-[65px] h-[35px] flex flex-col items-center justify-center shadow-md text-[11px] font-semibold">
  <span className="text-[10px] font-bold mt-1">BUY</span>
  <span className="text-base font-extrabold mt-[-4px]">one</span>
</div>
      <FaUserCircle className="text-3xl text-gray-600" />
    </div>
  );
};

export default Navbar;
