import React from "react";

const About = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-20 mt-10">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold">About Us</h1>
        <p className="text-gray-600 mt-4 text-sm md:text-base">
          At <span className="font-semibold text-indigo-600">QuickStay</span>,
          we believe that travel is not just about reaching a destination but
          experiencing comfort, joy, and unforgettable memories.
        </p>
      </div>

      {/* About Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
        <img
          src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?cs=srgb&dl=pexels-chloekalaartist-1043474.jpg&fm=jpg"
          alt="about"
          className="rounded-lg object-top shadow-lg w-full h-[300px] object-cover"
        />
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed">
            QuickStay is your trusted partner for finding the perfect hotel
            rooms across the globe. With thousands of satisfied guests, we
            ensure a seamless booking process, verified listings, and the
            comfort you deserve. Our mission is to make every trip memorable
            by combining luxury, affordability, and world-class service.
          </p>
        </div>
      </div>

      {/* Services / Features Section */}
      <div className="mt-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="bg-white shadow p-6 rounded-lg text-center">
            <img
              src="https://www.shutterstock.com/image-vector/why-choose-us-sign-on-260nw-2140778173.jpg"
              alt="comfort"
              className="h-12 w-12 mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg">Comfort & Luxury</h3>
            <p className="text-gray-600 text-sm mt-2">
              Experience top-class comfort with world-class amenities and
              modern designs.
            </p>
          </div>

          <div className="bg-white shadow p-6 rounded-lg text-center">
            <img
              src="https://www.shutterstock.com/image-vector/why-choose-us-sign-on-260nw-2140778173.jpg"
              alt="affordable"
              className="h-12 w-12 mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg">Affordable Prices</h3>
            <p className="text-gray-600 text-sm mt-2">
              Get the best deals without compromising quality or experience.
            </p>
          </div>

          <div className="bg-white shadow p-6 rounded-lg text-center">
            <img
              src="https://www.shutterstock.com/image-vector/why-choose-us-sign-on-260nw-2140778173.jpg"
              alt="support"
              className="h-12 w-12 mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg">24/7 Support</h3>
            <p className="text-gray-600 text-sm mt-2">
              Our support team is always ready to assist you with your queries
              and bookings.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {[
            { name: "Amit Sharma", role: "Founder & CEO", img: "https://thumbs.dreamstime.com/b/user-member-vector-icon-ui-user-interface-profile-face-avatar-app-circle-design-user-member-avatar-face-profile-vector-125994581.jpg" },
            { name: "Priya Verma", role: "Operations Head", img: "https://thumbs.dreamstime.com/b/user-member-vector-icon-ui-user-interface-profile-face-avatar-app-circle-design-user-member-avatar-face-profile-vector-125994581.jpg" },
            { name: "Rahul Mehta", role: "Customer Support", img: "https://thumbs.dreamstime.com/b/user-member-vector-icon-ui-user-interface-profile-face-avatar-app-circle-design-user-member-avatar-face-profile-vector-125994581.jpg" },
          ].map((member, i) => (
            <div
              key={i}
              className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center"
            >
              <img
                src={member.img}
                alt={member.name}
                className="h-24 w-24 rounded-full object-cover mb-4"
              />
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
