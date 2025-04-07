import Heelflip from "../img/skate-die.jpeg";

const Events = () => {
  return (
    <div className="events">
      <h2>UPCOMING EVENTS</h2>
      <div className="main-event">
        <div className="main-event-img">
          <img width={350} height={450} src={Heelflip} alt="skateboard" className="skateboard" />
        </div>
       
        <div className="event-desc">
          <h3>Concrete: Skate or Die</h3>
          <p>Portharcourt Pleasure park</p>
          <p>21st June 2025</p>
          <button className="btn btn-light">Register Now</button>
        </div>
      </div>
    </div>
  );
};

export default Events;
