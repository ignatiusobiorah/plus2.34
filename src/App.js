import Hero from "./components/Hero";
import KnowUs from "./components/KnowUs";
import Shop from "./components/Shop";
import MediaPlayer from "./components/MediaPlayer";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]); //cart state to store selected items
  return (
    <div className="App">
      <Hero cart={cart} />
      <KnowUs />
      <MediaPlayer/>
      <Shop cart={cart} setCart={setCart}/>
    </div>
  );
}

export default App;
