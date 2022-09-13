import React from "react";

const Tours = ({ tours,removeTour }) => {
  return (
    <>
      {tours.map((tour) => {
        const { name, image, price, id, info } = tour;
        return (
          <div>
            <article key={id} className="single-tour">
              <img src={image} />
              <footer>
                <div className="tour-info">
                  <h4>{name}</h4>
                </div>
                <div className="tour-price">
                  <h4>${price}</h4>
                </div>
                <p>{info}</p>
              </footer>
            <button className="delete-btn" onClick={()=>{removeTour(id)}}>Not interested</button>
            </article>
          </div>
        );
      })}
    </>
  );
};

export default Tours;
