import React from "react";
import Title from "./Title";
import { testimonials } from "../assets/assets";
import StarRating from "./StarRating";

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 pt-20 pb-20">
      <Title
        title="What Our Guests Say"
        subTitle="Discover why discerning accommodations around the world choose us."
      />

      <div className="flex flex-wrap justify-center gap-6 mt-12">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between w-full sm:w-[45%] lg:w-[30%] transition-transform hover:scale-105"
          >
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full object-cover"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className="font-playfair text-lg font-semibold">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.address}</p>
              </div>
            </div>

            <div className="flex items-center gap-1 mt-4">
              <StarRating rating={testimonial.rating} />
            </div>

            <p className="text-gray-600 text-sm mt-4 line-clamp-5">
              "{testimonial.review}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
