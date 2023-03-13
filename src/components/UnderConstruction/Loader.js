import React from "react";
import "./Loader.css";
function Loader() {
  return (
    <div className="load-me">
      <div class="pill">
        <div class="pill__main">
          <div class="pill__glare"></div>
        </div>
        <div class="pill__shadow"></div>
      </div>
    </div>
  );
}

export default Loader;
