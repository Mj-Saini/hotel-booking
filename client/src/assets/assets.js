import logo from './logo.svg'
import searchIcon from './searchIcon.svg'
import userIcon from './userIcon.svg'
import calenderIcon from './calenderIcon.svg'
import locationIcon from './locationIcon.svg'
import starIconFilled from './starIconFilled.svg'
import arrowIcon from './arrowIcon.svg'
import starIconOutlined from './starIconOutlined.svg'
import instagramIcon from './instagramIcon.svg'
import facebookIcon from './facebookIcon.svg'
import twitterIcon from './twitterIcon.svg'
import linkendinIcon from './linkendinIcon.svg'
import freeWifiIcon from './freeWifiIcon.svg'
import freeBreakfastIcon from './freeBreakfastIcon.svg'
import roomServiceIcon from './roomServiceIcon.svg'
import mountainIcon from './mountainIcon.svg'
import poolIcon from './poolIcon.svg'
import homeIcon from './homeIcon.svg'
import closeIcon from './closeIcon.svg'
import locationFilledIcon from './locationFilledIcon.svg'
import heartIcon from './heartIcon.svg'
import badgeIcon from './badgeIcon.svg'
import menuIcon from './menuIcon.svg'
import closeMenu from './closeMenu.svg'
import guestsIcon from './guestsIcon.svg'
import roomImg1 from './roomImg1.png'
import roomImg2 from './roomImg2.png'
import roomImg3 from './roomImg3.png'
import roomImg4 from './roomImg4.png'
import regImage from './regImage.png'
import exclusiveOfferCardImg1 from "./exclusiveOfferCardImg1.png";
import exclusiveOfferCardImg2 from "./exclusiveOfferCardImg2.png";
import exclusiveOfferCardImg3 from "./exclusiveOfferCardImg3.png";
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";


export const assets = {
    logo,
    searchIcon,
    userIcon,
    calenderIcon,
    locationIcon,
    starIconFilled,
    arrowIcon,
    starIconOutlined,
    instagramIcon,
    facebookIcon,
    twitterIcon,
    linkendinIcon,
    freeWifiIcon,
    freeBreakfastIcon,
    roomServiceIcon,
    mountainIcon,
    poolIcon,
    closeIcon,
    homeIcon,
    locationFilledIcon,
    heartIcon,
    badgeIcon,
    menuIcon,
    closeMenu,
    guestsIcon,
    regImage,
    addIcon,
    dashboardIcon,
    listIcon,
    uploadArea,
    totalBookingIcon,
    totalRevenueIcon,
}

export const cities = [
    "Dubai",
    "Singapore",
    "New York",
    "London",
];

// Exclusive Offers Dummy Data
export const exclusiveOffers = [
    { _id: 1, title: "Summer Escape Package", description: "Enjoy a complimentary night and daily breakfast", priceOff: 25, expiryDate: "Aug 31", image: exclusiveOfferCardImg1 },
    { _id: 2, title: "Romantic Getaway", description: "Special couples package including spa treatment", priceOff: 20, expiryDate: "Sep 20", image: exclusiveOfferCardImg2 },
    { _id: 3, title: "Luxury Retreat", description: "Book 60 days in advance and save on your stay at any of our luxury properties worldwide.", priceOff: 30, expiryDate: "Sep 25", image: exclusiveOfferCardImg3 },
]

// Testimonials Dummy Data
export const testimonials = [
    { id: 1, name: "Emma Rodriguez", address: "Barcelona, Spain", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", rating: 5, review: "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides." },
    { id: 2, name: "Liam Johnson", address: "New York, USA", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", rating: 4, review: "QuickStay exceeded my expectations. The booking process was seamless, and the hotels were absolutely top-notch. Highly recommended!" },
    { id: 3, name: "Sophia Lee", address: "Seoul, South Korea", image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200", rating: 5, review: "Amazing service! I always find the best luxury accommodations through QuickStay. Their recommendations never disappoint!" }
];

// Facility Icon
export const facilityIcons = {
    "Free WiFi": assets.freeWifiIcon,
    "Free Breakfast": assets.freeBreakfastIcon,
    "Room Service": assets.roomServiceIcon,
    "Mountain View": assets.mountainIcon,
    "Pool Access": assets.poolIcon,
};

// For Room Details Page
export const roomCommonData = [
    { icon: assets.homeIcon, title: "Clean & Safe Stay", description: "A well-maintained and hygienic space just for you." },
    { icon: assets.badgeIcon, title: "Enhanced Cleaning", description: "This host follows Staybnb's strict cleaning standards." },
    { icon: assets.locationFilledIcon, title: "Excellent Location", description: "90% of guests rated the location 5 stars." },
    { icon: assets.heartIcon, title: "Smooth Check-In", description: "100% of guests gave check-in a 5-star rating." },
];

// User Dummy Data
export const userDummyData = {
    "_id": "user_2unqyL4diJFP1E3pIBnasc7w8hP",
    "username": "Great Stack",
    "email": "user.greatstack@gmail.com",
    "image": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ2N2c5YVpSSEFVYVUxbmVYZ2JkSVVuWnFzWSJ9",
    "role": "hotelOwner",
    "createdAt": "2025-03-25T09:29:16.367Z",
    "updatedAt": "2025-04-10T06:34:48.719Z",
    "__v": 1,
    "recentSearchedCities": [
        "New York"
    ]
}

// Hotel Dummy Data
export const hotelDummyData = {
    "_id": "67f76393197ac559e4089b72",
    "name": "Urbanza Suites",
    "address": "Main Road  123 Street , 23 Colony",
    "contact": "+0123456789",
    "owner": userDummyData,
    "city": "New York",
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
}

// Rooms Dummy Data
export const roomsDummyData = [
   {
    "id": 1,
    "name": "Gyanav Hotel and Restaurant",
    "city": "Udaipur",
    "star_rating": 3,
    "area": "Gyanav Restaurant, 313001 Udaipur,",
    "price_per_night_inr": 750,
    "amenities": "AC,Breakfast,Swimming Pool",
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/668699732.jpg?k=5b5f28841268db7c1c4513dc6c560e040474ec8e159b19bb562fef5b552a00c1&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/668699734.jpg?k=2c88b3710f628c9b60a308f295ba10954c9953db764eb27e06ce295b8b796ebb&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/668699736.jpg?k=12069dd01602c7a4b3d27def627f086c5a21ba76d09e0f3a87d864a42ab6be31&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/668699738.jpg?k=4286c4ec69d89dc95a4f3de899b3f5039caa7feda4e49e9ed4f61c616d82f25b&o=",
    "description": "Gyanav Hotel and Restaurant in Udaipur offers family rooms with private bathrooms, city views, and modern amenities such as air-conditioning and wardrobes. Each room includes a shower and tiled floors, ensuring a pleasant stay."
  },
    {
        "_id": "67f76452197ac559e4089b8e",
        "hotel": hotelDummyData,
        "roomType": "Double Bed",
        "pricePerNight": 299,
        "amenities": ["Room Service", "Mountain View", "Pool Access"],
        "images": [roomImg2, roomImg3, roomImg4, roomImg1],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:25:22.593Z",
        "updatedAt": "2025-04-10T06:25:22.593Z",
        "__v": 0
    },
    {
        "_id": "67f76406197ac559e4089b82",
        "hotel": hotelDummyData,
        "roomType": "Double Bed",
        "pricePerNight": 249,
        "amenities": ["Free WiFi", "Free Breakfast", "Room Service"],
        "images": [roomImg3, roomImg4, roomImg1, roomImg2],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:24:06.285Z",
        "updatedAt": "2025-04-10T06:24:06.285Z",
        "__v": 0
    },
    {
        "_id": "67f763d8197ac559e4089b7a",
        "hotel": hotelDummyData,
        "roomType": "Single Bed",
        "pricePerNight": 199,
        "amenities": ["Free WiFi", "Room Service", "Pool Access"],
        "images": [roomImg4, roomImg1, roomImg2, roomImg3],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:23:20.252Z",
        "updatedAt": "2025-04-10T06:23:20.252Z",
        "__v": 0
    },
    // 🔹 New Room 5
    {
        "_id": "67f765a2197ac559e4089ba0",
        "hotel": hotelDummyData,
        "roomType": "Luxury Suite",
        "pricePerNight": 599,
        "amenities": ["Free WiFi", "Spa Access", "Sea View"],
        "images": [roomImg2, roomImg1, roomImg3, roomImg4],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:28:10.000Z",
        "updatedAt": "2025-04-10T06:28:10.000Z",
        "__v": 0
    },
    // 🔹 New Room 6
    {
        "_id": "67f765f2197ac559e4089ba5",
        "hotel": hotelDummyData,
        "roomType": "Family Room",
        "pricePerNight": 449,
        "amenities": ["Free Breakfast", "Kids Play Area", "Room Service"],
        "images": [roomImg1, roomImg4, roomImg2, roomImg3],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:29:20.000Z",
        "updatedAt": "2025-04-10T06:29:20.000Z",
        "__v": 0
    }
]




// User Bookings Dummy Data
export const userBookingsDummyData = [
    {
        "_id": "67f76839994a731e97d3b8ce",
        "user": userDummyData,
        "room": roomsDummyData[1],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-30T00:00:00.000Z",
        "checkOutDate": "2025-05-01T00:00:00.000Z",
        "totalPrice": 299,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Stripe",
        "isPaid": true,
        "createdAt": "2025-04-10T06:42:01.529Z",
        "updatedAt": "2025-04-10T06:43:54.520Z",
        "__v": 0
    },
    {
        "_id": "67f76829994a731e97d3b8c3",
        "user": userDummyData,
        "room": roomsDummyData[0],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-27T00:00:00.000Z",
        "checkOutDate": "2025-04-28T00:00:00.000Z",
        "totalPrice": 399,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2025-04-10T06:41:45.873Z",
        "updatedAt": "2025-04-10T06:41:45.873Z",
        "__v": 0
    },
    {
        "_id": "67f76810994a731e97d3b8b4",
        "user": userDummyData,
        "room": roomsDummyData[3],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-11T00:00:00.000Z",
        "checkOutDate": "2025-04-12T00:00:00.000Z",
        "totalPrice": 199,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2025-04-10T06:41:20.501Z",
        "updatedAt": "2025-04-10T06:41:20.501Z",
        "__v": 0
    }
]

// Dashboard Dummy Data
export const dashboardDummyData = {
    "totalBookings": 3,
    "totalRevenue": 897,
    "bookings": userBookingsDummyData
}

// --------- SVG code for Book Icon------
/* 
const BookIcon = ()=>(
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
)

*/




export const HotelData=[
  {
    "id": 1,
    "name": "Gyanav Hotel and Restaurant",
    "city": "Udaipur",
    "star_rating": 3,
    "area": "Gyanav Restaurant, 313001 Udaipur,",
    "price_per_night_inr": 750,
    "amenities": "AC,Breakfast,Swimming Pool",
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/668699732.jpg?k=5b5f28841268db7c1c4513dc6c560e040474ec8e159b19bb562fef5b552a00c1&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/668699734.jpg?k=2c88b3710f628c9b60a308f295ba10954c9953db764eb27e06ce295b8b796ebb&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/668699736.jpg?k=12069dd01602c7a4b3d27def627f086c5a21ba76d09e0f3a87d864a42ab6be31&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/668699738.jpg?k=4286c4ec69d89dc95a4f3de899b3f5039caa7feda4e49e9ed4f61c616d82f25b&o=",
    "description": "Gyanav Hotel and Restaurant in Udaipur offers family rooms with private bathrooms, city views, and modern amenities such as air-conditioning and wardrobes. Each room includes a shower and tiled floors, ensuring a pleasant stay."
  },
  {
    "id": 2,
    "name": "Haveli near the lake",
    "city": "Udaipur",
    "star_rating": 1,
    "area": "128, Nag Marg, 313004 Udaipur, India",
    "price_per_night_inr": 2280,
    "amenities": "AC,Breakfast,Swimming Pool",
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090807.jpg?k=c2d3c9a2bec254dea0d3959c59c823ecd48a623b9799ee0e2088562fdddc61e3&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090765.jpg?k=13db65eecc37dac23dac61f148a1a39182a9d85a36d9dda387e20fa8d463178a&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090879.jpg?k=a0f558e69506473c2f24bf7a3d2fc2cce24efbcb39954578eba6a5aec075470f&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090827.jpg?k=0beb8f8bf9dd3d4f4a48fcac467340d9f82ea4cca09363e4465b7502674e56b2&o=",
    "description": "Haveli near the lake in Udaipur offers family rooms with private bathrooms. Each room includes air-conditioning, a bath, free toiletries, shower, TV, and wardrobe."
  },
  {
    "id": 3,
    "name": "Moustache Udaipur",
    "city": "Udaipur",
    "star_rating": 4,
    "area": "44 Gadiya Devra, Near Jagdish Chowk, 313001 Udaipur",
    "price_per_night_inr": 1270,
    "amenities": "AC,Breakfast,Swimming Pool",
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090801.jpg?k=fb361fd4ba8d4fc49a436eeeab1df511d0d55d05681e9c46802fe6d9a60f0d7a&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090797.jpg?k=61fe57059be79dbe74a5eaca63aa20225c54392c85d058aa7052d49b6f8d03f5&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090763.jpg?k=72b8e5973444c7d0675cf74f9147be8d08bd96064bedeb83dcb147d08034e388&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090762.jpg?k=2b3df28f9037e4d8b27b03eae5bf6646b085080b70bf36ec7338a66f4be817c4&o=",
    "description": " Moustache Udaipur in Udaipur offers a 4-star hostel experience with adults-only rooms. Each room features a private bathroom, air-conditioning, and a balcony."
  },
  {
    "id": 4,
    "name": "Mewar Avenue Guest House",
    "city": "Udaipur",
    "star_rating": 2,
    "area": "72,ganesh Ghati,near Shiv Temple, 313001 Udaipur, India",
    "price_per_night_inr": 809,
    "amenities": "AC,Breakfast,Swimming Pool",
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/687875194.jpg?k=59771b40d01def6d498bcf47aa2892df53917abfd172d957aab8f7ba2f730d36&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/609809851.jpg?k=6d12a766b4cb246d9aaf2f04103d299b1f8a041e152c8b1cba859ac37b27a2b8&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/510656383.jpg?k=b7204db5e9d3ddd8c097516aa753ddfb9714e7dad33c2ba98c3a1394b80d81da&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/510907898.jpg?k=c2efe826104e454b04e004e1be8d5a2719253688bb797019864877d6cbafe967&o=",
    "description": " The guest house also offers car hire. City Palace of Udaipur is 200 metres from Mewar Avenue Guest House, while Lake Pichhola is 100 metres from the property. The nearest airport is Maharana Pratap Airport, 21 km from Mewar Avenue Guest House."
  },
  {
    "id": 5,
    "name": "Devi Vilas Guest House",
    "city": "Udaipur",
    "star_rating": 2,
    "area": "30, Gangour Ghat, 313001 Udaipur, India",
    "price_per_night_inr": 400,
    "amenities": "AC,Breakfast,Swimming Pool",
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/609810972.jpg?k=04e9b63e1ce2dd9b4b192be81e0b637f124f38104c7eb373cbbb95fb215f67c2&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/522594821.jpg?k=d6a822f77e410a78b78f8c1e1d0fa46d557657e099216c3d7682eaca8c332a74&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/522897909.jpg?k=d199f833f6a10ce8dd20cee966bae440c63d69fbc6a56d8c8b0292fcc36a4db3&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/522898021.jpg?k=5bfd23daf606001517732c0687e24165efc00be5b1b30be0717266664ba6e9af&o=",
    "description": " Devi Vilas Guest House in Udaipur is housed in a historic building, offering a unique and charming environment. Rooms feature air-conditioning, private bathrooms with free toiletries, and views of lakes or landmarks. Additional amenities include refrigerators, TVs, and wardrobes."
  },
  {
    "id": 6,
    "name": "Hotel Green View InternationalOpens",
    "city": "Udaipur",
    "star_rating": 4,
    "area": "hotel green view Near Gulab Bag ,city palace road,Udaipur, 313001 Udaipur, India",
    "price_per_night_inr": 1170,
    "amenities": "AC,Breakfast,Swimming Pool",
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/618303146.jpg?k=5f211aab23a182db19416edab897305e7f84c96561b1dfb486f7d40eefd3890a&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/618303148.jpg?k=0f4bca9f023a6592f35285e2df98d40447f4265a370ea92afa5908c4dfdb05b9&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/305301647.jpg?k=32b79be9f708a4c16bd72c71b72eaa818d212e7134404a3a2f7b60e7e14d2bba&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/246935128.jpg?k=a4320cd1a64b1b304c64b3265c7cb7419a88f65e21651a9d10334cad9be5c89a&o=",
    "description": " Hotel Green View International in Udaipur offers family rooms with air-conditioning, private bathrooms, and city views. Each room includes a work desk, sofa bed, and free toiletries."
  },
  {
    "id": 7,
    "name": "Revaas Lake View Boutique Stay",
    "city": "Udaipur",
    "star_rating": 3,
    "area": "C-12, Shikarbadi Colony, Near wonder cement cricket academy, 313001 Udaipur, India",
    "price_per_night_inr": 1350,
    "amenities": "AC,Breakfast,Swimming Pool",
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/289754850.jpg?k=5393ca24ef6d8b918ad5b29fc47c34d92d8e7c96ba4774e012732de61cc72f01&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/291518425.jpg?k=9b261512287b3964b767e157bb1e3deea1dc589dbf953e7db18a194fafa384ec&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/291526523.jpg?k=b68c3d399230a68be54c3d483a13747ffa01f1fdfc8a70b35d40c228dae437fb&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/506958567.jpg?k=1cfeb1f5aa644f83137152642517539110f914e904857828580bd4171dba72a1&o=",
    "description": "Rooms feature air-conditioning, private bathrooms, and garden or lake views. Each room includes a work desk, dining area, and free WiFi. "
  },
  {
    "id": 8,
    "name": "Hotel Yois",
    "city": "Udaipur",
    "star_rating": 4,
    "area": "Plot 8, 100 Feet Road Near Mahila Police thana, Roop Sagar Opp. Occasion Garden, 313001 Udaipur.",
    "price_per_night_inr": 3704,
    "amenities": "AC,Breakfast,Swimming Pool",
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/618303075.jpg?k=4bbf22f6fe676a5f4a1883ce9a4d17cee547372d77a5392ea8151eb97073cb24&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/66503044.jpg?k=ad1d8f1469d548e82565a57693a4c02e196ccd25c8e23f41c66f6a3320368062&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/398777796.jpg?k=99b76ecdfc01c20e389941491d5adb46bcfd1e787aff7dc7807a3aaaf197f4c8&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/437694134.jpg?k=445da49640245edc4dce770f9b200cf5f03823b9e291009841bb2443d22c3c9e&o=",
    "description": " Hotel Yois in Udaipur offers family rooms with air-conditioning, private bathrooms, and modern amenities. Each room includes a tea and coffee maker, minibar, and free WiFi."
  },
  {
    "id": 9,
    "name": "Hotel Golden Wings",
    "city": "Udaipur",
    "star_rating": 4,
    "area": "Shakti Nagar, Near Ashoka Bakery Udaipur Rajasthan, Udaipur, India, 313001 Udaipur, India",
    "price_per_night_inr": 2015,
    "amenities": "AC,Breakfast,Swimming Pool",
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/513121120.jpg?k=2d722bb9e60a1dabbd7fa2c79a29ea7b42587a479a090164ac34b017356eff25&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/508028606.jpg?k=348266fbf46e3985a61fda9e8110c69c7019ff4758b2f0e2ba2b61b19a99f418&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/581537275.jpg?k=93c06bd19a4a18bbf9032d3cc223e696ab4deefb9f59e188f1b07f1708b6f3e7&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/581547964.jpg?k=8c47492e36c0c1ff26bd80a7b9dce039e4385ae63fbb2537a47bb6f3739ed388&o=",
    "description": "Hotel Golden Wings in Udaipur offers family rooms with air-conditioning, private bathrooms, and free WiFi. Each room includes a seating area, TV, and wardrobe, ensuring a pleasant stay"
  },
  {
    "id": 10,
    "name": "The Royal Lake View Villa",
    "city": "Udaipur",
    "star_rating": 3,
    "area": "39, Outside Chandpole, Near Hanuman Ghat, Bagor Ka Nohra, 313001 Udaipur, India",
    "price_per_night_inr": 1500,
    "amenities": "AC,Breakfast,Swimming Pool",
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/677348777.jpg?k=ffa3204db96330dcdcdba25857c372750e4c04ad396efb8507f78590a53a6a1d&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/692740664.jpg?k=7edd6585f7cf93f1b496afb4fcb45b6d8027ea4da711fe32f51ade119b5e2c44&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/677349266.jpg?k=db8274a3c2da8759fd7d2a8d7bda758452c9b848fdcabe00d25c22168d8e2caf&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/688544881.jpg?k=215078c90da275be1e956e5f1690a67fc40fe0c70c496d2adb7685985d3af668&o=",
    "description": " Rooms feature air-conditioning, private bathrooms with free toiletries, and balconies offering mountain or city views. Each room includes a TV, wardrobe, and soundproofing for a pleasant stay."
  },
  {
    "id": 11,
    "name": "Shalom Backpackers Udaipur",
    "city": "Udaipur",
    "star_rating": 1,
    "area": "Grand Minerwa,16, Gadiya Devra, Chandpole, 313001 Udaipur, India",
    "price_per_night_inr": 1291,
    "amenities": "AC,Breakfast,Swimming Pool",
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/289754850.jpg?k=5393ca24ef6d8b918ad5b29fc47c34d92d8e7c96ba4774e012732de61cc72f01&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/291518425.jpg?k=9b261512287b3964b767e157bb1e3deea1dc589dbf953e7db18a194fafa384ec&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/291526523.jpg?k=b68c3d399230a68be54c3d483a13747ffa01f1fdfc8a70b35d40c228dae437fb&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/506958567.jpg?k=1cfeb1f5aa644f83137152642517539110f914e904857828580bd4171dba72a1&o=",
    "description": "Shalom Backpackers Udaipur in Udaipur offers adults-only accommodation with air-conditioned rooms featuring private bathrooms, balconies, and free WiFi. Each room includes a work desk, TV, and wardrobe."
  },
  {
    "id": 12,
    "name": "Madpackers Udaipur",
    "city": "Udaipur",
    "star_rating": 3,
    "area": "19 Panch Devri Marg Opp. Lake Hanuman Ghat Area, Outside Chandpole, Pichola, Udaipur, Rajasthan 313001, 313001 Udaipur, India",
    "price_per_night_inr": 1270,
    "amenities": "AC,Breakfast,Swimming Pool",
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/513121120.jpg?k=2d722bb9e60a1dabbd7fa2c79a29ea7b42587a479a090164ac34b017356eff25&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/508028606.jpg?k=348266fbf46e3985a61fda9e8110c69c7019ff4758b2f0e2ba2b61b19a99f418&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/581537275.jpg?k=93c06bd19a4a18bbf9032d3cc223e696ab4deefb9f59e188f1b07f1708b6f3e7&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/581547964.jpg?k=8c47492e36c0c1ff26bd80a7b9dce039e4385ae63fbb2537a47bb6f3739ed388&o=",
    "description": "Madpackers Udaipur in Udaipur offers a hostel with free WiFi, air-conditioning, and private bathrooms with showers. Each room includes a work desk, TV, and lake views."
  },
  {
    "id": 13,
    "name": "Treebo Bella Vista, Shobhagpura",
    "city": "Udaipur",
    "star_rating": 3,
    "area": "Plot No: 6, 100 ft road, Near, Shobhagpura Circle, Near Roop Madhu-Ban Complex Shobhagpura, 313001 Udaipur, India",
    "price_per_night_inr": 2324,
    "amenities": "AC,Breakfast,Swimming Pool",
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/658196410.jpg?k=ddfccf2112af162a665124a6eb55d7ddc87553ba24e7b13cbab7eb34fccd86d6&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/658196503.jpg?k=eee37aa7bcacc581e06bfbf058c096cb7afecd5e3aa51d385c9e223d0f8fcf70&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/658196359.jpg?k=8818d33690b7293517572d291c5cc26b4aaba8b61166a41ebd2bd308da31a3d5&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/658196439.jpg?k=3c3e91a761bb541ded4fb52ae9da41f214a26c465b4ed266c272d1c71ddbdc01&o=",
    "description": "Treebo Bella Vista in Udaipur offers family rooms with air-conditioning, private bathrooms, and free WiFi. Each room includes a work desk, TV, and parquet floors."
  },
  {
    "id": 14,
    "name": "Krishna Stay Guest House",
    "city": "Udaipur",
    "star_rating": 3,
    "area": "Ganesh Ghati Marg, 313001 Udaipur, India",
    "price_per_night_inr": 1799,
    "amenities": "AC,Breakfast,Swimming Pool",
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/497152824.jpg?k=6a0c3e5f027cd2059937901dc6e0e2e99cd578d6aa7ea4be8ea87dff281887ab&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/497384797.jpg?k=42ba85e14f6a67ff06a42af43211d21b12a05f09cb2f3aa0abcc26b0b8dd5258&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/497385459.jpg?k=af7e6dfba91429e54e90e30e30f177e30ab9a2a074a48e0b9b4e43107b25e454&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/705648791.jpg?k=4a40bedbd7a1a57aa29ffbb0649e99b119dd41c9174a0fafdbeb3bdcfd05af07&o=",
    "description": "Krishna Stay Guest House in Udaipur offers family rooms with private bathrooms, air-conditioning, and free WiFi. Each room includes a work desk, wardrobe, and tiled floors."
  },
  {
    "id": 15,
    "name": "The Mansi Palace",
    "city": "Udaipur",
    "star_rating": 2,
    "area": "2nd 3rd floor Near kheda Palace sec -14 hiran magri udaipur, 313001 Udaipur",
    "price_per_night_inr": 900,
    "amenities": "AC,Breakfast,Swimming Pool",
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/639557121.jpg?k=caed499385f0a1d83a2488cffcb16701bbf17e4bb390f9e680881a6cd4130783&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/639557162.jpg?k=f776d1dc426c32e5e65e55d15e016a8371968cedbc32ad71ae8e0010b279ea80&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/639557157.jpg?k=d38fba8558f987d5c80bae1dae48dc13dd09cab5b0268bcdf6948f0ccf3252b3&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/639557178.jpg?k=12f914e8f48aedb53a36a7e440f8cd788c7ff9c27c02b509598e659200de3e8d&o=",
    "description": "The Mansi Palace in Udaipur offers family rooms with air-conditioning, private bathrooms, and free WiFi. Each room includes a work desk, TV, and electric kettle."
  },
  {
    "id": 16,
    "name": "Lassi Guest House",
    "city": "Udaipur",
    "star_rating": 4,
    "area": "278, Nag Marg, Bhinder ki Haveli, Outside Chandpole, 313603 Udaipur, India",
    "price_per_night_inr": 1500,
    "amenities": "AC,Breakfast,Swimming Pool",
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/526862966.jpg?k=432b86517fd924059172c8208d7de7fd33abb31ea5294edec7e1c274e78e0422&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/485506890.jpg?k=9c7a9425f228964b821e86849e0f991a919752bf2ea8831f7aa62d43a79b48ae&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/485506416.jpg?k=0d5061c6de5fe752b0139674ba31150ba4322939547d08f0ba525d8e980332a0&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/485507979.jpg?k=6899e0ac2485df20e642d18ee52867b8dba0e2a1e5c49b77e79d5a7f96cde064&o=",
    "description": "Located in Udaipur, Lassi Guest House is a unique accommodation that provides a book for an underprivileged child each time a guest stays. Brunch Therapy, the guest house's on-site restaurant, features locally sourced produce. Free WiFi is available, and a complimentary breakfast with coffee or chai tea is served daily."
  },
  {
    "id": 17,
    "name": "The Hosteller Udaipur",
    "city": "Udaipur",
    "star_rating": 2,
    "area": "62, Moti Bhawan, Pandu Wadi, Gadiya Dewra, City Palace road, Opposite Minerwa hotel, 313001 Udaipur, India",
    "price_per_night_inr": 1707,
    "amenities": "AC,Breakfast,Swimming Pool",
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/708442365.jpg?k=90bb4e70f3daa7b6348a691ef0de7b4da38ab33de4ad2279b02f6514340f21ae&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/708442565.jpg?k=7c13514f26d30a3d6e80a60566b1b7156c161ba69ecb02c0e072e9ec95d512f2&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/675917491.jpg?k=2904e25df0eb53d10943d18e21bf6a9f8d10dc4beb591bbe21b0ae273a9e4791&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/708519805.jpg?k=db12a5d4f2615d0773cf6897b7c496d25f8bf7e9b43fa8720118c1d3c7550db9&o=",
    "description": " The Hosteller Udaipur in Udaipur offers adults-only rooms with air-conditioning, private bathrooms, and modern amenities. Each room includes a shower, TV, and wardrobe, ensuring a pleasant stay."
  },
  {
    "id": 18,
    "name": "Super Townhouse Shobhagpura Formerly Fragrance Hotel",
    "city": "Udaipur",
    "star_rating": 4,
    "area": "Plot Number 1, Mahadev Enclave, Shobhagpura, 100 Feet Road, 313001 Udaipur, India",
    "price_per_night_inr": 2191,
    "amenities": "AC,Breakfast,Swimming Pool",
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090863.jpg?k=e4cb6a665adbd698ccd9ba4e591f2a8516e951a007d7a625e8d0991fdacfaadc&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090769.jpg?k=0c3007bb22bde568c3bf09c79f9e3e082201e66dc190bb0b2e224d3723e900d8&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090885.jpg?k=9ef1c0f5d72e74e90a30e1b83cb010f156e00d0e86d32c944d2502534dff4be7&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090848.jpg?k=e5c26ec46c6f5412b08826682da412c4c0c76c5b910c0264014082457c715138&o=",
    "description": "Super Townhouse Shobhagpura Formerly Fragrance Hotel in Udaipur offers 4-star comfort with free WiFi, air-conditioning, private bathrooms, and modern amenities."
  },
  {
    "id": 19,
    "name": "Hotel Aaradhya",
    "city": "Udaipur",
    "star_rating": 4,
    "area": "Sub City Center Road, 313001 Udaipur, India",
    "price_per_night_inr": 1380,
    "amenities": "AC,Breakfast,Swimming Pool",
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/677348777.jpg?k=ffa3204db96330dcdcdba25857c372750e4c04ad396efb8507f78590a53a6a1d&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/692740664.jpg?k=7edd6585f7cf93f1b496afb4fcb45b6d8027ea4da711fe32f51ade119b5e2c44&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/677349266.jpg?k=db8274a3c2da8759fd7d2a8d7bda758452c9b848fdcabe00d25c22168d8e2caf&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/688544881.jpg?k=215078c90da275be1e956e5f1690a67fc40fe0c70c496d2adb7685985d3af668&o=",
    "description": " Hotel Aaradhya in Udaipur offers family rooms with private bathrooms, air-conditioning, and garden or mountain views. Each room includes a work desk, TV, and free toiletries."
  },
  {
    "id": 20,
    "name": "Uddhav Vilas A Family Hotel",
    "city": "Udaipur",
    "star_rating": 5,
    "area": "Ganga Gali, Gulab Bagh Road, Inside Udaipole,Udaipur, 313001 Udaipur, India",
    "price_per_night_inr": 3500,
    "amenities": "AC,Breakfast,Swimming Pool",
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/66502995.jpg?k=b2567b34a2e134a75551301424eddf8973e9e5e702b2672f058fb26e8350c3b2&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/437694160.jpg?k=dc02b4f5bc7f2cebcf12b74755319419084f9454e3ecd0b542a654fff4a74296&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/437694126.jpg?k=8bc14c56faf5c999bce803a901060dbc817b4105434c9fbdb0565dd69974059f&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/437694127.jpg?k=3b3a420266b3d8fb98cca61e31d1d7d3d55f243b57f0d714d8c42b1035ee5302&o=",
    "description": "Featuring free WiFi and a restaurant, Hotel Uddhav Vilas offers accommodation in Udaipur. Free private parking is available on site. The rooms include a flat-screen TV with satellite channels. Each room has a private bathroom and air-conditioning. You will find a 24-hour front desk at the property"
  },

//   Jodhpur
  {
    "id": 21,
    "name": "Juna Mahal Boutique Home Stay",
    "city": "Jodhpur",
    "star_rating": 3,
    "area": "Ada Bazar, Daga Street, 342001 Jodhpur, India",
    "price_per_night_inr": 1260,
    "amenities": "AC,Breakfast,Swimming Pool",
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/735058810.jpg?k=da19797d956ee9b59beb676f9723525ace43e41aade366d99e5bb1a1766655bb&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/484544433.jpg?k=974af48e42b0bf00ca642a679c18482736e5b3dfc6f6baceaaf5fbadc7a07492&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/729479294.jpg?k=cbe9a8bf2226227f77aa1d4691eb3c83fc7153467af1ac0ec6c3c4b9e6f24b7d&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/735062759.jpg?k=ca0ebd7829012910d66d7b6dbf34d380b8b641ea0f83305a1fb62d1f1b639ee1&o=",
    "description": "Formerly the house of a Brahmin family, the 350-year old Juna Mahal Boutique Home Stay features air-conditioned rooms with modern Indian décor. This property boasts a café and free Wi-Fi."
  },
  {
    "id": 22,
    "name": "Kalinga Hotel",
    "city": "Jodhpur",
    "star_rating": 2,
    "area": "Near Railway Station, In Front of Sahkar Bhwan,, Ratanada, 342001 Jodhpur, India",
    "price_per_night_inr": 3740,
    "amenities": "AC,Breakfast,Swimming Pool",
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/160050285.jpg?k=d097d9b7d6cb8018dbf345346d44884ecf83b6efe9b2563699df45fcdc2fb124&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/160050132.jpg?k=06bff38f48f9dfe653d295a984c6f8ccdd3862e8645c4022344466446a950117&o= ",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/160050133.jpg?k=e4c699c499aa32127f6602a244b5b5ee588143878fbf7180a4858f16a6d822cc&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/90280316.jpg?k=863e555cb804778a0b36be509b9e72970c2d491fcf16ed26e418c14064a9b8f8&o=",
    "description": "Kalinga Hotel in Jodhpur offers air-conditioned rooms with private bathrooms, tea and coffee makers, and free WiFi. Each room includes a work desk, seating area, and soundproofing for a pleasant stay."
  },
  {
    "id": 23,
    "name": "Treebo Blu Vvu",
    "city": "Jodhpur",
    "star_rating": 4,
    "area": "Plot No 3 A, Opp. Adeshwari Height, Near Sandipani Play School, Paota, 342006 Jodhpur, India",
    "price_per_night_inr": 1921,
    "amenities": "AC,Breakfast,Swimming Pool",
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/602221040.jpg?k=53b0739ddcd7ac72604bafe96ab3d213aeaf7995d0d636e5aa48651a5abb0055&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/602223896.jpg?k=fe034234013ee026bc1662b111bdd570cdf71f4482b6a15645e59fe7f9ac764a&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/602220109.jpg?k=3457dd681e25cf20de914cbb73610517633b97b4d0abf758626b3a850a92991d&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/602220476.jpg?k=afa5591aaba4e7cc40a1f4a9ec882f00fccdc367cfb8610c6d133e50479b0a1e&o=",
    "description": "Treebo Blu Vvu in Jodhpur offers family rooms with air-conditioning, private bathrooms, and modern amenities. Each room includes a work desk, TV, and soundproofing for a pleasant stay."
  },
  {
    "id": 24,
    "name": "Hotel Omni Plaza",
    "city": "Jodhpur",
    "star_rating": 3,
    "area": "Z-1,B-2, Near Rajasthan Patrika Bhawan,Maan Ji Ka Hattha, Paota, Paota, 342001 Jodhpur, India",
    "price_per_night_inr": 1941,
    "amenities": "AC,Breakfast,Swimming Pool",
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/685085550.jpg?k=ad0fe1b02cb64624ccf160aee4d8c52caf861077854040d4e5b84df1994ed312&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/684791575.jpg?k=27d5af0f3ca1b2910520accc72fdf79c8aa38da787ec735318cb33665f83fbba&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/537748568.jpg?k=c1ef13e859f0618ba47369fbeb2438c5262911d97403e505216c144d6ee95033&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/415932741.jpg?k=9adeb4823375babd0776615abf36ed214d14489813a5b6cce01d1b43c168a208&o=",
    "description": "Hotel Omni Plaza in Jodhpur offers family rooms with air-conditioning, private bathrooms, and modern amenities. Each room includes a work desk, TV, and free WiFi, ensuring a pleasant stay."
  },
  {
    "id": 25,
    "name": "Jodhpur Heritage Haveli Guest House",
    "city": "Jodhpur",
    "star_rating": 3,
    "area": "Umaid Chowk, Brahmano Ki Gali, Gol Naadi, 342001 Jodhpur, India",
    "price_per_night_inr": 2220,
    "amenities": "AC,Breakfast,Swimming Pool",
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/584706758.jpg?k=08b914bfa202074561e4eb250bb065794d57f329f137c8d201b40a4ef5abd2c6&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/584061345.jpg?k=aa42afb7a5b95ef8ee1c6728deff7f57ce43a1dbbc0d5e48b35fd3d74f1d1bbd&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/584061247.jpg?k=f93e0ba72c34975910f6c525e579d119fdebc74129c89875eacc69094c38176b&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/585990173.jpg?k=d7743ca72df170686bacab6442ab4040a2d2b0ce3baf64db5d254914285b71e2&o=",
    "description": "Situated in old town Jodhpur, the Jodhpur Heritage Haveli Guest house offers a rooftop restaurant with uninterrupted view of the famous Mehrangarh Fort."
  },

//   jaipur
    {
      "id": 26,
      "name": "Ved A Boutique Stay",
      "city": "Jaipur",
      "star_rating": 4,
      "area": "1, Lane No. 3, Civil Lines, 302006 Jaipur, India",
      "price_per_night_inr": 2400,
      "amenities": "AC,Breakfast,Swimming Pool",
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/577792903.jpg?k=37e1c9db38af8cc538987133300c1ffb48d5a58a18d87cd470806341148be192&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/584016311.jpg?k=fd9f9219420b47b8c4a064a340a82eab94872abc7c2f182356f05240914cda13&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/584016657.jpg?k=773959ba522732472066b64165895e90c0e09606c0ad28cd7e4c38666f7ddc27&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/577789977.jpg?k=a27cb8f0f6d749814fa8a09055352b0cccb78bffd4b79f79f71a3d8ff2c9d6a1&o=",
      "description": "Ved A Boutique Stay in Jaipur offers comfortable rooms with air-conditioning, private bathrooms, and balconies. Each room includes a tea and coffee maker, hairdryer, and free toiletries."
    },
    {
      "id": 27,
      "name": "Trimrooms Mount Blue",
      "city": "Jaipur",
      "star_rating": 4,
      "area": "63-A, Mount road Ramgarh Mode, 302002 Jaipur, India",
      "price_per_night_inr": 3149,
      "amenities": "AC,Breakfast,Swimming Pool",
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/398012269.jpg?k=2f45456bdb98e943f8262eb6478241480ae6e8839b29641aec5390d559319fe4&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/227368434.jpg?k=729c81d3911f4fd3a424bf3744cd82209b0349605cef26b5ae74c94eae32dd33&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/398384340.jpg?k=31e7205a53c8a2b25ea2c80d3be06fb81fbb618a81c8e793d6989213803f7830&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/227367275.jpg?k=b0a05fb45924e74e79c0a1eb342d2e3cb6aa3030f456c403435995f9761efddb&o=",
      "description": "Trimrooms Mount Blue in Jaipur offers family rooms with air-conditioning, private bathrooms, and modern amenities. Each room includes a tea and coffee maker, free toiletries, and a work desk."
    },
    {
      "id": 28,
      "name": "Haveli Kalwara - A Heritage Hotel",
      "city": "Jaipur",
      "star_rating": 2,
      "area": "Entrance between shop no. 94-95, Indira Bazar, Jaipur 302001, 302001 Jaipur, India",
      "price_per_night_inr": 2924,
      "amenities": "AC,Breakfast,Swimming Pool",
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/600061476.jpg?k=a0ef8f1b683890c1be8cbd96ee912d67315f5e62fd30d93e072ef615e62eb138&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/600061504.jpg?k=616397d1a874b200156634a75f40e0e64c099fc85c9b1aa76c173cc5d4849b25&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/600061492.jpg?k=d932e63d98901b6b8a5e472f612df73ca4d89cef9138f435e0ff8ebd520ce887&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/600061878.jpg?k=63ddc0b8384d5b487d43187c71c2467761436722875b2443f34ac561b58d6bb7&o=",
      "description": "Each room here will provide you with air conditioning and a seating area. Featuring a shower, private bathroom also comes with slippers. You can enjoy city view and garden view from the room."
    },
    {
      "id": 29,
      "name": "FabHotel Bohra International",
      "city": "Jaipur",
      "star_rating": 3,
      "area": "79 , Barodia Scheme Railway Station, Behind Panchayati Dharam Shala, Jaipur, 302006 Jaipur, India",
      "price_per_night_inr": 1049,
      "amenities": "AC,Breakfast,Swimming Pool",
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/507802791.jpg?k=f1d5763196e0d5a4b6f902e5068915cf861f6ebed3b2b3fb288b74490009fa1b&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/507802779.jpg?k=8e3edc4f4612a7ae8daf68701724eba08935c50061204676bf427607bb7ad889&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/507802780.jpg?k=fcf6256be052abaee4fc5d99acb6245cfd234c3316873c761f4f51f242828783&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/507802794.jpg?k=004c6e3b419b2515c9e162a412881989c600e02eac8e5325670611706f1818f4&o=",
      "description": "FabHotel Bohra International in Jaipur offers family rooms with air-conditioning, private bathrooms, and soundproofing. Each room includes a seating area, free toiletries, shower, TV, and wardrobe."
    },
    {
      "id": 30,
      "name": "Trim Boutique Parkota Haveli",
      "city": "Jaipur",
      "star_rating": 3,
      "area": "Shop No 13, 14, Amer Road, Govindpuri, 302002 Jaipur, India",
      "price_per_night_inr": 3749,
      "amenities": "AC,Breakfast,Swimming Pool",
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/556814784.jpg?k=b8c8e80ed01852a816d1a659274f0974414be0e10a0a7f42a6bbd3f615e05073&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/556814905.jpg?k=e4da9dd10f140b5a17d8cd6cf831af9e78bdcb9b6a09c4f659b6ace80ddbf858&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/556814946.jpg?k=8ed5ec0a5fc3283e7efe0d2fd707b8c2c46cf426ce861d68ca614ff8adf3424c&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/556814775.jpg?k=03aa75befcc22f4ad48841d72a9c009ca79a0d179efab41b4cd7c961ccf26735&o=",
      "description": "Trim Boutique Parkota Haveli in Jaipur offers family rooms with air-conditioning, private bathrooms, and city views. Each room includes a work desk, TV, and soundproofing for a pleasant stay."
    },
    {
      "id": 31,
      "name": "Hotel Rime Vista",
      "city": "Jaipur",
      "star_rating": 4,
      "area": "D 249 Devi Marg Banipark, Bani Park, 302016 Jaipur, India",
      "price_per_night_inr": 2700,
      "amenities": "AC,Breakfast,Swimming Pool",
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/528656542.jpg?k=12de7eeca43c818b3d55c379905b27453c33889a25f02d9062cd2b5f313f0ccf&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/583972779.jpg?k=07c8fece972dfb29cd24dc77f700ad1310ab2b6b688268b4011ea978d663c326&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/583973340.jpg?k=a1fe067db271e334de77be919cee071e28ee90d4497ad7e630591b2f3969ae7a&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/536150893.jpg?k=0f8e1ac8bab06bcc0ba8149f4de245deff080936c7f977a7280ebcb759a05ba3&o=",
      "description": "Hotel Rime Vista in Jaipur offers family rooms with air-conditioning, private bathrooms, and garden views. Each room includes a work desk, TV, and free WiFi."
    },
    {
      "id": 32,
      "name": "FabHotel The White Moon",
      "city": "Jaipur",
      "star_rating": 3,
      "area": "12, KIRTI NAGAR, Shyam Nagar, Shyam Nagar, 302019 Jaipur, India",
      "price_per_night_inr": 1585,
      "amenities": "AC,Breakfast,Swimming Pool",
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/413716733.jpg?k=8e236682c6e090ea36ab877b8ea6e396b465d1199338debed9a45a3d541260af&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/413716723.jpg?k=5cd52f1e40fb15e2109ce371fc735612d680b7f26f481d0879734b1a9371f3db&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/413716749.jpg?k=cccd41a18bfb7b16ce5a768603ff7248271830ae3c3256cee07322a5798f0b76&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/413716695.jpg?k=0f74595a0d7ff1dacf92d76316e135a8cbb60112b42e08ec1a20860c0a5aee30&o=",
      "description": "FabHotel The White Moon in Jaipur offers 3-star rooms with air-conditioning, private bathrooms, and free toiletries. Each room includes a work desk, seating area, TV, and wardrobe, ensuring a pleasant stay."
    },
    {
      "id": 33,
      "name": "Jaipur Inn",
      "city": "Jaipur",
      "star_rating": 3,
      "area": "17 SHIV MARG BANI PARK, 302016 Jaipur, India",
      "price_per_night_inr": 2600,
      "amenities": "AC,Breakfast,Swimming Pool",
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/709901044.jpg?k=2e1078951ca6dc714927b3e555bdbc36dde113352c36d4b810d4427185f13efa&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/710242534.jpg?k=a78c1800107766cd75b176ef91d0c1626e2438bc5f9da5ac75f55c0cc399f266&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/286929779.jpg?k=86a85d6a525b73217554854a799f31805652f6d85004ae61e3dbdd810c7ea1e5&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/710242478.jpg?k=ed12e4afa9e85f53b2deadb0d5347fbf0dcfde2aa6718902494a2c58fe79f8cd&o=",
      "description": "Jaipur Inn in Jaipur offers air-conditioned rooms with private bathrooms, work desks, and free WiFi. Each room includes a balcony with garden or city views, ensuring a pleasant stay."
    },
    {
      "id": 34,
      "name": "Hotel Pink Horizon",
      "city": "Jaipur",
      "star_rating": 3,
      "area": "MI Road",
      "price_per_night_inr": 1200,
      "amenities": "AC,Breakfast,Swimming Pool",
      "image1_url": "https://example.com/hotelpinkhorizon1.jpg",
      "image2_url": "https://example.com/hotelpinkhorizon2.jpg",
      "image3_url": "https://example.com/hotelpinkhorizon3.jpg",
      "image4_url": "https://example.com/hotelpinkhorizon4.jpg",
      "description": "Budget-friendly hotel located near MI Road with clean rooms and rooftop restaurant."
    },
    {
      "id": 35,
      "name": "Royal Heritage Haveli",
      "city": "Jaipur",
      "star_rating": 4,
      "area": "Kukas",
      "price_per_night_inr": 2500,
      "amenities": "AC,Breakfast,Swimming Pool",
      "image1_url": "https://example.com/royalheritage1.jpg",
      "image2_url": "https://example.com/royalheritage2.jpg",
      "image3_url": "https://example.com/royalheritage3.jpg",
      "image4_url": "https://example.com/royalheritage4.jpg",
      "description": "A boutique heritage stay offering spacious rooms with traditional Rajasthani interiors."
    },
    {
      "id": 36,
      "name": "Hotel Golden Tulip",
      "city": "Jaipur",
      "star_rating": 4,
      "area": "Tonk Road",
      "price_per_night_inr": 3200,
      "amenities": "AC,Breakfast,Swimming Pool",
      "image1_url": "https://example.com/goldentulip1.jpg",
      "image2_url": "https://example.com/goldentulip2.jpg",
      "image3_url": "https://example.com/goldentulip3.jpg",
      "image4_url": "https://example.com/goldentulip4.jpg",
      "description": "Modern hotel with rooftop pool, banquet facilities, and international dining."
    },
    {
      "id": 37,
      "name": "Umaid Bhawan Heritage Hotel",
      "city": "Jaipur",
      "star_rating": 3,
      "area": "Bani Park",
      "price_per_night_inr": 1800,
      "amenities": "AC,Breakfast,Swimming Pool",
      "image1_url": "https://example.com/umaidbhawan1.jpg",
      "image2_url": "https://example.com/umaidbhawan2.jpg",
      "image3_url": "https://example.com/umaidbhawan3.jpg",
      "image4_url": "https://example.com/umaidbhawan4.jpg",
      "description": "Popular heritage-style hotel with traditional architecture and garden views."
    },
    {
      "id": 38,
      "name": "Ramada by Wyndham Jaipur",
      "city": "Jaipur",
      "star_rating": 5,
      "area": "Govind Marg",
      "price_per_night_inr": 4500,
      "amenities": "AC,Breakfast,Swimming Pool",
      "image1_url": "https://example.com/ramadajaipur1.jpg",
      "image2_url": "https://example.com/ramadajaipur2.jpg",
      "image3_url": "https://example.com/ramadajaipur3.jpg",
      "image4_url": "https://example.com/ramadajaipur4.jpg",
      "description": "Luxury hotel with spa, rooftop dining, and excellent city connectivity."
    },
    {
      "id": 39,
      "name": "Lemon Tree Premier Jaipur",
      "city": "Jaipur",
      "star_rating": 4,
      "area": "Civil Lines",
      "price_per_night_inr": 2800,
      "amenities": "AC,Breakfast,Swimming Pool",
      "image1_url": "https://example.com/lemontree1.jpg",
      "image2_url": "https://example.com/lemontree2.jpg",
      "image3_url": "https://example.com/lemontree3.jpg",
      "image4_url": "https://example.com/lemontree4.jpg",
      "description": "Contemporary business hotel with rooftop pool and multi-cuisine restaurant."
    },
    {
      "id": 40,
      "name": "Trident Jaipur",
      "city": "Jaipur",
      "star_rating": 5,
      "area": "Amer Road",
      "price_per_night_inr": 7000,
      "amenities": "AC,Breakfast,Swimming Pool",
      "image1_url": "https://example.com/tridentjaipur1.jpg",
      "image2_url": "https://example.com/tridentjaipur2.jpg",
      "image3_url": "https://example.com/tridentjaipur3.jpg",
      "image4_url": "https://example.com/tridentjaipur4.jpg",
      "description": "Premium lake-facing hotel with landscaped gardens and luxury amenities."
    },
    {
      "id": 41,
      "name": "Hilton Jaipur",
      "city": "Jaipur",
      "star_rating": 5,
      "area": "Hawa Sadak",
      "price_per_night_inr": 6500,
      "amenities": "AC,Breakfast,Swimming Pool",
      "image1_url": "https://example.com/hiltonjaipur1.jpg",
      "image2_url": "https://example.com/hiltonjaipur2.jpg",
      "image3_url": "https://example.com/hiltonjaipur3.jpg",
      "image4_url": "https://example.com/hiltonjaipur4.jpg",
      "description": "Upscale hotel with rooftop lounge, spa facilities, and city views."
    },
    {
      "id": 42,
      "name": "Taj Rambagh Palace",
      "city": "Jaipur",
      "star_rating": 5,
      "area": "Bhawani Singh Road",
      "price_per_night_inr": 28000,
      "amenities": "AC,Breakfast,Swimming Pool",
      "image1_url": "https://example.com/rambagh1.jpg",
      "image2_url": "https://example.com/rambagh2.jpg",
      "image3_url": "https://example.com/rambagh3.jpg",
      "image4_url": "https://example.com/rambagh4.jpg",
      "description": "Former royal residence turned luxury palace hotel offering world-class services."
    },
    {
      "id": 43,
      "name": "Fairmont Jaipur",
      "city": "Jaipur",
      "star_rating": 5,
      "area": "Kukas",
      "price_per_night_inr": 22000,
      "amenities": "AC,Breakfast,Swimming Pool",
      "image1_url": "https://example.com/fairmont1.jpg",
      "image2_url": "https://example.com/fairmont2.jpg",
      "image3_url": "https://example.com/fairmont3.jpg",
      "image4_url": "https://example.com/fairmont4.jpg",
      "description": "Opulent Mughal-style architecture with luxury spa, fine dining, and royal décor."
    },
    {
      "id": 44,
      "name": "The Oberoi Rajvilas",
      "city": "Jaipur",
      "star_rating": 5,
      "area": "Goner Road, Jaipur, Rajasthan 302031, India",
      "price_per_night_inr": 2000,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi",
        "Airport Transfer"
      ],
      "image1_url": "https://example.com/oberoi_rajvilas_1.jpg",
      "image2_url": "https://example.com/oberoi_rajvilas_2.jpg",
      "image3_url": "https://example.com/oberoi_rajvilas_3.jpg",
      "image4_url": "https://example.com/oberoi_rajvilas_4.jpg",
      "description": "Luxury resort with sprawling gardens, heritage-style villas, exquisite cuisine, spa and secluded ambiance just outside the city."
    },
    {
      "id": 45,
      "name": "Samode Palace",
      "city": "Jaipur",
      "star_rating": 5,
      "area": "Samode, Jaipur, Rajasthan 303806, India",
      "price_per_night_inr": 15000,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://example.com/samode_palace_1.jpg",
      "image2_url": "https://example.com/samode_palace_2.jpg",
      "image3_url": "https://example.com/samode_palace_3.jpg",
      "image4_url": "https://example.com/samode_palace_4.jpg",
      "description": "A historic palace offering regal accommodations, traditional Rajasthani architecture, and modern amenities."
    },
    {
      "id": 46,
      "name": "Trident Jaipur",
      "city": "Jaipur",
      "star_rating": 5,
      "area": "Amber Fort Road, Jaipur, Rajasthan 302002, India",
      "price_per_night_inr": 12000,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://example.com/trident_jaipur_1.jpg",
      "image2_url": "https://example.com/trident_jaipur_2.jpg",
      "image3_url": "https://example.com/trident_jaipur_3.jpg",
      "image4_url": "https://example.com/trident_jaipur_4.jpg",
      "description": "A contemporary hotel offering luxurious rooms, a serene ambiance, and proximity to Amber Fort."
    },
    {
      "id": 47,
      "name": "ITC Rajputana",
      "city": "Jaipur",
      "star_rating": 5,
      "area": "Palace Road, Jaipur, Rajasthan 302006, India",
      "price_per_night_inr": 11000,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://example.com/itc_rajputana_1.jpg",
      "image2_url": "https://example.com/itc_rajputana_2.jpg",
      "image3_url": "https://example.com/itc_rajputana_3.jpg",
      "image4_url": "https://example.com/itc_rajputana_4.jpg",
      "description": "A blend of traditional Rajasthani architecture and modern luxury, offering world-class amenities."
    },
    {
      "id": 48,
      "name": "Le Meridien Jaipur",
      "city": "Jaipur",
      "star_rating": 5,
      "area": "Mundota Fort Road, Jaipur, Rajasthan 302021, India",
      "price_per_night_inr": 1000,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://example.com/le_meridien_jaipur_1.jpg",
      "image2_url": "https://example.com/le_meridien_jaipur_2.jpg",
      "image3_url": "https://example.com/le_meridien_jaipur_3.jpg",
      "image4_url": "https://example.com/le_meridien_jaipur_4.jpg",
      "description": "A luxurious resort offering spacious rooms, a tranquil environment, and a range of recreational activities."
    },
    {
      "id": 48,
      "name": "Taj Amer",
      "city": "Jaipur",
      "star_rating": 5,
      "area": "Amer, Jaipur",
      "price_per_night_inr": 11000,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.tajhotels.com/en-in/destination/hotels-in-jaipur/images/taj-amer.jpg",
      "image2_url": "https://www.tajhotels.com/en-in/destination/hotels-in-jaipur/images/taj-amer-2.jpg",
      "image3_url": "https://www.tajhotels.com/en-in/destination/hotels-in-jaipur/images/taj-amer-3.jpg",
      "image4_url": "https://www.tajhotels.com/en-in/destination/hotels-in-jaipur/images/taj-amer-4.jpg",
      "description": "A blend of traditional Rajas"
    },


    // Jaisalmer
  {
    "id": 48,
    "name": "Suryagarh Jaisalmer",
    "city": "Jaisalmer",
    "star_rating": 5,
    "area": "Kahala Phata, Sam-Dhanana Road, Jaisalmer, Rajasthan 345001, India",
    "price_per_night_inr": 15000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi",
      "Airport Transfer"
    ],
    "image1_url": "https://suryagarhcollection.com/wp-content/uploads/2020/07/suryagarh-exterior.jpg",
    "image2_url": "https://suryagarhcollection.com/wp-content/uploads/2020/07/suryagarh-pool.jpg",
    "image3_url": "https://suryagarhcollection.com/wp-content/uploads/2020/07/suryagarh-room.jpg",
    "image4_url": "https://suryagarhcollection.com/wp-content/uploads/2020/07/suryagarh-dining.jpg",
    "description": "A modern fortress-style 5-star hotel built from golden sandstone, offering luxurious rooms, desert experiences, spa and fine dining."
  },
  {
    "id": 49,
    "name": "Jaisalmer Marriott Resort & Spa",
    "city": "Jaisalmer",
    "star_rating": 5,
    "area": "Sam Rd, Police Line, Jaisalmer, Rajasthan 345001, India",
    "price_per_night_inr": 1000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi",
      "Fitness Centre"
    ],
    "image1_url": "https://www.marriott.com/content/dam/marriott-renditions/JSMMC/jsmmc-exterior-001.jpg",
    "image2_url": "https://www.marriott.com/content/dam/marriott-renditions/JSMMC/jsmmc-pool-001.jpg",
    "image3_url": "https://www.marriott.com/content/dam/marriott-renditions/JSMMC/jsmmc-room-001.jpg",
    "image4_url": "https://www.marriott.com/content/dam/marriott-renditions/JSMMC/jsmmc-dining-001.jpg",
    "description": "Family-friendly luxury resort with modern amenities, spa, outdoor pools and easy access to city attractions."
  },
  {
    "id": 50,
    "name": "Taj Gorbandh Palace, Jaisalmer",
    "city": "Jaisalmer",
    "star_rating": 5,
    "area": "Tourist Complex, Jaisalmer - Sam - Dhanana Rd, Ram Kund, Jaisalmer, Rajasthan 345001, India",
    "price_per_night_inr": 12000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi",
      "Airport Shuttle"
    ],
    "image1_url": "https://www.tajhotels.com/content/dam/luxury/taj-gorbandh-palace-jaisalmer/exterior.jpg",
    "image2_url": "https://www.tajhotels.com/content/dam/luxury/taj-gorbandh-palace-jaisalmer/pool.jpg",
    "image3_url": "https://www.tajhotels.com/content/dam/luxury/taj-gorbandh-palace-jaisalmer/room.jpg",
    "image4_url": "https://www.tajhotels.com/content/dam/luxury/taj-gorbandh-palace-jaisalmer/dining.jpg",
    "description": "Luxury property from Taj offering regal architecture, landscaped gardens, spa and premium dining experiences."
  },
  {
    "id": 51,
    "name": "The Gulaal",
    "city": "Jaisalmer",
    "star_rating": 5,
    "area": "Inside Jaisalmer Fort area / Near Fort, Jaisalmer, Rajasthan 345001, India",
    "price_per_night_inr": 9500,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi"
    ],
    "image1_url": "https://www.thegulaal.com/wp-content/uploads/2020/06/gulaal-exterior.jpg",
    "image2_url": "https://www.thegulaal.com/wp-content/uploads/2020/06/gulaal-pool.jpg",
    "image3_url": "https://www.thegulaal.com/wp-content/uploads/2020/06/gulaal-room.jpg",
    "image4_url": "https://www.thegulaal.com/wp-content/uploads/2020/06/gulaal-dining.jpg",
    "description": "A boutique haveli-style luxury hotel with traditional Rajasthani décor, a small pool and personalized service."
  },
  {
    "id": 52,
    "name": "Fort Rajwada Jaisalmer",
    "city": "Jaisalmer",
    "star_rating": 5,
    "area": "Hotel Complex, Jodhpur-Barmer Link Road, Indira Colony, Jaisalmer, Rajasthan 345001, India",
    "price_per_night_inr": 13000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi",
      "Event Banquet"
    ],
    "image1_url": "https://fortrajwada.com/wp-content/uploads/2019/10/fortrajwada-exterior.jpg",
    "image2_url": "https://fortrajwada.com/wp-content/uploads/2019/10/fortrajwada-pool.jpg",
    "image3_url": "https://fortrajwada.com/wp-content/uploads/2019/10/fortrajwada-room.jpg",
    "image4_url": "https://fortrajwada.com/wp-content/uploads/2019/10/fortrajwada-dining.jpg",
    "description": "Large palace-style hotel offering extensive facilities, banquet halls, pool and family-friendly services."
  },
  {
    "id": 53,
    "name": "WelcomHeritage Mandir Palace",
    "city": "Jaisalmer",
    "star_rating": 4,
    "area": "Near Jaisalmer Fort, Gulab Sagar, Jaisalmer, Rajasthan 345001, India",
    "price_per_night_inr": 8500,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Restaurant",
      "Free WiFi",
      "Rooftop Dining"
    ],
    "image1_url": "https://www.welcomheritagehotels.in/assets/images/mandir-palace-exterior.jpg",
    "image2_url": "https://www.welcomheritagehotels.in/assets/images/mandir-palace-interior.jpg",
    "image3_url": "https://www.welcomheritagehotels.in/assets/images/mandir-palace-room.jpg",
    "image4_url": "https://www.welcomheritagehotels.in/assets/images/mandir-palace-rooftop.jpg",
    "description": "Historic palace converted into a heritage hotel, with rooftop restaurant, cultural performances and a small pool."
  },
  {
    "id": 54,
    "name": "Hotel Lalgarh Fort & Palace",
    "city": "Jaisalmer",
    "star_rating": 4,
    "area": "Near Jaisalmer Fort, Harigarh Road, Jaisalmer, Rajasthan 345001, India",
    "price_per_night_inr": 6000,
    "amenities": [
      "AC",
      "Breakfast",
      "Restaurant",
      "Free WiFi",
      "Rooftop Terrace"
    ],
    "image1_url": "https://www.hotellalgarhfortandpalace.com/wp-content/uploads/2018/05/lalgarh-exterior.jpg",
    "image2_url": "https://www.hotellalgarhfortandpalace.com/wp-content/uploads/2018/05/lalgarh-interior.jpg",
    "image3_url": "https://www.hotellalgarhfortandpalace.com/wp-content/uploads/2018/05/lalgarh-room.jpg",
    "image4_url": "https://www.hotellalgarhfortandpalace.com/wp-content/uploads/2018/05/lalgarh-rooftop.jpg",
    "description": "Heritage hotel close to the fort with traditional architecture, rooftop views and comfortable rooms."
  },
  {
    "id": 55,
    "name": "Hotel Tokyo Palace",
    "city": "Jaisalmer",
    "star_rating": 3,
    "area": "Near Bus Stand/City Centre, Sadar Bazar Rd, Jaisalmer, Rajasthan 345001, India",
    "price_per_night_inr": 5500,
    "amenities": [
      "AC",
      "Breakfast",
      "Free WiFi",
      "Rooftop Restaurant",
      "Airport Pickup"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/xxxxxx.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/yyyyyy.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/zzzzzz.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/aaaaaa.jpg",
    "description": "Popular mid-range hotel offering rooftop dining, free pick-up services and easy access to city attractions."
  },
  {
    "id": 56,
    "name": "Hotel Oasis Haveli Jaisalmer",
    "city": "Jaisalmer",
    "star_rating": 3,
    "area": "Near Jaisalmer Fort, Golden City Road, Jaisalmer, Rajasthan 345001, India",
    "price_per_night_inr": 4500,
    "amenities": [
      "AC",
      "Breakfast",
      "Free WiFi",
      "Rooftop Restaurant",
      "24-hour Front Desk"
    ],
    "image1_url": "https://media-cdn.tripadvisor.com/media/photo-s/0e/1b/2a/oasis-haveli.jpg",
    "image2_url": "https://media-cdn.tripadvisor.com/media/photo-s/0e/1b/2b/oasis-haveli-2.jpg",
    "image3_url": "https://media-cdn.tripadvisor.com/media/photo-s/0e/1b/2c/oasis-haveli-3.jpg",
    "image4_url": "https://media-cdn.tripadvisor.com/media/photo-s/0e/1b/2d/oasis-haveli-4.jpg",
    "description": "Traditional haveli with comfortable rooms, rooftop seating and easy access to the Fort and bazaars."
  },
  {
    "id": 57,
    "name": "Hotel Desert Palace Jaisalmer",
    "city": "Jaisalmer",
    "star_rating": 4,
    "area": "Sam Road, Jaisalmer, Rajasthan 345001, India",
    "price_per_night_inr": 10500,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Restaurant",
      "Free WiFi",
      "Desert Tours"
    ],
    "image1_url": "https://www.example.com/desert-palace-exterior.jpg",
    "image2_url": "https://www.example.com/desert-palace-pool.jpg",
    "image3_url": "https://www.example.com/desert-palace-room.jpg",
    "image4_url": "https://www.example.com/desert-palace-dining.jpg",
    "description": "Comfortable upscale property with a pool and organized desert excursion packages."
  },

//   Kota
  {
    "id": 58,
    "name": "Country Inn & Suites by Radisson, Kota",
    "city": "Kota",
    "star_rating": 4,
    "area": "Plot No. 4 & 5, Rajeev Gandhi Nagar, Kota, Rajasthan 324005, India",
    "price_per_night_inr": 3798,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Restaurant",
      "Free WiFi",
      "Fitness Centre",
      "Parking"
    ],
    "image1_url": "https://www.radissonhotels.com/en-us/hotels/country-inn-kota/_jcr_content/root/responsivegrid/hero/image.img.jpg/1602692039417.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/164123456.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/164123457.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/164123458.jpg",
    "description": "Modern business hotel near educational hubs, with outdoor pool, gym and family-friendly rooms."
  },
  {
    "id": 59,
    "name": "Clarks Premier, Kota",
    "city": "Kota",
    "star_rating": 4,
    "area": "Opposite Mahaveer Mission, Jawahar Nagar / Allen area, Kota, Rajasthan 324005, India",
    "price_per_night_inr": 7000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi",
      "Banquet Hall"
    ],
    "image1_url": "https://www.theclarkshotels.com/clarks-premier/clarks-premier-kota/hotel-gallery/facade.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/200123456.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/200123457.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/200123458.jpg",
    "description": "Popular premium hotel serving business and leisure travellers; close to coaching institutes and riverfront."
  },
  {
    "id": 60,
    "name": "Keys Prima by Lemon Tree Hotels, Kota",
    "city": "Kota",
    "star_rating": 4,
    "area": "C-10, Indraprastha Industrial Area / Rajeev Gandhi Nagar, Kota, Rajasthan 324005, India",
    "price_per_night_inr": 3200,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi",
      "Fitness Centre"
    ],
    "image1_url": "https://www.lemontreehotels.com/keys-prima-hotel/kota/kota-hotels/keys-prima-kota-exterior.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/210123456.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/210123457.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/210123458.jpg",
    "description": "Well-known chain hotel near educational hubs with outdoor pool, spa and modern rooms."
  },
  {
    "id": 61,
    "name": "The Fern - An Ecotel Hotel, Kota",
    "city": "Kota",
    "star_rating": 4,
    "area": "Khasra No. 83/1... Deoli Arab Road, Near Samcor Glass Factory, Naya Nohra, Kota, Rajasthan 324004, India",
    "price_per_night_inr": 4500,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi",
      "Airport Transfer"
    ],
    "image1_url": "https://www.thefernhotels.com/fern-kota/fern-kota-exterior.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/220123456.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/220123457.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/220123458.jpg",
    "description": "Eco-friendly upscale hotel on Deoli Arab Road with pool, meeting rooms and sustainable operations."
  },
  {
    "id": 62,
    "name": "Aurea by The Wallflower Hotels",
    "city": "Kota",
    "star_rating": 3,
    "area": "MPB - 9, Near Narcotics Office, Mahaveer Nagar 1st, Kota, Rajasthan 324005, India",
    "price_per_night_inr": 2800,
    "amenities": [
      "AC",
      "Breakfast",
      "Free WiFi",
      "Restaurant",
      "Parking",
      "24-hour Front Desk"
    ],
    "image1_url": "https://hotelaureabywallflower.com/wp-content/uploads/2020/01/aurea-exterior.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/230123456.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/230123457.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/230123458.jpg",
    "description": "Stylish mid-range hotel close to City Mall and coaching hubs; comfortable rooms and good dining options."
  },
  {
    "id": 63,
    "name": "Wallflower Hotel Kota (The Wallflower Hotels)",
    "city": "Kota",
    "star_rating": 3,
    "area": "Mahaveer Nagar / Indraprastha area, Kota, Rajasthan 324005, India",
    "price_per_night_inr": 2600,
    "amenities": [
      "AC",
      "Breakfast",
      "Free WiFi",
      "Restaurant",
      "Parking"
    ],
    "image1_url": "https://www.thewallflowerhotels.com/images/wallflower-kota-1.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/240123456.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/240123457.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/240123458.jpg",
    "description": "Boutique-style property popular with students visiting coaching institutes; good value-for-money."
  },
  {
    "id": 64,
    "name": "Brijraj Bhawan Palace",
    "city": "Kota",
    "star_rating": 4,
    "area": "23, Rani Talab Marg, Near Kishore Sagar, Kota, Rajasthan 324009, India",
    "price_per_night_inr": 5200,
    "amenities": [
      "AC",
      "Breakfast",
      "Restaurant",
      "Free WiFi",
      "Riverside Views",
      "Banquet Hall"
    ],
    "image1_url": "https://www.thehotelguru.com/wp-content/uploads/2019/07/brijraj-bhawan-exterior.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/250123456.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/250123457.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/250123458.jpg",
    "description": "Heritage-style riverside hotel offering intimate atmosphere and traditional hospitality."
  },
  {
    "id": 65,
    "name": "Umed Bhawan Palace",
    "city": "Kota",
    "star_rating": 4,
    "area": "Near Kishore Sagar Lake, Kota, Rajasthan 324001, India",
    "price_per_night_inr": 6500,
    "amenities": [
      "AC",
      "Breakfast",
      "Restaurant",
      "Free WiFi",
      "Garden",
      "Room Service"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/260123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/260123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/260123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/260123459.jpg",
    "description": "Palace-turned-hotel offering heritage vibes, proximity to lake and comfortable rooms."
  },
  {
    "id": 66,
    "name": "Hotel Royal Orchid (Kota)",
    "city": "Kota",
    "star_rating": 3,
    "area": "Pratap Nagar / City area, Kota, Rajasthan 324001, India",
    "price_per_night_inr": 3000,
    "amenities": [
      "AC",
      "Breakfast",
      "Free WiFi",
      "Restaurant",
      "Parking"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/270123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/270123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/270123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/270123459.jpg",
    "description": "Comfortable mid-range hotel convenient for city sightseeing and coaching centres."
  },
  {
    "id": 67,
    "name": "Hotel Midtown Kota",
    "city": "Kota",
    "star_rating": 3,
    "area": "Near Kota Junction / City Centre, Kota, Rajasthan 324001, India",
    "price_per_night_inr": 2200,
    "amenities": [
      "AC",
      "Breakfast",
      "Free WiFi",
      "Restaurant",
      "24-hour Front Desk"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/280123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/280123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/280123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/280123459.jpg",
    "description": "Budget-friendly hotel close to railway station and local markets; good for short stays."
  },
  {
    "id": 68,
    "name": "Hotel Grand (Kota)",
    "city": "Kota",
    "star_rating": 3,
    "area": "Near City Mall / Mahaveer Nagar, Kota, Rajasthan 324005, India",
    "price_per_night_inr": 2400,
    "amenities": [
      "AC",
      "Breakfast",
      "Free WiFi",
      "Restaurant",
      "Parking"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/290123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/290123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/290123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/290123459.jpg",
    "description": "Simple comfortable hotel popular with students' families and business visitors."
  },
  {
    "id": 69,
    "name": "Hotel Blue Diamond",
    "city": "Kota",
    "star_rating": 2,
    "area": "Sanganer Road / Near Local Market, Kota, Rajasthan 324001, India",
    "price_per_night_inr": 1800,
    "amenities": [
      "AC",
      "Breakfast",
      "Free WiFi",
      "Restaurant"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/300123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/300123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/300123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/300123459.jpg",
    "description": "Budget property offering basic amenities and convenient city access."
  },
  {
    "id": 70,
    "name": "Hotel Sagar Plaza",
    "city": "Kota",
    "star_rating": 3,
    "area": "Near Kishore Sagar / City Centre, Kota, Rajasthan 324001, India",
    "price_per_night_inr": 2100,
    "amenities": [
      "AC",
      "Breakfast",
      "Free WiFi",
      "Restaurant",
      "Parking"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/310123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/310123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/310123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/310123459.jpg",
    "description": "Neighbourhood hotel with comfortable rooms and easy access to local attractions."
  },

//   Ajmer
  {
    "id": 71,
    "name": "Fairfield by Marriott Ajmer",
    "city": "Ajmer",
    "star_rating": 4,
    "area": "Opposite Ajmer Junction, Ajmer, Rajasthan 305001, India",
    "price_per_night_inr": 4500,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Restaurant",
      "Free WiFi",
      "Fitness Centre",
      "Parking"
    ],
    "image1_url": "https://www.marriott.com/content/dam/marriott-hotels/hotels/ajmer-fairfield-exterior.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/400123456.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/400123457.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/400123458.jpg",
    "description": "Modern business hotel close to Ajmer Junction with pool, restaurant, and fitness facilities."
  },
  {
    "id": 72,
    "name": "Hotel Royal Palace Ajmer",
    "city": "Ajmer",
    "star_rating": 4,
    "area": "Near Dargah Sharif Road, Ajmer, Rajasthan 305001, India",
    "price_per_night_inr": 5000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Restaurant",
      "Free WiFi",
      "Spa"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/401123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/401123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/401123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/401123459.jpg",
    "description": "Heritage-style property with luxury rooms, spa, pool, and proximity to Ajmer Dargah."
  },
  {
    "id": 73,
    "name": "Lemon Tree Premier Ajmer",
    "city": "Ajmer",
    "star_rating": 4,
    "area": "Opposite Railway Station, Ajmer, Rajasthan 305001, India",
    "price_per_night_inr": 4200,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Restaurant",
      "Free WiFi",
      "Fitness Centre"
    ],
    "image1_url": "https://www.lemontreehotels.com/lemon-tree-premier-ajmer/exterior.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/402123456.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/402123457.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/402123458.jpg",
    "description": "Modern hotel ideal for both business and leisure travelers, close to the station."
  },
  {
    "id": 74,
    "name": "Hotel Grand Anoop",
    "city": "Ajmer",
    "star_rating": 3,
    "area": "Near Ajmer Sharif, Ajmer, Rajasthan 305001, India",
    "price_per_night_inr": 2500,
    "amenities": [
      "AC",
      "Breakfast",
      "Free WiFi",
      "Restaurant",
      "Parking"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/403123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/403123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/403123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/403123459.jpg",
    "description": "Budget-friendly hotel near Ajmer Dargah offering comfortable rooms and basic amenities."
  },
  {
    "id": 75,
    "name": "Hotel Royal Inn",
    "city": "Ajmer",
    "star_rating": 3,
    "area": "Opposite Dargah Sharif, Ajmer, Rajasthan 305001, India",
    "price_per_night_inr": 2800,
    "amenities": [
      "AC",
      "Breakfast",
      "Free WiFi",
      "Restaurant",
      "Parking"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/404123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/404123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/404123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/404123459.jpg",
    "description": "Mid-range hotel close to Dargah Sharif with clean rooms and friendly service."
  },
  {
    "id": 76,
    "name": "Hotel Saptagiri",
    "city": "Ajmer",
    "star_rating": 3,
    "area": "Near Railway Station, Ajmer, Rajasthan 305001, India",
    "price_per_night_inr": 2200,
    "amenities": [
      "AC",
      "Breakfast",
      "Free WiFi",
      "Restaurant",
      "Parking"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/405123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/405123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/405123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/405123459.jpg",
    "description": "Simple and budget-friendly hotel suitable for pilgrims and short stays."
  },
  {
    "id": 77,
    "name": "Hotel Sun City Ajmer",
    "city": "Ajmer",
    "star_rating": 3,
    "area": "Near Dargah Sharif Road, Ajmer, Rajasthan 305001, India",
    "price_per_night_inr": 2400,
    "amenities": [
      "AC",
      "Breakfast",
      "Free WiFi",
      "Restaurant",
      "Parking"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/406123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/406123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/406123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/406123459.jpg",
    "description": "Comfortable property with modern amenities, near Ajmer Dargah and local markets."
  },
  {
    "id": 78,
    "name": "Hotel Kanchan Palace",
    "city": "Ajmer",
    "star_rating": 3,
    "area": "Opposite Ajmer Sharif, Ajmer, Rajasthan 305001, India",
    "price_per_night_inr": 2600,
    "amenities": [
      "AC",
      "Breakfast",
      "Restaurant",
      "Free WiFi"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/407123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/407123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/407123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/407123459.jpg",
    "description": "Simple hotel with AC rooms and basic facilities; popular with short-stay travelers."
  },
  {
    "id": 79,
    "name": "Hotel Madhuvan",
    "city": "Ajmer",
    "star_rating": 3,
    "area": "Near Ajmer Junction, Ajmer, Rajasthan 305001, India",
    "price_per_night_inr": 2300,
    "amenities": [
      "AC",
      "Breakfast",
      "Free WiFi",
      "Restaurant"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/408123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/408123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/408123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/408123459.jpg",
    "description": "Budget hotel with convenient location near railway station and local markets."
  },
  {
    "id": 80,
    "name": "Hotel Sunrise Ajmer",
    "city": "Ajmer",
    "star_rating": 3,
    "area": "Near Dargah Sharif Road, Ajmer, Rajasthan 305001, India",
    "price_per_night_inr": 2500,
    "amenities": [
      "AC",
      "Breakfast",
      "Free WiFi",
      "Restaurant",
      "Parking"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/409123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/409123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/409123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/409123459.jpg",
    "description": "Budget-friendly hotel with AC rooms and restaurant facilities."
  },
  {
    "id": 81,
    "name": "Hotel Ajmer Inn",
    "city": "Ajmer",
    "star_rating": 3,
    "area": "Near Ajmer Sharif, Ajmer, Rajasthan 305001, India",
    "price_per_night_inr": 2700,
    "amenities": [
      "AC",
      "Breakfast",
      "Free WiFi",
      "Restaurant"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/410123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/410123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/410123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/410123459.jpg",
    "description": "Comfortable and budget property near Ajmer Sharif Dargah with essential facilities."
  },
  {
    "id": 82,
    "name": "Hotel Kanha Inn",
    "city": "Ajmer",
    "star_rating": 3,
    "area": "Opposite Dargah Sharif, Ajmer, Rajasthan 305001, India",
    "price_per_night_inr": 2600,
    "amenities": [
      "AC",
      "Breakfast",
      "Free WiFi",
      "Restaurant",
      "Parking"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/411123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/411123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/411123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/411123459.jpg",
    "description": "Popular mid-range hotel with clean rooms and easy access to Ajmer Dargah."
  },
  {
    "id": 83,
    "name": "Hotel Prithvi",
    "city": "Ajmer",
    "star_rating": 3,
    "area": "Near Railway Station, Ajmer, Rajasthan 305001, India",
    "price_per_night_inr": 2400,
    "amenities": [
      "AC",
      "Breakfast",
      "Free WiFi",
      "Restaurant"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/412123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/412123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/412123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/412123459.jpg",
    "description": "Budget hotel with AC rooms, free WiFi and restaurant facilities."
  },
  {
    "id": 84,
    "name": "Hotel Mirage Ajmer",
    "city": "Ajmer",
    "star_rating": 3,
    "area": "Near Dargah Sharif Road, Ajmer, Rajasthan 305001, India",
    "price_per_night_inr": 2500,
    "amenities": [
      "AC",
      "Breakfast",
      "Free WiFi",
      "Restaurant"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/413123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/413123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/413123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/413123459.jpg",
    "description": "Comfortable mid-range hotel near Dargah Sharif with restaurant and parking."
  },
  {
    "id": 85,
    "name": "Hotel Anoop Palace",
    "city": "Ajmer",
    "star_rating": 3,
    "area": "Near Ajmer Sharif, Ajmer, Rajasthan 305001, India",
    "price_per_night_inr": 2700,
    "amenities": [
      "AC",
      "Breakfast",
      "Free WiFi",
      "Restaurant"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/414123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/414123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/414123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/414123459.jpg",
    "description": "Mid-range property with AC rooms and easy access to Ajmer Dargah and local markets."
  },

//   Delhi
  {
    "id": 86,
    "name": "The Leela Palace New Delhi",
    "city": "Delhi",
    "star_rating": 5,
    "area": "Diplomatic Enclave, Chanakyapuri, New Delhi, 110021",
    "price_per_night_inr": 15000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi",
      "Fitness Centre"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/500123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/500123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/500123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/500123459.jpg",
    "description": "Luxury palace-style hotel offering opulent rooms, spa, fine dining, and royal décor."
  },
  {
    "id": 87,
    "name": "Taj Palace, New Delhi",
    "city": "Delhi",
    "star_rating": 5,
    "area": "Sardar Patel Marg, Diplomatic Enclave, Chanakyapuri, New Delhi, 110021",
    "price_per_night_inr": 14000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi",
      "Fitness Centre"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/501123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/501123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/501123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/501123459.jpg",
    "description": "Elegant luxury hotel with lush gardens, spa, premium dining, and conference facilities."
  },
  {
    "id": 88,
    "name": "ITC Maurya, New Delhi",
    "city": "Delhi",
    "star_rating": 5,
    "area": "Sardar Patel Marg, Diplomatic Enclave, New Delhi, 110021",
    "price_per_night_inr": 14500,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi",
      "Fitness Centre"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/502123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/502123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/502123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/502123459.jpg",
    "description": "Iconic luxury hotel with award-winning restaurants, spa, pool, and modern conference facilities."
  },
  {
    "id": 89,
    "name": "The Oberoi, New Delhi",
    "city": "Delhi",
    "star_rating": 5,
    "area": "Dr Zakir Hussain Marg, New Delhi, 110003",
    "price_per_night_inr": 16000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi",
      "Fitness Centre"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/503123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/503123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/503123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/503123459.jpg",
    "description": "Premium luxury property offering elegant rooms, spa, fine dining, and exceptional service."
  },
  {
    "id": 90,
    "name": "JW Marriott Hotel New Delhi Aerocity",
    "city": "Delhi",
    "star_rating": 5,
    "area": "Asset Area 4, Aerocity, IGI Airport, New Delhi, 110037",
    "price_per_night_inr": 13000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi",
      "Fitness Centre"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/504123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/504123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/504123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/504123459.jpg",
    "description": "Luxury hotel in Aerocity with spacious rooms, spa, pool, multiple dining options, and fitness centre."
  },
  {
    "id": 91,
    "name": "Radisson Blu Plaza Delhi Airport",
    "city": "Delhi",
    "star_rating": 5,
    "area": "Asset Area 1, Aerocity, New Delhi, 110037",
    "price_per_night_inr": 11000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi",
      "Fitness Centre"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/505123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/505123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/505123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/505123459.jpg",
    "description": "Contemporary hotel offering luxurious rooms, swimming pool, spa, and restaurant facilities."
  },
  {
    "id": 92,
    "name": "Novotel New Delhi Aerocity",
    "city": "Delhi",
    "star_rating": 4,
    "area": "Asset Area 4, Aerocity, IGI Airport, New Delhi, 110037",
    "price_per_night_inr": 9000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Restaurant",
      "Free WiFi",
      "Fitness Centre"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/506123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/506123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/506123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/506123459.jpg",
    "description": "Modern 4-star hotel in Aerocity near IGI Airport with pool, fitness centre, and restaurant."
  },
  {
    "id": 93,
    "name": "Holiday Inn New Delhi International Airport",
    "city": "Delhi",
    "star_rating": 4,
    "area": "NH-8, IGI Airport, New Delhi, 110037",
    "price_per_night_inr": 8500,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Restaurant",
      "Free WiFi"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/507123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/507123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/507123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/507123459.jpg",
    "description": "Comfortable 4-star hotel close to IGI Airport with all modern amenities and pool."
  },
  {
    "id": 94,
    "name": "The Metropolitan Hotel & Spa, New Delhi",
    "city": "Delhi",
    "star_rating": 5,
    "area": "A-1/50, Safdarjung Enclave, New Delhi, 110029",
    "price_per_night_inr": 12000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/508123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/508123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/508123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/508123459.jpg",
    "description": "Boutique luxury hotel with spa, fitness centre, and multi-cuisine restaurant."
  },
  {
    "id": 95,
    "name": "Andaz Delhi Aerocity",
    "city": "Delhi",
    "star_rating": 5,
    "area": "Aerocity, IGI Airport, New Delhi, 110037",
    "price_per_night_inr": 14000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/509123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/509123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/509123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/509123459.jpg",
    "description": "Luxury contemporary hotel in Aerocity offering spa, pool, restaurants, and modern rooms."
  },
  {
    "id": 96,
    "name": "Shangri-La's Eros Hotel, New Delhi",
    "city": "Delhi",
    "star_rating": 5,
    "area": "19 Ashoka Road, Connaught Place, New Delhi, 110001",
    "price_per_night_inr": 13500,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/510123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/510123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/510123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/510123459.jpg",
    "description": "Luxury 5-star hotel in the heart of Delhi with elegant rooms, spa, pool, and dining options."
  },
  {
    "id": 97,
    "name": "The Claridges, New Delhi",
    "city": "Delhi",
    "star_rating": 5,
    "area": "1, Dr APJ Abdul Kalam Rd, Lutyens' Delhi, New Delhi, 110011",
    "price_per_night_inr": 12500,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/511123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/511123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/511123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/511123459.jpg",
    "description": "Iconic heritage hotel with luxury rooms, spa, pool, and fine dining restaurants."
  },
  {
    "id": 98,
    "name": "Le Meridien New Delhi",
    "city": "Delhi",
    "star_rating": 5,
    "area": "New Delhi Aerocity, IGI Airport, New Delhi, 110037",
    "price_per_night_inr": 13000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/512123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/512123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/512123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/512123459.jpg",
    "description": "Modern luxury hotel near IGI Airport with spacious rooms, spa, pool, and restaurants."
  },
  {
    "id": 99,
    "name": "Pullman New Delhi Aerocity",
    "city": "Delhi",
    "star_rating": 5,
    "area": "Aerocity, IGI Airport, New Delhi, 110037",
    "price_per_night_inr": 12500,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/513123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/513123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/513123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/513123459.jpg",
    "description": "Contemporary luxury hotel in Aerocity with pool, spa, restaurant, and modern rooms."
  },
  {
    "id": 100,
    "name": "Hilton Garden Inn New Delhi/Saket",
    "city": "Delhi",
    "star_rating": 4,
    "area": "Saket District Centre, New Delhi, 110017",
    "price_per_night_inr": 8000,
    "amenities": [
      "AC",
      "Breakfast",
      "Restaurant",
      "Free WiFi",
      "Fitness Centre"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/514123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/514123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/514123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/514123459.jpg",
    "description": "Comfortable 4-star hotel in Saket with modern amenities and convenient location."
  },
  {
    "id": 101,
    "name": "Hotel Ajanta, Karol Bagh",
    "city": "Delhi",
    "star_rating": 3,
    "area": "Karol Bagh, New Delhi, 110005",
    "price_per_night_inr": 3500,
    "amenities": [
      "AC",
      "Breakfast",
      "Free WiFi"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/515123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/515123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/515123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/515123459.jpg",
    "description": "Budget-friendly hotel in Karol Bagh with basic amenities and comfortable stay."
  },
  {
    "id": 102,
    "name": "Hotel Hari Piorko, Paharganj",
    "city": "Delhi",
    "star_rating": 3,
    "area": "Paharganj, New Delhi, 110055",
    "price_per_night_inr": 3000,
    "amenities": [
      "AC",
      "Breakfast",
      "Free WiFi",
      "Restaurant"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/516123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/516123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/516123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/516123459.jpg",
    "description": "Popular budget hotel near New Delhi Railway Station with clean rooms and breakfast."
  },
  {
    "id": 103,
    "name": "The Manor, New Delhi",
    "city": "Delhi",
    "star_rating": 4,
    "area": "New Friends Colony, New Delhi, 110025",
    "price_per_night_inr": 7000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Free WiFi",
      "Restaurant"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/517123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/517123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/517123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/517123459.jpg",
    "description": "Comfortable boutique hotel in New Friends Colony with modern amenities and pool."
  },
  {
    "id": 104,
    "name": "The Clarion, Delhi",
    "city": "Delhi",
    "star_rating": 4,
    "area": "Connaught Place, New Delhi, 110001",
    "price_per_night_inr": 7500,
    "amenities": [
      "AC",
      "Breakfast",
      "Free WiFi",
      "Restaurant"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/518123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/518123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/518123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/518123459.jpg",
    "description": "4-star hotel in Connaught Place with modern amenities, dining, and comfortable rooms."
  },
  {
    "id": 105,
    "name": "Taj Palace Hotel, Chanakyapuri",
    "city": "Delhi",
    "star_rating": 5,
    "area": "Chanakyapuri, New Delhi, 110021",
    "price_per_night_inr": 14500,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/519123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/519123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/519123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/519123459.jpg",
    "description": "Luxury property in Chanakyapuri offering opulent rooms, spa, and fine dining experiences."
  },

//   Bangalore
  {
    "id": 106,
    "name": "The Leela Palace Bengaluru",
    "city": "Bangalore",
    "star_rating": 5,
    "area": "23rd km, Old Airport Road, Bengaluru, Karnataka 560008",
    "price_per_night_inr": 16000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi",
      "Fitness Centre"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/600123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/600123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/600123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/600123459.jpg",
    "description": "Luxury palace-style hotel offering opulent rooms, spa, fine dining, and royal décor."
  },
  {
    "id": 107,
    "name": "Taj West End Bengaluru",
    "city": "Bangalore",
    "star_rating": 5,
    "area": "Race Course Road, Bangalore 560001",
    "price_per_night_inr": 15000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi",
      "Fitness Centre"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/601123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/601123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/601123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/601123459.jpg",
    "description": "Heritage luxury hotel with lush gardens, spa, and world-class dining."
  },
  {
    "id": 108,
    "name": "ITC Gardenia, Bengaluru",
    "city": "Bangalore",
    "star_rating": 5,
    "area": "Residency Road, Bengaluru, Karnataka 560025",
    "price_per_night_inr": 14000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi",
      "Fitness Centre"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/602123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/602123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/602123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/602123459.jpg",
    "description": "Luxury business hotel with modern rooms, spa, pool, and multiple dining options."
  },
  {
    "id": 109,
    "name": "JW Marriott Hotel Bengaluru",
    "city": "Bangalore",
    "star_rating": 5,
    "area": "17/1, MG Road, Bengaluru, Karnataka 560001",
    "price_per_night_inr": 13500,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi",
      "Fitness Centre"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/603123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/603123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/603123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/603123459.jpg",
    "description": "Luxury hotel in the heart of Bengaluru with modern amenities, spa, and pool."
  },
  {
    "id": 110,
    "name": "The Ritz-Carlton, Bengaluru",
    "city": "Bangalore",
    "star_rating": 5,
    "area": "Residency Road, Bengaluru, Karnataka 560025",
    "price_per_night_inr": 15500,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi",
      "Fitness Centre"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/604123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/604123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/604123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/604123459.jpg",
    "description": "Elegant luxury hotel offering premium rooms, spa, pool, and fine dining."
  },
  {
    "id": 111,
    "name": "Shangri-La Hotel Bengaluru",
    "city": "Bangalore",
    "star_rating": 5,
    "area": "17/1, M.G. Road, Bengaluru, Karnataka 560001",
    "price_per_night_inr": 14500,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi",
      "Fitness Centre"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/605123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/605123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/605123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/605123459.jpg",
    "description": "Premium 5-star hotel with luxurious rooms, spa, swimming pool, and international dining."
  },
  {
    "id": 112,
    "name": "Conrad Bengaluru",
    "city": "Bangalore",
    "star_rating": 5,
    "area": "UB City, 24 Vittal Mallya Road, Bengaluru, Karnataka 560001",
    "price_per_night_inr": 15000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi",
      "Fitness Centre"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/606123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/606123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/606123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/606123459.jpg",
    "description": "Luxury business hotel in UB City with spa, pool, and fine dining options."
  },
  {
    "id": 113,
    "name": "Sheraton Grand Bengaluru Whitefield",
    "city": "Bangalore",
    "star_rating": 5,
    "area": "Whitefield, Bengaluru, Karnataka 560048",
    "price_per_night_inr": 12000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi",
      "Fitness Centre"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/607123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/607123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/607123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/607123459.jpg",
    "description": "5-star luxury hotel in Whitefield with spa, swimming pool, and business facilities."
  },
  {
    "id": 114,
    "name": "Radisson Blu Bengaluru Outer Ring Road",
    "city": "Bangalore",
    "star_rating": 5,
    "area": "Outer Ring Road, Mahadevapura, Bengaluru, Karnataka 560048",
    "price_per_night_inr": 11000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Restaurant",
      "Free WiFi",
      "Fitness Centre"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/608123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/608123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/608123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/608123459.jpg",
    "description": "Modern 5-star hotel on Outer Ring Road with pool, fitness centre, and dining options."
  },
  {
    "id": 115,
    "name": "The Oterra Hotel Bengaluru",
    "city": "Bangalore",
    "star_rating": 4,
    "area": "Old Madras Road, K.R. Puram, Bengaluru, Karnataka 560016",
    "price_per_night_inr": 9000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Restaurant",
      "Free WiFi"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/609123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/609123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/609123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/609123459.jpg",
    "description": "Comfortable 4-star hotel with modern amenities and spacious rooms."
  },
  {
    "id": 116,
    "name": "Fortune Select JP Cosmos Bengaluru",
    "city": "Bangalore",
    "star_rating": 4,
    "area": "Jayanagar, Bengaluru, Karnataka 560041",
    "price_per_night_inr": 8500,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Restaurant",
      "Free WiFi"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/610123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/610123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/610123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/610123459.jpg",
    "description": "Well-located 4-star hotel in Jayanagar with pool, fitness centre, and dining options."
  },
  {
    "id": 117,
    "name": "Taj MG Road Bengaluru",
    "city": "Bangalore",
    "star_rating": 5,
    "area": "M.G. Road, Bengaluru, Karnataka 560001",
    "price_per_night_inr": 14000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/611123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/611123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/611123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/611123459.jpg",
    "description": "Luxury property on M.G. Road with spa, pool, and fine dining experiences."
  },
  {
    "id": 118,
    "name": "The Monarch Hotel Bengaluru",
    "city": "Bangalore",
    "star_rating": 4,
    "area": "Old Airport Road, Bengaluru, Karnataka 560008",
    "price_per_night_inr": 9500,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Restaurant",
      "Free WiFi"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/612123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/612123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/612123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/612123459.jpg",
    "description": "Modern 4-star hotel with comfortable rooms and good amenities."
  },
  {
    "id": 119,
    "name": "Radisson Blu Bengaluru Outer Ring Road",
    "city": "Bangalore",
    "star_rating": 5,
    "area": "Mahadevapura, Bengaluru, Karnataka 560048",
    "price_per_night_inr": 11500,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Restaurant",
      "Free WiFi",
      "Fitness Centre"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/613123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/613123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/613123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/613123459.jpg",
    "description": "Luxury hotel on Outer Ring Road with pool, gym, and restaurant."
  },
  {
    "id": 120,
    "name": "Sterling Suites Bengaluru",
    "city": "Bangalore",
    "star_rating": 4,
    "area": "HSR Layout, Bengaluru, Karnataka 560102",
    "price_per_night_inr": 9000,
    "amenities": [
      "AC",
      "Breakfast",
      "Free WiFi",
      "Restaurant"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/614123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/614123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/614123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/614123459.jpg",
    "description": "Comfortable 4-star hotel with basic amenities in HSR Layout."
  },
  {
    "id": 121,
    "name": "Grand Mercure Bengaluru",
    "city": "Bangalore",
    "star_rating": 5,
    "area": "Whitefield, Bengaluru, Karnataka 560048",
    "price_per_night_inr": 12500,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Restaurant",
      "Free WiFi",
      "Fitness Centre"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/615123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/615123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/615123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/615123459.jpg",
    "description": "5-star hotel in Whitefield with pool, dining, and luxury rooms."
  },


//   Hyderabad
  {
    "id": 122,
    "name": "Taj Falaknuma Palace",
    "city": "Hyderabad",
    "star_rating": 5,
    "area": "Falaknuma, Hyderabad, Telangana 500053",
    "price_per_night_inr": 25000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi",
      "Fitness Centre"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/701123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/701123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/701123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/701123459.jpg",
    "description": "Opulent palace hotel offering royal rooms, fine dining, and luxury spa."
  },
  {
    "id": 123,
    "name": "The Westin Hyderabad Mindspace",
    "city": "Hyderabad",
    "star_rating": 5,
    "area": "Mindspace, Hitech City, Hyderabad, Telangana 500081",
    "price_per_night_inr": 16000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi",
      "Fitness Centre"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/702123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/702123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/702123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/702123459.jpg",
    "description": "Luxury business hotel with modern rooms, spa, pool, and restaurants."
  },
  {
    "id": 124,
    "name": "Novotel Hyderabad Convention Centre",
    "city": "Hyderabad",
    "star_rating": 5,
    "area": "Hitech City, Hyderabad, Telangana 500081",
    "price_per_night_inr": 14000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/703123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/703123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/703123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/703123459.jpg",
    "description": "Modern 5-star hotel near convention centre with pool, spa, and dining options."
  },
  {
    "id": 125,
    "name": "ITC Kakatiya, Hyderabad",
    "city": "Hyderabad",
    "star_rating": 5,
    "area": "Begumpet, Hyderabad, Telangana 500016",
    "price_per_night_inr": 15000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi",
      "Fitness Centre"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/704123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/704123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/704123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/704123459.jpg",
    "description": "Luxury hotel offering elegant rooms, spa, pool, and fine dining in Hyderabad."
  },
  {
    "id": 126,
    "name": "Hyatt Hyderabad Gachibowli",
    "city": "Hyderabad",
    "star_rating": 5,
    "area": "Gachibowli, Hyderabad, Telangana 500032",
    "price_per_night_inr": 13500,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi",
      "Fitness Centre"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/705123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/705123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/705123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/705123459.jpg",
    "description": "Contemporary 5-star hotel with modern amenities, pool, and spa in Gachibowli."
  },
  {
    "id": 127,
    "name": "Radisson Blu Plaza Hotel",
    "city": "Hyderabad",
    "star_rating": 5,
    "area": "Hitech City, Hyderabad, Telangana 500081",
    "price_per_night_inr": 13000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/706123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/706123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/706123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/706123459.jpg",
    "description": "Elegant 5-star hotel with pool, spa, and multiple dining options in Hitech City."
  },
  {
    "id": 128,
    "name": "Sheraton Hyderabad Hotel",
    "city": "Hyderabad",
    "star_rating": 5,
    "area": "Hitech City, Hyderabad, Telangana 500081",
    "price_per_night_inr": 14500,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi",
      "Fitness Centre"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/707123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/707123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/707123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/707123459.jpg",
    "description": "Luxury 5-star hotel with modern rooms, spa, pool, and restaurant in Hitech City."
  },
  {
    "id": 129,
    "name": "Marriott Hotel & Convention Centre",
    "city": "Hyderabad",
    "star_rating": 5,
    "area": "Gachibowli, Hyderabad, Telangana 500032",
    "price_per_night_inr": 15500,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi",
      "Fitness Centre"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/708123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/708123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/708123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/708123459.jpg",
    "description": "Modern 5-star hotel with luxurious rooms, pool, spa, and restaurants."
  },
  {
    "id": 130,
    "name": "Lemon Tree Premier",
    "city": "Hyderabad",
    "star_rating": 4,
    "area": "Gachibowli, Hyderabad, Telangana 500032",
    "price_per_night_inr": 12000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Restaurant",
      "Free WiFi"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/709123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/709123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/709123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/709123459.jpg",
    "description": "Stylish 4-star hotel with pool, restaurant, and comfortable rooms."
  },
  {
    "id": 131,
    "name": "Radisson Hyderabad Hitec City",
    "city": "Hyderabad",
    "star_rating": 5,
    "area": "Hitech City, Hyderabad, Telangana 500081",
    "price_per_night_inr": 13500,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/710123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/710123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/710123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/710123459.jpg",
    "description": "Luxury hotel offering modern rooms, pool, spa, and fine dining in Hitech City."
  },
  {
    "id": 132,
    "name": "ITC Kohenur",
    "city": "Hyderabad",
    "star_rating": 5,
    "area": "Hitec City, Hyderabad, Telangana 500081",
    "price_per_night_inr": 14500,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi",
      "Fitness Centre"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/711123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/711123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/711123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/711123459.jpg",
    "description": "Premium 5-star hotel with spa, pool, and fine dining options."
  },
  {
    "id": 133,
    "name": "The Park Hyderabad",
    "city": "Hyderabad",
    "star_rating": 5,
    "area": "Somajiguda, Hyderabad, Telangana 500082",
    "price_per_night_inr": 14000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi",
      "Fitness Centre"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/712123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/712123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/712123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/712123459.jpg",
    "description": "Stylish 5-star hotel with pool, spa, restaurants, and modern rooms."
  },
  {
    "id": 134,
    "name": "Taj Deccan",
    "city": "Hyderabad",
    "star_rating": 5,
    "area": "Banjara Hills, Hyderabad, Telangana 500034",
    "price_per_night_inr": 15000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi",
      "Fitness Centre"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/713123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/713123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/713123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/713123459.jpg",
    "description": "Luxury 5-star property in Banjara Hills with pool, spa, and fine dining."
  },
  {
    "id": 135,
    "name": "Holiday Inn Express",
    "city": "Hyderabad",
    "star_rating": 4,
    "area": "Hitech City, Hyderabad, Telangana 500081",
    "price_per_night_inr": 11000,
    "amenities": [
      "AC",
      "Breakfast",
      "Free WiFi",
      "Fitness Centre"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/714123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/714123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/714123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/714123459.jpg",
    "description": "Modern 4-star hotel near Hitech City with free WiFi and breakfast."
  },
  {
    "id": 136,
    "name": "Trident Hyderabad",
    "city": "Hyderabad",
    "star_rating": 5,
    "area": "Hitech City, Hyderabad, Telangana 500081",
    "price_per_night_inr": 15500,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi",
      "Fitness Centre"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/715123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/715123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/715123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/715123459.jpg",
    "description": "Luxury 5-star hotel in Hitech City with pool, spa, and multiple dining options."
  },
  {
    "id": 137,
    "name": "Radisson Hyderabad Hitec City",
    "city": "Hyderabad",
    "star_rating": 5,
    "area": "Hitech City, Hyderabad, Telangana 500081",
    "price_per_night_inr": 13500,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/716123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/716123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/716123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/716123459.jpg",
    "description": "Elegant 5-star property with spa, pool, and restaurants in Hitech City."
  },
  {
    "id": 138,
    "name": "Crowne Plaza Hyderabad",
    "city": "Hyderabad",
    "star_rating": 5,
    "area": "Hitech City, Hyderabad, Telangana 500081",
    "price_per_night_inr": 14500,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/717123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/717123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/717123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/717123459.jpg",
    "description": "5-star hotel in Hitech City with modern amenities, pool, spa, and restaurants."
  },
  {
    "id": 139,
    "name": "Golkonda Hotel",
    "city": "Hyderabad",
    "star_rating": 4,
    "area": "Somajiguda, Hyderabad, Telangana 500082",
    "price_per_night_inr": 12000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Restaurant",
      "Free WiFi"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/718123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/718123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/718123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/718123459.jpg",
    "description": "Comfortable 4-star hotel with pool, restaurant, and modern amenities."
  },
  {
    "id": 140,
    "name": "Minerva Grand",
    "city": "Hyderabad",
    "star_rating": 4,
    "area": "Ameerpet, Hyderabad, Telangana 500016",
    "price_per_night_inr": 11000,
    "amenities": [
      "AC",
      "Breakfast",
      "Free WiFi",
      "Restaurant"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/719123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/719123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/719123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/719123459.jpg",
    "description": "Budget-friendly 4-star hotel with essential amenities and convenient location."
  },

//   Kolkata
  {
    "id": 141,
    "name": "The Oberoi Grand",
    "city": "Kolkata",
    "star_rating": 5,
    "area": "15 Jawaharlal Nehru Rd, Kolkata, West Bengal 700071",
    "price_per_night_inr": 18000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi",
      "Fitness Centre"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/720123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/720123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/720123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/720123459.jpg",
    "description": "Iconic 5-star heritage hotel in central Kolkata with luxurious rooms, restaurants, and spa."
  },
  {
    "id": 142,
    "name": "ITC Sonar",
    "city": "Kolkata",
    "star_rating": 5,
    "area": "JBS Haldane Avenue, Kolkata, West Bengal 700156",
    "price_per_night_inr": 16000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi",
      "Fitness Centre"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/721123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/721123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/721123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/721123459.jpg",
    "description": "Luxury 5-star hotel with elegant rooms, outdoor pool, spa, and multiple dining options."
  },
  {
    "id": 143,
    "name": "Taj Bengal",
    "city": "Kolkata",
    "star_rating": 5,
    "area": "34B, Belvedere Road, Kolkata, West Bengal 700027",
    "price_per_night_inr": 17000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi",
      "Fitness Centre"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/722123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/722123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/722123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/722123459.jpg",
    "description": "5-star luxury hotel with modern amenities, pool, spa, and fine dining."
  },
  {
    "id": 144,
    "name": "Hyatt Regency Kolkata",
    "city": "Kolkata",
    "star_rating": 5,
    "area": "DJ-8, Sector III, Salt Lake City, Kolkata, West Bengal 700091",
    "price_per_night_inr": 15000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/723123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/723123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/723123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/723123459.jpg",
    "description": "Modern 5-star hotel in Salt Lake City with luxurious rooms, restaurants, and spa."
  },
  {
    "id": 145,
    "name": "The Lalit Great Eastern Kolkata",
    "city": "Kolkata",
    "star_rating": 5,
    "area": "1, Old Court House St, Kolkata, West Bengal 70001",
    "price_per_night_inr": 16000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/724123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/724123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/724123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/724123459.jpg",
    "description": "Historic luxury hotel with pool, spa, fine dining, and elegant rooms."
  },
  {
    "id": 146,
    "name": "Novotel Kolkata Hotel & Residences",
    "city": "Kolkata",
    "star_rating": 5,
    "area": "8, JD Block, Sector III, Salt Lake City, Kolkata, West Bengal 700106",
    "price_per_night_inr": 14000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Restaurant",
      "Free WiFi"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/725123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/725123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/725123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/725123459.jpg",
    "description": "Modern hotel in Salt Lake with comfortable rooms, restaurant, and pool."
  },
  {
    "id": 147,
    "name": "ibis Kolkata Rajarhat",
    "city": "Kolkata",
    "star_rating": 4,
    "area": "Plot A1 & A2, New Town, Rajarhat, Kolkata, West Bengal 700156",
    "price_per_night_inr": 9000,
    "amenities": [
      "AC",
      "Breakfast",
      "Free WiFi",
      "Restaurant"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/726123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/726123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/726123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/726123459.jpg",
    "description": "Budget-friendly 4-star hotel with modern amenities in New Town."
  },
  {
    "id": 148,
    "name": "The Sonnet",
    "city": "Kolkata",
    "star_rating": 4,
    "area": "Ballygunge, Kolkata, West Bengal 700019",
    "price_per_night_inr": 9500,
    "amenities": [
      "AC",
      "Breakfast",
      "Free WiFi",
      "Restaurant"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/727123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/727123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/727123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/727123459.jpg",
    "description": "Comfortable 4-star hotel with restaurant, free WiFi, and modern rooms."
  },
  {
    "id": 149,
    "name": "Vedic Village Spa & Resort",
    "city": "Kolkata",
    "star_rating": 4,
    "area": "Rajpur, Kolkata, West Bengal 700107",
    "price_per_night_inr": 1000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/728123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/728123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/728123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/728123459.jpg",
    "description": "Resort-style 4-star hotel with spa, pool, and restaurant."
  },
  {
    "id": 150,
    "name": "Fortune Park Panchsheel",
    "city": "Kolkata",
    "star_rating": 4,
    "area": "Salt Lake, Kolkata, West Bengal 700091",
    "price_per_night_inr": 10500,
    "amenities": [
      "AC",
      "Breakfast",
      "Free WiFi",
      "Restaurant"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/729123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/729123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/729123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/729123459.jpg",
    "description": "Modern 4-star hotel in Salt Lake with restaurant and comfortable rooms."
  },

//   Chennai
  {
    "id": 151,
    "name": "ITC Grand Chola",
    "city": "Chennai",
    "star_rating": 5,
    "area": "63, Mount Road, Guindy, Chennai, Tamil Nadu 600032",
    "price_per_night_inr": 18000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi",
      "Fitness Centre"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/730123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/730123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/730123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/730123459.jpg",
    "description": "Luxury 5-star hotel with grand architecture, multiple restaurants, spa, and pool."
  },
  {
    "id": 152,
    "name": "The Leela Palace Chennai",
    "city": "Chennai",
    "star_rating": 5,
    "area": "Adyar Seaface, MGR Salai, Chennai, Tamil Nadu 600028",
    "price_per_night_inr": 17500,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/731123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/731123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/731123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/731123459.jpg",
    "description": "5-star beachfront hotel with luxurious rooms, fine dining, spa, and pool."
  },
  {
    "id": 153,
    "name": "Radisson Blu Hotel Chennai",
    "city": "Chennai",
    "star_rating": 5,
    "area": "No. 68, GST Road, Meenambakkam, Chennai, Tamil Nadu 600027",
    "price_per_night_inr": 15000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/732123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/732123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/732123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/732123459.jpg",
    "description": "Modern 5-star hotel near the airport with pool, spa, restaurant, and free WiFi."
  },
  {
    "id": 154,
    "name": "The Raintree Hotel, St. Mary’s Road",
    "city": "Chennai",
    "star_rating": 4,
    "area": "636, St. Mary’s Road, Alwarpet, Chennai, Tamil Nadu 600018",
    "price_per_night_inr": 12000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Restaurant",
      "Free WiFi"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/733123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/733123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/733123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/733123459.jpg",
    "description": "Stylish 4-star hotel with rooftop pool, modern rooms, and restaurant."
  },
  {
    "id": 155,
    "name": "Trident Chennai",
    "city": "Chennai",
    "star_rating": 5,
    "area": "RA Puram, Chennai, Tamil Nadu 600028",
    "price_per_night_inr": 16000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/734123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/734123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/734123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/734123459.jpg",
    "description": "Luxury hotel on the Marina coast with pool, spa, and fine dining."
  },
  {
    "id": 156,
    "name": "Hilton Chennai",
    "city": "Chennai",
    "star_rating": 5,
    "area": "77, GST Road, Meenambakkam, Chennai, Tamil Nadu 600027",
    "price_per_night_inr": 15500,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/735123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/735123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/735123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/735123459.jpg",
    "description": "5-star hotel with contemporary rooms, pool, spa, and multiple restaurants."
  },
  {
    "id": 157,
    "name": "Radisson Blu Resort Temple Bay",
    "city": "Chennai",
    "star_rating": 5,
    "area": "Mahabalipuram, Chennai, Tamil Nadu 603104",
    "price_per_night_inr": 17000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Free WiFi"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/736123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/736123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/736123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/736123459.jpg",
    "description": "Luxury beach resort with pool, spa, and multiple dining options."
  },
  {
    "id": 158,
    "name": "The Residency Towers",
    "city": "Chennai",
    "star_rating": 4,
    "area": "No. 531, Anna Salai, Chennai, Tamil Nadu 60006",
    "price_per_night_inr": 12500,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Restaurant",
      "Free WiFi"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/737123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/737123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/737123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/737123459.jpg",
    "description": "Comfortable 4-star hotel in central Chennai with pool, restaurant, and free WiFi."
  },
  {
    "id": 159,
    "name": "The Accord Metropolitan",
    "city": "Chennai",
    "star_rating": 4,
    "area": "47, Whites Road, Royapettah, Chennai, Tamil Nadu 600014",
    "price_per_night_inr": 13000,
    "amenities": [
      "AC",
      "Breakfast",
      "Swimming Pool",
      "Restaurant",
      "Free WiFi"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/738123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/738123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/738123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/738123459.jpg",
    "description": "4-star business hotel with pool, restaurant, and modern rooms."
  },
  {
    "id": 160,
    "name": "ibis Chennai Sipcot",
    "city": "Chennai",
    "star_rating": 3,
    "area": "Sipcot IT Park, Siruseri, Chennai, Tamil Nadu 603103",
    "price_per_night_inr": 8000,
    "amenities": [
      "AC",
      "Breakfast",
      "Free WiFi",
      "Restaurant"
    ],
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/739123456.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/739123457.jpg",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/739123458.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/739123459.jpg",
    "description": "Budget-friendly hotel in Siruseri with modern amenities and free WiFi."
  },

//   Pune
    {
      "id": 161,
      "name": "JW Marriott Pune",
      "city": "Pune",
      "star_rating": 5,
      "area": "Senapati Bapat Road, Pune, Maharashtra 411016",
      "price_per_night_inr": 18000,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi",
        "Fitness Centre"
      ],
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/740123456.jpg",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/740123457.jpg",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/740123458.jpg",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/740123459.jpg",
      "description": "Luxury 5-star hotel with elegant rooms, multiple restaurants, spa, and pool."
    },
    {
      "id": 162,
      "name": "The Westin Pune Koregaon Park",
      "city": "Pune",
      "star_rating": 5,
      "area": "Koregaon Park, Pune, Maharashtra 411001",
      "price_per_night_inr": 17500,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/741123456.jpg",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/741123457.jpg",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/741123458.jpg",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/741123459.jpg",
      "description": "5-star hotel with luxury rooms, rooftop pool, spa, and multiple dining options."
    },
    {
      "id": 163,
      "name": "Conrad Pune",
      "city": "Pune",
      "star_rating": 5,
      "area": "Wakad, Pune, Maharashtra 411057",
      "price_per_night_inr": 16000,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/742123456.jpg",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/742123457.jpg",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/742123458.jpg",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/742123459.jpg",
      "description": "Modern 5-star hotel with spacious rooms, pool, spa, and fine dining."
    },
    {
      "id": 164,
      "name": "Hyatt Regency Pune",
      "city": "Pune",
      "star_rating": 5,
      "area": "Yerwada, Pune, Maharashtra 411006",
      "price_per_night_inr": 15000,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/743123456.jpg",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/743123457.jpg",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/743123458.jpg",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/743123459.jpg",
      "description": "5-star hotel near Pune airport with pool, spa, restaurant, and modern rooms."
    },
    {
      "id": 165,
      "name": "Sheraton Grand Pune Bund Garden Hotel",
      "city": "Pune",
      "star_rating": 5,
      "area": "Bund Garden Road, Pune, Maharashtra 411001",
      "price_per_night_inr": 16000,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/744123456.jpg",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/744123457.jpg",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/744123458.jpg",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/744123459.jpg",
      "description": "Luxury 5-star hotel in central Pune with pool, spa, and multiple restaurants."
    },
    {
      "id": 166,
      "name": "Radisson Blu Hotel Pune Hinjewadi",
      "city": "Pune",
      "star_rating": 5,
      "area": "Hinjewadi, Pune, Maharashtra 411057",
      "price_per_night_inr": 14000,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/745123456.jpg",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/745123457.jpg",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/745123458.jpg",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/745123459.jpg",
      "description": "Modern 5-star business hotel with pool, spa, restaurant, and free WiFi."
    },
    {
      "id": 167,
      "name": "Lemon Tree Premier, Pune",
      "city": "Pune",
      "star_rating": 4,
      "area": "Viman Nagar, Pune, Maharashtra 411014",
      "price_per_night_inr": 12000,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/746123456.jpg",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/746123457.jpg",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/746123458.jpg",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/746123459.jpg",
      "description": "4-star hotel with modern rooms, pool, restaurant, and free WiFi."
    },
    {
      "id": 168,
      "name": "Courtyard by Marriott Pune Hinjewadi",
      "city": "Pune",
      "star_rating": 4,
      "area": "Hinjewadi, Pune, Maharashtra 411057",
      "price_per_night_inr": 13000,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/747123456.jpg",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/747123457.jpg",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/747123458.jpg",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/747123459.jpg",
      "description": "4-star hotel with comfortable rooms, restaurant, and modern amenities."
    },
    {
      "id": 169,
      "name": "Four Points by Sheraton Pune",
      "city": "Pune",
      "star_rating": 4,
      "area": "Viman Nagar, Pune, Maharashtra 411014",
      "price_per_night_inr": 12500,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/748123456.jpg",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/748123457.jpg",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/748123458.jpg",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/748123459.jpg",
      "description": "Modern 4-star hotel with swimming pool, restaurant, and free WiFi."
    },
    {
      "id": 170,
      "name": "Marriott Suites Pune",
      "city": "Pune",
      "star_rating": 5,
      "area": "Viman Nagar, Pune, Maharashtra 411014",
      "price_per_night_inr": 15000,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/749123456.jpg",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/749123457.jpg",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/749123458.jpg",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/749123459.jpg",
      "description": "Luxury 5-star suites with modern amenities, pool, and restaurant."
    },
    {
      "id": 171,
      "name": "The O Hotel",
      "city": "Pune",
      "star_rating": 4,
      "area": "Koregaon Park, Pune, Maharashtra 411001",
      "price_per_night_inr": 11000,
      "amenities": [
        "AC",
        "Breakfast",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/750123456.jpg",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/750123457.jpg",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/750123458.jpg",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/750123459.jpg",
      "description": "Comfortable 4-star hotel in Koregaon Park with restaurant and WiFi."
    },
    {
      "id": 172,
      "name": "Hyatt Pune",
      "city": "Pune",
      "star_rating": 5,
      "area": "Baner, Pune, Maharashtra 411045",
      "price_per_night_inr": 15500,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/751123456.jpg",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/751123457.jpg",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/751123458.jpg",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/751123459.jpg",
      "description": "Luxury 5-star hotel in Baner with pool, spa, and multiple restaurants."
    },
    {
      "id": 173,
      "name": "Crowne Plaza Pune City Centre",
      "city": "Pune",
      "star_rating": 5,
      "area": "Shivajinagar, Pune, Maharashtra 411005",
      "price_per_night_inr": 14500,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/752123456.jpg",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/752123457.jpg",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/752123458.jpg",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/752123459.jpg",
      "description": "5-star city hotel with luxury rooms, pool, spa, and fine dining."
    },
    {
      "id": 174,
      "name": "E-Hotel Pune",
      "city": "Pune",
      "star_rating": 4,
      "area": "Koregaon Park, Pune, Maharashtra 411001",
      "price_per_night_inr": 10000,
      "amenities": [
        "AC",
        "Breakfast",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/753123456.jpg",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/753123457.jpg",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/753123458.jpg",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/753123459.jpg",
      "description": "4-star hotel in Koregaon Park with modern amenities and restaurant."
    },


// Agra
{
      "id": 175,
      "name": "The Oberoi Amarvilas",
      "city": "Agra",
      "star_rating": 5,
      "area": "Taj East Gate Road",
      "price_per_night_inr": 75000,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.oberoihotels.com/hotels-in-agra-amarvilas-resort/gallery/",
      "image2_url": "https://www.oberoihotels.com/hotels-in-agra-amarvilas-agra/rooms/",
      "image3_url": "https://www.instagram.com/oberoiamarvilas/",
      "image4_url": "https://www.oberoihotels.com/hotels-in-agra-amarvilas-resort/",
      "description": "Luxury 5-star hotel with direct views of the Taj Mahal, spacious suites, marble architecture, fine dining, spa and pool."
    },
    {
      "id": 176,
      "name": "ITC Mughal, A Luxury Collection Resort & Spa",
      "city": "Agra",
      "star_rating": 5,
      "area": "Taj Ganj / Fatehabad Road",
      "price_per_night_inr": 65000,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.marriott.com/en-us/hotels/agrlc-itc-mughal-a-luxury-collection-resort-and-spa-agra/photos/",
      "image2_url": "https://www.itchotels.com/in/en/itcmughal-agra",
      "image3_url": "https://www.instagram.com/itcmughal_agra/",
      "image4_url": "https://www.marriott.com/en-us/hotels/agrlc-itc-mughal-a-luxury-collection-resort-and-spa-agra/overview/",
      "description": "Expansive Mughal-style gardens, luxury rooms & suites, award-winning spa, multiple dining options and banquet facilities."
    },
    {
      "id": 177,
      "name": "Trident Agra",
      "city": "Agra",
      "star_rating": 5,
      "area": "Fatehabad Road",
      "price_per_night_inr": 42000,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.tridenthotels.com/hotels-in-agra/photo-gallery/",
      "image2_url": "https://www.tridenthotels.com/hotels-in-agra/",
      "image3_url": "https://www.instagram.com/tridentagra/",
      "image4_url": "https://www.tridenthotels.com/hotels-in-agra/rooms/",
      "description": "Comfortable 5-star hotel with river/landscape views, modern rooms, pool, spa and business facilities."
    },
    {
      "id": 178,
      "name": "DoubleTree by Hilton Agra",
      "city": "Agra",
      "star_rating": 5,
      "area": "Taj East Gate Road / Near Taj Mahal",
      "price_per_night_inr": 28000,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.hilton.com/en/hotels/agrdtdi-doubletree-agra/gallery/",
      "image2_url": "https://www.hilton.com/en/hotels/agrdtdi-doubletree-agra/",
      "image3_url": "https://www.instagram.com/doubletreebyhiltonagra/",
      "image4_url": "https://www.hilton.com/en/hotels/agrdtdi-doubletree-agra/rooms/",
      "description": "International brand hotel close to the Taj Mahal offering modern rooms, rooftop options and event spaces."
    },
    {
      "id": 179,
      "name": "Courtyard by Marriott Agra",
      "city": "Agra",
      "star_rating": 5,
      "area": "Fatehabad Road / Near Taj Mahal",
      "price_per_night_inr": 30000,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.marriott.com/en-us/hotels/agrcy-courtyard-agra/photos/",
      "image2_url": "https://www.marriott.com/en-us/hotels/agrcy-courtyard-agra/overview/",
      "image3_url": "https://www.instagram.com/courtyardbyagrapr/",
      "image4_url": "https://www.marriott.com/en-us/hotels/agrcy-courtyard-agra/rooms/",
      "description": "Contemporary hotel by Marriott with modern rooms, outdoor pool, gym and easy access to Agra attractions."
    },
    {
      "id": 180,
      "name": "Radisson Blu Agra Taj East Gate / Taj Hotel & Convention Centre (Radisson listing)",
      "city": "Agra",
      "star_rating": 5,
      "area": "Taj East Gate / Near Taj Mahal",
      "price_per_night_inr": 35000,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.radissonhotels.com/en-us/destination/india/agra",
      "image2_url": "https://www.tripadvisor.in/Hotel_Review-g297683-d2248251-Reviews-Taj_Hotel_Convention_Centre_Agra-Agra_Agra_District_Uttar_Pradesh.html",
      "image3_url": "https://www.instagram.com/radissonagratajeastgate/",
      "image4_url": "https://www.radissonhotels.com/en-us/hotels/radisson-blu-agra-taj-east-gate",
      "description": "Large hotel with convention facilities, multiple dining options and close proximity to the Taj Mahal."
    },
    {
      "id": 181,
      "name": "Hotel Clarks Shiraz",
      "city": "Agra",
      "star_rating": 5,
      "area": "Fatehabad Road",
      "price_per_night_inr": 18000,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.hotelclarksshiraz.com/gallery.html",
      "image2_url": "https://www.hotelclarksshiraz.com/",
      "image3_url": "https://www.instagram.com/clarksshirazagra/",
      "image4_url": "https://www.tripadvisor.in/Hotel_Review-g297683-d671990-Reviews-Clarks_Shiraz_Hotel-Agra_Agra_District_Uttar_Pradesh.html",
      "description": "Popular full-service hotel with gardens, pool, banquet halls and family-friendly rooms."
    },
    {
      "id": 182,
      "name": "The Grand Imperial Hotel",
      "city": "Agra",
      "star_rating": 4,
      "area": "Sadar Bazaar / Near Taj",
      "price_per_night_inr": 6500,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://hotelgrandimperial.com/",
      "image2_url": "https://www.tripadvisor.in/Hotel_Review-g297683-d671997-Reviews-The_Grand_Imperial-Agra_Agra_District_Uttar_Pradesh.html",
      "image3_url": "https://www.instagram.com/thegrandimperial/",
      "image4_url": "https://hotelgrandimperial.com/gallery/",
      "description": "Heritage-style hotel combining old-world charm and modern comforts, centrally located for sightseeing."
    },
    {
      "id": 183,
      "name": "Crystal Sarovar Premiere",
      "city": "Agra",
      "star_rating": 4,
      "area": "Near Fatehabad Road",
      "price_per_night_inr": 10000,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.sarovarinternational.com/hotels/crystal-sarovar-premiere-agra/gallery",
      "image2_url": "https://www.sarovarinternational.com/hotels/crystal-sarovar-premiere-agra/",
      "image3_url": "https://www.instagram.com/crystalsarovar/",
      "image4_url": "https://www.booking.com/hotel/in/crystal-sarovar-premiere-agra.html",
      "description": "Upscale hotel with comfortable rooms, business facilities, pool and on-site dining."
    },
    {
      "id": 184,
      "name": "Hotel Atulyaa Taj (formerly The Taj Vilas)",
      "city": "Agra",
      "star_rating": 4,
      "area": "Taj East Gate Road / Near Taj Mahal",
      "price_per_night_inr": 9000,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.atulyaataj.com/gallery",
      "image2_url": "https://www.atulyaataj.com/",
      "image3_url": "https://www.instagram.com/atulyaataj/",
      "image4_url": "https://www.booking.com/hotel/in/atulyaa-taj.html",
      "description": "Comfortable hotel offering Taj views from some rooms, with pool, restaurant and easy access to attractions."
    },
    {
      "id": 185,
      "name": "Hotel Tajview — A Sterling Holidays Resort",
      "city": "Agra",
      "star_rating": 4,
      "area": "Near Taj Mahal / Yamuna Road",
      "price_per_night_inr": 8000,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.sterlingholidays.com/our-resorts/tajview-agra/gallery",
      "image2_url": "https://www.sterlingholidays.com/our-resorts/tajview-agra/",
      "image3_url": "https://www.instagram.com/sterlingholidays/",
      "image4_url": "https://www.booking.com/hotel/in/sterling-tajview-agra.html",
      "description": "Resort-style hotel with pool, garden views and convenient access to the Taj Mahal."
    },
    {
      "id": 186,
      "name": "Hotel Sidhartha",
      "city": "Agra",
      "star_rating": 3,
      "area": "Sadar Bazaar / Near Jama Masjid",
      "price_per_night_inr": 2500,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.tripadvisor.in/Hotel_Review-g297683-d671996-Reviews-Hotel_Sidhartha-Agra_Agra_District_Uttar_Pradesh.html",
      "image2_url": "https://www.booking.com/hotel/in/sidhartha.html",
      "image3_url": "https://www.instagram.com/hotelsidhartha/",
      "image4_url": "https://www.expedia.co.in/Agra-Hotels-Hotel-Sidhartha.h12345.Hotel-Information",
      "description": "Budget-friendly hotel in central Agra, close to markets and historical sites."
    },
    {
      "id": 187,
      "name": "Hotel Amar (Amar Hotel & Restaurant)",
      "city": "Agra",
      "star_rating": 3,
      "area": "Near Sadar Bazaar",
      "price_per_night_inr": 2200,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.booking.com/hotel/in/amar-agra.html",
      "image2_url": "https://www.tripadvisor.in/Hotel_Review-g297683-d1234567-Reviews-Hotel_Amar-Agra.html",
      "image3_url": "https://www.instagram.com/hotelamaragra/",
      "image4_url": "https://www.expedia.co.in/Amar-Hotels-Agra.h89012.Hotel-Information",
      "description": "Simple, clean rooms and an in-house restaurant; convenient for short stays and budget travellers."
    },
    {
      "id": 188,
      "name": "Hotel Sheela Grand",
      "city": "Agra",
      "star_rating": 3,
      "area": "Near Fatehabad Road",
      "price_per_night_inr": 2700,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.booking.com/hotel/in/sheela-grand.html",
      "image2_url": "https://www.tripadvisor.in/Hotel_Review-g297683-d987654-Reviews-Hotel_Sheela_Grand-Agra.html",
      "image3_url": "https://www.instagram.com/hotelsheelagrand/",
      "image4_url": "https://www.expedia.co.in/Sheela-Grand-Agra.h76543.Hotel-Information",
      "description": "Affordable hotel with basic amenities, restaurant and proximity to Agra tourist spots."
    },
    {
      "id": 189,
      "name": "Hotel Taj Plaza (Taj Plaza Agra)",
      "city": "Agra",
      "star_rating": 3,
      "area": "Near Sadar Bazaar / Taj Road",
      "price_per_night_inr": 3000,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.booking.com/hotel/in/taj-plaza-agra.html",
      "image2_url": "https://www.tripadvisor.in/Hotel_Review-g297683-d234567-Reviews-Taj_Plaza_Agra-Agra_Agra_District_Uttar_Pradesh.html",
      "image3_url": "https://www.instagram.com/tajplazaagra/",
      "image4_url": "https://www.expedia.co.in/Taj-Plaza-Agra.h45678.Hotel-Information",
      "description": "Mid-range hotel offering comfortable rooms, dining and easy access to local markets & monuments."
    },
    {
      "id": 190,
      "name": "Hotel Amarvilas (local / small property — not the Oberoi)",
      "city": "Agra",
      "star_rating": 3,
      "area": "Near Taj East Gate Road",
      "price_per_night_inr": 3200,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.booking.com/hotel/in/amarvilas-ag...html",
      "image2_url": "https://www.tripadvisor.in/Hotel_Review-g297683-d345678-Reviews-Hotel_Amarvilas_Local-Agra.html",
      "image3_url": "https://www.instagram.com/hotel_amarvilas_local/",
      "image4_url": "https://www.expedia.co.in/Hotel-Amarvilas-Agra.h99999.Hotel-Information",
      "description": "Smaller property with Taj proximity, value-for-money rooms and simple hospitality for tourists."
    },

    // Lucknow
 {
      "id": 191,
      "name": "Hotel DIDI International",
      "city": "Lucknow",
      "star_rating": 3,
      "area": "Near Charbagh Railway Station",
      "price_per_night_inr": 900,
      "amenities": [
        "AC",
        "Breakfast",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.makemytrip.com/hotels/lucknow-hotels-under-1000.html",
      "image2_url": "https://www.booking.com/hotel/in/didi-international.html",
      "image3_url": "https://www.expedia.co.in/Lucknow-Hotels-DIDI-International.h34567.Hotel-Information",
      "image4_url": "https://www.tripadvisor.in/Hotel_Review-g297684-d1234567-Reviews-Hotel_DIDI_International-Lucknow.html",
      "description": "Budget hotel close to Charbagh railway station, basic rooms with AC, breakfast and free WiFi."
    },
    {
      "id": 192,
      "name": "Hotel Heera Grand",
      "city": "Lucknow",
      "star_rating": 3,
      "area": "Gomti Nagar",
      "price_per_night_inr": 1200,
      "amenities": [
        "AC",
        "Breakfast",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.booking.com/hotel/in/rrooms-heera-grand.html",
      "image2_url": "https://www.hotels.com/ho34567/hotel-heera-grand-lucknow/photos/",
      "image3_url": "https://www.tripadvisor.in/Hotel_Review-g297684-d9876543-Reviews-Heera_Grand-Lucknow.html",
      "image4_url": "https://www.expedia.co.in/Lucknow-Hotels-Heera-Grand.h67890.Hotel-Information",
      "description": "Comfortable mid-tier hotel in Gomti Nagar area, with AC rooms, decent breakfast and free WiFi."
    },
    {
      "id": 193,
      "name": "Hotel Grand Radiant",
      "city": "Lucknow",
      "star_rating": 3,
      "area": "Lucknow (central)",
      "price_per_night_inr": 2000,
      "amenities": [
        "AC",
        "Breakfast",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.thegrandradiant.com/",
      "image2_url": "https://www.thegrandradiant.com/gallery",
      "image3_url": "https://www.tripadvisor.in/Hotel_Review-g297684-d345678-Lucknow_Hotels.html",
      "image4_url": "https://www.booking.com/hotel/in/grand-radiant.html",
      "description": "Eco-friendly 3-star hotel, modern rooms, good interiors, breakfast and WiFi included."
    },
    {
      "id": 194,
      "name": "Hotel Ganga Maiya",
      "city": "Lucknow",
      "star_rating": 2,
      "area": "Lucknow central",
      "price_per_night_inr": 2200,
      "amenities": [
        "AC",
        "Breakfast",
        "Free WiFi"
      ],
      "image1_url": "https://www.booking.com/budget/city/in/lucknow.html",
      "image2_url": "https://www.tripadvisor.in/HotelsList-Lucknow-Cheap-Hotels-zfp222978.html",
      "image3_url": "https://www.expedia.co.in/Lucknow-Hotels-Ganga-Maiya.h23456.Hotel-Information",
      "image4_url": "https://www.hotels.com/ho45678/hotel-ganga-maiya-lucknow/photos/",
      "description": "Small budget hotel in central Lucknow, basic amenities, ideal for short stays."
    },
    {
      "id": 195,
      "name": "Hotel O The Kesar Inn",
      "city": "Lucknow",
      "star_rating": 3,
      "area": "Near Lucknow University",
      "price_per_night_inr": 2500,
      "amenities": [
        "AC",
        "Breakfast",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.booking.com/hotel/in/o-the-kesar-inn.html",
      "image2_url": "https://www.hotels.com/ho56789/hotel-o-the-kesar-inn-lucknow/photos/",
      "image3_url": "https://www.tripadvisor.in/Hotel_Review-g297684-d9873210-Reviews-O_The_Kesar_Inn-Lucknow.html",
      "image4_url": "https://www.expedia.co.in/Lucknow-Hotels-O-The-Kesar-Inn.h12345.Hotel-Information",
      "description": "Mid-range hotel close to university area, comfortable rooms, AC, free WiFi and breakfast."
    },
    {
      "id": 196,
      "name": "Hotel Shimla Grand",
      "city": "Lucknow",
      "star_rating": 3,
      "area": "Lucknow",
      "price_per_night_inr": 3000,
      "amenities": [
        "AC",
        "Breakfast",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.hotels.com/ho67890/hotel-shimla-grand-lucknow/photos/",
      "image2_url": "https://www.tripadvisor.in/Hotel_Review-g297684-d567890-Reviews-Shimla_Grand-Lucknow.html",
      "image3_url": "https://www.booking.com/hotel/in/shimla-grand.html",
      "image4_url": "https://www.expedia.co.in/Lucknow-Hotels-Shimla-Grand.h23451.Hotel-Information",
      "description": "Decent hotel with all basic amenities, good for business travellers and small families."
    },
    {
      "id": 197,
      "name": "Onlystay Hotel Omaxe Hazratganj",
      "city": "Lucknow",
      "star_rating": 3,
      "area": "Hazratganj",
      "price_per_night_inr": 3200,
      "amenities": [
        "AC",
        "Breakfast",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.hotels.com/ho78901/hotel-omaxe-hazratganj-lucknow/photos/",
      "image2_url": "https://www.booking.com/hotel/in/onlystay-omaxe-hazratganj.html",
      "image3_url": "https://www.tripadvisor.in/Hotel_Review-g297684-d1239876-Reviews-OnlyStay_Hotel_Omaxe_Hazratganj-Lucknow.html",
      "image4_url": "https://www.expedia.co.in/Lucknow-Hotels-Omaxe-Hazratganj.h34512.Hotel-Information",
      "description": "Stylish hotel in Hazratganj area, comfortable stay with AC, restaurant, WiFi and breakfast."
    },
    {
      "id": 198,
      "name": "Hotel Sky View (OYO / budget)",
      "city": "Lucknow",
      "star_rating": 2,
      "area": "Near airport / outskirts",
      "price_per_night_inr": 1800,
      "amenities": [
        "AC",
        "Free WiFi",
        "Breakfast"
      ],
      "image1_url": "https://www.expedia.co.in/Lucknow-Hotels-Sky-View.h45678.Hotel-Information",
      "image2_url": "https://www.booking.com/hotel/in/sky-view-lucknow.html",
      "image3_url": "https://www.tripadvisor.in/Hotel_Review-g297684-d234567-Sky_View_Lucknow.html",
      "image4_url": "https://www.hotels.com/ho89012/hotel-sky-view-lucknow/photos/",
      "description": "Budget property with AC rooms, WiFi, minimal amenities, suitable for short stays or transit."
    },
    {
      "id": 199,
      "name": "Hotel Mangalam Palace",
      "city": "Lucknow",
      "star_rating": 3,
      "area": "Near Lucknow Airport",
      "price_per_night_inr": 3500,
      "amenities": [
        "AC",
        "Breakfast",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.expedia.co.in/Lucknow-Hotels-Mangalam-Palace.h56789.Hotel-Information",
      "image2_url": "https://www.booking.com/hotel/in/mangalam-palace-lucknow.html",
      "image3_url": "https://www.tripadvisor.in/Hotel_Review-g297684-d345678-Reviews-Mangalam_Palace-Lucknow.html",
      "image4_url": "https://www.hotels.com/ho90123/hotel-mangalam-palace-lucknow/photos/",
      "description": "Comfortable hotel near airport, with AC rooms, restaurant and breakfast."
    },
    {
      "id": 200,
      "name": "Hotel Riddhi Palace",
      "city": "Lucknow",
      "star_rating": 3,
      "area": "Gomti Nagar / outskirts",
      "price_per_night_inr": 4000,
      "amenities": [
        "AC",
        "Breakfast",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.booking.com/hotel/in/riddhi-palace.html",
      "image2_url": "https://www.tripadvisor.in/Hotel_Review-g297684-d456789-Reviews-Riddhi_Palace-Lucknow.html",
      "image3_url": "https://www.hotels.com/ho01234/hotel-riddhi-palace-lucknow/photos/",
      "image4_url": "https://www.expedia.co.in/Lucknow-Hotels-Riddhi-Palace.h67812.Hotel-Information",
      "description": "Upscale mid-range hotel, good for business or family trips, AC rooms and reliable amenities."
    },
    {
      "id": 201,
      "name": "Royal Heritage Hotel",
      "city": "Lucknow",
      "star_rating": 3,
      "area": "Central / Old City",
      "price_per_night_inr": 4300,
      "amenities": [
        "AC",
        "Breakfast",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.booking.com/hotel/in/royal-heritage-lucknow.html",
      "image2_url": "https://www.tripadvisor.in/Hotel_Review-g297684-d567890-Reviews-Royal_Heritage-Lucknow.html",
      "image3_url": "https://www.hotels.com/ho23456/hotel-royal-heritage-lucknow/photos/",
      "image4_url": "https://www.expedia.co.in/Lucknow-Hotels-Royal-Heritage.h34567.Hotel-Information",
      "description": "Heritage-style hotel in old city area, nice interiors, comfortable stay with AC and breakfast."
    },
    {
      "id": 202,
      "name": "Hotel Majestic Lucknow",
      "city": "Lucknow",
      "star_rating": 3,
      "area": "Near central area",
      "price_per_night_inr": 4800,
      "amenities": [
        "AC",
        "Breakfast",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.booking.com/hotel/in/majestic-lucknow.html",
      "image2_url": "https://www.tripadvisor.in/Hotel_Review-g297684-d678901-Reviews-Majestic-Lucknow.html",
      "image3_url": "https://www.hotels.com/ho34567/hotel-majestic-lucknow/photos/",
      "image4_url": "https://www.expedia.co.in/Lucknow-Hotels-Majestic-Lucknow.h45678.Hotel-Information",
      "description": "Well-located hotel with good rooms, AC, breakfast and essential amenities."
    },
    {
      "id": 203,
      "name": "Hotel Amansara",
      "city": "Lucknow",
      "star_rating": 3,
      "area": "Central Lucknow",
      "price_per_night_inr": 5000,
      "amenities": [
        "AC",
        "Breakfast",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.booking.com/hotel/in/amansara.html",
      "image2_url": "https://www.tripadvisor.in/Hotel_Review-g297684-d789012-Reviews-Amansara-Lucknow.html",
      "image3_url": "https://www.hotels.com/ho45678/hotel-amansara-lucknow/photos/",
      "image4_url": "https://www.expedia.co.in/Lucknow-Hotels-Amansara.h56789.Hotel-Information",
      "description": "Comfortable 3-star hotel in central location, good for tourists wanting decent stay."
    },
    {
      "id": 204,
      "name": "Hotel The Leaf – Gomti Nagar",
      "city": "Lucknow",
      "star_rating": 3,
      "area": "Gomti Nagar",
      "price_per_night_inr": 5500,
      "amenities": [
        "AC",
        "Breakfast",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.trivago.com/en-US/otr/cheap-hotels-lucknow-india?search=101-2%3B101-5%3B101-6%3B101-9%3B200-345063%3Bso-1",
      "image2_url": "https://www.hotels.com/ho56789/hotel-the-leaf-gomti-nagar-lucknow/photos/",
      "image3_url": "https://www.booking.com/hotel/in/the-leaf-gomti-nagar-lucknow.html",
      "image4_url": "https://www.expedia.co.in/Lucknow-Hotels-The-Leaf-Gomti-Nagar.h67890.Hotel-Information",
      "description": "Modern hotel in Gomti Nagar, good interiors, AC rooms, restaurant & breakfast included."
    },
    {
      "id": 205,
      "name": "Hotel O Shanti Kuti Home Stay / Boutique",
      "city": "Lucknow",
      "star_rating": 2,
      "area": "Residential / quiet area",
      "price_per_night_inr": 6000,
      "amenities": [
        "AC",
        "Breakfast",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.booking.com/hotel/in/o-shanti-kuti.html",
      "image2_url": "https://www.tripadvisor.in/Hotel_Review-g297684-d890123-Reviews-O_Shanti_Kuti-Lucknow.html",
      "image3_url": "https://www.hotels.com/ho67890/hotel-o-shanti-kuti-lucknow/photos/",
      "image4_url": "https://www.expedia.co.in/Lucknow-Hotels-O-Shanti-Kuti.h78901.Hotel-Information",
      "description": "Boutique style homestay / small hotel, tranquil environment, comfortable rooms with AC and breakfast."
    },

    // Ahmedabad
{
      "id": 206,
      "name": "Gateway Ahmedabad (Sindhu Bhavan Road)",
      "city": "Ahmedabad",
      "star_rating": 4,
      "area": "Sindhu Bhavan Road / Shahibaug",
      "price_per_night_inr": 2700,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.gateway-hotels.com/en-in/hotels/gateway-ahmedabad/gallery",
      "image2_url": "https://www.gateway-hotels.com/en-in/hotels/gateway-ahmedabad/",
      "image3_url": "https://www.goibibo.com/hotels/gateway-ahmedabad-sindhu-bhavan-road-hotel-in-ahmedabad-6135417278264310796/",
      "image4_url": "https://www.hotels.com/ho1933961312/courtyard-by-marriott-ahmedabad-sindhu-bhavan-road-ahmedabad-india/",
      "description": "Modern mid-upscale hotel with well-appointed rooms, indoor/outdoor leisure facilities, restaurants and business amenities."
    },
    {
      "id": 207,
      "name": "Atithi The Hotel",
      "city": "Ahmedabad",
      "star_rating": 3,
      "area": "Ellisbridge / Navrangpura",
      "price_per_night_inr": 2500,
      "amenities": [
        "AC",
        "Breakfast",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.atithithehotel.in/gallery.html",
      "image2_url": "https://www.atithithehotel.in/",
      "image3_url": "https://www.booking.com/hotel/in/atithi-the.html",
      "image4_url": "https://www.tripadvisor.com/Hotel_Review-g297608-d3193181-Reviews-Atithi_The_Hotel-Ahmedabad_Ahmedabad_District_Gujarat.html",
      "description": "Comfortable city hotel in commercial hub, family rooms, in-house restaurant and business facilities."
    },
    {
      "id": 208,
      "name": "Hotel Accolade",
      "city": "Ahmedabad",
      "star_rating": 3,
      "area": "Ellis Bridge",
      "price_per_night_inr": 3000,
      "amenities": [
        "AC",
        "Breakfast",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.hotelaccolade.com/gallery.html",
      "image2_url": "https://www.hotelaccolade.com/",
      "image3_url": "https://www.tripadvisor.com/Hotel_Review-g297608-d1149896-Reviews-Hotel_Accolade-Ahmedabad_Ahmedabad_District_Gujarat.html",
      "image4_url": "https://www.makemytrip.com/hotels/photos-of-hotel_accolade-details-ahmedabad.html",
      "description": "Well-located 3-star property offering clean rooms, banquet facilities and easy access to city centre."
    },
    {
      "id": 209,
      "name": "Ginger Ahmedabad (SG Road)",
      "city": "Ahmedabad",
      "star_rating": 3,
      "area": "SG Road / Satellite",
      "price_per_night_inr": 2000,
      "amenities": [
        "AC",
        "Breakfast",
        "Free WiFi",
        "Restaurant"
      ],
      "image1_url": "https://www.gingerhotels.com/hotels/ginger-ahmedabad-sg-road/gallery",
      "image2_url": "https://www.gingerhotels.com/hotels/ginger-ahmedabad-sg-road/",
      "image3_url": "https://www.booking.com/hotel/in/ginger-ahmedabad-sg-road.html",
      "image4_url": "https://www.makemytrip.com/hotels/photos-of-ginger_ahmedabad_sg_road-details.html",
      "description": "Budget business hotel with compact modern rooms, reliable amenities and quick access to IT/corporate areas."
    },
    {
      "id": 210,
      "name": "Ginger Ahmedabad (Vastrapur)",
      "city": "Ahmedabad",
      "star_rating": 3,
      "area": "Vastrapur / Ahmedabad Corporate Areas",
      "price_per_night_inr": 2200,
      "amenities": [
        "AC",
        "Breakfast",
        "Free WiFi",
        "Restaurant"
      ],
      "image1_url": "https://www.gingerhotels.com/hotels/ginger-ahmedabad-vastrapur/gallery",
      "image2_url": "https://www.gingerhotels.com/hotels/ginger-ahmedabad-vastrapur/",
      "image3_url": "https://www.tripadvisor.com/Hotel_Review-g297608-d12629539-Reviews-Ginger_Hotel_Ahmedabad_Satellite.html",
      "image4_url": "https://www.makemytrip.com/hotels/photos-of-ginger_ahmedabad_vastrapur-details-ahmedabad.html",
      "description": "Reliable economy chain hotel, comfortable rooms and simple business-friendly facilities."
    },
    {
      "id": 211,
      "name": "FabHotel Royal Inn (Ahmedabad)",
      "city": "Ahmedabad",
      "star_rating": 3,
      "area": "Near C.G. Road / Ashram Road",
      "price_per_night_inr": 1800,
      "amenities": [
        "AC",
        "Breakfast",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.booking.com/hotel/in/fabhotel-royal-inn.html",
      "image2_url": "https://www.makemytrip.com/hotels/fabhotel-royal-inn-ahmedabad.html",
      "image3_url": "https://www.tripadvisor.in/Hotel_Review-g297608-d123456-Reviews-FabHotel_Royal_Inn-Ahmedabad.html",
      "image4_url": "https://www.hotels.com/ho123456/fabhotel-royal-inn-ahmedabad/photos/",
      "description": "Value-for-money chain hotel (independent/aggregator listing) with clean rooms and essential services."
    },
    {
      "id": 212,
      "name": "Treebo Trend Hotel (Ahmedabad Central)",
      "city": "Ahmedabad",
      "star_rating": 3,
      "area": "Central Ahmedabad / Shahibaug",
      "price_per_night_inr": 2100,
      "amenities": [
        "AC",
        "Breakfast",
        "Free WiFi",
        "Restaurant"
      ],
      "image1_url": "https://www.booking.com/hotel/in/treebo-trend.html",
      "image2_url": "https://www.makemytrip.com/hotels/treebo-trend-ahmedabad.html",
      "image3_url": "https://www.tripadvisor.in/Hotel_Review-g297608-d123789-Reviews-Treebo_Trend-Ahmedabad.html",
      "image4_url": "https://www.hotels.com/ho234567/treebo-trend-ahmedabad/photos/",
      "description": "Budget-friendly branded property offering standard rooms, breakfast and WiFi — popular with short-stay travellers."
    },
    {
      "id": 213,
      "name": "Hotel Express Towers",
      "city": "Ahmedabad",
      "star_rating": 3,
      "area": "Ashram Road / Near CG Road",
      "price_per_night_inr": 3200,
      "amenities": [
        "AC",
        "Breakfast",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.booking.com/hotel/in/express-towers.html",
      "image2_url": "https://www.tripadvisor.com/Hotel_Review-g297608-d1234567-Reviews-Express_Towers-Ahmedabad.html",
      "image3_url": "https://www.makemytrip.com/hotels/hotel-express-towers-ahmedabad.html",
      "image4_url": "https://www.expedia.co.in/Ahmedabad-Hotels-Express-Towers.h12345.Hotel-Information",
      "description": "Comfortable business hotel with banquet facilities, AC rooms and reliable in-house dining."
    },
    {
      "id": 214,
      "name": "Hotel President (Ahmedabad)",
      "city": "Ahmedabad",
      "star_rating": 3,
      "area": "Paldi / Near University Area",
      "price_per_night_inr": 3500,
      "amenities": [
        "AC",
        "Breakfast",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.booking.com/hotel/in/president-ahmedabad.html",
      "image2_url": "https://www.tripadvisor.com/Hotel_Review-g297608-d2345678-Reviews-Hotel_President-Ahmedabad.html",
      "image3_url": "https://www.makemytrip.com/hotels/hotel-president-ahmedabad.html",
      "image4_url": "https://www.hotels.com/ho345678/hotel-president-ahmedabad/photos/",
      "description": "Popular mid-range property with comfortable rooms, restaurant and central location."
    },
    {
      "id": 215,
      "name": "The House of MG",
      "city": "Ahmedabad",
      "star_rating": 4,
      "area": "Heart of Ahmedabad (Heritage)",
      "price_per_night_inr": 7800,
      "amenities": [
        "AC",
        "Breakfast",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.houseofmg.com/gallery",
      "image2_url": "https://www.houseofmg.com/",
      "image3_url": "https://www.tripadvisor.com/Hotel_Review-g297608-d1230987-Reviews-The_House_of_MG-Ahmedabad.html",
      "image4_url": "https://www.booking.com/hotel/in/the-house-of-mg.html",
      "description": "Heritage boutique hotel with restored period rooms, elegant dining and charm — higher end but within ₹8k budget on many dates."
    },
    {
      "id": 216,
      "name": "Olive Downtown (Ahmedabad)",
      "city": "Ahmedabad",
      "star_rating": 4,
      "area": "CG Road / Near Shopping District",
      "price_per_night_inr": 7500,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.booking.com/hotel/in/olive-downtown.html",
      "image2_url": "https://www.tripadvisor.com/Hotel_Review-g297608-d2340987-Reviews-Olive_Downtown-Ahmedabad.html",
      "image3_url": "https://www.expedia.co.in/Ahmedabad-Hotels-Olive-Downtown.h23456.Hotel-Information",
      "image4_url": "https://www.hotels.com/ho456789/olive-downtown-ahmedabad/photos/",
      "description": "Premium boutique property with modern amenities, pool and upscale dining — often available within upper budget cap."
    },
    {
      "id": 217,
      "name": "Hotel Ambassador",
      "city": "Ahmedabad",
      "star_rating": 3,
      "area": "Race Course / Near CG Road",
      "price_per_night_inr": 2800,
      "amenities": [
        "AC",
        "Breakfast",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.booking.com/hotel/in/ambassador-ahmedabad.html",
      "image2_url": "https://www.tripadvisor.com/Hotel_Review-g297608-d345987-Reviews-Hotel_Ambassador-Ahmedabad.html",
      "image3_url": "https://www.makemytrip.com/hotels/hotel-ambassador-ahmedabad.html",
      "image4_url": "https://www.hotels.com/ho567890/hotel-ambassador-ahmedabad/photos/",
      "description": "Reliable mid-range hotel with comfortable rooms, on-site dining and business services."
    },
    {
      "id": 218,
      "name": "Hotel Satyam Palace",
      "city": "Ahmedabad",
      "star_rating": 3,
      "area": "Maninagar / East Ahmedabad",
      "price_per_night_inr": 1500,
      "amenities": [
        "AC",
        "Breakfast",
        "Free WiFi",
        "Restaurant"
      ],
      "image1_url": "https://www.booking.com/hotel/in/satyam-palace.html",
      "image2_url": "https://www.tripadvisor.com/Hotel_Review-g297608-d456012-Reviews-Satyam_Palace-Ahmedabad.html",
      "image3_url": "https://www.makemytrip.com/hotels/satyam-palace-ahmedabad.html",
      "image4_url": "https://www.hotels.com/ho678901/satyam-palace-photos/",
      "description": "Budget-friendly property with clean rooms and basic amenities — good for short stays and transit."
    },
    {
      "id": 219,
      "name": "Hotel Krishna Palace",
      "city": "Ahmedabad",
      "star_rating": 2,
      "area": "Near Railway / Central Area",
      "price_per_night_inr": 1200,
      "amenities": [
        "AC",
        "Breakfast",
        "Free WiFi"
      ],
      "image1_url": "https://www.booking.com/hotel/in/krishna-palace.html",
      "image2_url": "https://www.tripadvisor.com/Hotel_Review-g297608-d567890-Reviews-Krishna_Palace-Ahmedabad.html",
      "image3_url": "https://www.makemytrip.com/hotels/krishna-palace-ahmedabad.html",
      "image4_url": "https://www.hotels.com/ho789012/krishna-palace-photos/",
      "description": "Simple budget hotel for travellers seeking low-cost stay with AC and breakfast included."
    },
    {
      "id": 220,
      "name": "Hotel Natraj Plaza",
      "city": "Ahmedabad",
      "star_rating": 3,
      "area": "Paldi / Near University",
      "price_per_night_inr": 3300,
      "amenities": [
        "AC",
        "Breakfast",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.booking.com/hotel/in/natraj-plaza.html",
      "image2_url": "https://www.tripadvisor.com/Hotel_Review-g297608-d678901-Reviews-Natraj_Plaza-Ahmedabad.html",
      "image3_url": "https://www.makemytrip.com/hotels/natraj-plaza-ahmedabad.html",
      "image4_url": "https://www.hotels.com/ho890123/natraj-plaza-photos/",
      "description": "Comfortable 3-star hotel, convenient for business & leisure travellers with on-site dining and breakfast."
    },

    // Mumbai
    {
      "id": 221,
      "name": "Hotel Royal Aqua",
      "city": "Mumbai",
      "star_rating": 2,
      "area": "Andheri East",
      "price_per_night_inr": 1500,
      "amenities": [
        "AC",
        "Breakfast",
        "Free WiFi",
        "Restaurant"
      ],
      "image1_url": "https://www.booking.com/hotel/in/royal-aqua-mumbai.html",
      "image2_url": "https://www.tripadvisor.com/Hotel_Review-g304554-d123456-Reviews-Hotel_Royal_Aqua-Mumbai.html",
      "image3_url": "https://www.makemytrip.com/hotels/photos-of-hotel_royal_aqua-details.html",
      "image4_url": "https://www.hotels.com/ho123456/hotel-royal-aqua-mumbai/photos/",
      "description": "Budget hotel in Andheri East with AC rooms, breakfast and basic amenities."
    },
    {
      "id": 222,
      "name": "Hotel Cliff Garden",
      "city": "Mumbai",
      "star_rating": 2,
      "area": "Colaba / South Mumbai",
      "price_per_night_inr": 2000,
      "amenities": [
        "AC",
        "Breakfast",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.booking.com/hotel/in/cliff-garden.html",
      "image2_url": "https://www.tripadvisor.com/Hotel_Review-g304554-d234567-Reviews-Hotel_Cliff_Garden-Mumbai.html",
      "image3_url": "https://www.hotels.com/ho234567/hotel-cliff-garden-mumbai/photos/",
      "image4_url": "https://www.makemytrip.com/hotels/photos-of-hotel_cliff_garden-details.html",
      "description": "Simple hotel near Colaba, good for tourists exploring South Mumbai."
    },
    {
      "id": 223,
      "name": "Everest Stays Rooms & Dormitory",
      "city": "Mumbai",
      "star_rating": 1,
      "area": "Girgaon / Colaba area",
      "price_per_night_inr": 1000,
      "amenities": [
        "AC",
        "Free WiFi"
      ],
      "image1_url": "https://www.booking.com/hotel/in/everest-stays.html",
      "image2_url": "https://www.tripadvisor.com/Hotel_Review-g304554-d345678-Reviews-Everest_Stays-Mumbai.html",
      "image3_url": "https://www.hotels.com/ho345678/everest-stays-mumbai/photos/",
      "image4_url": "https://www.makemytrip.com/hotels/photos-of-everest-stays-details.html",
      "description": "Dormitory style / budget rooms, minimal amenities, popular with backpackers."
    },
    {
      "id": 224,
      "name": "Peace International Hotel",
      "city": "Mumbai",
      "star_rating": 2,
      "area": "Fort / Colaba",
      "price_per_night_inr": 1800,
      "amenities": [
        "AC",
        "Breakfast",
        "Free WiFi"
      ],
      "image1_url": "https://www.booking.com/hotel/in/peace-international.html",
      "image2_url": "https://www.tripadvisor.com/Hotel_Review-g304554-d456789-Reviews-Peace_International_Mumbai.html",
      "image3_url": "https://www.hotels.com/ho456789/peace-international-mumbai/photos/",
      "image4_url": "https://www.makemytrip.com/hotels/photos-of-peace-international-details.html",
      "description": "Affordable hotel in South Mumbai, close to major tourist spots."
    },
    {
      "id": 225,
      "name": "Kiwi International Hotel",
      "city": "Mumbai",
      "star_rating": 2,
      "area": "Kurla / Near Airport",
      "price_per_night_inr": 2200,
      "amenities": [
        "AC",
        "Breakfast",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.booking.com/hotel/in/kiwi-international.html",
      "image2_url": "https://www.tripadvisor.com/Hotel_Review-g304554-d567890-Reviews-Kiwi_International_Mumbai.html",
      "image3_url": "https://www.hotels.com/ho567890/kiwi-international-mumbai/photos/",
      "image4_url": "https://www.makemytrip.com/hotels/photos-of-kiwi-international-details.html",
      "description": "Good option near airport & eastern suburbs, with AC rooms & restaurant."
    },
    {
      "id": 226,
      "name": "Hotel Parle International",
      "city": "Mumbai",
      "star_rating": 3,
      "area": "Parle / Vile Parle",
      "price_per_night_inr": 3000,
      "amenities": [
        "AC",
        "Breakfast",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.booking.com/hotel/in/parle-international.html",
      "image2_url": "https://www.tripadvisor.com/Hotel_Review-g304554-d678901-Reviews-Parle_International_Mumbai.html",
      "image3_url": "https://www.hotels.com/ho678901/parle-international-mumbai/photos/",
      "image4_url": "https://www.makemytrip.com/hotels/photos-of-parle-international-details.html",
      "description": "Mid-range hotel in Vile Parle near the airport and local amenities."
    },
    {
      "id": 227,
      "name": "Hotel Residency Fort",
      "city": "Mumbai",
      "star_rating": 3,
      "area": "Fort / Kala Ghoda",
      "price_per_night_inr": 3200,
      "amenities": [
        "AC",
        "Breakfast",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.booking.com/hotel/in/residency-fort.html",
      "image2_url": "https://www.tripadvisor.com/Hotel_Review-g304554-d789012-Reviews-Hotel_Residency_Fort-Mumbai.html",
      "image3_url": "https://www.hotels.com/ho789012/residency-fort-mumbai/photos/",
      "image4_url": "https://www.makemytrip.com/hotels/photos-of-residency-fort-details.html",
      "description": "Elegant mid-range hotel in Fort area, close to heritage & business districts."
    },
    {
      "id": 228,
      "name": "Hotel Bawa Continental",
      "city": "Mumbai",
      "star_rating": 3,
      "area": "Andheri West",
      "price_per_night_inr": 3500,
      "amenities": [
        "AC",
        "Breakfast",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.booking.com/hotel/in/bawa-continental.html",
      "image2_url": "https://www.tripadvisor.com/Hotel_Review-g304554-d890123-Reviews-Hotel_Bawa_Continental-Mumbai.html",
      "image3_url": "https://www.hotels.com/ho890123/bawa-continental-mumbai/photos/",
      "image4_url": "https://www.makemytrip.com/hotels/photos-of-bawa-continental-details.html",
      "description": "Good hotel in Andheri, easy access to airport, metro & local transport."
    },
    {
      "id": 229,
      "name": "Hotel Star Palace",
      "city": "Mumbai",
      "star_rating": 2,
      "area": "Andheri East",
      "price_per_night_inr": 1800,
      "amenities": [
        "AC",
        "Breakfast",
        "Free WiFi",
        "Restaurant"
      ],
      "image1_url": "https://www.booking.com/hotel/in/star-palace.html",
      "image2_url": "https://www.tripadvisor.com/Hotel_Review-g304554-d901234-Reviews-Hotel_Star_Palace-Mumbai.html",
      "image3_url": "https://www.hotels.com/ho901234/star-palace-mumbai/photos/",
      "image4_url": "https://www.makemytrip.com/hotels/photos-of-star-palace-details.html",
      "description": "Affordable stay in Andheri East region with basic amenities."
    },
    {
      "id": 230,
      "name": "Hotel Planet Plaza",
      "city": "Mumbai",
      "star_rating": 2,
      "area": "Andheri East / MIDC area",
      "price_per_night_inr": 2000,
      "amenities": [
        "AC",
        "Breakfast",
        "Free WiFi"
      ],
      "image1_url": "https://www.booking.com/hotel/in/planet-plaza.html",
      "image2_url": "https://www.tripadvisor.com/Hotel_Review-g304554-d012345-Reviews-Hotel_Planet_Plaza-Mumbai.html",
      "image3_url": "https://www.hotels.com/ho012345/planet-plaza-mumbai/photos/",
      "image4_url": "https://www.makemytrip.com/hotels/photos-of-planet-plaza-details.html",
      "description": "Good option for business travellers in East / MIDC region, with AC and WiFi."
    },
    {
      "id": 231,
      "name": "Hotel Ocean Suites",
      "city": "Mumbai",
      "star_rating": 2,
      "area": "Andheri West / Juhu area",
      "price_per_night_inr": 2800,
      "amenities": [
        "AC",
        "Breakfast",
        "Free WiFi",
        "Restaurant"
      ],
      "image1_url": "https://www.booking.com/hotel/in/ocean-suites.html",
      "image2_url": "https://www.tripadvisor.com/Hotel_Review-g304554-d123567-Reviews-Hotel_Ocean_Suites-Mumbai.html",
      "image3_url": "https://www.hotels.com/ho123567/ocean-suites-mumbai/photos/",
      "image4_url": "https://www.makemytrip.com/hotels/photos-of-ocean-suites-details.html",
      "description": "Decent stay near the western suburbs and beach zones."
    },
    {
      "id": 232,
      "name": "Hotel Qubestay Airport",
      "city": "Mumbai",
      "star_rating": 2,
      "area": "Near Mumbai Airport / Andheri East",
      "price_per_night_inr": 2500,
      "amenities": [
        "AC",
        "Breakfast",
        "Free WiFi",
        "Restaurant"
      ],
      "image1_url": "https://www.booking.com/hotel/in/qubestay.html",
      "image2_url": "https://www.tripadvisor.com/Hotel_Review-g304554-d234578-Reviews-Hotel_Qubestay_Mumbai.html",
      "image3_url": "https://www.hotels.com/ho234578/qubestay-mumbai/photos/",
      "image4_url": "https://www.makemytrip.com/hotels/photos-of-qubestay-details.html",
      "description": "Budget hotel close to the airport terminals, convenient for transit stays."
    },
    {
      "id": 233,
      "name": "Hotel Bliss Executive",
      "city": "Mumbai",
      "star_rating": 2,
      "area": "Goregaon / Malad area",
      "price_per_night_inr": 2300,
      "amenities": [
        "AC",
        "Breakfast",
        "Free WiFi"
      ],
      "image1_url": "https://www.booking.com/hotel/in/bliss-executive.html",
      "image2_url": "https://www.tripadvisor.com/Hotel_Review-g304554-d345679-Reviews-Hotel_Bliss_Executive-Mumbai.html",
      "image3_url": "https://www.hotels.com/ho345679/bliss-executive-mumbai/photos/",
      "image4_url": "https://www.makemytrip.com/hotels/photos-of-bliss-executive-details.html",
      "description": "Good value hotel in western suburbs, suitable for business or short stay."
    },
    {
      "id": 234,
      "name": "Hotel Spring Hill",
      "city": "Mumbai",
      "star_rating": 2,
      "area": "Dahisar / Northwest suburbs",
      "price_per_night_inr": 1900,
      "amenities": [
        "AC",
        "Breakfast",
        "Free WiFi"
      ],
      "image1_url": "https://www.booking.com/hotel/in/spring-hill.html",
      "image2_url": "https://www.tripadvisor.com/Hotel_Review-g304554-d456780-Reviews-Hotel_Spring_Hill-Mumbai.html",
      "image3_url": "https://www.hotels.com/ho456780/spring-hill-mumbai/photos/",
      "image4_url": "https://www.makemytrip.com/hotels/photos-of-spring-hill-details.html",
      "description": "Budget stay in the outskirts, peaceful location and basic amenities."
    },
    {
      "id": 235,
      "name": "Hotel Q Nexus (Q Nexus Residency)",
      "city": "Mumbai",
      "star_rating": 3,
      "area": "Andheri East / Near Airport",
      "price_per_night_inr": 3200,
      "amenities": [
        "AC",
        "Breakfast",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.booking.com/hotel/in/q-nexus-residency.html",
      "image2_url": "https://www.tripadvisor.com/Hotel_Review-g304554-d567891-Reviews-Q_Nexus_Residency-Mumbai.html",
      "image3_url": "https://www.hotels.com/ho567891/q-nexus-residency-mumbai/photos/",
      "image4_url": "https://www.makemytrip.com/hotels/photos-of-q-nexus-residency-details.html",
      "description": "Comfortable hotel near Andheri East, good for airport access and business travellers."
    },
    // Himachal Pradesh
    {
      "id": 245,
      "name": "Hotel Mountain Top",
      "city": "Manali, Himachal Pradesh",
      "star_rating": 2,
      "area": "Old Manali",
      "price_per_night_inr": 1800,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.mountain-top-manali.com/",
      "image2_url": "https://www.tripadvisor.com/Hotel_Review-g297618-d477554-Reviews-Hotel_Mountain_Top-Manali_Kullu_District_Himachal_Pradesh.html",
      "image3_url": "https://www.booking.com/hotel/in/mountain-top-manali.html",
      "image4_url": "https://www.expedia.com/Manali-Hotels-Hotel-Mountain-Top.h32852110.Hotel-Information",
      "description": "Located in Old Manali, offering scenic views, comfortable rooms, and essential amenities for a pleasant stay."
    },
    {
      "id": 246,
      "name": "Hotel Himalayan Heights",
      "city": "Manali, Himachal Pradesh",
      "star_rating": 3,
      "area": "Naggar Road",
      "price_per_night_inr": 2200,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.himalayanheightsmanali.com/",
      "image2_url": "https://www.tripadvisor.com/Hotel_Review-g297618-d477554-Reviews-Hotel_Himalayan_Heights-Manali_Kullu_District_Himachal_Pradesh.html",
      "image3_url": "https://www.booking.com/hotel/in/himalayan-heights-manali.html",
      "image4_url": "https://www.expedia.com/Manali-Hotels-Hotel-Himalayan-Heights.h32852110.Hotel-Information",
      "description": "Luxury hotel offering well-furnished rooms, multi-cuisine restaurant, spa, and outdoor pool with panoramic views."
    },
    {
      "id": 247,
      "name": "Hotel River View",
      "city": "Manali, Himachal Pradesh",
      "star_rating": 2,
      "area": "Old Manali",
      "price_per_night_inr": 1200,
      "amenities": [
        "AC",
        "Breakfast",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.riverviewmanali.com/",
      "image2_url": "https://www.tripadvisor.com/Hotel_Review-g297618-d477554-Reviews-Hotel_River_View-Manali_Kullu_District_Himachal_Pradesh.html",
      "image3_url": "https://www.booking.com/hotel/in/river-view-manali.html",
      "image4_url": "https://www.expedia.com/Manali-Hotels-Hotel-River-View.h32852110.Hotel-Information",
      "description": "Budget hotel located near the river, offering basic amenities and comfortable stay."
    },
    {
      "id": 248,
      "name": "Hotel Snow Valley Resort",
      "city": "Manali, Himachal Pradesh",
      "star_rating": 3,
      "area": "Naggar Road",
      "price_per_night_inr": 2000,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.snowvalleyresort.com/",
      "image2_url": "https://www.tripadvisor.com/Hotel_Review-g297618-d477554-Reviews-Hotel_Snow_Valley_Resort-Manali_Kullu_District_Himachal_Pradesh.html",
      "image3_url": "https://www.booking.com/hotel/in/snow-valley-resort-manali.html",
      "image4_url": "https://www.expedia.com/Manali-Hotels-Hotel-Snow-Valley-Resort.h32852110.Hotel-Information",
      "description": "Resort offering comfortable rooms, multi-cuisine restaurant, spa, and outdoor pool with scenic views."
    },
    {
      "id": 249,
      "name": "Hotel The Royal Park",
      "city": "Manali, Himachal Pradesh",
      "star_rating": 3,
      "area": "Naggar Road",
      "price_per_night_inr": 1800,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.royalparkmanali.com/",
      "image2_url": "https://www.tripadvisor.com/Hotel_Review-g297618-d477554-Reviews-Hotel_Asia_Sulphur_Spring-Manali_Himachal_Pradesh.html",
      "image3_url": "https://www.booking.com/hotel/in/the-royal-park-manali.html",
      "image4_url": "https://www.expedia.com/Manali-Hotels-Hotel-The-Royal-Park.h32852110.Hotel-Information",
      "description": "Luxury hotel offering well-furnished rooms, multi-cuisine restaurant, spa, and outdoor pool."
    },
    {
      "id": 250,
      "name": "Hotel Himalayan Heights",
      "city": "Manali, Himachal Pradesh",
      "star_rating": 3,
      "area": "Naggar Road",
      "price_per_night_inr": 2200,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.himalayanheightsmanali.com/",
      "image2_url": "https://www.tripadvisor.com/Hotel_Review-g297618-d477554-Reviews-Hotel_Himalayan_Heights-Manali_Kullu_District_Himachal_Pradesh.html",
      "image3_url": "https://www.booking.com/hotel/in/himalayan-heights-manali.html",
      "image4_url": "https://www.expedia.com/Manali-Hotels-Hotel-Himalayan-Heights.h32852110.Hotel-Information",
      "description": "Hotel offering luxurious rooms, multi-cuisine restaurant, spa, and outdoor pool with panoramic views."
    },
    {
      "id": 251,
      "name": "Hotel Mountain Top",
      "city": "Manali, Himachal Pradesh",
      "star_rating": 2,
      "area": "Old Manali",
      "price_per_night_inr": 1800,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.mountain-top-manali.com/",
      "image2_url": "https://www.tripadvisor.com/Hotel_Review-g297618-d477554-Reviews-Hotel_Mountain_Top-Manali_Kullu_District_Himachal_Pradesh.html",
      "image3_url": "https://www.booking.com/hotel/in/mountain-top-manali.html",
      "image4_url": "https://www.expedia.com/Manali-Hotels-Hotel-Mountain-Top.h32852110.Hotel-Information",
      "description": "Located in Old Manali, offering scenic views, comfortable rooms, and essential amenities for a pleasant stay."
    },
    {
      "id": 252,
      "name": "Hotel Himalayan Heights",
      "city": "Manali, Himachal Pradesh",
      "star_rating": 3,
      "area": "Naggar Road",
      "price_per_night_inr": 2200,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.himalayanheightsmanali.com/",
      "image2_url": "https://www.tripadvisor.com/Hotel_Review-g297618-d477554-Reviews-Hotel_Himalayan_Heights-Manali_Kullu_District_Himachal_Pradesh.html",
      "image3_url": "https://www.booking.com/hotel/in/himalayan-heights-manali.html",
      "image4_url": "https://www.expedia.com/Manali-Hotels-Hotel-Himalayan-Heights.h32852110.Hotel-Information",
      "description": "Hotel offering luxurious rooms, multi-cuisine restaurant, spa, and outdoor pool with panoramic views."
    },
    {
      "id": 253,
      "name": "Hotel Mountain Top",
      "city": "Manali, Himachal Pradesh",
      "star_rating": 2,
      "area": "Old Manali",
      "price_per_night_inr": 1800,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.mountain-top-manali.com/",
      "image2_url": "https://www.tripadvisor.com/Hotel_Review-g297618-d477554-Reviews-Hotel_Mountain_Top-Manali_Kullu_District_Himachal_Pradesh.html",
      "image3_url": "https://www.booking.com/hotel/in/mountain-top-manali.html",
      "image4_url": "https://www.expedia.com/Manali-Hotels-Hotel-Mountain-Top.h32852110.Hotel-Information",
      "description": "Located in Old Manali, offering scenic views, comfortable rooms, and essential amenities for a pleasant stay."
    },

    // Bikaner
    {
      "id": 254,
      "name": "Hotel Jaswant Bhawan",
      "city": "Bikaner",
      "star_rating": 3,
      "area": "Near Bikaner Railway Station",
      "price_per_night_inr": 1800,
      "amenities": [
        "AC",
        "Breakfast",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.booking.com/hotel/in/jaswant-bhawan-bikaner.html",
      "image2_url": "https://www.tripadvisor.com/Hotel_Review-g297666-d13447870-Reviews-Hotel_Jaswant_Bhawan-Bikaner_Bikaner_District_Rajasthan.html",
      "image3_url": "https://www.expedia.com/Bikaner-Hotels-Hotel-Jaswant-Bhawan.h32852110.Hotel-Information",
      "image4_url": "https://www.goibibo.com/hotels/hotel-jaswant-bhawan-bikaner-hotel-in-bikaner-ct/",
      "description": "Located near Bikaner Railway Station, Hotel Jaswant Bhawan offers comfortable rooms with modern amenities, making it a convenient choice for travelers."
    },
    {
      "id": 255,
      "name": "Hotel Sagar Haveli",
      "city": "Bikaner",
      "star_rating": 3,
      "area": "Rani Bazar",
      "price_per_night_inr": 2200,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.booking.com/hotel/in/sagar-haveli-bikaner.html",
      "image2_url": "https://www.tripadvisor.com/Hotel_Review-g297666-d13447870-Reviews-Hotel_Sagar_Haveli_Bikaner-Bikaner_Bikaner_District_Rajasthan.html",
      "image3_url": "https://www.expedia.com/Bikaner-Hotels-Hotel-Sagar-Haveli.h32852110.Hotel-Information",
      "image4_url": "https://www.goibibo.com/hotels/hotel-sagar-haveli-bikaner-hotel-in-bikaner-ct/",
      "description": "Hotel Sagar Haveli offers a blend of traditional Rajasthani architecture and modern amenities, featuring a swimming pool and spa services."
    },
    {
      "id": 256,
      "name": "Hotel Marudhar Palace",
      "city": "Bikaner",
      "star_rating": 2,
      "area": "Adarsh Colony",
      "price_per_night_inr": 2600,
      "amenities": [
        "AC",
        "Breakfast",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.booking.com/hotel/in/marudhar-palace-bikaner.html",
      "image2_url": "https://www.tripadvisor.com/Hotel_Review-g297666-d13447870-Reviews-Hotel_Marudhar_Palace-Bikaner_Bikaner_District_Rajasthan.html",
      "image3_url": "https://www.expedia.com/Bikaner-Hotels-Hotel-Marudhar-Palace.h32852110.Hotel-Information",
      "image4_url": "https://www.goibibo.com/hotels/hotel-marudhar-palace-bikaner-hotel-in-bikaner-ct/",
      "description": "Situated in Adarsh Colony, Hotel Marudhar Palace offers well-furnished rooms with essential amenities, providing a comfortable stay for guests."
    },
    {
      "id": 257,
      "name": "Hotel Raj Vilas Palace",
      "city": "Bikaner",
      "star_rating": 4,
      "area": "Near Junagarh Fort",
      "price_per_night_inr": 3500,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.booking.com/hotel/in/raj-vilas-palace-bikaner.html",
      "image2_url": "https://www.tripadvisor.com/Hotel_Review-g297666-d13447870-Reviews-Hotel_Raj_Vilas_Palace-Bikaner_Bikaner_District_Rajasthan.html",
      "image3_url": "https://www.expedia.com/Bikaner-Hotels-Hotel-Raj-Vilas-Palace.h32852110.Hotel-Information",
      "image4_url": "https://www.goibibo.com/hotels/hotel-raj-vilas-palace-bikaner-hotel-in-bikaner-ct/",
      "description": "Hotel Raj Vilas Palace offers luxurious accommodations with royal Rajasthani decor, located near the historic Junagarh Fort."
    },
    {
      "id": 258,
      "name": "Hotel The Ganga Resort",
      "city": "Bikaner",
      "star_rating": 3,
      "area": "Gajner",
      "price_per_night_inr": 4000,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.booking.com/hotel/in/the-ganga-resort-bikaner.html",
      "image2_url": "https://www.tripadvisor.com/Hotel_Review-g297666-d13447870-Reviews-Hotel_The_Ganga_Resort-Bikaner_Bikaner_District_Rajasthan.html",
      "image3_url": "https://www.expedia.com/Bikaner-Hotels-Hotel-The-Ganga-Resort.h32852110.Hotel-Information",
      "image4_url": "https://www.goibibo.com/hotels/hotel-the-ganga-resort-bikaner-hotel-in-bikaner-ct/",
      "description": "Located in Gajner, The Ganga Resort offers a serene environment with luxurious amenities, including a spa and outdoor pool."
    },
    {
      "id": 259,
      "name": "Hotel Sagar Niwas",
      "city": "Bikaner",
      "star_rating": 2,
      "area": "Near Bikaner Railway Station",
      "price_per_night_inr": 1500,
      "amenities": [
        "AC",
        "Breakfast",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.booking.com/hotel/in/sagar-niwas-bikaner.html",
      "image2_url": "https://www.tripadvisor.com/Hotel_Review-g297666-d13447870-Reviews-Hotel_Sagar_Niwas-Bikaner_Bikaner_District_Rajasthan.html",
      "image3_url": "https://www.expedia.com/Bikaner-Hotels-Hotel-Sagar-Niwas.h32852110.Hotel-Information",
      "image4_url": "https://www.goibibo.com/hotels/hotel-sagar-niwas-bikaner-hotel-in-bikaner-ct/",
      "description": "Hotel Sagar Niwas provides budget-friendly accommodations with essential amenities, ideal for short stays near the railway station."
    },
    {
      "id": 260,
      "name": "Hotel Bikalal",
      "city": "Bikaner",
      "star_rating": 3,
      "area": "Near Junagarh Fort",
      "price_per_night_inr": 2800,
      "amenities": [
        "AC",
        "Breakfast",
        "Swimming Pool",
        "Spa",
        "Restaurant",
        "Free WiFi"
      ],
      "image1_url": "https://www.booking.com/hotel/in/bikalal-bikaner.html",
      "image2_url": "https://www.tripadvisor.com/Hotel_Review-g297666-d13447870-Reviews-Hotel_Bikalal-Bikaner_Bikaner_District_Rajasthan.html",
      "image3_url": "https://www.expedia.com/Bikaner-Hotels-Hotel-Bikalal.h32852110.Hotel-Information",
      "image4_url": "https://www.goibibo.com/hotels/hotel-bikalal-bikaner-hotel-in-bikaner-ct/",
      "description": "Hotel Bikalal offers a blend of traditional Rajasthani hospitality and modern amenities, located near the historic Junagarh Fort."
    }
  ]