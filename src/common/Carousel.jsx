
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carousel.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const sliderImageUrl = [
  //First image url
  {
    url:
      "src/images/DashBoard/Pics4.jpg"
  },
  {
    url:
      "src/images/DashBoard/Pics3.jpg"
  },
  //Second image url
  {
    url:
      "src/images/DashBoard/Pics2.jpg"
  },
  //Third image url
  {
    url:
      "src/images/DashBoard/Pics1.jpg"
  },

  //Fourth image url

  {
    url:
      "src/images/DashBoard/Pics1.jpg"
  }
];
const Slider = () => {
  return (
    <div className="parent">
      <style>
      {`
      .parent {
        width: 50%; /* Adjust the width as needed */
        height: 50%; /* Adjust the height as needed */
        margin: 0; /* Centers the container horizontally */
        position: absolute;
        left: 10%;
      }
      `}
    </style>
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
