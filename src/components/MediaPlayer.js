import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap"

function MediaPlayer() {
  return (
    <Container className="container">
        <div className="mediaPlayer">
            <div className="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/gSNZEwA1sbQ?si=CTmN-azgCOXOcCr6" 
                title="YouTube video" allowFullScreen></iframe>
            </div>
        </div>
    </Container>
  )
}

export default MediaPlayer;