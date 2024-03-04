import React, { useState, useEffect } from "react";
import "../Styles/uiPage.css"; // Import your CSS file for styling

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://krds-assignment.github.io/aoc/api-assets/data.json"
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app">

        {data && (
          <div className="features-container">
            {data.features.map((feature, index) => (
              <div
                key={index}
                className="feature"
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
                <div className="left">
                  <img src={feature.logo} alt="Feature Logo" />
                  <p>{feature.title}</p>
                  <div className="line"></div>
                  <p>{feature.desc}</p>
                </div>
                <div className="right">
                  <img src={feature.image} alt="Feature Image" />
                </div>
              </div>
            ))}
          </div>
        )}

    </div>
  );
};

export default App;


