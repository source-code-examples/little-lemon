import React from "react";
import "./Testimonials.css";

import faceOne from "../assets/images/image-face-1.jpg";
import faceTwo from "../assets/images/image-face-2.jpg";
import faceThree from "../assets/images/image-face-3.jpg";
import faceFour from "../assets/images/image-face-4.jpg";

const Testimonials = () => {
  const reviews = [
    {
      rating: 4.5,
      image: faceOne,
      name: "Pete",
      text: "Simply delicious! The best paella in town.",
    },
    {
      rating: 5,
      image: faceTwo,
      name: "Xiao",
      text: "Great atmosphere and very friendly staff.",
    },
    {
      rating: 4,
      image: faceThree,
      name: "Lisa",
      text: "I love the vegetarian options!",
    },
    {
      rating: 5,
      image: faceFour,
      name: "David",
      text: "Fantastic service and the desserts were out of this world!",
    },
  ];

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>

      <div className="grid">
        {reviews.map((review, index) => (
          <div className="card" key={index}>
            <div className="stars">
              {[...Array(5)].map((_, i) => {
                const fullStars = Math.floor(review.rating);
                const hasHalfStar = review.rating % 1 !== 0;

                if (i < fullStars) {
                  return <i key={i} className="fa-solid fa-star"></i>;
                } else if (i === fullStars && hasHalfStar) {
                  return (
                    <i key={i} className="fa-solid fa-star-half-stroke"></i>
                  );
                } else {
                  return <i key={i} className="fa-regular fa-star"></i>;
                }
              })}
            </div>
            <div className="info">
              <img
                src={review.image}
                alt={`Pic of ${review.name}`}
                loading="lazy"
                width={60}
                height={60}
                decoding="async"
              />
              <aside>{review.name}</aside>
            </div>
            <p className="text">"{review.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
