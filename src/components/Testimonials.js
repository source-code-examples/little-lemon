import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const reviews = [
    {
      rating: 4.5,
      image: "IMG*",
      name: "Pete",
      text: "Simply delicious! The best paella in town.",
    },
    {
      rating: 5,
      image: "IMG*",
      name: "Xiao",
      text: "Great atmosphere and very friendly staff.",
    },
    {
      rating: 4.5,
      image: "IMG*",
      name: "Lisa",
      text: "I love the vegetarian options!",
    },
    {
      rating: 5,
      image: "IMG*",
      name: "David*",
      text: "Fantastic service and the desserts were out of this world!",
    },
  ];

  return (
    <section>
      <h2>Testimonials</h2>
      {reviews.map((review, index) => (
        <blockquote key={index}>
          {/* <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i> */}
          {/* <i class="fa-regular fa-star"></i> */}
          {/* <i class="fa-solid fa-star"></i> */}
          {[...Array(5)].map((_, i) => {
            const fullStars = Math.floor(review.rating);
            const hasHalfStar = review.rating % 1 !== 0;

            if (i < fullStars) {
              return <i key={i} className="fa-solid fa-star"></i>;
            } else if (i === fullStars && hasHalfStar) {
              return <i key={i} className="fa-solid fa-star-half-stroke"></i>;
            } else {
              return <i key={i} className="fa-regular fa-star"></i>;
            }
          })}

          <img src={review.image} alt={`Face pic of ${review.name}`} />
          <aside>– {review.name}</aside>
          <p>"{review.text}"</p>
        </blockquote>
      ))}
    </section>
  );
};

export default Testimonials;
