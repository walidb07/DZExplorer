
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carousel.css";

const responsive = {
  desktop: {
    breakpoint: { max: 99990, min: 0 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  }
};

const sliderImageUrl = [
  //First image url
  {
    url:
      "src//common//Group123.svg"
  },
  {
    url:
      "src//common//Group123.svg"
  },
  //Second image url
  {
    url:
      "src//common//Group123.svg"
  },
  //Third image url
  {
    url:
      "src//common//Group123.svg"
  },
  {
    url:
      "src//common//Group123.svg"
  },

  //Fourth image url

  {
    url:
      "src//common//Group123.svg"
  }
];
const Slider = () => {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        partialVisible={true}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.url} alt="movie" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;
