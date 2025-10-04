


// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { assets, facilityIcons, HotelData, roomCommonData } from "../assets/assets";
// import StarRating from "../components/StarRating";

// const RoomDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [room, setRoom] = useState(null);
//   const [mainImage, setMainImage] = useState(null);

//   useEffect(() => {
//     const foundRoom = HotelData.find((r) => r.id === Number(id));
//     if (foundRoom) {
//       setRoom(foundRoom);
//       const images = [
//         foundRoom.image1_url,
//         foundRoom.image2_url,
//         foundRoom.image3_url,
//         foundRoom.image4_url,
//       ].filter(Boolean);
//       if (images.length > 0) {
//         setMainImage(images[0]);
//         foundRoom.images = images;
//       }
//     }
//   }, [id]);

//   if (!room) return <p className="p-10 text-center">Room not found</p>;

//   const amenitiesList = Array.isArray(room.amenities)
//     ? room.amenities
//     : room.amenities?.split(",") || [];

//   return (
//     <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
//       {/* Room Header */}
//       <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
//         <h1 className="text-3xl md:text-4xl font-playfair">
//           {room.name}{" "}
//           <span className="font-inter text-sm">({room.roomType || "Deluxe"})</span>
//         </h1>
//         <p className="text-xs font-inter py-1.5 px-3 text-white bg-orange-500">
//           20% OFF
//         </p>
//       </div>

//       {/* Rating */}
//       <div className="flex items-center gap-1 mt-2">
//         <StarRating />
//         <p className="ml-2">200+ reviews</p>
//       </div>

//       {/* Address */}
//       <div className="flex items-center gap-1 text-gray-500 mt-2">
//         <img src={assets.locationIcon} alt="location-icon" />
//         <span>{room.area}</span>
//       </div>

//       {/* Images */}
//       <div className="flex flex-col lg:flex-row mt-6 gap-6">
//         <div className="lg-w-1/2 w-full">
//           <img
//             src={mainImage}
//             alt="Room Image"
//             className="w-full max-sm:h-[300px] sm:max-h-[500px] rounded-xl shadow-lg object-cover"
//           />
//         </div>
//         <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
//           {room?.images?.length > 1 &&
//             room.images.map((image, index) => (
//               <img
//                 onClick={() => setMainImage(image)}
//                 key={index}
//                 src={image}
//                 alt="Room Image"
//                 className={`w-full h-full max-sm:h-[150px] sm:max-h-[240px] rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image && "outline outline-orange-500"
//                   }`}
//               />
//             ))}
//         </div>
//       </div>

//       {/* Highlights + Price */}
//       <div className="flex flex-col md:flex-row md:justify-between mt-10">
//         <div className="flex flex-col">
//           <h1 className="text-3xl md:text-4xl font-playfair">
//             Experience Luxury Like Never Before
//           </h1>
//           <div className="flex flex-wrap items-center mt-3 gap-4 mb-6">
//             {amenitiesList.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100"
//               >
//                 {facilityIcons[item] && (
//                   <img src={facilityIcons[item]} alt={item} className="w-5 h-5" />
//                 )}
//                 <p className="text-xs">{item}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Price & Book Button */}
//         <div className="flex flex-col items-start md:items-end gap-4">
//           <p className="text-2xl font-medium">
//             ₹{room.price_per_night_inr}/Night
//           </p>
//           <button
//             onClick={() => navigate(`/booking/${room.id}`)}
//             className="bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md px-8 py-3 text-base cursor-pointer"
//           >
//             Book Now
//           </button>
//         </div>
//       </div>

//       {/* Common Specifications */}
//       <div className="mt-25 space-y-4">
//         {roomCommonData.map((spec, index) => (
//           <div key={index} className="flex items-start gap-2">
//             <img className="w-6.5" src={spec.icon} alt={`${spec.title}-icon`} />
//             <div>
//               <p className="text-base">{spec.title}</p>
//               <p className="text-gray-500">{spec.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Extra Info */}
//       <div className="max-w-3xl border-y border-gray-300 my-15 py-15 text-gray-500">
//         <p>{room.description}</p>
//       </div>

//       {/* Hosted By */}
//       <div className="flex flex-col items-start gap-4">
//         <div className="flex gap-4">
//           <div>
//             <p className="text-lg md:text-xl">Hosted By {room.name}</p>
//             <div className="flex items-center mt-1">
//               <StarRating />
//               <p className="ml-2">200+ reviews</p>
//             </div>
//           </div>
//         </div>
//         <button className="px-6 py-2.5 mt-4 rounded text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer">
//           Contact Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default RoomDetails;




import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { assets, facilityIcons, HotelData, roomCommonData } from "../assets/assets";
import StarRating from "../components/StarRating";
import BookingModel from "../components/BookingModel";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [showBooking, setShowBooking] = useState(false); // ✅ modal toggle

  useEffect(() => {
    const foundRoom = HotelData.find((r) => r.id === Number(id));
    if (foundRoom) {
      setRoom(foundRoom);
      const images = [
        foundRoom.image1_url,
        foundRoom.image2_url,
        foundRoom.image3_url,
        foundRoom.image4_url,
      ].filter(Boolean);
      if (images.length > 0) {
        setMainImage(images[0]);
        foundRoom.images = images;
      }
    }
  }, [id]);

  if (!room) return <p className="p-10 text-center">Room not found</p>;

  const amenitiesList = Array.isArray(room.amenities)
    ? room.amenities
    : room.amenities?.split(",") || [];

  return (
    <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
        <h1 className="text-3xl md:text-4xl font-playfair">
          {room.name}{" "}
          <span className="font-inter text-sm">({room.roomType || "Deluxe"})</span>
        </h1>
        <p className="text-xs font-inter py-1.5 px-3 text-white bg-orange-500">
          20% OFF
        </p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mt-2">
        <StarRating />
        <p className="ml-2">200+ reviews</p>
      </div>

      {/* Address */}
      <div className="flex items-center gap-1 text-gray-500 mt-2">
        <img src={assets.locationIcon} alt="location-icon" />
        <span>{room.area}</span>
      </div>

      {/* Images */}
      <div className="flex flex-col lg:flex-row mt-6 gap-6">
        <div className="lg-w-1/2 w-full">
          <img
            src={mainImage}
            alt="Room"
            className="w-full max-sm:h-[300px] sm:max-h-[500px] rounded-xl shadow-lg object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
          {room?.images?.length > 1 &&
            room.images.map((image, index) => (
              <img
                onClick={() => setMainImage(image)}
                key={index}
                src={image}
                alt="Room"
                className={`w-full h-full max-sm:h-[150px] sm:max-h-[240px] rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image && "outline outline-orange-500"
                  }`}
              />
            ))}
        </div>
      </div>

      {/* Highlights + Price */}
      <div className="flex flex-col md:flex-row md:justify-between mt-10">
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-4xl font-playfair">
            Experience Luxury Like Never Before
          </h1>
          <div className="flex flex-wrap items-center mt-3 gap-4 mb-6">
            {amenitiesList.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100"
              >
                {facilityIcons[item] && (
                  <img src={facilityIcons[item]} alt={item} className="w-5 h-5" />
                )}
                <p className="text-xs">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Price & Book Button */}
        <div className="flex flex-col items-start md:items-end gap-4">
          <p className="text-2xl font-medium">₹{room.price_per_night_inr}/Night</p>
          <button
            onClick={() => setShowBooking(true)} // ✅ open modal
            className="bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md px-8 py-3 text-base cursor-pointer"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Common Specifications */}
      <div className="mt-25 space-y-4">
        {roomCommonData.map((spec, index) => (
          <div key={index} className="flex items-start gap-2">
            <img className="w-6.5" src={spec.icon} alt={`${spec.title}-icon`} />
            <div>
              <p className="text-base">{spec.title}</p>
              <p className="text-gray-500">{spec.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="max-w-3xl border-y border-gray-300 my-15 py-15 text-gray-500">
        <p>{room.description}</p>
      </div>

      {/* Hosted By */}
      <div className="flex flex-col items-start gap-4">
        <div className="flex gap-4">
          <div>
            <p className="text-lg md:text-xl">Hosted By {room.name}</p>
            <div className="flex items-center mt-1">
              <StarRating />
              <p className="ml-2">200+ reviews</p>
            </div>
          </div>
        </div>
        <button className="px-6 py-2.5 mt-4 rounded text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer">
          Contact Now
        </button>
      </div>

      {/* ✅ Booking Modal */}
      {showBooking && (
        <BookingModel room={room} onClose={() => setShowBooking(false)} />
      )}
    </div>
  );
};

export default RoomDetails;
