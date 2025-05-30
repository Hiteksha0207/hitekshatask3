import React from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';

const restaurantData = [
  {
    name: "The Belgian Waffle Co.",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/5116a385bac0548e06c33c08350fbf11",
    cuisine: "Waffle, Desserts, Ice cr...",
    distance: "2.0 km",
    rating: "4(5.6K+)",
    time: "20-25 mins",
    delivery: "FREE DELIVERY",
    price: "₹120"
  },
  {
    name: "Kaffa Coffee Roasters",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/gvamjv1x7y3lsnuc0hbg",
    cuisine: "Cafe, Continental, Desse...",
    distance: "1.6 km",
    rating: "4.1(84)",
    time: "20-25 mins",
    delivery: "FREE DELIVERY",
    price: "₹349"
  },
  {
    name: "MUSE",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiB2Jl-TMc5ipbVucvLgfWKHa8eMTi6NPQ-Kds2Ph7n05TeLOxDp6lectv41mLj1Zc8sQ&usqp=CAU",
    cuisine: "Cafe, Pizza, Pasta, Bever...",
    distance: "2.3 km",
    rating: "4.3(1K+)",
    time: "25-30 mins",
    delivery: "FREE DELIVERY",
    price: "₹99"
  },
  {
    name: "Subway",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/7cc56890-1606-4b51-80e0-09c0ea5b9082_6704.JPG",
    cuisine: "Sandwich, Salads, Wra...",
    distance: "1.2 km",
    rating: "4.2(3K+)",
    time: "15-20 mins",
    delivery: "FREE DELIVERY",
    price: "₹149"
  }
];

const RestaurantList = () => {
  return (
    <div className="px-4 py-4 max-w-md mx-auto">
      {/* Filter bar */}
      <div className="flex gap-3 overflow-x-auto mb-4 whitespace-nowrap">
  <button className="flex items-center gap-2 border border-gray-300 px-2 py-1 rounded-full text-sm font-medium text-gray-800 bg-white shadow-sm">
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16"/>
    </svg>
    Filter
  </button>
  <button className="flex items-center gap-1 border border-gray-300 px-2 py-1 rounded-full text-sm font-medium text-gray-800 bg-white shadow-sm">
    Sort by
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
    </svg>
  </button>
  <button className="border border-gray-300 px-2 py-1 rounded-full text-sm font-medium text-gray-800 bg-white shadow-sm">
    10 Mins Delivery
  </button>
  <button className="border border-gray-300 px-2 py-1 rounded-full text-sm font-medium text-gray-800 bg-white shadow-sm">
    Cuisines
  </button>
</div>

      <h2 className="text-gray-700 font-semibold text-[15px] mb-3">
        Top 2294 restaurants to explore
      </h2>

      <div className="space-y-4">
        {restaurantData.map((item, index) => (
          <div
            key={index}
            className="relative flex gap-3 bg-white shadow rounded-xl p-3 hover:shadow-md transition"
          >
            {/* Image Section */}
            <div className="relative w-28 h-34 rounded-2xl overflow-hidden shrink-0">
              {/* Restaurant Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />

              {/* Top Black Gradient Overlay */}
              <div className="absolute top-20 left-0 w-full h-18 bg-gradient-to-t from-black to-transparent z-10" />

              {/* Price Tag */}
              <span className="absolute bottom-1 left-1 text-white text-[18px] px-2 py-[1px] rounded font-bold z-20">
                AT {item.price}
              </span>

              {/* AD Tag */}
              <span className="absolute bottom-1 right-1 text-[10px] text-gray-300 font-bold z-20">AD</span>

              {/* Heart Icon */}
              <span className="absolute top-1 right-1 p-1 rounded-full text-white shadow z-20">
                <FaHeart size={18} />
              </span>
            </div>

            {/* Text Content */}
            <div className="flex-1">
              <h3 className="text-[13px] font-bold text-gray-800">{item.name}</h3>
              <div className="flex items-center text-green-700 text-[12px] font-medium gap-1 mt-1">
                <FaStar className="text-green-600 text-[9px]" />
                {item.rating} • {item.time}
              </div>
              <p className="text-[12px] text-gray-600 mt-1 truncate">{item.cuisine}</p>
              <p className="text-[12px] text-gray-500 mt-1">{item.distance}</p>
              <div className="flex items-center gap-2 mt-2 bg-gradient-to-r from-[#ffbad011] to-[#ef16411d] px-2 py-1 rounded-full text-[11px] font-bold">
                <span className="text-red-500 text-[10px] font-bold">
                  {item.delivery}
                </span>
                <span className="text-pink-600 text-[10px] font-bold px-1.5 py-[1px] rounded">
                  one LITE
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
