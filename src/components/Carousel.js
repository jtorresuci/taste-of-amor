import React from "react";
import "./Carousel.css";

function Carousel() {
  return (
    <div>
      <div class="container">
        <div class="carousel">
          <img class="slide" draggable="false" src="tasteofamor.png" />
          <img class="slide" draggable="false" src="crepe1.png" />
          <img class="slide" draggable="false" src="crepe2.png" />
          <img class="slide" draggable="false" src="crepe3.png" />
          <img class="slide" draggable="false" src="crepe4.png" />
          <img class="slide" draggable="false" src="crepe1.png" />
          <img class="slide" draggable="false" src="crepe1.png" />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
