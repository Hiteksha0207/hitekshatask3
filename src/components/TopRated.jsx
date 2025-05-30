const topRated = [
  {
    name: "Domino’s Pizza",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/6c8a0f4f-fb32-4c7a-a1ea-9fefdfca64b4_47197.jpg",
    rating: "4.4 • 20–25 mins",
    items: "Pizzas, Italian, Pastas…",
    price: "AT ₹89",
  },
  {
    name: "McDonald’s",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/qw4foj6ef3qo1hdi3fbh",
    rating: "4.5 • 10–15 mins",
    items: "Burgers, Beverages…",
    price: "AT ₹99",
  },
  {
    name: "Shakti’s",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/bgsyycmwtj8iufikfv92",
    rating: "4.3 • 15–20 mins",
    items: "South Indian, Snacks…",
    price: "AT ₹79",
  },
  {
    name: "United Farmers",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1YRGj_twdG8pbzy9puV2DiEvy3eAqLJVh_lf6iF6ENmbgQc_sY14uLiFQZJoAzNUYtgE&usqp=CAU",
    rating: "4.6 • 25–30 mins",
    items: "Healthy, Salads, Bowls…",
    price: "AT ₹109",
  },
  {
    name: "Wow! Momo",
    image: "https://cdn4.singleinterface.com/files/banner_images/261129/9691_1708407623_1146.jpg",
    rating: "4.4 • 18–22 mins",
    items: "Momos, Chinese…",
    price: "AT ₹99",
  },
];

const TopRated = () => {
  return (
    <div className="px-4 py-3">
      <h2 className="font-semibold text-sm mb-3 text-red-500">TOP RATED NEAR YOU</h2>
      <div className="flex overflow-x-auto scrollbar-hide">
        {topRated.map((item, idx) => (
          <div
            key={idx}
            className="min-w-[135px] rounded-lg overflow-hidden bg-white "
          >
            <div className="relative w-[120px] h-[172px] ">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover rounded-3xl"
              />

              <div className="absolute top-25 rounded-3xl left-0 w-full h-18 bg-gradient-to-t from-black to-transparent z-10" />

              {/* Badge top-left */}
              <div className="absolute top-1 left-1 bg-gradient-to-r from-orange-400 to-pink-500 text-white text-[10px] font-semibold px-2 py-1 rounded-sm ml-[-4px]">
                one <span className="font-normal">Free Delivery</span>
              </div>

              <div className="absolute top-1 right-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white stroke-black stroke-[0.5]"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.02 4.02 4 6.5 4c1.74 0 3.41 1.01 4.13 2.44h.74C14.09 5.01 15.76 4 17.5 4 19.98 4 22 6.02 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>  

              {/* Bottom-left price */}
              <div className="absolute bottom-1 left-1 text-white text-[12px] px-1.5 py-[1px] rounded-sm font-semibold z-20">
                ITEMS <br />
                <span className="font-bold text-2xl text-white">{item.price}</span>
              </div>

              {/* Bottom-right AD */}
              <div className="absolute bottom-1 right-1 text-white text-[10px] px-2 py-[1px] rounded-sm">
                AD
              </div>
            </div>

            <div className="p-2">
              <h3 className="text-sm font-semibold truncate text-gray-800">{item.name}</h3>
              <p className="text-xs text-green-700">{item.rating}</p>
              <p className="text-xs text-gray-600 truncate">{item.items}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRated;