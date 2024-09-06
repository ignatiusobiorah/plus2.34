import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import KnowUs from "./components/KnowUs";
import MediaPlayer from "./components/MediaPlayer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <KnowUs />
      <MediaPlayer/>
    </div>
  );
}

export default App;
