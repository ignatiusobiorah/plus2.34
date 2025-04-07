import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Merch from "../img/skateboard.jpeg";
import Deck from "../img/deck.jpg";
import Accessories from "../img/accessories.jpg";

function MediaPlayer() {
  return (
    <div className="mediaContainer">
      <Container className="containerMedia">
        <div className="mediaPlayer">
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/gSNZEwA1sbQ?si=CTmN-azgCOXOcCr6"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Container>

      <div className="shop-catalogue">
        <div>
          <img
            width={250}
            height={300}
            src={Merch}
            alt="Merch"
            className="merch"
          />
          <p className="cat-desc">Merch</p>
          <a href="/shop">
            <p className="cat-desc">Shop now</p>
          </a>
        </div>
        <div>
          <img
            width={250}
            height={300}
            src={Deck}
            alt="Deck"
            className="deck"
          />
          <p className="cat-desc">Decks</p>
          <a href="/shop">
            <p className="cat-desc">Shop now</p>
          </a>
        </div>
        <div>
          <img
            width={250}
            height={300}
            src={Accessories}
            alt="Accessories"
            className="accessories"
          />
          <p className="cat-desc">Accessories</p>
          <a href="/shop">
            <p className="cat-desc">Shop now</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MediaPlayer;
