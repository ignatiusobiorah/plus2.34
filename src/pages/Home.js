import Hero from "../components/Hero";
import KnowUs from "../components/KnowUs";
import Shop from "../components/Shop";
import MediaPlayer from "../components/MediaPlayer";

function Home({cart, setCart}) {
 
  return (
    <div className="App">
            <Hero cart={cart} />
            <KnowUs />
            <MediaPlayer/>
            <Shop cart={cart} setCart={setCart}/>
      
    </div>
  );
}

export default Home;
