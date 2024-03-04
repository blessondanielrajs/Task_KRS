import React, { useState, useEffect } from "react";
import "../Styles/mobileView.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Gallery() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://krds-assignment.github.io/aoc/api-assets/data.json"
        );
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="Gallery-big-screen">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="Gallery" data-aos="fade-up" data-aos-duration="1000">
          <Slider {...settings} className="Gallery-slider-carousel">
            {data.features.map((feature, index) => (
              <div
                key={index}
                className="feature12"
                style={{
                  backgroundColor:
                    index === 0
                      ? "green"
                      : index === 1
                      ? "darkorange"
                      : index === 2
                      ? "violet"
                      : index === 3
                      ? "lightcoral"
                      : index === 4
                      ? "red"
                      : "blue",
                }}
              >
                <div className="MFeature">
            <img src={feature.logo} alt="MFeature_Logo" className="MFeature-logo" />
                  <h2>{feature.title.toUpperCase()}</h2>
                  <div className="line"></div>
                  <p>{feature.desc.toUpperCase()}</p>
                </div>

                <img src={feature.image} alt="Feature Image" className="MFeature-main" />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
}

export default Gallery;
