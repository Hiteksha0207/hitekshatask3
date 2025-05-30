const categories = [
  { name: "Cakes", image: "https://www.shutterstock.com/image-photo/tasty-cake-fresh-strawberries-mint-600nw-2383923623.jpg" },
  { name: "Pizzas", image: "https://img.freepik.com/premium-photo/traditional-supreme-pizza-isolated-white-background_123827-20102.jpg" },
  { name: "Chinese", image: "https://www.shutterstock.com/image-photo/stirfried-noodles-chow-mein-chinese-600nw-52192315.jpg" },
  { name: "Paratha", image: "https://www.gourmetcraftfoods.com/cdn/shop/products/AlooParathacopy-min.jpg?v=1616665846" },
  { name: "Gift Hampers", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcve-KQ4seY39LRGkXBS-dpkEsrZx-h-z5zcyQr6lRj165hP2Xe2KhMmjlXfu5p78eHPk&usqp=CAU" },
  { name: "North Indian", image: "https://img.freepik.com/premium-photo/national-food-india-with-white-background-high-q_889056-6602.jpg" },
  { name: "Burgers", image: "https://www.shutterstock.com/image-photo/burger-cheese-ketchup-salad-mayonnaise-600nw-2018429270.jpg" },
  { name: "Biryani", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXaAGmPnRlcCRAgG38rbKNeTaZzfQrgz5c74lBZ2JT4ayW6eFCneTBiZ_YLQEfYq4GiBw&usqp=CAU" },
  { name: "Khichdi", image: "https://t3.ftcdn.net/jpg/13/36/58/44/360_F_1336584441_tlo8Uh2FpwlEa9BW17X8fhOdVX6Zje7T.jpg" },
  { name: "Pasta", image: "https://thumbs.dreamstime.com/b/plate-penne-pasta-bolognese-white-background-isolated-63385171.jpg" },
  { name: "Idli", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROiWbU-o7FiWUUqAHvPXU6AJMTE2onpYQi8dOWKztwaYAfuxxz-5WRxwzkuk881Fsgt-U&usqp=CAU" },
  { name: "Sweets", image: "https://st4.depositphotos.com/17366968/20309/i/450/depositphotos_203092486-stock-photo-indian-delicious-mix-sweet-food.jpg" },
  { name: "Sandwiches", image: "https://i.pinimg.com/1200x/1a/f2/6f/1af26fb277be6cd6ea4e1db9dc7f0c3b.jpg" },
  { name: "Ice Cream", image: "https://static.vecteezy.com/system/resources/previews/004/529/801/large_2x/chocolate-ice-cream-in-white-bowl-on-white-background-free-photo.jpg" },
  { name: "Salads", image: "https://img.lovepik.com/photo/48013/1724.jpg_wh860.jpg" }
];

const Categories = () => {
  const chunked = [];
  for (let i = 0; i < categories.length; i += 8) {
    chunked.push(categories.slice(i, i + 8));
  }

  return (
    <div className="px-4 py-3">
      <h2 className="font-semibold text-sm mb-3">HELLO , WHAT’S ON YOUR MIND?</h2>
      <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
        {chunked.map((group, gIdx) => (
          <div key={gIdx} className="flex-none grid grid-cols-4 grid-rows-2 w-[calc(3*5.4rem)]">
            {group.map((cat, idx) => (
              <div key={idx} className="flex flex-col items-center text-xs">
                <div className="w-14 h-14 rounded-full overflow-hidden shadow-sm mb-1 border border-gray-200">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center leading-tight text-[12px]">{cat.name}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
