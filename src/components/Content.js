import React from "react";

import "./Content.css";

function Content() {
  return (
    <div className="content">
      <div className="content__img">
        <img
          src="https://ocdn.eu/pulscms-transforms/1/oSMk9kpTURBXy8yODY3NzA4MjhhMTRkZWRiY2E1ZGE5NzE3MjY4MDcyYy5qcGeSlQLNA8AAwsOVAgDNA8DCw94AAaEwAQ"
          alt="Zielona mila"
        />
      </div>
      <div className="content__description">
        <h1>Zielona mila</h1>
        <h4>
          Green Mile <span>1999</span>
        </h4>
        <div className="content__rating">
          <img
            src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png"
            alt="star"
          />
          <h2>8</h2>
          <p>49320</p>
        </div>
        <div className="content__description__below">
          <p>
            gatunek <span>Dramat</span>
          </p>
          <p>
            Reżyser <span>Frank Darabont</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content;
