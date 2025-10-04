


import React, { useMemo } from "react";
import { assets, facilityIcons, HotelData } from "../assets/assets";
import { useNavigate, useLocation } from "react-router-dom";
import StarRating from "../components/StarRating";

const AllRooms = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get("search")?.toLowerCase() || "";

  const filteredHotels = useMemo(() => {
    if (!search) return HotelData; // no search -> show all hotels
    const filtered = HotelData.filter(
      (hotel) =>
        hotel.area?.toLowerCase().includes(search) ||
        hotel.city?.toLowerCase().includes(search) ||
        hotel.name?.toLowerCase().includes(search)
    );
    return filtered; // agar 0 hotels -> empty array
  }, [search]);
  
  const handleRoomClick = (room) => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top
    navigate(`/rooms/${room.id}`);
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 px-4 md:px-16 lg:px-24 xl:px-32 w-full">
      <div className="w-full">
        <h1 className="font-playfair text-4xl md:text-[40px] mb-2">Hotel Rooms</h1>
        <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">
          Explore hotels and find the perfect stay for your trip.
        </p>

        {/* No hotels found */}
        {filteredHotels.length === 0 ? (
          <div className="mt-10 text-center text-gray-600">
            <p className="text-lg">
              No hotels found for "<span className="font-medium">{search}</span>"
            </p>
            <p className="text-sm mt-2">Try searching by area, city, or hotel name.</p>
          </div>
        ) : (
          <div className="mt-8 space-y-10">
            {filteredHotels.map((room, index) => {
              const amenities = Array.isArray(room.amenities)
                ? room.amenities
                : room.amenities?.split(",") || [];

              return (
                <div
                  key={index}
                  onClick={() => handleRoomClick(room)}
                  className="flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 cursor-pointer hover:bg-gray-50 transition"
                >
                  <img
                    className="max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover"
                    src={room.image1_url}
                    alt={room.name}
                  />
                  <div className="md:w-1/2 flex flex-col gap-2">
                    <p className="text-gray-500">{room.city}</p>
                    <p className="text-gray-800 text-3xl font-Playfair">{room.name}</p>
                    <div className="flex items-center">
                      <StarRating />
                      <p className="ml-2 text-sm text-gray-500">200+ reviews</p>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 mt-2 text-sm">
                      <img src={assets.locationIcon} alt="location-icon" />
                      <span>{room.area}</span>
                    </div>

                    {/* Amenities */}
                    <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
                      {amenities.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#f5f5ff]/70"
                        >
                          {facilityIcons[item] && (
                            <img className="w-5 h-5" src={facilityIcons[item]} alt={item} />
                          )}
                          <p className="text-xs">{item}</p>
                        </div>
                      ))}
                    </div>

                    {/* Price */}
                    <p className="text-xl font-medium text-gray-700">
                      ₹{room.price_per_night_inr} / Night
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllRooms;
