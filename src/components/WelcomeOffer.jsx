// src/components/WelcomeOffer.jsx
import { FaHeart } from "react-icons/fa";

const welcomeOffers = [
  {
    name: "The Black Chimney",
    rating: "4.1",
    time: "25–30 mins",
    category: "Biryani",
    image: "https://cdn.vectorstock.com/i/500p/40/59/plate-with-silver-fork-and-spoon-table-setting-vector-10544059.jpg",
  },
  {
    name: "Burger Farm",
    rating: "4.5",
    time: "25–30 mins",
    category: "Burgers",
    image: "https://cdn.vectorstock.com/i/500p/40/59/plate-with-silver-fork-and-spoon-table-setting-vector-10544059.jpg",
  },
  {
    name: "New Waffle Co.",
    rating: "4.0",
    time: "20–25 mins",
    category: "Waffles",
    image: "https://cdn.vectorstock.com/i/500p/40/59/plate-with-silver-fork-and-spoon-table-setting-vector-10544059.jpg",
  },
];

const WelcomeOffer = () => {
  return (
    <div className="px-4 py-3">
      <h2 className="font-bold text-sm text-gray-700">👇🏼 ENJOY YOUR WELCOME OFFER!</h2>
      <p className="font-semibold text-xs text-gray-500 ml-6 mb-2">
        Get flat ₹125 off on your next order
      </p>

      <div className="flex space-x-3 overflow-x-auto scrollbar-hide">
        {welcomeOffers.map((item, idx) => (
          <div
            key={idx}
            className="min-w-[160px] bg-white rounded-xl overflow-hidden"
          >
            {/* Image container with overlay */}
            <div className="relative h-[100px] w-[160px] rounded-2xl overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover rounded-2xl"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-500/10 to-transparent" />

              {/* oneLITE badge */}
              <div className="absolute top-2 left-1 bg-[#feddf1] text-pink-400 text-[10px] font-bold px-2 py-[2px] rounded-full shadow">
                one LITE
              </div>

              {/* Heart Icon */}
              <div className="absolute top-2 right-2 text-gray-400">
                <FaHeart size={14} />
              </div>

              {/* Bottom text overlay */}
              <div className="absolute bottom-2 left-2 text-white text-xs font-semibold">
                ₹125 OFF <br />
                <span className="text-[10px] font-normal">ABOVE ₹199</span>
              </div>
              <div className="absolute bottom-2 right-2 text-white text-[10px] font-semibold">
                | AD
              </div>
            </div>

            {/* Restaurant Info */}
            <div className="p-2">
              <h3 className="text-sm font-semibold text-black">{item.name}</h3>
              <p className="text-xs text-gray-800">
                ⭐ {item.rating} • {item.time}
              </p>
              <p className="text-xs text-gray-600">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WelcomeOffer;
