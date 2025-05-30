import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import BannerSlider from './components/BannerSlider';
import WelcomeOffer from './components/WelcomeOffer';
import Categories from './components/Categories';
import TopRated from './components/TopRated';
import RestaurantList from './components/RestaurantList';

// Note : task is for mobile screen only that's why not focused on laptop or desktop view

function App() {
  return (
    <div className="w-full bg-white">
      <Navbar />
      <SearchBar />
      <BannerSlider />
      <WelcomeOffer />
      <Categories />
      <TopRated />
      <RestaurantList />
    </div>
  );
}

export default App;
