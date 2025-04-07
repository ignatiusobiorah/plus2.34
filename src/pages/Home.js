import Hero from "../components/Hero";
import KnowUs from "../components/KnowUs";
import Events from "../components/Events";
import MediaPlayer from "../components/MediaPlayer";
import Header from "../components/Header";

function Home({ cart, setCart }) {
  return (
    <div className="App">
      <Header cart={cart} />
      <Hero />
      <KnowUs />
      <MediaPlayer />
      <Events />
    </div>
  );
}

export default Home;
