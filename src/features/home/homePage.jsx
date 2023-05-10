import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./style.module.css";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import PopularCategories from "../Category/PopularCategories/PopularCategories";

function Home() {
  return (
    <>
    <div className={`style.body`}>
      <MDBCarousel showControls showIndicators>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src="https://mdbootstrap.com/img/new/slides/041.jpg"
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src="https://mdbootstrap.com/img/new/slides/042.jpg"
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src="https://mdbootstrap.com/img/new/slides/043.jpg"
          alt="..."
        />
      </MDBCarousel>
    </div>
    <PopularCategories></PopularCategories>
    </>
  );
}

export default Home;
