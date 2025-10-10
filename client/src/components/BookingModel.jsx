// import React, { useState } from "react";
// import { addDoc, collection } from "firebase/firestore";
// import { db } from "../firebase/firebaseConfig";
// import emailjs from "@emailjs/browser";

// const BookingModel = ({ room, onClose }) => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         checkIn: "",
//         checkOut: "",
//         guests: 1,
//     });

//     const handleChange = (e) =>
//         setFormData({ ...formData, [e.target.name]: e.target.value });

//     const handleProceedToPayment = async () => {
//         const options = {
//             key: "rzp_test_abc123xyz",
//             amount: room.price_per_night_inr * 100,
//             currency: "INR",
//             name: room.name,
//             description: "Room Booking",
//             handler: async function (response) {
//                 // ✅ Save booking
//                 await addDoc(collection(db, "Bookings"), {
//                     ...formData,
//                     roomId: room.id,
//                     roomName: room.name,
//                     price: room.price_per_night_inr,
//                     paymentId: response.razorpay_payment_id,
//                     status: "confirmed",
//                     bookedAt: new Date(),
//                 });

//                 // ✅ Send email using EmailJS
//                 emailjs
//                     .send(
//                         "YOUR_SERVICE_ID",
//                         "YOUR_TEMPLATE_ID",
//                         {
//                             name: formData.name,
//                             email: formData.email,
//                             roomName: room.name,
//                             checkIn: formData.checkIn,
//                             checkOut: formData.checkOut,
//                             guests: formData.guests,
//                             price: room.price_per_night_inr,
//                         },
//                         "YOUR_PUBLIC_KEY"
//                     )
//                     .then(() => console.log("Email sent successfully!"))
//                     .catch((err) => console.error("Email send error:", err));

//                 alert("Booking successful! Confirmation email sent.");
//                 onClose();
//             },
//             prefill: { name: formData.name, contact: formData.phone },
//             theme: { color: "#4f46e5" },
//         };

//         const rzp = new window.Razorpay(options);
//         rzp.open();
//     };

//     const inputs = [
//         { name: "name", label: "Full Name", placeholder: "John Doe", type: "text" },
//         { name: "email", label: "Email", placeholder: "example@mail.com", type: "email" },
//         { name: "phone", label: "Phone Number", placeholder: "+91 9876543210", type: "tel" },
//         { name: "checkIn", label: "Check-In Date", type: "date" },
//         { name: "checkOut", label: "Check-Out Date", type: "date" },
//         { name: "guests", label: "Guests", placeholder: "1", type: "number", min: 1 },
//     ];

//     return (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
//             <div className="bg-white rounded-2xl shadow-xl w-full md:w-1/2 overflow-hidden">
//                 {/* Header */}
//                 <div className="bg-indigo-600 text-white p-6">
//                     <h2 className="text-2xl font-semibold">Book {room.name}</h2>
//                     <p className="text-sm mt-1">Fill in your details to proceed with booking</p>
//                 </div>

//                 {/* Form */}
//                 <div className="p-6 space-y-4">
//                     {inputs.map((input) => (
//                         <div key={input.name} className="flex flex-col">
//                             {input.label && (
//                                 <label className="text-gray-700 font-medium mb-1">{input.label}</label>
//                             )}
//                             <input
//                                 {...input}
//                                 value={formData[input.name]}
//                                 onChange={handleChange}
//                                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
//                             />
//                         </div>
//                     ))}

//                     {/* Buttons */}
//                     <div className="flex flex-col sm:flex-row gap-3 mt-4">
//                         <button
//                             // onClick={handleProceedToPayment}
//                             className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition"
//                         >
//                             Proceed to Payment
//                         </button>
//                         <button
//                             onClick={onClose}
//                             className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 rounded-lg transition"
//                         >
//                             Cancel
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BookingModel;




import React, { useState } from "react";
// import { addDoc, collection } from "firebase/firestore";
// import { db } from "../firebase/firebaseConfig";
// import emailjs from "@emailjs/browser";

const BookingModel = ({ room, onClose }) => {
    const today = new Date().toISOString().split("T")[0]; // "YYYY-MM-DD"

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        guests: 1,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // If check-in date changes, update checkout if it's before check-in
        if (name === "checkIn" && formData.checkOut && value > formData.checkOut) {
            setFormData({ ...formData, checkIn: value, checkOut: value });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    // const handleProceedToPayment = async () => {
    //     const options = {
    //         key: "rzp_test_abc123xyz",
    //         amount: room.price_per_night_inr * 100,
    //         currency: "INR",
    //         name: room.name,
    //         description: "Room Booking",
    //         handler: async function (response) {
    //             // ✅ Save booking
    //             await addDoc(collection(db, "Bookings"), {
    //                 ...formData,
    //                 roomId: room.id,
    //                 roomName: room.name,
    //                 price: room.price_per_night_inr,
    //                 paymentId: response.razorpay_payment_id,
    //                 status: "confirmed",
    //                 bookedAt: new Date(),
    //             });

    //             // ✅ Send email using EmailJS
    //             emailjs
    //                 .send(
    //                     "YOUR_SERVICE_ID",
    //                     "YOUR_TEMPLATE_ID",
    //                     {
    //                         name: formData.name,
    //                         email: formData.email,
    //                         roomName: room.name,
    //                         checkIn: formData.checkIn,
    //                         checkOut: formData.checkOut,
    //                         guests: formData.guests,
    //                         price: room.price_per_night_inr,
    //                     },
    //                     "YOUR_PUBLIC_KEY"
    //                 )
    //                 .then(() => console.log("Email sent successfully!"))
    //                 .catch((err) => console.error("Email send error:", err));

    //             alert("Booking successful! Confirmation email sent.");
    //             onClose();
    //         },
    //         prefill: { name: formData.name, contact: formData.phone },
    //         theme: { color: "#4f46e5" },
    //     };

    //     const rzp = new window.Razorpay(options);
    //     rzp.open();
    // };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full md:w-1/2 overflow-hidden">
                {/* Header */}
                <div className="bg-indigo-600 text-white p-6">
                    <h2 className="text-2xl font-semibold">Book {room.name}</h2>
                    <p className="text-sm mt-1">Fill in your details to proceed with booking</p>
                </div>

                {/* Form */}
                <div className="p-6 space-y-4">
                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-1">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="example@mail.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-1">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="+91 9876543210"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-1">Check-In Date</label>
                        <input
                            type="date"
                            name="checkIn"
                            value={formData.checkIn}
                            min={today}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-1">Check-Out Date</label>
                        <input
                            type="date"
                            name="checkOut"
                            value={formData.checkOut}
                            min={formData.checkIn || today} // cannot choose before check-in
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-1">Guests</label>
                        <input
                            type="number"
                            name="guests"
                            min={1}
                            value={formData.guests}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-4">
                        <button
                            // onClick={handleProceedToPayment}
                            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition"
                        >
                            Proceed to Payment
                        </button>
                        <button
                            onClick={onClose}
                            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 rounded-lg transition"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModel;
