import Hero from "../components/Hero";
import KnowUs from "../components/KnowUs";
import Shop from "../components/Shop";
import MediaPlayer from "../components/MediaPlayer";
import Header from "../components/Header";

function Home({cart, setCart}) {
 
  return (
    <div className="App">
            <Header cart={cart}/>
            <Hero/>
            <KnowUs />
            <MediaPlayer/>
            <Shop cart={cart} setCart={setCart}/>
      
    </div>
  );
}

export default Home;
