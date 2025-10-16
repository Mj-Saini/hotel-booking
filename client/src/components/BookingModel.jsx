

// import React, { useState, useEffect } from "react";

// const BookingModel = ({ room, onClose }) => {
//     const today = new Date().toISOString().split("T")[0];

//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         checkIn: "",
//         checkOut: "",
//         guests: 1,
//     });

//     // ✅ Load Razorpay SDK once
//     useEffect(() => {
//         const script = document.createElement("script");
//         script.src = "https://checkout.razorpay.com/v1/checkout.js";
//         script.async = true;

//         script.onload = () => {
//             console.log("✅ Razorpay SDK Loaded Successfully");
//         };

//         script.onerror = () => {
//             console.error("❌ Razorpay SDK Failed to Load");
//             alert("Failed to load Razorpay SDK. Please refresh and try again.");
//         };

//         document.body.appendChild(script);
//     }, []);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         if (name === "checkIn" && formData.checkOut && value > formData.checkOut) {
//             setFormData({ ...formData, checkIn: value, checkOut: value });
//         } else {
//             setFormData({ ...formData, [name]: value });
//         }
//     };

//     // 💳 Proceed to Payment
//     const handleProceedToPayment = async () => {
//         if (
//             !formData.name ||
//             !formData.email ||
//             !formData.phone ||
//             !formData.checkIn ||
//             !formData.checkOut
//         ) {
//             alert("Please fill all details before proceeding.");
//             return;
//         }

//         // ⛔ Check SDK Loaded
//         if (!window.Razorpay) {
//             alert("Razorpay SDK not loaded yet. Please wait and try again.");
//             return;
//         }

//         try {
//             // 1️⃣ Create Order from Backend
//             const response = await fetch("https://mj-rozpay.onrender.com/create-order", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ amount: room.price_per_night_inr}), // in paisa
//             });

//             const order = await response.json();

//             if (!order || !order.id) {
//                 alert("Failed to create order. Please try again later.");
//                 return;
//             }

//             // 2️⃣ Configure Razorpay Checkout
//             const options = {
//                 key: "rzp_test_RO8SQE7slB5cLv", // Replace with your test key
//                 amount: order.amount,
//                 currency: "INR",
//                 name: "MJ Bookings",
//                 description: `Booking for ${room.name}`,
//                 order_id: order.id,
//                 handler: function (response) {
//                     console.log("✅ Payment Success:", response);
//                     alert("✅ Booking Successful! Payment ID: " + response.razorpay_payment_id);
//                     onClose();
//                 },
//                 prefill: {
//                     name: formData.name,
//                     email: formData.email,
//                     contact: formData.phone,
//                 },
//                 theme: { color: "#4f46e5" },
//             };

//             // 3️⃣ Open Razorpay Modal
//             const rzp = new window.Razorpay(options);
//             rzp.open();

//             rzp.on("payment.failed", function (err) {
//                 console.error("❌ Payment Failed:", err.error);
//                 alert("❌ Payment failed. Please try again.");
//             });
//         } catch (err) {
//             console.error("Error creating order:", err);
//             alert("Something went wrong. Please try again later.");
//         }
//     };

//     return (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-2 sm:p-4">
//             <div className="bg-white rounded-2xl shadow-xl w-full md:w-1/2 overflow-hidden">
//                 {/* Header */}
//                 <div className="bg-indigo-600 text-white p-4 sm:p-6">
//                     <h2 className="text-xl font-semibold">Book {room.name}</h2>
//                     <p className="text-sm mt-1">Fill in your details to proceed with booking</p>
//                 </div>

//                 {/* Form */}
//                 <div className="p-4 sm:p-6 space-y-2">
//                     <div className="flex flex-col">
//                         <label className="text-gray-700 text-sm font-medium mb-1">Full Name</label>
//                         <input
//                             type="text"
//                             name="name"
//                             placeholder="John Doe"
//                             value={formData.name}
//                             onChange={handleChange}
//                             className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
//                         />
//                     </div>

//                     <div className="flex flex-col">
//                         <label className="text-gray-700 font-medium mb-1 text-sm">Email</label>
//                         <input
//                             type="email"
//                             name="email"
//                             placeholder="example@mail.com"
//                             value={formData.email}
//                             onChange={handleChange}
//                             className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
//                         />
//                     </div>

//                     <div className="flex flex-col">
//                         <label className="text-gray-700 font-medium mb-1 text-sm">Phone Number</label>
//                         <input
//                             type="tel"
//                             name="phone"
//                             placeholder="+91 9876543210"
//                             value={formData.phone}
//                             onChange={handleChange}
//                             className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
//                         />
//                     </div>

//                     <div className="flex flex-col">
//                         <label className="text-gray-700 font-medium mb-1 text-sm">Check-In Date</label>
//                         <input
//                             type="date"
//                             name="checkIn"
//                             value={formData.checkIn}
//                             min={today}
//                             onChange={handleChange}
//                             className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
//                         />
//                     </div>

//                     <div className="flex flex-col">
//                         <label className="text-gray-700 font-medium mb-1 text-sm">Check-Out Date</label>
//                         <input
//                             type="date"
//                             name="checkOut"
//                             value={formData.checkOut}
//                             min={formData.checkIn || today}
//                             onChange={handleChange}
//                             className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
//                         />
//                     </div>

//                     <div className="flex flex-col">
//                         <label className="text-gray-700 font-medium mb-1 text-sm">Guests</label>
//                         <input
//                             type="number"
//                             name="guests"
//                             min={1}
//                             value={formData.guests}
//                             onChange={handleChange}
//                             className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
//                         />
//                     </div>

//                     {/* Buttons */}
//                     <div className="flex flex-col sm:flex-row gap-3 mt-4">
//                         <button
//                             onClick={handleProceedToPayment}
//                             className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg transition"
//                         >
//                             Proceed to Payment
//                         </button>
//                         <button
//                             onClick={onClose}
//                             className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 rounded-lg transition"
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




import React, { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const BookingModel = ({ room, onClose }) => {
    const today = new Date().toISOString().split("T")[0];

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        guests: 1,
        rooms: 1,
    });

    // ✅ Calculate total price dynamically
    const getTotalAmount = () => {
        if (!formData.checkIn || !formData.checkOut) return room.price_per_night_inr;

        const checkInDate = new Date(formData.checkIn);
        const checkOutDate = new Date(formData.checkOut);
        const nights = Math.max(
            Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)),
            1
        );

        return room.price_per_night_inr * formData.rooms * nights;
    };

    // ✅ Load Razorpay SDK
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        script.onload = () => console.log("✅ Razorpay SDK Loaded");
        script.onerror = () => alert("❌ Razorpay SDK Failed to Load");
        document.body.appendChild(script);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "checkIn" && formData.checkOut && value > formData.checkOut) {
            setFormData({ ...formData, checkIn: value, checkOut: value });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    // 💳 Proceed to Payment
    const handleProceedToPayment = async () => {
        if (
            !formData.name ||
            !formData.email ||
            !formData.phone ||
            !formData.checkIn ||
            !formData.checkOut
        ) {
            alert("Please fill all details before proceeding.");
            return;
        }

        if (!window.Razorpay) {
            alert("Razorpay SDK not loaded yet. Please wait and try again.");
            return;
        }

        const totalAmount = getTotalAmount();

        try {
            // 1️⃣ Create Order from Backend
            const response = await fetch("https://mj-rozpay.onrender.com/create-order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount: totalAmount }),
            });

            const order = await response.json();

            if (!order || !order.id) {
                alert("Failed to create order. Please try again later.");
                return;
            }

            // 2️⃣ Configure Razorpay Checkout
            const options = {
                key: "rzp_test_RO8SQE7slB5cLv", // Replace with your test key
                amount: order.amount,
                currency: "INR",
                name: "MJ Bookings",
                description: `Booking for ${room.name}`,
                order_id: order.id,
                handler: async function (response) {
                    console.log("✅ Payment Success:", response);
                    alert("✅ Booking Successful!");

                    // ✅ Save booking in Firestore
                    try {
                        await addDoc(collection(db, "bookings"), {
                            roomName: room.name,
                            roomPrice: room.price_per_night_inr,
                            ...formData,
                            totalAmount,
                            paymentId: response.razorpay_payment_id,
                            createdAt: new Date().toISOString(),
                        });
                        console.log("✅ Booking saved in Firestore");
                    } catch (err) {
                        console.error("❌ Firestore save error:", err);
                    }

                    onClose();
                },
                prefill: {
                    name: formData.name,
                    email: formData.email,
                    contact: formData.phone,
                },
                theme: { color: "#4f46e5" },
            };

            // 3️⃣ Open Razorpay Modal
            const rzp = new window.Razorpay(options);
            rzp.open();

            rzp.on("payment.failed", function (err) {
                console.error("❌ Payment Failed:", err.error);
                alert("❌ Payment failed. Please try again.");
            });
        } catch (err) {
            console.error("Error creating order:", err);
            alert("Something went wrong. Please try again later.");
        }
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-2 sm:p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full md:w-1/2 overflow-hidden">
                {/* Header */}
                <div className="bg-indigo-600 text-white p-4 sm:p-6">
                    <h2 className="text-xl font-semibold">Book {room.name}</h2>
                    <p className="text-sm mt-1">Fill in your details to proceed with booking</p>
                </div>

                {/* Form */}
                <div className="p-4 sm:p-6 space-y-2">
                    <div className="flex flex-col">
                        <label className="text-gray-700 text-sm font-medium mb-1">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-1 text-sm">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="example@mail.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-1 text-sm">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="+91 9876543210"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-1 text-sm">Check-In Date</label>
                        <input
                            type="date"
                            name="checkIn"
                            value={formData.checkIn}
                            min={today}
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-1 text-sm">Check-Out Date</label>
                        <input
                            type="date"
                            name="checkOut"
                            value={formData.checkOut}
                            min={formData.checkIn || today}
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                        />
                    </div>

                    <div className="flex gap-2">
                        <div className="flex flex-col w-full">
                            <label className="text-gray-700 font-medium mb-1 text-sm">Guests</label>
                            <input
                                type="number"
                                name="guests"
                                min={1}
                                value={formData.guests}
                                onChange={handleChange}
                                className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                            />
                        </div>

                        <div className="flex flex-col  w-full">
                            <label className="text-gray-700 font-medium mb-1 text-sm">Number of Rooms</label>
                            <input
                                type="number"
                                name="rooms"
                                min={1}
                                value={formData.rooms}
                                onChange={handleChange}
                                className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                            />
                        </div>
                    </div>

                    {/* 💰 Total Amount Display */}
                    <p className="text-right text-gray-800 text-xs font-medium mt-2">
                        Total Amount: ₹{getTotalAmount()}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-4">
                        <button
                            onClick={handleProceedToPayment}
                            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg transition"
                        >
                            Proceed to Payment
                        </button>
                        <button
                            onClick={onClose}
                            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 rounded-lg transition"
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
