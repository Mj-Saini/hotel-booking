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
      "image1_url": "https://media.istockphoto.com/id/1370825295/photo/modern-hotel-room-with-double-bed-night-tables-tv-set-and-cityscape-from-the-window.jpg?s=612x612&w=0&k=20&c=QMXz9HJVhU-8MtBYyeJxtqLz90j7r0SrR6FTWniPkgc=",
      "image2_url": "https://media.istockphoto.com/id/1050564510/photo/3d-rendering-beautiful-luxury-bedroom-suite-in-hotel-with-tv.jpg?s=612x612&w=0&k=20&c=ZYEso7dgPl889aYddhY2Fj3GOyuwqliHkbbT8pjl_iM=",
      "image3_url": "https://assets-news.housing.com/news/wp-content/uploads/2022/11/25115530/image6-20.jpg",
      "image4_url": "https://t3.ftcdn.net/jpg/02/71/08/28/360_F_271082810_CtbTjpnOU3vx43ngAKqpCPUBx25udBrg.jpg",
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
      "image1_url": "https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000",
      "image2_url": "https://i.pinimg.com/236x/4d/19/0b/4d190b4b429465adf0f4aa1bd8a9222a.jpg",
      "image3_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/ce55f9141215185.624f4d9f805d9.jpg",
      "image4_url": "https://i.pinimg.com/564x/64/8c/6f/648c6fbc2b4da9c936d70d0468d6d880.jpg",
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
      "image1_url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "image2_url": "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "image3_url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "image4_url": "https://i.pinimg.com/236x/4d/19/0b/4d190b4b429465adf0f4aa1bd8a9222a.jpg"

,
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/257718596.jpg?k=6b51f53ef71e15a50a381ee32c732bf59f6549e2f10e100a06cc91dd10d09025&o=&hp=1",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/257276384.jpg?k=fa64cae38a878c1fc52feec5a9c28e1346a203691280323401926787f3e7465d&o=&hp=1",
      "image3_url": "https://images.trvl-media.com/lodging/2000000/1080000/1071900/1071809/da1ab02b.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/688129955.jpg?k=c5e74addc2f4dca7ae1b4556a6c51a6f8d6f8f2c339d0b8623fb1005c0e216d0&o=&hp=1"
,
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
      "image1_url": "https://images.trvl-media.com/lodging/39000000/38650000/38648400/38648393/c8f88180.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/353890487.jpg?k=ea01c1d4b31f62952a355b69e682c65f45651842d0ca0a0bf24a05238ec997b2&o=&hp=1",
      "image3_url": "https://images.trvl-media.com/lodging/39000000/38650000/38648400/38648393/8b261be0.jpg?impolicy=fcrop&w=1200&h=800&quality=medium",
      "image4_url": "https://images.trvl-media.com/lodging/39000000/38650000/38648400/38648393/63bcd7ec.jpg?impolicy=fcrop&w=1200&h=800&quality=medium",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/86756718.jpg?k=1e5618d5a6a4f1ffc2b7b41f66e35a4520664d798358b74ad72dce784d7ebd85&o=&hp=1",
      "image2_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXIHeNvBZjw4lYYoX_QJUmaN7JVk8LZ8nKS0HF2UmTJwIWus1aTEe3W878yODnBcd-K9c&usqp=CAU",
      "image3_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/05/33/eb/swimming-pool.jpg?w=900&h=500&s=1",
      "image4_url": "https://pix10.agoda.net/hotelImages/444126/-1/837aa2ade2f5095b5a196b082f5697a6.jpg?ce=0&s=414x232",
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
      "image1_url": "https://r1imghtlak.mmtcdn.com/a08f3596236f11e8bdbc025f77df004f.jpg",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/32617602.jpg?k=71bdc7a74fe80cd53bde08971867bf6579c456ed646b054ba7be4674085a2817&o=&hp=1",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/33118049.jpg?k=8cb40ead813432452916348829776363d70df2f7a5a8f23197168628a5e0c4ed&o=&hp=1",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/240127415.jpg?k=98864df41f995e64d54f509c0dce818d9476db954922f38d65b0a97839449b5b&o=&hp=1",
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
      "image1_url": "https://www.hilton.com/im/en/JAIGHHI/3067273/twin-bed-room-day-shot.jpg?impolicy=crop&cw=4789&ch=3193&gravity=NorthWest&xposition=105&yposition=0&rw=1280&rh=854",
      "image2_url": "https://www.hilton.com/im/en/JAIGHHI/3065453/guest-room-living-bath.jpg?impolicy=crop&cw=4614&ch=3076&gravity=NorthWest&xposition=69&yposition=0&rw=1280&rh=854",
      "image3_url": "https://www.hilton.com/im/en/JAIGHHI/18227974/jaigh-suite-living-area.jpg?impolicy=crop&cw=5000&ch=3333&gravity=NorthWest&xposition=0&yposition=-1&rw=1280&rh=854",
      "image4_url": "https://content.r9cdn.net/rimg/himg/6d/ef/b8/expedia_group-2108712-a2b768-531068.jpg?width=500&height=350&xhint=540&yhint=333&crop=true",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/239614656.jpg?k=98c1bdff4165a9b12282f89138a34c6fff17d205505d27b98f3b3a2ee12cebf4&o=&hp=1",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/239614664.jpg?k=20e9f95d5eb176f5cdccf07807d92684a9bcaf552958296d8875c1a59219d82c&o=&hp=1",
      "image3_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/f7/e0/98/suvarna-mahal-royal-indian.jpg?w=900&h=500&s=1",
      "image4_url": "https://www.experiencetravelgroup.com/wp-content/uploads/2025/07/1-hero-Taj-Rambagh-Palace-6-1.jpg",
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
      "image1_url": "https://m.ahstatic.com/is/image/accorhotels/aja_p_6913-95:3by2?fmt=jpg&op_usm=1.75,0.3,2,0&resMode=sharp2&iccEmbed=true&icc=sRGB&dpr=on,1.5&wid=335&hei=223&qlt=80",
      "image2_url": "https://m.ahstatic.com/is/image/accorhotels/aja_p_6546-41:4by3?fmt=jpg&op_usm=1.75,0.3,2,0&resMode=sharp2&iccEmbed=true&icc=sRGB&dpr=on,1.5&wid=335&hei=251&qlt=80",
      "image3_url": "https://m.ahstatic.com/is/image/accorhotels/aja_p_5819-35:4by3?fmt=jpg&op_usm=1.75,0.3,2,0&resMode=sharp2&iccEmbed=true&icc=sRGB&dpr=on,1.5&wid=335&hei=251&qlt=80",
      "image4_url": "https://m.ahstatic.com/is/image/accorhotels/aja_p_6546-39:4by3?fmt=jpg&op_usm=1.75,0.3,2,0&resMode=sharp2&iccEmbed=true&icc=sRGB&dpr=on,1.5&wid=335&hei=251&qlt=80",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/93398363.jpg?k=e9bda4c9541d94ffd1d4424f7f943d0116929e9a140983394f12d86331d94f51&o=&hp=1",
      "image2_url": "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
      "image3_url": "https://r1imghtlak.mmtcdn.com/8a455fe0-5be5-4596-aeb4-bf436fc991d1.jpg",
      "image4_url": "https://www.oberoihotels.com/-/media/oberoi-hotel/the-oberoi-rajvilas/rajvilas-new/gallery/desktop1640x1292/16.jpg",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/22490300.jpg?k=32a2fe48b2d342e69639b7b80adb8ab3fe590e2e7443ddf983db552973b58aa9&o=&hp=1",
      "image2_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr34VaK7Fyd1P-tqaKDGSSLZZ8QrgMA2_qOHb8GGvMmqEeJ7DZx-_PEM7IUrNphG8wa3Y&usqp=CAU",
      "image3_url": "https://images.trvl-media.com/lodging/1000000/860000/857300/857268/5effe473.jpg?impolicy=fcrop&w=1200&h=800&quality=medium",
      "image4_url": "https://r1imghtlak.mmtcdn.com/8cff5ac8090c11e9ad8d0242ac110002.jpg",
      "description": "A historic palace offering regal accommodations, traditional Rajasthani architecture, and modern amenities."
    },

    {
      "id": 46,
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/628232305.jpg?k=b754bb6b0488c4944dc9554398d976edee233d54dbb939b58ce4a3c5a269a721&o=&hp=1",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/628232362.jpg?k=1f04663c830c6613f8c9cb26dea0c9753df2089184d3f16545b384d323a99126&o=&hp=1",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/628232300.jpg?k=36f9ff4b4c28515187703592d640f832f68f3dc51d8fe0af59a22cde2f15b7cf&o=&hp=1",
      "image4_url": "https://media-cdn.tripadvisor.com/media/photo-s/03/f1/89/c1/itc-rajputana-jaipur.jpg",
      "description": "A blend of traditional Rajasthani architecture and modern luxury, offering world-class amenities."
    },
    {
      "id": 47,
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470311027.jpg?k=b57c7a7fad6c2236b1995562d4f0e0900f7c773eb89efd8aa2af7b025d6387f4&o=&hp=1",
      "image2_url": "https://cache.marriott.com/content/dam/marriott-renditions/JAIMD/jaimd-king-guestroom-gardenview-1186-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/643562691.jpg?k=abb7897212d2c04241f2022dc8e9f9acab20d18526c6e0ba0814ac307b6c9e03&o=&hp=1",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/643562737.jpg?k=16c5fac3005eb8079ae3b158903ffe97d31a36a7127613a366e1ca694d7436f9&o=&hp=1",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/413511584.jpg?k=f3e9196525ea6f135de6bd5a8a9e9fd515f93e6458514f741cddc21cc488441b&o=&hp=1",
      "image2_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7xnMCi0ikRTQy1_FsAexFhs9YeA4zz4YEXn7g_XrlTzUk9FR1Q7QNW38udCTqaaRLeCY&usqp=CAU",
      "image3_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/a7/8b/67/caption.jpg?w=700&h=-1&s=1",
      "image4_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/4f/66/cd/caption.jpg?w=1200&h=1200&s=1",
      "description": "A blend of traditional Rajas"
    },


    // Jaisalmer
  {
    "id": 49,
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
    "image1_url": "https://api.suryagarhcollection.com//media/lzmll1js/suryagarh_rooms_pavillion-room_1.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/267846788.jpg?k=97c9d24fbc62f246ff5078376fd0474433a9830588496072ee858b869780f9e7&o=&hp=1",
    "image3_url": "https://r1imghtlak.mmtcdn.com/d33b0f3665b011e9a0b30242ac110002.jpg",
    "image4_url": "https://r1imghtlak.mmtcdn.com/d01f426af50711e78b3b0a209fbd0127.jpg",
    "description": "A modern fortress-style 5-star hotel built from golden sandstone, offering luxurious rooms, desert experiences, spa and fine dining."
  },
  {
    "id": 50,
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
    "image1_url": "https://cache.marriott.com/content/dam/marriott-renditions/JSAMC/jsamc-twin-room-2786-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1920px:*",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/479469069.jpg?k=584dbc75787b2665268261c573d2552194671281e55b7e28b3904d9153200c3c&o=&hp=1",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/479481383.jpg?k=c743a0913c4959546b9c5a239481547c6d63167fac523d952dace438028d4484&o=&hp=1",
    "image4_url": "https://pix10.agoda.net/property/49403345/777744198/2ff85a208e733cf583fb317a5fbf92ec.jpeg?ce=0&s=414x232",
    "description": "Family-friendly luxury resort with modern amenities, spa, outdoor pools and easy access to city attractions."
  },
  {
    "id": 51,
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/527875960.jpg?k=e889eab5b75050accee16a300be841f23d7b9bc17f43e046de53fab154feb301&o=&hp=1",
    "image2_url": "https://www.kayak.com/rimg/himg/92/f3/9f/expediav2-4476-5ee75b-639683.jpg?width=1366&height=768&crop=true",
    "image3_url": "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/527862534.jpg?k=4ab42c098a16a9779ddd28b24b0f7fab1e5c79674edc96fdc46b6e21f179fb71&o=",
    "image4_url": "https://images.trvl-media.com/lodging/1000000/900000/891800/891790/54a82fc0.jpg?impolicy=fcrop&w=1200&h=800&quality=medium",
    "description": "Luxury property from Taj offering regal architecture, landscaped gardens, spa and premium dining experiences."
  },
  {
    "id": 52,
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
    "image1_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9KgfeoPuJxe36E7igIFTDXiLR0Xx-VDbeBQ&s",
    "image2_url": "https://the-gulaal.hotels-rajasthan.com/data/Pics/OriginalPhoto/16097/1609733/1609733764/the-gulaal-jaisalmer-pic-21.JPEG",
    "image3_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/75/a6/1b/suite-room.jpg?w=900&h=500&s=1",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/325008895.jpg?k=cccfabf024077e646b241fa21c97a6c69f7e5458267ffa4052f6c0c0ec809062&o=&hp=1",
    "description": "A boutique haveli-style luxury hotel with traditional Rajasthani décor, a small pool and personalized service."
  },
  {
    "id": 53,
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
    "image1_url": "https://media.easemytrip.com/media/Hotel/SHL-22021480544532/Common/CommonaNEqs0.jpg",
    "image2_url": "https://fortrajwada.com/images/Room%20Opposite%20Round%20Bed%204.jpg",
    "image3_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAeYukkCtahZgrWCnaSU285WV7deW0_kGjoyWK3-IBgZ36S27cYxcOv7QouX4dlersKPM&usqp=CAU",
    "image4_url": "https://images.trvl-media.com/lodging/12000000/11980000/11973700/11973698/4e51a5b3.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    "description": "Large palace-style hotel offering extensive facilities, banquet halls, pool and family-friendly services."
  },
  {
    "id": 54,
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
    "image1_url": "https://media.easemytrip.com/media/Hotel/SHL-22031581745314/Common/CommonZXnUej.jpg",
    "image2_url": "https://www.welcomheritagehotels.in/app/uploaded_files/hotel_room/-Golden%20Suite%201a41346.jpg",
    "image3_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRANQtj3Ul2qe1mzQmUkpF5yQFwDOEeBTYSE6HIYFm08bieu3BzX0vnhvnVHI1gWIRGscg&usqp=CAU",
    "image4_url": "https://www.welcomheritagehotels.in/app/uploaded_files/hotel_room/-Deluxe%20Room%20(2)31024.jpg",
    "description": "Historic palace converted into a heritage hotel, with rooftop restaurant, cultural performances and a small pool."
  },
  {
    "id": 55,
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
    "image1_url": "https://daahy6akrtcj2.cloudfront.net/hotelsinjaisalmer.co.in/photos/1800310503.jpg",
    "image2_url": "https://q-xx.bstatic.com/xdata/images/hotel/max500/436266876.jpg?k=fad9be2c76ee0063bcf0d8b98a81acb57790ba5d5a90aa499c39d9cd848a01ce&o=",
    "image3_url": "https://q-xx.bstatic.com/xdata/images/hotel/max500/436266880.jpg?k=f3dd3f25fe2f2f32d154cb71bcaa0d344be37f7a1f4e8094c95e5fe4307983f1&o=",
    "image4_url": "https://images.trvl-media.com/lodging/22000000/21610000/21605500/21605473/0367e518.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    "description": "Heritage hotel close to the fort with traditional architecture, rooftop views and comfortable rooms."
  },
  {
    "id": 56,
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
    "image1_url": "https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/https://www.cfmedia.vfmleonardo.com/imageRepo/7/0/145/708/295/_DSC7307_3_O/Palace-Hotel-Tokyo-Exterior.jpg?tr=w-656%2Ch-390%2Cfo-auto",
    "image2_url": "https://en.palacehoteltokyo.com/wp-content/uploads/Palace-Hotel-Tokyo-Deluxe-Room-with-Balcony-King-Daytime-2023-Gallery-640x470.jpg",
    "image3_url": "https://static-new.lhw.com/HotelImages/Rooms/Final/7058/room_7058_A1K_1_300x240.jpg",
    "image4_url": "https://en.palacehoteltokyo.com/wp-content/uploads/Palace-Hotel-Tokyo-Deluxe-Room-with-Balcony-Bath-Evening-2023-Gallery-640x470.jpg",
    "description": "Popular mid-range hotel offering rooftop dining, free pick-up services and easy access to city attractions."
  },
  {
    "id": 57,
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/593506677.jpg?k=dc53632e154d734c7efd74edbc37dca1f544906ad931574fc631d05d50914991&o=&hp=1",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/593506116.jpg?k=4f879b0d48d4f842d55c82546a2f871d107db1cfc9fc6e69c283992f201d8646&o=&hp=1",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/593506676.jpg?k=5b1a23ba5d8e16d1db6dea18ed420a23036df2c8879d959d4b553818b47b4e67&o=&hp=1",
    "image4_url": "https://content.jdmagicbox.com/comp/jaisalmer/x8/9999p2992.2992.130511121022.y5x8/catalogue/hotel-oasis-haveli-shiv-road-jaisalmer-hotels-rs-1001-to-rs-2000--05g6o7v8e9-250.jpg",
    "description": "Traditional haveli with comfortable rooms, rooftop seating and easy access to the Fort and bazaars."
  },
  {
    "id": 58,
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
    "image1_url": "https://images.trvl-media.com/lodging/21000000/20200000/20192500/20192442/39dbafcf.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    "image2_url": "https://content3.jdmagicbox.com/comp/jaisalmer/l9/9999p2992.2992.180611120055.a7l9/catalogue/the-desert-palace-jaisalmer-ho-jaisalmer-hotels-tmazr2v9n6.jpg",
    "image3_url": "https://images.trvl-media.com/lodging/21000000/20200000/20192500/20192442/b3c25a24.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    "image4_url": "https://images.trvl-media.com/lodging/21000000/20200000/20192500/20192442/43d44bd2.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    "description": "Comfortable upscale property with a pool and organized desert excursion packages."
  },

//   Kota
  {
    "id": 59,
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
    "image1_url": "https://radissonhotels.iceportal.com/image/country-inn-suites-by-radisson-kota/guest-room/16256-114457-f63779734_3XL.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/375072469.jpg?k=f7a3d3850cfd383543745a7bd4525356ce8754e33dbac24e1b037eadef73fd85&o=&hp=1",
    "image3_url": "https://media.easemytrip.com/media/Hotel/SHL-21102392978464/Bedroom/BedroomF7bDQu.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/277543788.jpg?k=d23d86e49ba857a3f448ca99bffeb84b52dc0139b4cfe246e006c2fdb1dd4f63&o=&hp=1",
    "description": "Modern business hotel near educational hubs, with outdoor pool, gym and family-friendly rooms."
  },
  {
    "id": 60,
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
    "image1_url": "https://www.theclarkshotels.com/_next/image?url=https%3A%2F%2Fclarkscms.cinuniverse.com%2Fimages%2Fclarks%2Fko7b.jpg&w=1200&q=100",
    "image2_url": "https://pix10.agoda.net/hotelImages/12548872/810961767/3105760e78406cd9a52d283e5ebe2dfe.jpg?ce=0&s=414x232",
    "image3_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGMpOI6ZpEXkQ4pnsOHmHFvE8mhsw3BW9IZcehGY3jSHOh1ODjncZ_g6bnxnv8VZhZqU0&usqp=CAU",
    "image4_url": "https://content3.jdmagicbox.com/v2/comp/kota-rajasthan/r2/9999px744.x744.221214161257.c5r2/catalogue/clarks-premier-kunadi-kota-rajasthan-hotels-mqoz32iz20.jpg",
    "description": "Popular premium hotel serving business and leisure travellers; close to coaching institutes and riverfront."
  },
  {
    "id": 61,
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/663608816.jpg?k=2bac1d854849c78133a816caf3d7a5f89c192791c4cf13ce02fc17042758f025&o=&hp=1",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max200/663615338.jpg?k=40ce310805154d3f3fc8d83742bd4ade2911241f726ab1e43f9b6b8363c469be&o=&hp=1",
    "image3_url": "https://content.skyscnr.com/available/2203434030/2203434030_WxH.jpg",
    "image4_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFSt4HEnesBUAP7o9fX_G1NyjmBDYN604M3DgHqNnKnJJF_Xx8QuoCHsZjEzawKkTliPo&usqp=CAU",
    "description": "Well-known chain hotel near educational hubs with outdoor pool, spa and modern rooms."
  },
  {
    "id": 62,
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/736753136.jpg?k=e0dfe5afb07c65791571cbb63a19678a33051d33a2c597d8c9b4b34273756ad1&o=&hp=1",
    "image2_url": "https://r1imghtlak.mmtcdn.com/4ad53cd4-0397-4739-81eb-df950a154c9d.jpeg",
    "image3_url": "https://r1imghtlak.mmtcdn.com/dc51c716-4565-48bf-aff2-fe6c333f8a9c.jpeg",
    "image4_url": "https://r1imghtlak.mmtcdn.com/5b73a70f-347c-4883-947d-7f877e90abb9.jpeg",
    "description": "Eco-friendly upscale hotel on Deoli Arab Road with pool, meeting rooms and sustainable operations."
  },
  {
    "id": 63,
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
    "image1_url": "https://r1imghtlak.mmtcdn.com/e3304859-ea8f-466d-bf46-43bfc484903b.jpg",
    "image2_url": "https://media.easemytrip.com/media/Hotel/SHL-2501261547059631/Hotel/HotelFnYFEv.png",
    "image3_url": "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202501231156254835-c2e79f2b-b094-4943-bb6d-87048df6a68d.jpg",
    "image4_url": "https://r1imghtlak.mmtcdn.com/8fb0507a-3b33-4434-8916-51111d8e569b.JPG",
    "description": "Stylish mid-range hotel close to City Mall and coaching hubs; comfortable rooms and good dining options."
  },
  {
    "id": 252,
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
    "image1_url": "https://pix10.agoda.net/hotelImages/26961153/-1/a62b2ce6e21bcfa3be44c182fc8dfad8.jpg?ca=26&ce=0&s=414x232",
    "image2_url": "https://media.easemytrip.com/media/Hotel/SHL-22011198324918/Common/Commone4erO4.jpg",
    "image3_url": "https://media.easemytrip.com/media/Hotel/SHL-22011198324918/Common/CommonIR2K29.jpg",
    "image4_url": "https://pix10.agoda.net/hotelImages/26961153/-1/3a86c7d7ad26a07c173f17ac39eb0ee3.jpg?ca=26&ce=0&s=414x232",
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
    "image1_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMNCo7MSD5zOIV5tOS91UJDzdT_26Qm21g5Q&s",
    "image2_url": "https://r1imghtlak.mmtcdn.com/9de99c21-0d1d-4bd1-855f-0044af7d1e62.jpeg",
    "image3_url": "https://q-xx.bstatic.com/xdata/images/hotel/max500/390596585.jpg?k=38f0ad6d4a2bfc582f8bfb1bb7d4ca1ed194de2ef0f082997568cf9e91360f78&o=",
    "image4_url": "https://r1imghtlak.mmtcdn.com/11a58b6207c111e68105001ec9b85d13.jpg",
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
    "image1_url": "https://blessingsonthenet.com/img/uploads/hotels/roomgallery/aim_bn_1_1309102567.jpg",
    "image2_url": "https://welcomheritage-umed-bhawan-palace.hotels-rajasthan.com/data/Pics/OriginalPhoto/10684/1068429/1068429178/welcomheritage-umed-bhawan-palace-kota-rajasthan-pic-1.JPEG",
    "image3_url": "https://pix10.agoda.net/property/24110607/805899636/67b5ed0d0d79ac002792d29cdc0baaff.jpeg?ce=0&s=414x232",
    "image4_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0AeWpO-nVTSwO9xBpODGCQiC4Ol_zeXhYPu0e8hQqKNMXLloGRNsi4Yro3HoWl2V_l2Q&usqp=CAU",
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
    "image1_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSybLUKSHausuxtCqM6vEWE3d_5RWdH6ARc0Q&s",
    "image2_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmkJamlEEaKbwXHRF9tC-foh5UkbcrQqwrKN11C2H8v4iiO7YVhB-KCvpTXQWq4bZG6c&usqp=CAU",
    "image3_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQXPvQB6mKDVEHIxmxyxA0e3UCGZR9XpoK1VkV960r8sIn_J9EWZowKLmURoAthF1P1a0&usqp=CAU",
    "image4_url": "https://s3-cdn.hotellinksolutions.com/hls/data/4704/website/general/bn/mobile_banner1.jpg",
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
    "image1_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO9h3qBi0FH8_yEXOg7aRfpyFyR8EZ3n7sgw&s",
    "image2_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/86/50/18/hotel-midtown-grand.jpg?w=900&h=500&s=1",
    "image3_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjVoN7kzO9Fr2Ze-0y67vGiD0Xy_8hz6BUOBSd7bkiS2UWBUAN0nAqtnS5dvqySGcVhwQ&usqp=CAU",
    "image4_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtWLbLwlBR-KXrro9WbZaGS5OuhVWTJBYqrXqLZVMAkrxGhdHFStBE_40U_Ehpj93Cs74&usqp=CAU",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/82298110.jpg?k=76e32ca16a3d2edb10e940c2383b483e1b4d4af902af2e702f6892da379ade52&o=&hp=1",
    "image2_url": "https://q-xx.bstatic.com/xdata/images/hotel/max500/82298279.jpg?k=f696471f1b25b890981f6f989ec518a742dcee25d985a540ec043513cb766c3d&o=",
    "image3_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY5HNPWht3MFC3e2PyByP5zcMoOH2JoEZL0mr5MowRKhQZAIkJQ8Fu2HWkhUzXtzgFIXI&usqp=CAU",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/82298209.jpg?k=f7434b55985a7d25fbf619b2e59829055cabd770b1bd09eb24ecee05bbaa10fa&o=&hp=1",
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
    "image1_url": "https://gos3.ibcdn.com/bfa2182e928411e990670242ac110002.jpeg",
    "image2_url": "https://content3.jdmagicbox.com/comp/surat/k9/0261px261.x261.180828170600.q2k9/catalogue/hotel-blue-diamond-bardoli-surat-hotels-145q92zyux.jpg",
    "image3_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEYfg7SGLZq3cpkysxVGG4Mh_PYn7pFKKcDGZxev-UyJjiJzohF7Je8rZnCALJ7NcLBzQ&usqp=CAU",
    "image4_url": "https://q-xx.bstatic.com/xdata/images/hotel/max500/697229515.jpg?k=6d718f146c7fcb57875c610e1c79ac59822b92370391615a35a1a4f9d222ddd2&o=",
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
    "image1_url": "https://images.trvl-media.com/lodging/2000000/1070000/1066600/1066597/744e6985.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    "image2_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo5UdsXHe5ijFXZvHPDGNvMgWlTYfKst2W5sm2qbodXug4Kz-nBUlmNeyU2qEqZbDexVc&usqp=CAU",
    "image3_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxAQ7Eof51wZpPHEBqvzCoo21O6QQnpcD6K7anlWwavclH7gKZV_6TH0ZxZd4maUhHhMI&usqp=CAU",
    "image4_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/22/9d/94/img-20191126-wa0020-largejpg.jpg?w=1200&h=1200&s=1",
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
    "image1_url": "https://www.kayak.com/rimg/himg/e9/09/45/leonardo-894010-694397-595660.jpg?width=836&height=607&crop=true",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/734657176.jpg?k=de34b72922d03cbe583426a19046a5a974831e8f1c55ff76fcd7ee5a6c0344cc&o=&hp=1",
    "image3_url": "https://content.skyscnr.com/available/1546428640/1546428640_WxH.jpg",
    "image4_url": "https://images.trvl-media.com/lodging/25000000/24210000/24207800/24207786/180c111e.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
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
    "image1_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/04/7b/1e/four-bed-deluxe.jpg?w=900&h=500&s=1",
    "image2_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/04/7b/30/deluxe-double.jpg?w=900&h=500&s=1",
    "image3_url": "https://pix10.agoda.net/hotelImages/547916/3533193/4801241147f8cfc58cd08097eb5d5a91.jpeg?ce=0&s=414x232",
    "image4_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFj_ufc0HEYIKAOIU37OU6lKbdIt9u9JgSZQ&s",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/532746651.jpg?k=f7f08424b4e470aeb5719d9517cfbf3d51b2bb94255e62b8e802e1052a56db0a&o=&hp=1",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/532746605.jpg?k=0d103eff811f8c7bbb266745aa715ad682090420f4180ae85cdffc0f38f1888f&o=&hp=1",
    "image3_url": "https://images.trvl-media.com/lodging/103000000/102800000/102791900/102791845/9c22cfa5.jpg?impolicy=fcrop&w=1200&h=800&quality=medium",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/532739644.jpg?k=7f33fad80a5dff26dad392dc293c2fd73cad62a2199cadf2e36adefb4540b093&o=&hp=1",
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
    "image1_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ_BTF7kzR04Hx9X1ogmCVveXsTN8rWqorJQ&s",
    "image2_url": "https://q-xx.bstatic.com/xdata/images/hotel/max500/82298279.jpg?k=f696471f1b25b890981f6f989ec518a742dcee25d985a540ec043513cb766c3d&o=",
    "image3_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY5HNPWht3MFC3e2PyByP5zcMoOH2JoEZL0mr5MowRKhQZAIkJQ8Fu2HWkhUzXtzgFIXI&usqp=CAU",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/82298209.jpg?k=f7434b55985a7d25fbf619b2e59829055cabd770b1bd09eb24ecee05bbaa10fa&o=&hp=1",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/668699732.jpg?k=5b5f28841268db7c1c4513dc6c560e040474ec8e159b19bb562fef5b552a00c1&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/668699734.jpg?k=2c88b3710f628c9b60a308f295ba10954c9953db764eb27e06ce295b8b796ebb&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/668699736.jpg?k=12069dd01602c7a4b3d27def627f086c5a21ba76d09e0f3a87d864a42ab6be31&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/668699738.jpg?k=4286c4ec69d89dc95a4f3de899b3f5039caa7feda4e49e9ed4f61c616d82f25b&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090807.jpg?k=c2d3c9a2bec254dea0d3959c59c823ecd48a623b9799ee0e2088562fdddc61e3&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090765.jpg?k=13db65eecc37dac23dac61f148a1a39182a9d85a36d9dda387e20fa8d463178a&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090879.jpg?k=a0f558e69506473c2f24bf7a3d2fc2cce24efbcb39954578eba6a5aec075470f&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090827.jpg?k=0beb8f8bf9dd3d4f4a48fcac467340d9f82ea4cca09363e4465b7502674e56b2&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090801.jpg?k=fb361fd4ba8d4fc49a436eeeab1df511d0d55d05681e9c46802fe6d9a60f0d7a&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090797.jpg?k=61fe57059be79dbe74a5eaca63aa20225c54392c85d058aa7052d49b6f8d03f5&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090763.jpg?k=72b8e5973444c7d0675cf74f9147be8d08bd96064bedeb83dcb147d08034e388&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090762.jpg?k=2b3df28f9037e4d8b27b03eae5bf6646b085080b70bf36ec7338a66f4be817c4&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/687875194.jpg?k=59771b40d01def6d498bcf47aa2892df53917abfd172d957aab8f7ba2f730d36&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/609809851.jpg?k=6d12a766b4cb246d9aaf2f04103d299b1f8a041e152c8b1cba859ac37b27a2b8&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/510656383.jpg?k=b7204db5e9d3ddd8c097516aa753ddfb9714e7dad33c2ba98c3a1394b80d81da&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/510907898.jpg?k=c2efe826104e454b04e004e1be8d5a2719253688bb797019864877d6cbafe967&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/609810972.jpg?k=04e9b63e1ce2dd9b4b192be81e0b637f124f38104c7eb373cbbb95fb215f67c2&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/522594821.jpg?k=d6a822f77e410a78b78f8c1e1d0fa46d557657e099216c3d7682eaca8c332a74&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/522897909.jpg?k=d199f833f6a10ce8dd20cee966bae440c63d69fbc6a56d8c8b0292fcc36a4db3&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/522898021.jpg?k=5bfd23daf606001517732c0687e24165efc00be5b1b30be0717266664ba6e9af&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/618303146.jpg?k=5f211aab23a182db19416edab897305e7f84c96561b1dfb486f7d40eefd3890a&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/618303148.jpg?k=0f4bca9f023a6592f35285e2df98d40447f4265a370ea92afa5908c4dfdb05b9&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/305301647.jpg?k=32b79be9f708a4c16bd72c71b72eaa818d212e7134404a3a2f7b60e7e14d2bba&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/246935128.jpg?k=a4320cd1a64b1b304c64b3265c7cb7419a88f65e21651a9d10334cad9be5c89a&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/289754850.jpg?k=5393ca24ef6d8b918ad5b29fc47c34d92d8e7c96ba4774e012732de61cc72f01&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/291518425.jpg?k=9b261512287b3964b767e157bb1e3deea1dc589dbf953e7db18a194fafa384ec&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/291526523.jpg?k=b68c3d399230a68be54c3d483a13747ffa01f1fdfc8a70b35d40c228dae437fb&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/506958567.jpg?k=1cfeb1f5aa644f83137152642517539110f914e904857828580bd4171dba72a1&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/618303075.jpg?k=4bbf22f6fe676a5f4a1883ce9a4d17cee547372d77a5392ea8151eb97073cb24&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/66503044.jpg?k=ad1d8f1469d548e82565a57693a4c02e196ccd25c8e23f41c66f6a3320368062&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/398777796.jpg?k=99b76ecdfc01c20e389941491d5adb46bcfd1e787aff7dc7807a3aaaf197f4c8&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/437694134.jpg?k=445da49640245edc4dce770f9b200cf5f03823b9e291009841bb2443d22c3c9e&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/513121120.jpg?k=2d722bb9e60a1dabbd7fa2c79a29ea7b42587a479a090164ac34b017356eff25&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/508028606.jpg?k=348266fbf46e3985a61fda9e8110c69c7019ff4758b2f0e2ba2b61b19a99f418&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/581537275.jpg?k=93c06bd19a4a18bbf9032d3cc223e696ab4deefb9f59e188f1b07f1708b6f3e7&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/581547964.jpg?k=8c47492e36c0c1ff26bd80a7b9dce039e4385ae63fbb2537a47bb6f3739ed388&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/677348777.jpg?k=ffa3204db96330dcdcdba25857c372750e4c04ad396efb8507f78590a53a6a1d&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/692740664.jpg?k=7edd6585f7cf93f1b496afb4fcb45b6d8027ea4da711fe32f51ade119b5e2c44&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/677349266.jpg?k=db8274a3c2da8759fd7d2a8d7bda758452c9b848fdcabe00d25c22168d8e2caf&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/688544881.jpg?k=215078c90da275be1e956e5f1690a67fc40fe0c70c496d2adb7685985d3af668&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/289754850.jpg?k=5393ca24ef6d8b918ad5b29fc47c34d92d8e7c96ba4774e012732de61cc72f01&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/291518425.jpg?k=9b261512287b3964b767e157bb1e3deea1dc589dbf953e7db18a194fafa384ec&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/291526523.jpg?k=b68c3d399230a68be54c3d483a13747ffa01f1fdfc8a70b35d40c228dae437fb&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/506958567.jpg?k=1cfeb1f5aa644f83137152642517539110f914e904857828580bd4171dba72a1&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/658196410.jpg?k=ddfccf2112af162a665124a6eb55d7ddc87553ba24e7b13cbab7eb34fccd86d6&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/658196503.jpg?k=eee37aa7bcacc581e06bfbf058c096cb7afecd5e3aa51d385c9e223d0f8fcf70&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/658196359.jpg?k=8818d33690b7293517572d291c5cc26b4aaba8b61166a41ebd2bd308da31a3d5&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/658196439.jpg?k=3c3e91a761bb541ded4fb52ae9da41f214a26c465b4ed266c272d1c71ddbdc01&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/497152824.jpg?k=6a0c3e5f027cd2059937901dc6e0e2e99cd578d6aa7ea4be8ea87dff281887ab&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/497384797.jpg?k=42ba85e14f6a67ff06a42af43211d21b12a05f09cb2f3aa0abcc26b0b8dd5258&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/497385459.jpg?k=af7e6dfba91429e54e90e30e30f177e30ab9a2a074a48e0b9b4e43107b25e454&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/705648791.jpg?k=4a40bedbd7a1a57aa29ffbb0649e99b119dd41c9174a0fafdbeb3bdcfd05af07&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/639557121.jpg?k=caed499385f0a1d83a2488cffcb16701bbf17e4bb390f9e680881a6cd4130783&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/639557162.jpg?k=f776d1dc426c32e5e65e55d15e016a8371968cedbc32ad71ae8e0010b279ea80&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/639557157.jpg?k=d38fba8558f987d5c80bae1dae48dc13dd09cab5b0268bcdf6948f0ccf3252b3&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/639557178.jpg?k=12f914e8f48aedb53a36a7e440f8cd788c7ff9c27c02b509598e659200de3e8d&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/526862966.jpg?k=432b86517fd924059172c8208d7de7fd33abb31ea5294edec7e1c274e78e0422&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/485506890.jpg?k=9c7a9425f228964b821e86849e0f991a919752bf2ea8831f7aa62d43a79b48ae&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/485506416.jpg?k=0d5061c6de5fe752b0139674ba31150ba4322939547d08f0ba525d8e980332a0&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/485507979.jpg?k=6899e0ac2485df20e642d18ee52867b8dba0e2a1e5c49b77e79d5a7f96cde064&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/708442365.jpg?k=90bb4e70f3daa7b6348a691ef0de7b4da38ab33de4ad2279b02f6514340f21ae&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/708442565.jpg?k=7c13514f26d30a3d6e80a60566b1b7156c161ba69ecb02c0e072e9ec95d512f2&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/675917491.jpg?k=2904e25df0eb53d10943d18e21bf6a9f8d10dc4beb591bbe21b0ae273a9e4791&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/708519805.jpg?k=db12a5d4f2615d0773cf6897b7c496d25f8bf7e9b43fa8720118c1d3c7550db9&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090863.jpg?k=e4cb6a665adbd698ccd9ba4e591f2a8516e951a007d7a625e8d0991fdacfaadc&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090769.jpg?k=0c3007bb22bde568c3bf09c79f9e3e082201e66dc190bb0b2e224d3723e900d8&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090885.jpg?k=9ef1c0f5d72e74e90a30e1b83cb010f156e00d0e86d32c944d2502534dff4be7&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090848.jpg?k=e5c26ec46c6f5412b08826682da412c4c0c76c5b910c0264014082457c715138&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/677348777.jpg?k=ffa3204db96330dcdcdba25857c372750e4c04ad396efb8507f78590a53a6a1d&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/692740664.jpg?k=7edd6585f7cf93f1b496afb4fcb45b6d8027ea4da711fe32f51ade119b5e2c44&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/677349266.jpg?k=db8274a3c2da8759fd7d2a8d7bda758452c9b848fdcabe00d25c22168d8e2caf&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/688544881.jpg?k=215078c90da275be1e956e5f1690a67fc40fe0c70c496d2adb7685985d3af668&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/66502995.jpg?k=b2567b34a2e134a75551301424eddf8973e9e5e702b2672f058fb26e8350c3b2&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/437694160.jpg?k=dc02b4f5bc7f2cebcf12b74755319419084f9454e3ecd0b542a654fff4a74296&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/437694126.jpg?k=8bc14c56faf5c999bce803a901060dbc817b4105434c9fbdb0565dd69974059f&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/437694127.jpg?k=3b3a420266b3d8fb98cca61e31d1d7d3d55f243b57f0d714d8c42b1035ee5302&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/735058810.jpg?k=da19797d956ee9b59beb676f9723525ace43e41aade366d99e5bb1a1766655bb&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/484544433.jpg?k=974af48e42b0bf00ca642a679c18482736e5b3dfc6f6baceaaf5fbadc7a07492&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/729479294.jpg?k=cbe9a8bf2226227f77aa1d4691eb3c83fc7153467af1ac0ec6c3c4b9e6f24b7d&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/735062759.jpg?k=ca0ebd7829012910d66d7b6dbf34d380b8b641ea0f83305a1fb62d1f1b639ee1&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/160050285.jpg?k=d097d9b7d6cb8018dbf345346d44884ecf83b6efe9b2563699df45fcdc2fb124&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/160050132.jpg?k=06bff38f48f9dfe653d295a984c6f8ccdd3862e8645c4022344466446a950117&o= ",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/160050133.jpg?k=e4c699c499aa32127f6602a244b5b5ee588143878fbf7180a4858f16a6d822cc&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/90280316.jpg?k=863e555cb804778a0b36be509b9e72970c2d491fcf16ed26e418c14064a9b8f8&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/602221040.jpg?k=53b0739ddcd7ac72604bafe96ab3d213aeaf7995d0d636e5aa48651a5abb0055&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/602223896.jpg?k=fe034234013ee026bc1662b111bdd570cdf71f4482b6a15645e59fe7f9ac764a&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/602220109.jpg?k=3457dd681e25cf20de914cbb73610517633b97b4d0abf758626b3a850a92991d&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/602220476.jpg?k=afa5591aaba4e7cc40a1f4a9ec882f00fccdc367cfb8610c6d133e50479b0a1e&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/685085550.jpg?k=ad0fe1b02cb64624ccf160aee4d8c52caf861077854040d4e5b84df1994ed312&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/684791575.jpg?k=27d5af0f3ca1b2910520accc72fdf79c8aa38da787ec735318cb33665f83fbba&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/537748568.jpg?k=c1ef13e859f0618ba47369fbeb2438c5262911d97403e505216c144d6ee95033&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/415932741.jpg?k=9adeb4823375babd0776615abf36ed214d14489813a5b6cce01d1b43c168a208&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/600061476.jpg?k=a0ef8f1b683890c1be8cbd96ee912d67315f5e62fd30d93e072ef615e62eb138&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/600061504.jpg?k=616397d1a874b200156634a75f40e0e64c099fc85c9b1aa76c173cc5d4849b25&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/600061492.jpg?k=d932e63d98901b6b8a5e472f612df73ca4d89cef9138f435e0ff8ebd520ce887&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/600061878.jpg?k=63ddc0b8384d5b487d43187c71c2467761436722875b2443f34ac561b58d6bb7&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/584706758.jpg?k=08b914bfa202074561e4eb250bb065794d57f329f137c8d201b40a4ef5abd2c6&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/584061345.jpg?k=aa42afb7a5b95ef8ee1c6728deff7f57ce43a1dbbc0d5e48b35fd3d74f1d1bbd&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/584061247.jpg?k=f93e0ba72c34975910f6c525e579d119fdebc74129c89875eacc69094c38176b&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/585990173.jpg?k=d7743ca72df170686bacab6442ab4040a2d2b0ce3baf64db5d254914285b71e2&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/577792903.jpg?k=37e1c9db38af8cc538987133300c1ffb48d5a58a18d87cd470806341148be192&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/584016311.jpg?k=fd9f9219420b47b8c4a064a340a82eab94872abc7c2f182356f05240914cda13&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/584016657.jpg?k=773959ba522732472066b64165895e90c0e09606c0ad28cd7e4c38666f7ddc27&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/577789977.jpg?k=a27cb8f0f6d749814fa8a09055352b0cccb78bffd4b79f79f71a3d8ff2c9d6a1&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/398012269.jpg?k=2f45456bdb98e943f8262eb6478241480ae6e8839b29641aec5390d559319fe4&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/227368434.jpg?k=729c81d3911f4fd3a424bf3744cd82209b0349605cef26b5ae74c94eae32dd33&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/398384340.jpg?k=31e7205a53c8a2b25ea2c80d3be06fb81fbb618a81c8e793d6989213803f7830&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/227367275.jpg?k=b0a05fb45924e74e79c0a1eb342d2e3cb6aa3030f456c403435995f9761efddb&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/593506677.jpg?k=dc53632e154d734c7efd74edbc37dca1f544906ad931574fc631d05d50914991&o=&hp=1",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/593506116.jpg?k=4f879b0d48d4f842d55c82546a2f871d107db1cfc9fc6e69c283992f201d8646&o=&hp=1",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/593506676.jpg?k=5b1a23ba5d8e16d1db6dea18ed420a23036df2c8879d959d4b553818b47b4e67&o=&hp=1",
    "image4_url": "https://content.jdmagicbox.com/comp/jaisalmer/x8/9999p2992.2992.130511121022.y5x8/catalogue/hotel-oasis-haveli-shiv-road-jaisalmer-hotels-rs-1001-to-rs-2000--05g6o7v8e9-250.jpg",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/556814784.jpg?k=b8c8e80ed01852a816d1a659274f0974414be0e10a0a7f42a6bbd3f615e05073&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/556814905.jpg?k=e4da9dd10f140b5a17d8cd6cf831af9e78bdcb9b6a09c4f659b6ace80ddbf858&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/556814946.jpg?k=8ed5ec0a5fc3283e7efe0d2fd707b8c2c46cf426ce861d68ca614ff8adf3424c&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/556814775.jpg?k=03aa75befcc22f4ad48841d72a9c009ca79a0d179efab41b4cd7c961ccf26735&o=",
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
    "image1_url": "https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000",
    "image2_url": "https://i.pinimg.com/236x/4d/19/0b/4d190b4b429465adf0f4aa1bd8a9222a.jpg",
    "image3_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/ce55f9141215185.624f4d9f805d9.jpg",
    "image4_url": "https://i.pinimg.com/564x/64/8c/6f/648c6fbc2b4da9c936d70d0468d6d880.jpg",
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
    "image1_url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "image2_url": "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "image3_url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "image4_url": "https://i.pinimg.com/236x/4d/19/0b/4d190b4b429465adf0f4aa1bd8a9222a.jpg",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/257718596.jpg?k=6b51f53ef71e15a50a381ee32c732bf59f6549e2f10e100a06cc91dd10d09025&o=&hp=1",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/257276384.jpg?k=fa64cae38a878c1fc52feec5a9c28e1346a203691280323401926787f3e7465d&o=&hp=1",
    "image3_url": "https://images.trvl-media.com/lodging/2000000/1080000/1071900/1071809/da1ab02b.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/688129955.jpg?k=c5e74addc2f4dca7ae1b4556a6c51a6f8d6f8f2c339d0b8623fb1005c0e216d0&o=&hp=1"
    , "description": "Luxury palace-style hotel offering opulent rooms, spa, fine dining, and royal décor."
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
    "image1_url": "https://images.trvl-media.com/lodging/39000000/38650000/38648400/38648393/c8f88180.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/353890487.jpg?k=ea01c1d4b31f62952a355b69e682c65f45651842d0ca0a0bf24a05238ec997b2&o=&hp=1",
    "image3_url": "https://images.trvl-media.com/lodging/39000000/38650000/38648400/38648393/8b261be0.jpg?impolicy=fcrop&w=1200&h=800&quality=medium",
    "image4_url": "https://images.trvl-media.com/lodging/39000000/38650000/38648400/38648393/63bcd7ec.jpg?impolicy=fcrop&w=1200&h=800&quality=medium",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/86756718.jpg?k=1e5618d5a6a4f1ffc2b7b41f66e35a4520664d798358b74ad72dce784d7ebd85&o=&hp=1",
    "image2_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXIHeNvBZjw4lYYoX_QJUmaN7JVk8LZ8nKS0HF2UmTJwIWus1aTEe3W878yODnBcd-K9c&usqp=CAU",
    "image3_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/05/33/eb/swimming-pool.jpg?w=900&h=500&s=1",
    "image4_url": "https://pix10.agoda.net/hotelImages/444126/-1/837aa2ade2f5095b5a196b082f5697a6.jpg?ce=0&s=414x232",
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
    "image1_url": "https://r1imghtlak.mmtcdn.com/a08f3596236f11e8bdbc025f77df004f.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/32617602.jpg?k=71bdc7a74fe80cd53bde08971867bf6579c456ed646b054ba7be4674085a2817&o=&hp=1",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/33118049.jpg?k=8cb40ead813432452916348829776363d70df2f7a5a8f23197168628a5e0c4ed&o=&hp=1",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/240127415.jpg?k=98864df41f995e64d54f509c0dce818d9476db954922f38d65b0a97839449b5b&o=&hp=1",
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
    "image1_url": "https://www.hilton.com/im/en/JAIGHHI/3067273/twin-bed-room-day-shot.jpg?impolicy=crop&cw=4789&ch=3193&gravity=NorthWest&xposition=105&yposition=0&rw=1280&rh=854",
    "image2_url": "https://www.hilton.com/im/en/JAIGHHI/3065453/guest-room-living-bath.jpg?impolicy=crop&cw=4614&ch=3076&gravity=NorthWest&xposition=69&yposition=0&rw=1280&rh=854",
    "image3_url": "https://www.hilton.com/im/en/JAIGHHI/18227974/jaigh-suite-living-area.jpg?impolicy=crop&cw=5000&ch=3333&gravity=NorthWest&xposition=0&yposition=-1&rw=1280&rh=854",
    "image4_url": "https://content.r9cdn.net/rimg/himg/6d/ef/b8/expedia_group-2108712-a2b768-531068.jpg?width=500&height=350&xhint=540&yhint=333&crop=true",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/239614656.jpg?k=98c1bdff4165a9b12282f89138a34c6fff17d205505d27b98f3b3a2ee12cebf4&o=&hp=1",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/239614664.jpg?k=20e9f95d5eb176f5cdccf07807d92684a9bcaf552958296d8875c1a59219d82c&o=&hp=1",
    "image3_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/f7/e0/98/suvarna-mahal-royal-indian.jpg?w=900&h=500&s=1",
    "image4_url": "https://www.experiencetravelgroup.com/wp-content/uploads/2025/07/1-hero-Taj-Rambagh-Palace-6-1.jpg",
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
    "image1_url": "https://m.ahstatic.com/is/image/accorhotels/aja_p_6913-95:3by2?fmt=jpg&op_usm=1.75,0.3,2,0&resMode=sharp2&iccEmbed=true&icc=sRGB&dpr=on,1.5&wid=335&hei=223&qlt=80",
    "image2_url": "https://m.ahstatic.com/is/image/accorhotels/aja_p_6546-41:4by3?fmt=jpg&op_usm=1.75,0.3,2,0&resMode=sharp2&iccEmbed=true&icc=sRGB&dpr=on,1.5&wid=335&hei=251&qlt=80",
    "image3_url": "https://m.ahstatic.com/is/image/accorhotels/aja_p_5819-35:4by3?fmt=jpg&op_usm=1.75,0.3,2,0&resMode=sharp2&iccEmbed=true&icc=sRGB&dpr=on,1.5&wid=335&hei=251&qlt=80",
    "image4_url": "https://m.ahstatic.com/is/image/accorhotels/aja_p_6546-39:4by3?fmt=jpg&op_usm=1.75,0.3,2,0&resMode=sharp2&iccEmbed=true&icc=sRGB&dpr=on,1.5&wid=335&hei=251&qlt=80",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/93398363.jpg?k=e9bda4c9541d94ffd1d4424f7f943d0116929e9a140983394f12d86331d94f51&o=&hp=1",
    "image2_url": "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
    "image3_url": "https://r1imghtlak.mmtcdn.com/8a455fe0-5be5-4596-aeb4-bf436fc991d1.jpg",
    "image4_url": "https://www.oberoihotels.com/-/media/oberoi-hotel/the-oberoi-rajvilas/rajvilas-new/gallery/desktop1640x1292/16.jpg",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/22490300.jpg?k=32a2fe48b2d342e69639b7b80adb8ab3fe590e2e7443ddf983db552973b58aa9&o=&hp=1",
    "image2_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr34VaK7Fyd1P-tqaKDGSSLZZ8QrgMA2_qOHb8GGvMmqEeJ7DZx-_PEM7IUrNphG8wa3Y&usqp=CAU",
    "image3_url": "https://images.trvl-media.com/lodging/1000000/860000/857300/857268/5effe473.jpg?impolicy=fcrop&w=1200&h=800&quality=medium",
    "image4_url": "https://r1imghtlak.mmtcdn.com/8cff5ac8090c11e9ad8d0242ac110002.jpg",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/628232305.jpg?k=b754bb6b0488c4944dc9554398d976edee233d54dbb939b58ce4a3c5a269a721&o=&hp=1",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/628232362.jpg?k=1f04663c830c6613f8c9cb26dea0c9753df2089184d3f16545b384d323a99126&o=&hp=1",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/628232300.jpg?k=36f9ff4b4c28515187703592d640f832f68f3dc51d8fe0af59a22cde2f15b7cf&o=&hp=1",
    "image4_url": "https://media-cdn.tripadvisor.com/media/photo-s/03/f1/89/c1/itc-rajputana-jaipur.jpg",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470311027.jpg?k=b57c7a7fad6c2236b1995562d4f0e0900f7c773eb89efd8aa2af7b025d6387f4&o=&hp=1",
    "image2_url": "https://cache.marriott.com/content/dam/marriott-renditions/JAIMD/jaimd-king-guestroom-gardenview-1186-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/643562691.jpg?k=abb7897212d2c04241f2022dc8e9f9acab20d18526c6e0ba0814ac307b6c9e03&o=&hp=1",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/643562737.jpg?k=16c5fac3005eb8079ae3b158903ffe97d31a36a7127613a366e1ca694d7436f9&o=&hp=1",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/413511584.jpg?k=f3e9196525ea6f135de6bd5a8a9e9fd515f93e6458514f741cddc21cc488441b&o=&hp=1",
    "image2_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7xnMCi0ikRTQy1_FsAexFhs9YeA4zz4YEXn7g_XrlTzUk9FR1Q7QNW38udCTqaaRLeCY&usqp=CAU",
    "image3_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/a7/8b/67/caption.jpg?w=700&h=-1&s=1",
    "image4_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/4f/66/cd/caption.jpg?w=1200&h=1200&s=1",
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
    "image1_url": "https://api.suryagarhcollection.com//media/lzmll1js/suryagarh_rooms_pavillion-room_1.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/267846788.jpg?k=97c9d24fbc62f246ff5078376fd0474433a9830588496072ee858b869780f9e7&o=&hp=1",
    "image3_url": "https://r1imghtlak.mmtcdn.com/d33b0f3665b011e9a0b30242ac110002.jpg",
    "image4_url": "https://r1imghtlak.mmtcdn.com/d01f426af50711e78b3b0a209fbd0127.jpg",
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
    "image1_url": "https://cache.marriott.com/content/dam/marriott-renditions/JSAMC/jsamc-twin-room-2786-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1920px:*",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/479469069.jpg?k=584dbc75787b2665268261c573d2552194671281e55b7e28b3904d9153200c3c&o=&hp=1",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/479481383.jpg?k=c743a0913c4959546b9c5a239481547c6d63167fac523d952dace438028d4484&o=&hp=1",
    "image4_url": "https://pix10.agoda.net/property/49403345/777744198/2ff85a208e733cf583fb317a5fbf92ec.jpeg?ce=0&s=414x232",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/527875960.jpg?k=e889eab5b75050accee16a300be841f23d7b9bc17f43e046de53fab154feb301&o=&hp=1",
    "image2_url": "https://www.kayak.com/rimg/himg/92/f3/9f/expediav2-4476-5ee75b-639683.jpg?width=1366&height=768&crop=true",
    "image3_url": "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/527862534.jpg?k=4ab42c098a16a9779ddd28b24b0f7fab1e5c79674edc96fdc46b6e21f179fb71&o=",
    "image4_url": "https://images.trvl-media.com/lodging/1000000/900000/891800/891790/54a82fc0.jpg?impolicy=fcrop&w=1200&h=800&quality=medium",
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
    "image1_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9KgfeoPuJxe36E7igIFTDXiLR0Xx-VDbeBQ&s",
    "image2_url": "https://the-gulaal.hotels-rajasthan.com/data/Pics/OriginalPhoto/16097/1609733/1609733764/the-gulaal-jaisalmer-pic-21.JPEG",
    "image3_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/75/a6/1b/suite-room.jpg?w=900&h=500&s=1",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/325008895.jpg?k=cccfabf024077e646b241fa21c97a6c69f7e5458267ffa4052f6c0c0ec809062&o=&hp=1",
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
    "image1_url": "https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/https://www.cfmedia.vfmleonardo.com/imageRepo/7/0/145/708/295/_DSC7307_3_O/Palace-Hotel-Tokyo-Exterior.jpg?tr=w-656%2Ch-390%2Cfo-auto",
    "image2_url": "https://en.palacehoteltokyo.com/wp-content/uploads/Palace-Hotel-Tokyo-Deluxe-Room-with-Balcony-King-Daytime-2023-Gallery-640x470.jpg",
    "image3_url": "https://static-new.lhw.com/HotelImages/Rooms/Final/7058/room_7058_A1K_1_300x240.jpg",
    "image4_url": "https://en.palacehoteltokyo.com/wp-content/uploads/Palace-Hotel-Tokyo-Deluxe-Room-with-Balcony-Bath-Evening-2023-Gallery-640x470.jpg",
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
    "image1_url": "https://media.easemytrip.com/media/Hotel/SHL-22021480544532/Common/CommonaNEqs0.jpg",
    "image2_url": "https://fortrajwada.com/images/Room%20Opposite%20Round%20Bed%204.jpg",
    "image3_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAeYukkCtahZgrWCnaSU285WV7deW0_kGjoyWK3-IBgZ36S27cYxcOv7QouX4dlersKPM&usqp=CAU",
    "image4_url": "https://images.trvl-media.com/lodging/12000000/11980000/11973700/11973698/4e51a5b3.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
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
    "image1_url": "https://media.easemytrip.com/media/Hotel/SHL-22031581745314/Common/CommonZXnUej.jpg",
    "image2_url": "https://www.welcomheritagehotels.in/app/uploaded_files/hotel_room/-Golden%20Suite%201a41346.jpg",
    "image3_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRANQtj3Ul2qe1mzQmUkpF5yQFwDOEeBTYSE6HIYFm08bieu3BzX0vnhvnVHI1gWIRGscg&usqp=CAU",
    "image4_url": "https://www.welcomheritagehotels.in/app/uploaded_files/hotel_room/-Deluxe%20Room%20(2)31024.jpg",
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
    "image1_url": "https://daahy6akrtcj2.cloudfront.net/hotelsinjaisalmer.co.in/photos/1800310503.jpg",
    "image2_url": "https://q-xx.bstatic.com/xdata/images/hotel/max500/436266876.jpg?k=fad9be2c76ee0063bcf0d8b98a81acb57790ba5d5a90aa499c39d9cd848a01ce&o=",
    "image3_url": "https://q-xx.bstatic.com/xdata/images/hotel/max500/436266880.jpg?k=f3dd3f25fe2f2f32d154cb71bcaa0d344be37f7a1f4e8094c95e5fe4307983f1&o=",
    "image4_url": "https://images.trvl-media.com/lodging/22000000/21610000/21605500/21605473/0367e518.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
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
    "image1_url": "https://images.trvl-media.com/lodging/21000000/20200000/20192500/20192442/39dbafcf.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    "image2_url": "https://content3.jdmagicbox.com/comp/jaisalmer/l9/9999p2992.2992.180611120055.a7l9/catalogue/the-desert-palace-jaisalmer-ho-jaisalmer-hotels-tmazr2v9n6.jpg",
    "image3_url": "https://images.trvl-media.com/lodging/21000000/20200000/20192500/20192442/b3c25a24.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    "image4_url": "https://images.trvl-media.com/lodging/21000000/20200000/20192500/20192442/43d44bd2.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
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
    "image1_url": "https://radissonhotels.iceportal.com/image/country-inn-suites-by-radisson-kota/guest-room/16256-114457-f63779734_3XL.jpg",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/375072469.jpg?k=f7a3d3850cfd383543745a7bd4525356ce8754e33dbac24e1b037eadef73fd85&o=&hp=1",
    "image3_url": "https://media.easemytrip.com/media/Hotel/SHL-21102392978464/Bedroom/BedroomF7bDQu.jpg",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/277543788.jpg?k=d23d86e49ba857a3f448ca99bffeb84b52dc0139b4cfe246e006c2fdb1dd4f63&o=&hp=1",
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
    "image1_url": "https://www.theclarkshotels.com/_next/image?url=https%3A%2F%2Fclarkscms.cinuniverse.com%2Fimages%2Fclarks%2Fko7b.jpg&w=1200&q=100",
    "image2_url": "https://pix10.agoda.net/hotelImages/12548872/810961767/3105760e78406cd9a52d283e5ebe2dfe.jpg?ce=0&s=414x232",
    "image3_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGMpOI6ZpEXkQ4pnsOHmHFvE8mhsw3BW9IZcehGY3jSHOh1ODjncZ_g6bnxnv8VZhZqU0&usqp=CAU",
    "image4_url": "https://content3.jdmagicbox.com/v2/comp/kota-rajasthan/r2/9999px744.x744.221214161257.c5r2/catalogue/clarks-premier-kunadi-kota-rajasthan-hotels-mqoz32iz20.jpg",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/663608816.jpg?k=2bac1d854849c78133a816caf3d7a5f89c192791c4cf13ce02fc17042758f025&o=&hp=1",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max200/663615338.jpg?k=40ce310805154d3f3fc8d83742bd4ade2911241f726ab1e43f9b6b8363c469be&o=&hp=1",
    "image3_url": "https://content.skyscnr.com/available/2203434030/2203434030_WxH.jpg",
    "image4_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFSt4HEnesBUAP7o9fX_G1NyjmBDYN604M3DgHqNnKnJJF_Xx8QuoCHsZjEzawKkTliPo&usqp=CAU",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/736753136.jpg?k=e0dfe5afb07c65791571cbb63a19678a33051d33a2c597d8c9b4b34273756ad1&o=&hp=1",
    "image2_url": "https://r1imghtlak.mmtcdn.com/4ad53cd4-0397-4739-81eb-df950a154c9d.jpeg",
    "image3_url": "https://r1imghtlak.mmtcdn.com/dc51c716-4565-48bf-aff2-fe6c333f8a9c.jpeg",
    "image4_url": "https://r1imghtlak.mmtcdn.com/5b73a70f-347c-4883-947d-7f877e90abb9.jpeg",
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
    "image1_url": "https://r1imghtlak.mmtcdn.com/e3304859-ea8f-466d-bf46-43bfc484903b.jpg",
    "image2_url": "https://media.easemytrip.com/media/Hotel/SHL-2501261547059631/Hotel/HotelFnYFEv.png",
    "image3_url": "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202501231156254835-c2e79f2b-b094-4943-bb6d-87048df6a68d.jpg",
    "image4_url": "https://r1imghtlak.mmtcdn.com/8fb0507a-3b33-4434-8916-51111d8e569b.JPG",
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
    "image1_url": "https://pix10.agoda.net/hotelImages/26961153/-1/a62b2ce6e21bcfa3be44c182fc8dfad8.jpg?ca=26&ce=0&s=414x232",
    "image2_url": "https://media.easemytrip.com/media/Hotel/SHL-22011198324918/Common/Commone4erO4.jpg",
    "image3_url": "https://media.easemytrip.com/media/Hotel/SHL-22011198324918/Common/CommonIR2K29.jpg",
    "image4_url": "https://pix10.agoda.net/hotelImages/26961153/-1/3a86c7d7ad26a07c173f17ac39eb0ee3.jpg?ca=26&ce=0&s=414x232",
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
    "image1_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMNCo7MSD5zOIV5tOS91UJDzdT_26Qm21g5Q&s",
    "image2_url": "https://r1imghtlak.mmtcdn.com/9de99c21-0d1d-4bd1-855f-0044af7d1e62.jpeg",
    "image3_url": "https://q-xx.bstatic.com/xdata/images/hotel/max500/390596585.jpg?k=38f0ad6d4a2bfc582f8bfb1bb7d4ca1ed194de2ef0f082997568cf9e91360f78&o=",
    "image4_url": "https://r1imghtlak.mmtcdn.com/11a58b6207c111e68105001ec9b85d13.jpg",
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
    "image1_url": "https://blessingsonthenet.com/img/uploads/hotels/roomgallery/aim_bn_1_1309102567.jpg",
    "image2_url": "https://welcomheritage-umed-bhawan-palace.hotels-rajasthan.com/data/Pics/OriginalPhoto/10684/1068429/1068429178/welcomheritage-umed-bhawan-palace-kota-rajasthan-pic-1.JPEG",
    "image3_url": "https://pix10.agoda.net/property/24110607/805899636/67b5ed0d0d79ac002792d29cdc0baaff.jpeg?ce=0&s=414x232",
    "image4_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0AeWpO-nVTSwO9xBpODGCQiC4Ol_zeXhYPu0e8hQqKNMXLloGRNsi4Yro3HoWl2V_l2Q&usqp=CAU",
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
    "image1_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSybLUKSHausuxtCqM6vEWE3d_5RWdH6ARc0Q&s",
    "image2_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmkJamlEEaKbwXHRF9tC-foh5UkbcrQqwrKN11C2H8v4iiO7YVhB-KCvpTXQWq4bZG6c&usqp=CAU",
    "image3_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQXPvQB6mKDVEHIxmxyxA0e3UCGZR9XpoK1VkV960r8sIn_J9EWZowKLmURoAthF1P1a0&usqp=CAU",
    "image4_url": "https://s3-cdn.hotellinksolutions.com/hls/data/4704/website/general/bn/mobile_banner1.jpg",
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
    "image1_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO9h3qBi0FH8_yEXOg7aRfpyFyR8EZ3n7sgw&s",
    "image2_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/86/50/18/hotel-midtown-grand.jpg?w=900&h=500&s=1",
    "image3_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjVoN7kzO9Fr2Ze-0y67vGiD0Xy_8hz6BUOBSd7bkiS2UWBUAN0nAqtnS5dvqySGcVhwQ&usqp=CAU",
    "image4_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtWLbLwlBR-KXrro9WbZaGS5OuhVWTJBYqrXqLZVMAkrxGhdHFStBE_40U_Ehpj93Cs74&usqp=CAU",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/82298110.jpg?k=76e32ca16a3d2edb10e940c2383b483e1b4d4af902af2e702f6892da379ade52&o=&hp=1",
    "image2_url": "https://q-xx.bstatic.com/xdata/images/hotel/max500/82298279.jpg?k=f696471f1b25b890981f6f989ec518a742dcee25d985a540ec043513cb766c3d&o=",
    "image3_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY5HNPWht3MFC3e2PyByP5zcMoOH2JoEZL0mr5MowRKhQZAIkJQ8Fu2HWkhUzXtzgFIXI&usqp=CAU",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/82298209.jpg?k=f7434b55985a7d25fbf619b2e59829055cabd770b1bd09eb24ecee05bbaa10fa&o=&hp=1",
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
    "image1_url": "https://gos3.ibcdn.com/bfa2182e928411e990670242ac110002.jpeg",
    "image2_url": "https://content3.jdmagicbox.com/comp/surat/k9/0261px261.x261.180828170600.q2k9/catalogue/hotel-blue-diamond-bardoli-surat-hotels-145q92zyux.jpg",
    "image3_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEYfg7SGLZq3cpkysxVGG4Mh_PYn7pFKKcDGZxev-UyJjiJzohF7Je8rZnCALJ7NcLBzQ&usqp=CAU",
    "image4_url": "https://q-xx.bstatic.com/xdata/images/hotel/max500/697229515.jpg?k=6d718f146c7fcb57875c610e1c79ac59822b92370391615a35a1a4f9d222ddd2&o=",
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
    "image1_url": "https://images.trvl-media.com/lodging/2000000/1070000/1066600/1066597/744e6985.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    "image2_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo5UdsXHe5ijFXZvHPDGNvMgWlTYfKst2W5sm2qbodXug4Kz-nBUlmNeyU2qEqZbDexVc&usqp=CAU",
    "image3_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxAQ7Eof51wZpPHEBqvzCoo21O6QQnpcD6K7anlWwavclH7gKZV_6TH0ZxZd4maUhHhMI&usqp=CAU",
    "image4_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/22/9d/94/img-20191126-wa0020-largejpg.jpg?w=1200&h=1200&s=1",
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
    "image1_url": "https://www.kayak.com/rimg/himg/e9/09/45/leonardo-894010-694397-595660.jpg?width=836&height=607&crop=true",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/734657176.jpg?k=de34b72922d03cbe583426a19046a5a974831e8f1c55ff76fcd7ee5a6c0344cc&o=&hp=1",
    "image3_url": "https://content.skyscnr.com/available/1546428640/1546428640_WxH.jpg",
    "image4_url": "https://images.trvl-media.com/lodging/25000000/24210000/24207800/24207786/180c111e.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
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
    "image1_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/04/7b/1e/four-bed-deluxe.jpg?w=900&h=500&s=1",
    "image2_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/04/7b/30/deluxe-double.jpg?w=900&h=500&s=1",
    "image3_url": "https://pix10.agoda.net/hotelImages/547916/3533193/4801241147f8cfc58cd08097eb5d5a91.jpeg?ce=0&s=414x232",
    "image4_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFj_ufc0HEYIKAOIU37OU6lKbdIt9u9JgSZQ&s",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/532746651.jpg?k=f7f08424b4e470aeb5719d9517cfbf3d51b2bb94255e62b8e802e1052a56db0a&o=&hp=1",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/532746605.jpg?k=0d103eff811f8c7bbb266745aa715ad682090420f4180ae85cdffc0f38f1888f&o=&hp=1",
    "image3_url": "https://images.trvl-media.com/lodging/103000000/102800000/102791900/102791845/9c22cfa5.jpg?impolicy=fcrop&w=1200&h=800&quality=medium",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/532739644.jpg?k=7f33fad80a5dff26dad392dc293c2fd73cad62a2199cadf2e36adefb4540b093&o=&hp=1",
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
    "image1_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ_BTF7kzR04Hx9X1ogmCVveXsTN8rWqorJQ&s",
    "image2_url": "https://q-xx.bstatic.com/xdata/images/hotel/max500/82298279.jpg?k=f696471f1b25b890981f6f989ec518a742dcee25d985a540ec043513cb766c3d&o=",
    "image3_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY5HNPWht3MFC3e2PyByP5zcMoOH2JoEZL0mr5MowRKhQZAIkJQ8Fu2HWkhUzXtzgFIXI&usqp=CAU",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/82298209.jpg?k=f7434b55985a7d25fbf619b2e59829055cabd770b1bd09eb24ecee05bbaa10fa&o=&hp=1",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/668699732.jpg?k=5b5f28841268db7c1c4513dc6c560e040474ec8e159b19bb562fef5b552a00c1&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/668699734.jpg?k=2c88b3710f628c9b60a308f295ba10954c9953db764eb27e06ce295b8b796ebb&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/668699736.jpg?k=12069dd01602c7a4b3d27def627f086c5a21ba76d09e0f3a87d864a42ab6be31&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/668699738.jpg?k=4286c4ec69d89dc95a4f3de899b3f5039caa7feda4e49e9ed4f61c616d82f25b&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090807.jpg?k=c2d3c9a2bec254dea0d3959c59c823ecd48a623b9799ee0e2088562fdddc61e3&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090765.jpg?k=13db65eecc37dac23dac61f148a1a39182a9d85a36d9dda387e20fa8d463178a&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090879.jpg?k=a0f558e69506473c2f24bf7a3d2fc2cce24efbcb39954578eba6a5aec075470f&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090827.jpg?k=0beb8f8bf9dd3d4f4a48fcac467340d9f82ea4cca09363e4465b7502674e56b2&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090801.jpg?k=fb361fd4ba8d4fc49a436eeeab1df511d0d55d05681e9c46802fe6d9a60f0d7a&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090797.jpg?k=61fe57059be79dbe74a5eaca63aa20225c54392c85d058aa7052d49b6f8d03f5&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090763.jpg?k=72b8e5973444c7d0675cf74f9147be8d08bd96064bedeb83dcb147d08034e388&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090762.jpg?k=2b3df28f9037e4d8b27b03eae5bf6646b085080b70bf36ec7338a66f4be817c4&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/687875194.jpg?k=59771b40d01def6d498bcf47aa2892df53917abfd172d957aab8f7ba2f730d36&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/609809851.jpg?k=6d12a766b4cb246d9aaf2f04103d299b1f8a041e152c8b1cba859ac37b27a2b8&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/510656383.jpg?k=b7204db5e9d3ddd8c097516aa753ddfb9714e7dad33c2ba98c3a1394b80d81da&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/510907898.jpg?k=c2efe826104e454b04e004e1be8d5a2719253688bb797019864877d6cbafe967&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/609810972.jpg?k=04e9b63e1ce2dd9b4b192be81e0b637f124f38104c7eb373cbbb95fb215f67c2&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/522594821.jpg?k=d6a822f77e410a78b78f8c1e1d0fa46d557657e099216c3d7682eaca8c332a74&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/522897909.jpg?k=d199f833f6a10ce8dd20cee966bae440c63d69fbc6a56d8c8b0292fcc36a4db3&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/522898021.jpg?k=5bfd23daf606001517732c0687e24165efc00be5b1b30be0717266664ba6e9af&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/618303146.jpg?k=5f211aab23a182db19416edab897305e7f84c96561b1dfb486f7d40eefd3890a&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/618303148.jpg?k=0f4bca9f023a6592f35285e2df98d40447f4265a370ea92afa5908c4dfdb05b9&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/305301647.jpg?k=32b79be9f708a4c16bd72c71b72eaa818d212e7134404a3a2f7b60e7e14d2bba&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/246935128.jpg?k=a4320cd1a64b1b304c64b3265c7cb7419a88f65e21651a9d10334cad9be5c89a&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/289754850.jpg?k=5393ca24ef6d8b918ad5b29fc47c34d92d8e7c96ba4774e012732de61cc72f01&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/291518425.jpg?k=9b261512287b3964b767e157bb1e3deea1dc589dbf953e7db18a194fafa384ec&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/291526523.jpg?k=b68c3d399230a68be54c3d483a13747ffa01f1fdfc8a70b35d40c228dae437fb&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/506958567.jpg?k=1cfeb1f5aa644f83137152642517539110f914e904857828580bd4171dba72a1&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/618303075.jpg?k=4bbf22f6fe676a5f4a1883ce9a4d17cee547372d77a5392ea8151eb97073cb24&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/66503044.jpg?k=ad1d8f1469d548e82565a57693a4c02e196ccd25c8e23f41c66f6a3320368062&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/398777796.jpg?k=99b76ecdfc01c20e389941491d5adb46bcfd1e787aff7dc7807a3aaaf197f4c8&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/437694134.jpg?k=445da49640245edc4dce770f9b200cf5f03823b9e291009841bb2443d22c3c9e&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/513121120.jpg?k=2d722bb9e60a1dabbd7fa2c79a29ea7b42587a479a090164ac34b017356eff25&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/508028606.jpg?k=348266fbf46e3985a61fda9e8110c69c7019ff4758b2f0e2ba2b61b19a99f418&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/581537275.jpg?k=93c06bd19a4a18bbf9032d3cc223e696ab4deefb9f59e188f1b07f1708b6f3e7&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/581547964.jpg?k=8c47492e36c0c1ff26bd80a7b9dce039e4385ae63fbb2537a47bb6f3739ed388&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/677348777.jpg?k=ffa3204db96330dcdcdba25857c372750e4c04ad396efb8507f78590a53a6a1d&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/692740664.jpg?k=7edd6585f7cf93f1b496afb4fcb45b6d8027ea4da711fe32f51ade119b5e2c44&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/677349266.jpg?k=db8274a3c2da8759fd7d2a8d7bda758452c9b848fdcabe00d25c22168d8e2caf&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/688544881.jpg?k=215078c90da275be1e956e5f1690a67fc40fe0c70c496d2adb7685985d3af668&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/289754850.jpg?k=5393ca24ef6d8b918ad5b29fc47c34d92d8e7c96ba4774e012732de61cc72f01&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/291518425.jpg?k=9b261512287b3964b767e157bb1e3deea1dc589dbf953e7db18a194fafa384ec&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/291526523.jpg?k=b68c3d399230a68be54c3d483a13747ffa01f1fdfc8a70b35d40c228dae437fb&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/506958567.jpg?k=1cfeb1f5aa644f83137152642517539110f914e904857828580bd4171dba72a1&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/658196410.jpg?k=ddfccf2112af162a665124a6eb55d7ddc87553ba24e7b13cbab7eb34fccd86d6&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/658196503.jpg?k=eee37aa7bcacc581e06bfbf058c096cb7afecd5e3aa51d385c9e223d0f8fcf70&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/658196359.jpg?k=8818d33690b7293517572d291c5cc26b4aaba8b61166a41ebd2bd308da31a3d5&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/658196439.jpg?k=3c3e91a761bb541ded4fb52ae9da41f214a26c465b4ed266c272d1c71ddbdc01&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/497152824.jpg?k=6a0c3e5f027cd2059937901dc6e0e2e99cd578d6aa7ea4be8ea87dff281887ab&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/497384797.jpg?k=42ba85e14f6a67ff06a42af43211d21b12a05f09cb2f3aa0abcc26b0b8dd5258&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/497385459.jpg?k=af7e6dfba91429e54e90e30e30f177e30ab9a2a074a48e0b9b4e43107b25e454&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/705648791.jpg?k=4a40bedbd7a1a57aa29ffbb0649e99b119dd41c9174a0fafdbeb3bdcfd05af07&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/639557121.jpg?k=caed499385f0a1d83a2488cffcb16701bbf17e4bb390f9e680881a6cd4130783&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/639557162.jpg?k=f776d1dc426c32e5e65e55d15e016a8371968cedbc32ad71ae8e0010b279ea80&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/639557157.jpg?k=d38fba8558f987d5c80bae1dae48dc13dd09cab5b0268bcdf6948f0ccf3252b3&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/639557178.jpg?k=12f914e8f48aedb53a36a7e440f8cd788c7ff9c27c02b509598e659200de3e8d&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/526862966.jpg?k=432b86517fd924059172c8208d7de7fd33abb31ea5294edec7e1c274e78e0422&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/485506890.jpg?k=9c7a9425f228964b821e86849e0f991a919752bf2ea8831f7aa62d43a79b48ae&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/485506416.jpg?k=0d5061c6de5fe752b0139674ba31150ba4322939547d08f0ba525d8e980332a0&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/485507979.jpg?k=6899e0ac2485df20e642d18ee52867b8dba0e2a1e5c49b77e79d5a7f96cde064&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/708442365.jpg?k=90bb4e70f3daa7b6348a691ef0de7b4da38ab33de4ad2279b02f6514340f21ae&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/708442565.jpg?k=7c13514f26d30a3d6e80a60566b1b7156c161ba69ecb02c0e072e9ec95d512f2&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/675917491.jpg?k=2904e25df0eb53d10943d18e21bf6a9f8d10dc4beb591bbe21b0ae273a9e4791&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/708519805.jpg?k=db12a5d4f2615d0773cf6897b7c496d25f8bf7e9b43fa8720118c1d3c7550db9&o=",
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
    "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090863.jpg?k=e4cb6a665adbd698ccd9ba4e591f2a8516e951a007d7a625e8d0991fdacfaadc&o=",
    "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090769.jpg?k=0c3007bb22bde568c3bf09c79f9e3e082201e66dc190bb0b2e224d3723e900d8&o=",
    "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090885.jpg?k=9ef1c0f5d72e74e90a30e1b83cb010f156e00d0e86d32c944d2502534dff4be7&o=",
    "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090848.jpg?k=e5c26ec46c6f5412b08826682da412c4c0c76c5b910c0264014082457c715138&o=",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/677348777.jpg?k=ffa3204db96330dcdcdba25857c372750e4c04ad396efb8507f78590a53a6a1d&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/692740664.jpg?k=7edd6585f7cf93f1b496afb4fcb45b6d8027ea4da711fe32f51ade119b5e2c44&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/677349266.jpg?k=db8274a3c2da8759fd7d2a8d7bda758452c9b848fdcabe00d25c22168d8e2caf&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/688544881.jpg?k=215078c90da275be1e956e5f1690a67fc40fe0c70c496d2adb7685985d3af668&o=",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/66502995.jpg?k=b2567b34a2e134a75551301424eddf8973e9e5e702b2672f058fb26e8350c3b2&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/437694160.jpg?k=dc02b4f5bc7f2cebcf12b74755319419084f9454e3ecd0b542a654fff4a74296&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/437694126.jpg?k=8bc14c56faf5c999bce803a901060dbc817b4105434c9fbdb0565dd69974059f&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/437694127.jpg?k=3b3a420266b3d8fb98cca61e31d1d7d3d55f243b57f0d714d8c42b1035ee5302&o=",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/735058810.jpg?k=da19797d956ee9b59beb676f9723525ace43e41aade366d99e5bb1a1766655bb&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/484544433.jpg?k=974af48e42b0bf00ca642a679c18482736e5b3dfc6f6baceaaf5fbadc7a07492&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/729479294.jpg?k=cbe9a8bf2226227f77aa1d4691eb3c83fc7153467af1ac0ec6c3c4b9e6f24b7d&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/735062759.jpg?k=ca0ebd7829012910d66d7b6dbf34d380b8b641ea0f83305a1fb62d1f1b639ee1&o=",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/160050285.jpg?k=d097d9b7d6cb8018dbf345346d44884ecf83b6efe9b2563699df45fcdc2fb124&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/160050132.jpg?k=06bff38f48f9dfe653d295a984c6f8ccdd3862e8645c4022344466446a950117&o= ",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/160050133.jpg?k=e4c699c499aa32127f6602a244b5b5ee588143878fbf7180a4858f16a6d822cc&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/90280316.jpg?k=863e555cb804778a0b36be509b9e72970c2d491fcf16ed26e418c14064a9b8f8&o=",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/602221040.jpg?k=53b0739ddcd7ac72604bafe96ab3d213aeaf7995d0d636e5aa48651a5abb0055&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/602223896.jpg?k=fe034234013ee026bc1662b111bdd570cdf71f4482b6a15645e59fe7f9ac764a&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/602220109.jpg?k=3457dd681e25cf20de914cbb73610517633b97b4d0abf758626b3a850a92991d&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/602220476.jpg?k=afa5591aaba4e7cc40a1f4a9ec882f00fccdc367cfb8610c6d133e50479b0a1e&o=",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/685085550.jpg?k=ad0fe1b02cb64624ccf160aee4d8c52caf861077854040d4e5b84df1994ed312&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/684791575.jpg?k=27d5af0f3ca1b2910520accc72fdf79c8aa38da787ec735318cb33665f83fbba&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/537748568.jpg?k=c1ef13e859f0618ba47369fbeb2438c5262911d97403e505216c144d6ee95033&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/415932741.jpg?k=9adeb4823375babd0776615abf36ed214d14489813a5b6cce01d1b43c168a208&o=",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/600061476.jpg?k=a0ef8f1b683890c1be8cbd96ee912d67315f5e62fd30d93e072ef615e62eb138&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/600061504.jpg?k=616397d1a874b200156634a75f40e0e64c099fc85c9b1aa76c173cc5d4849b25&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/600061492.jpg?k=d932e63d98901b6b8a5e472f612df73ca4d89cef9138f435e0ff8ebd520ce887&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/600061878.jpg?k=63ddc0b8384d5b487d43187c71c2467761436722875b2443f34ac561b58d6bb7&o=",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/584706758.jpg?k=08b914bfa202074561e4eb250bb065794d57f329f137c8d201b40a4ef5abd2c6&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/584061345.jpg?k=aa42afb7a5b95ef8ee1c6728deff7f57ce43a1dbbc0d5e48b35fd3d74f1d1bbd&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/584061247.jpg?k=f93e0ba72c34975910f6c525e579d119fdebc74129c89875eacc69094c38176b&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/585990173.jpg?k=d7743ca72df170686bacab6442ab4040a2d2b0ce3baf64db5d254914285b71e2&o=",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/577792903.jpg?k=37e1c9db38af8cc538987133300c1ffb48d5a58a18d87cd470806341148be192&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/584016311.jpg?k=fd9f9219420b47b8c4a064a340a82eab94872abc7c2f182356f05240914cda13&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/584016657.jpg?k=773959ba522732472066b64165895e90c0e09606c0ad28cd7e4c38666f7ddc27&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/577789977.jpg?k=a27cb8f0f6d749814fa8a09055352b0cccb78bffd4b79f79f71a3d8ff2c9d6a1&o=",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/398012269.jpg?k=2f45456bdb98e943f8262eb6478241480ae6e8839b29641aec5390d559319fe4&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/227368434.jpg?k=729c81d3911f4fd3a424bf3744cd82209b0349605cef26b5ae74c94eae32dd33&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/398384340.jpg?k=31e7205a53c8a2b25ea2c80d3be06fb81fbb618a81c8e793d6989213803f7830&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/227367275.jpg?k=b0a05fb45924e74e79c0a1eb342d2e3cb6aa3030f456c403435995f9761efddb&o=",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/593506677.jpg?k=dc53632e154d734c7efd74edbc37dca1f544906ad931574fc631d05d50914991&o=&hp=1",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/593506116.jpg?k=4f879b0d48d4f842d55c82546a2f871d107db1cfc9fc6e69c283992f201d8646&o=&hp=1",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/593506676.jpg?k=5b1a23ba5d8e16d1db6dea18ed420a23036df2c8879d959d4b553818b47b4e67&o=&hp=1",
      "image4_url": "https://content.jdmagicbox.com/comp/jaisalmer/x8/9999p2992.2992.130511121022.y5x8/catalogue/hotel-oasis-haveli-shiv-road-jaisalmer-hotels-rs-1001-to-rs-2000--05g6o7v8e9-250.jpg",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/556814784.jpg?k=b8c8e80ed01852a816d1a659274f0974414be0e10a0a7f42a6bbd3f615e05073&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/556814905.jpg?k=e4da9dd10f140b5a17d8cd6cf831af9e78bdcb9b6a09c4f659b6ace80ddbf858&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/556814946.jpg?k=8ed5ec0a5fc3283e7efe0d2fd707b8c2c46cf426ce861d68ca614ff8adf3424c&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/556814775.jpg?k=03aa75befcc22f4ad48841d72a9c009ca79a0d179efab41b4cd7c961ccf26735&o=",
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
      "image1_url": "https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000",
      "image2_url": "https://i.pinimg.com/236x/4d/19/0b/4d190b4b429465adf0f4aa1bd8a9222a.jpg",
      "image3_url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/ce55f9141215185.624f4d9f805d9.jpg",
      "image4_url": "https://i.pinimg.com/564x/64/8c/6f/648c6fbc2b4da9c936d70d0468d6d880.jpg",
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
      "image1_url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "image2_url": "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "image3_url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "image4_url": "https://i.pinimg.com/236x/4d/19/0b/4d190b4b429465adf0f4aa1bd8a9222a.jpg",
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
  "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/257718596.jpg?k=6b51f53ef71e15a50a381ee32c732bf59f6549e2f10e100a06cc91dd10d09025&o=&hp=1",
  "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/257276384.jpg?k=fa64cae38a878c1fc52feec5a9c28e1346a203691280323401926787f3e7465d&o=&hp=1",
  "image3_url": "https://images.trvl-media.com/lodging/2000000/1080000/1071900/1071809/da1ab02b.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
  "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/688129955.jpg?k=c5e74addc2f4dca7ae1b4556a6c51a6f8d6f8f2c339d0b8623fb1005c0e216d0&o=&hp=1"
  , "description": "Luxury 5-star hotel with direct views of the Taj Mahal, spacious suites, marble architecture, fine dining, spa and pool."
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
      "image1_url": "https://images.trvl-media.com/lodging/39000000/38650000/38648400/38648393/c8f88180.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/353890487.jpg?k=ea01c1d4b31f62952a355b69e682c65f45651842d0ca0a0bf24a05238ec997b2&o=&hp=1",
      "image3_url": "https://images.trvl-media.com/lodging/39000000/38650000/38648400/38648393/8b261be0.jpg?impolicy=fcrop&w=1200&h=800&quality=medium",
      "image4_url": "https://images.trvl-media.com/lodging/39000000/38650000/38648400/38648393/63bcd7ec.jpg?impolicy=fcrop&w=1200&h=800&quality=medium",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/86756718.jpg?k=1e5618d5a6a4f1ffc2b7b41f66e35a4520664d798358b74ad72dce784d7ebd85&o=&hp=1",
      "image2_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXIHeNvBZjw4lYYoX_QJUmaN7JVk8LZ8nKS0HF2UmTJwIWus1aTEe3W878yODnBcd-K9c&usqp=CAU",
      "image3_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/05/33/eb/swimming-pool.jpg?w=900&h=500&s=1",
      "image4_url": "https://pix10.agoda.net/hotelImages/444126/-1/837aa2ade2f5095b5a196b082f5697a6.jpg?ce=0&s=414x232",
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
      "image1_url": "https://r1imghtlak.mmtcdn.com/a08f3596236f11e8bdbc025f77df004f.jpg",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/32617602.jpg?k=71bdc7a74fe80cd53bde08971867bf6579c456ed646b054ba7be4674085a2817&o=&hp=1",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/33118049.jpg?k=8cb40ead813432452916348829776363d70df2f7a5a8f23197168628a5e0c4ed&o=&hp=1",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/240127415.jpg?k=98864df41f995e64d54f509c0dce818d9476db954922f38d65b0a97839449b5b&o=&hp=1",
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
      "image1_url": "https://www.hilton.com/im/en/JAIGHHI/3067273/twin-bed-room-day-shot.jpg?impolicy=crop&cw=4789&ch=3193&gravity=NorthWest&xposition=105&yposition=0&rw=1280&rh=854",
      "image2_url": "https://www.hilton.com/im/en/JAIGHHI/3065453/guest-room-living-bath.jpg?impolicy=crop&cw=4614&ch=3076&gravity=NorthWest&xposition=69&yposition=0&rw=1280&rh=854",
      "image3_url": "https://www.hilton.com/im/en/JAIGHHI/18227974/jaigh-suite-living-area.jpg?impolicy=crop&cw=5000&ch=3333&gravity=NorthWest&xposition=0&yposition=-1&rw=1280&rh=854",
      "image4_url": "https://content.r9cdn.net/rimg/himg/6d/ef/b8/expedia_group-2108712-a2b768-531068.jpg?width=500&height=350&xhint=540&yhint=333&crop=true",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/239614656.jpg?k=98c1bdff4165a9b12282f89138a34c6fff17d205505d27b98f3b3a2ee12cebf4&o=&hp=1",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/239614664.jpg?k=20e9f95d5eb176f5cdccf07807d92684a9bcaf552958296d8875c1a59219d82c&o=&hp=1",
      "image3_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/f7/e0/98/suvarna-mahal-royal-indian.jpg?w=900&h=500&s=1",
      "image4_url": "https://www.experiencetravelgroup.com/wp-content/uploads/2025/07/1-hero-Taj-Rambagh-Palace-6-1.jpg",
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
      "image1_url": "https://m.ahstatic.com/is/image/accorhotels/aja_p_6913-95:3by2?fmt=jpg&op_usm=1.75,0.3,2,0&resMode=sharp2&iccEmbed=true&icc=sRGB&dpr=on,1.5&wid=335&hei=223&qlt=80",
      "image2_url": "https://m.ahstatic.com/is/image/accorhotels/aja_p_6546-41:4by3?fmt=jpg&op_usm=1.75,0.3,2,0&resMode=sharp2&iccEmbed=true&icc=sRGB&dpr=on,1.5&wid=335&hei=251&qlt=80",
      "image3_url": "https://m.ahstatic.com/is/image/accorhotels/aja_p_5819-35:4by3?fmt=jpg&op_usm=1.75,0.3,2,0&resMode=sharp2&iccEmbed=true&icc=sRGB&dpr=on,1.5&wid=335&hei=251&qlt=80",
      "image4_url": "https://m.ahstatic.com/is/image/accorhotels/aja_p_6546-39:4by3?fmt=jpg&op_usm=1.75,0.3,2,0&resMode=sharp2&iccEmbed=true&icc=sRGB&dpr=on,1.5&wid=335&hei=251&qlt=80",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/93398363.jpg?k=e9bda4c9541d94ffd1d4424f7f943d0116929e9a140983394f12d86331d94f51&o=&hp=1",
      "image2_url": "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
      "image3_url": "https://r1imghtlak.mmtcdn.com/8a455fe0-5be5-4596-aeb4-bf436fc991d1.jpg",
      "image4_url": "https://www.oberoihotels.com/-/media/oberoi-hotel/the-oberoi-rajvilas/rajvilas-new/gallery/desktop1640x1292/16.jpg",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/22490300.jpg?k=32a2fe48b2d342e69639b7b80adb8ab3fe590e2e7443ddf983db552973b58aa9&o=&hp=1",
      "image2_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr34VaK7Fyd1P-tqaKDGSSLZZ8QrgMA2_qOHb8GGvMmqEeJ7DZx-_PEM7IUrNphG8wa3Y&usqp=CAU",
      "image3_url": "https://images.trvl-media.com/lodging/1000000/860000/857300/857268/5effe473.jpg?impolicy=fcrop&w=1200&h=800&quality=medium",
      "image4_url": "https://r1imghtlak.mmtcdn.com/8cff5ac8090c11e9ad8d0242ac110002.jpg",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/628232305.jpg?k=b754bb6b0488c4944dc9554398d976edee233d54dbb939b58ce4a3c5a269a721&o=&hp=1",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/628232362.jpg?k=1f04663c830c6613f8c9cb26dea0c9753df2089184d3f16545b384d323a99126&o=&hp=1",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/628232300.jpg?k=36f9ff4b4c28515187703592d640f832f68f3dc51d8fe0af59a22cde2f15b7cf&o=&hp=1",
      "image4_url": "https://media-cdn.tripadvisor.com/media/photo-s/03/f1/89/c1/itc-rajputana-jaipur.jpg",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470311027.jpg?k=b57c7a7fad6c2236b1995562d4f0e0900f7c773eb89efd8aa2af7b025d6387f4&o=&hp=1",
      "image2_url": "https://cache.marriott.com/content/dam/marriott-renditions/JAIMD/jaimd-king-guestroom-gardenview-1186-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/643562691.jpg?k=abb7897212d2c04241f2022dc8e9f9acab20d18526c6e0ba0814ac307b6c9e03&o=&hp=1",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/643562737.jpg?k=16c5fac3005eb8079ae3b158903ffe97d31a36a7127613a366e1ca694d7436f9&o=&hp=1",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/413511584.jpg?k=f3e9196525ea6f135de6bd5a8a9e9fd515f93e6458514f741cddc21cc488441b&o=&hp=1",
      "image2_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7xnMCi0ikRTQy1_FsAexFhs9YeA4zz4YEXn7g_XrlTzUk9FR1Q7QNW38udCTqaaRLeCY&usqp=CAU",
      "image3_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/a7/8b/67/caption.jpg?w=700&h=-1&s=1",
      "image4_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/4f/66/cd/caption.jpg?w=1200&h=1200&s=1",
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
      "image1_url": "https://api.suryagarhcollection.com//media/lzmll1js/suryagarh_rooms_pavillion-room_1.jpg",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/267846788.jpg?k=97c9d24fbc62f246ff5078376fd0474433a9830588496072ee858b869780f9e7&o=&hp=1",
      "image3_url": "https://r1imghtlak.mmtcdn.com/d33b0f3665b011e9a0b30242ac110002.jpg",
      "image4_url": "https://r1imghtlak.mmtcdn.com/d01f426af50711e78b3b0a209fbd0127.jpg",
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
      "image1_url": "https://cache.marriott.com/content/dam/marriott-renditions/JSAMC/jsamc-twin-room-2786-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1920px:*",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/479469069.jpg?k=584dbc75787b2665268261c573d2552194671281e55b7e28b3904d9153200c3c&o=&hp=1",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/479481383.jpg?k=c743a0913c4959546b9c5a239481547c6d63167fac523d952dace438028d4484&o=&hp=1",
      "image4_url": "https://pix10.agoda.net/property/49403345/777744198/2ff85a208e733cf583fb317a5fbf92ec.jpeg?ce=0&s=414x232",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/527875960.jpg?k=e889eab5b75050accee16a300be841f23d7b9bc17f43e046de53fab154feb301&o=&hp=1",
      "image2_url": "https://www.kayak.com/rimg/himg/92/f3/9f/expediav2-4476-5ee75b-639683.jpg?width=1366&height=768&crop=true",
      "image3_url": "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/527862534.jpg?k=4ab42c098a16a9779ddd28b24b0f7fab1e5c79674edc96fdc46b6e21f179fb71&o=",
      "image4_url": "https://images.trvl-media.com/lodging/1000000/900000/891800/891790/54a82fc0.jpg?impolicy=fcrop&w=1200&h=800&quality=medium",
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
      "image1_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9KgfeoPuJxe36E7igIFTDXiLR0Xx-VDbeBQ&s",
      "image2_url": "https://the-gulaal.hotels-rajasthan.com/data/Pics/OriginalPhoto/16097/1609733/1609733764/the-gulaal-jaisalmer-pic-21.JPEG",
      "image3_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/75/a6/1b/suite-room.jpg?w=900&h=500&s=1",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/325008895.jpg?k=cccfabf024077e646b241fa21c97a6c69f7e5458267ffa4052f6c0c0ec809062&o=&hp=1",
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
   "image1_url": "https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/https://www.cfmedia.vfmleonardo.com/imageRepo/7/0/145/708/295/_DSC7307_3_O/Palace-Hotel-Tokyo-Exterior.jpg?tr=w-656%2Ch-390%2Cfo-auto",
   "image2_url": "https://en.palacehoteltokyo.com/wp-content/uploads/Palace-Hotel-Tokyo-Deluxe-Room-with-Balcony-King-Daytime-2023-Gallery-640x470.jpg",
   "image3_url": "https://static-new.lhw.com/HotelImages/Rooms/Final/7058/room_7058_A1K_1_300x240.jpg",
   "image4_url": "https://en.palacehoteltokyo.com/wp-content/uploads/Palace-Hotel-Tokyo-Deluxe-Room-with-Balcony-Bath-Evening-2023-Gallery-640x470.jpg",
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
      "image1_url": "https://media.easemytrip.com/media/Hotel/SHL-22021480544532/Common/CommonaNEqs0.jpg",
      "image2_url": "https://fortrajwada.com/images/Room%20Opposite%20Round%20Bed%204.jpg",
      "image3_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAeYukkCtahZgrWCnaSU285WV7deW0_kGjoyWK3-IBgZ36S27cYxcOv7QouX4dlersKPM&usqp=CAU",
      "image4_url": "https://images.trvl-media.com/lodging/12000000/11980000/11973700/11973698/4e51a5b3.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
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
      "image1_url": "https://media.easemytrip.com/media/Hotel/SHL-22031581745314/Common/CommonZXnUej.jpg",
      "image2_url": "https://www.welcomheritagehotels.in/app/uploaded_files/hotel_room/-Golden%20Suite%201a41346.jpg",
      "image3_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRANQtj3Ul2qe1mzQmUkpF5yQFwDOEeBTYSE6HIYFm08bieu3BzX0vnhvnVHI1gWIRGscg&usqp=CAU",
      "image4_url": "https://www.welcomheritagehotels.in/app/uploaded_files/hotel_room/-Deluxe%20Room%20(2)31024.jpg",
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
      "image1_url": "https://daahy6akrtcj2.cloudfront.net/hotelsinjaisalmer.co.in/photos/1800310503.jpg",
      "image2_url": "https://q-xx.bstatic.com/xdata/images/hotel/max500/436266876.jpg?k=fad9be2c76ee0063bcf0d8b98a81acb57790ba5d5a90aa499c39d9cd848a01ce&o=",
      "image3_url": "https://q-xx.bstatic.com/xdata/images/hotel/max500/436266880.jpg?k=f3dd3f25fe2f2f32d154cb71bcaa0d344be37f7a1f4e8094c95e5fe4307983f1&o=",
      "image4_url": "https://images.trvl-media.com/lodging/22000000/21610000/21605500/21605473/0367e518.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
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
      "image1_url": "https://images.trvl-media.com/lodging/21000000/20200000/20192500/20192442/39dbafcf.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
      "image2_url": "https://content3.jdmagicbox.com/comp/jaisalmer/l9/9999p2992.2992.180611120055.a7l9/catalogue/the-desert-palace-jaisalmer-ho-jaisalmer-hotels-tmazr2v9n6.jpg",
      "image3_url": "https://images.trvl-media.com/lodging/21000000/20200000/20192500/20192442/b3c25a24.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
      "image4_url": "https://images.trvl-media.com/lodging/21000000/20200000/20192500/20192442/43d44bd2.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
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
      "image1_url": "https://radissonhotels.iceportal.com/image/country-inn-suites-by-radisson-kota/guest-room/16256-114457-f63779734_3XL.jpg",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/375072469.jpg?k=f7a3d3850cfd383543745a7bd4525356ce8754e33dbac24e1b037eadef73fd85&o=&hp=1",
      "image3_url": "https://media.easemytrip.com/media/Hotel/SHL-21102392978464/Bedroom/BedroomF7bDQu.jpg",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/277543788.jpg?k=d23d86e49ba857a3f448ca99bffeb84b52dc0139b4cfe246e006c2fdb1dd4f63&o=&hp=1",
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
      "image1_url": "https://www.theclarkshotels.com/_next/image?url=https%3A%2F%2Fclarkscms.cinuniverse.com%2Fimages%2Fclarks%2Fko7b.jpg&w=1200&q=100",
      "image2_url": "https://pix10.agoda.net/hotelImages/12548872/810961767/3105760e78406cd9a52d283e5ebe2dfe.jpg?ce=0&s=414x232",
      "image3_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGMpOI6ZpEXkQ4pnsOHmHFvE8mhsw3BW9IZcehGY3jSHOh1ODjncZ_g6bnxnv8VZhZqU0&usqp=CAU",
      "image4_url": "https://content3.jdmagicbox.com/v2/comp/kota-rajasthan/r2/9999px744.x744.221214161257.c5r2/catalogue/clarks-premier-kunadi-kota-rajasthan-hotels-mqoz32iz20.jpg",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/663608816.jpg?k=2bac1d854849c78133a816caf3d7a5f89c192791c4cf13ce02fc17042758f025&o=&hp=1",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max200/663615338.jpg?k=40ce310805154d3f3fc8d83742bd4ade2911241f726ab1e43f9b6b8363c469be&o=&hp=1",
      "image3_url": "https://content.skyscnr.com/available/2203434030/2203434030_WxH.jpg",
      "image4_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFSt4HEnesBUAP7o9fX_G1NyjmBDYN604M3DgHqNnKnJJF_Xx8QuoCHsZjEzawKkTliPo&usqp=CAU",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/736753136.jpg?k=e0dfe5afb07c65791571cbb63a19678a33051d33a2c597d8c9b4b34273756ad1&o=&hp=1",
      "image2_url": "https://r1imghtlak.mmtcdn.com/4ad53cd4-0397-4739-81eb-df950a154c9d.jpeg",
      "image3_url": "https://r1imghtlak.mmtcdn.com/dc51c716-4565-48bf-aff2-fe6c333f8a9c.jpeg",
      "image4_url": "https://r1imghtlak.mmtcdn.com/5b73a70f-347c-4883-947d-7f877e90abb9.jpeg",
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
      "image1_url": "https://r1imghtlak.mmtcdn.com/e3304859-ea8f-466d-bf46-43bfc484903b.jpg",
      "image2_url": "https://media.easemytrip.com/media/Hotel/SHL-2501261547059631/Hotel/HotelFnYFEv.png",
      "image3_url": "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202501231156254835-c2e79f2b-b094-4943-bb6d-87048df6a68d.jpg",
      "image4_url": "https://r1imghtlak.mmtcdn.com/8fb0507a-3b33-4434-8916-51111d8e569b.JPG",
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
      "image1_url": "https://pix10.agoda.net/hotelImages/26961153/-1/a62b2ce6e21bcfa3be44c182fc8dfad8.jpg?ca=26&ce=0&s=414x232",
      "image2_url": "https://media.easemytrip.com/media/Hotel/SHL-22011198324918/Common/Commone4erO4.jpg",
      "image3_url": "https://media.easemytrip.com/media/Hotel/SHL-22011198324918/Common/CommonIR2K29.jpg",
      "image4_url": "https://pix10.agoda.net/hotelImages/26961153/-1/3a86c7d7ad26a07c173f17ac39eb0ee3.jpg?ca=26&ce=0&s=414x232",
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
      "image1_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMNCo7MSD5zOIV5tOS91UJDzdT_26Qm21g5Q&s",
      "image2_url": "https://r1imghtlak.mmtcdn.com/9de99c21-0d1d-4bd1-855f-0044af7d1e62.jpeg",
      "image3_url": "https://q-xx.bstatic.com/xdata/images/hotel/max500/390596585.jpg?k=38f0ad6d4a2bfc582f8bfb1bb7d4ca1ed194de2ef0f082997568cf9e91360f78&o=",
      "image4_url": "https://r1imghtlak.mmtcdn.com/11a58b6207c111e68105001ec9b85d13.jpg",
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
      "image1_url": "https://blessingsonthenet.com/img/uploads/hotels/roomgallery/aim_bn_1_1309102567.jpg",
      "image2_url": "https://welcomheritage-umed-bhawan-palace.hotels-rajasthan.com/data/Pics/OriginalPhoto/10684/1068429/1068429178/welcomheritage-umed-bhawan-palace-kota-rajasthan-pic-1.JPEG",
      "image3_url": "https://pix10.agoda.net/property/24110607/805899636/67b5ed0d0d79ac002792d29cdc0baaff.jpeg?ce=0&s=414x232",
      "image4_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0AeWpO-nVTSwO9xBpODGCQiC4Ol_zeXhYPu0e8hQqKNMXLloGRNsi4Yro3HoWl2V_l2Q&usqp=CAU",
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
      "image1_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSybLUKSHausuxtCqM6vEWE3d_5RWdH6ARc0Q&s",
      "image2_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmkJamlEEaKbwXHRF9tC-foh5UkbcrQqwrKN11C2H8v4iiO7YVhB-KCvpTXQWq4bZG6c&usqp=CAU",
      "image3_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQXPvQB6mKDVEHIxmxyxA0e3UCGZR9XpoK1VkV960r8sIn_J9EWZowKLmURoAthF1P1a0&usqp=CAU",
      "image4_url": "https://s3-cdn.hotellinksolutions.com/hls/data/4704/website/general/bn/mobile_banner1.jpg",
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
      "image1_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO9h3qBi0FH8_yEXOg7aRfpyFyR8EZ3n7sgw&s",
      "image2_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/86/50/18/hotel-midtown-grand.jpg?w=900&h=500&s=1",
      "image3_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjVoN7kzO9Fr2Ze-0y67vGiD0Xy_8hz6BUOBSd7bkiS2UWBUAN0nAqtnS5dvqySGcVhwQ&usqp=CAU",
      "image4_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtWLbLwlBR-KXrro9WbZaGS5OuhVWTJBYqrXqLZVMAkrxGhdHFStBE_40U_Ehpj93Cs74&usqp=CAU",
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
  "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/82298110.jpg?k=76e32ca16a3d2edb10e940c2383b483e1b4d4af902af2e702f6892da379ade52&o=&hp=1",
  "image2_url": "https://q-xx.bstatic.com/xdata/images/hotel/max500/82298279.jpg?k=f696471f1b25b890981f6f989ec518a742dcee25d985a540ec043513cb766c3d&o=",
  "image3_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY5HNPWht3MFC3e2PyByP5zcMoOH2JoEZL0mr5MowRKhQZAIkJQ8Fu2HWkhUzXtzgFIXI&usqp=CAU",
  "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/82298209.jpg?k=f7434b55985a7d25fbf619b2e59829055cabd770b1bd09eb24ecee05bbaa10fa&o=&hp=1",
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
      "image1_url": "https://gos3.ibcdn.com/bfa2182e928411e990670242ac110002.jpeg",
      "image2_url": "https://content3.jdmagicbox.com/comp/surat/k9/0261px261.x261.180828170600.q2k9/catalogue/hotel-blue-diamond-bardoli-surat-hotels-145q92zyux.jpg",
      "image3_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEYfg7SGLZq3cpkysxVGG4Mh_PYn7pFKKcDGZxev-UyJjiJzohF7Je8rZnCALJ7NcLBzQ&usqp=CAU",
      "image4_url": "https://q-xx.bstatic.com/xdata/images/hotel/max500/697229515.jpg?k=6d718f146c7fcb57875c610e1c79ac59822b92370391615a35a1a4f9d222ddd2&o=",
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
      "image1_url": "https://images.trvl-media.com/lodging/2000000/1070000/1066600/1066597/744e6985.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
      "image2_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo5UdsXHe5ijFXZvHPDGNvMgWlTYfKst2W5sm2qbodXug4Kz-nBUlmNeyU2qEqZbDexVc&usqp=CAU",
      "image3_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxAQ7Eof51wZpPHEBqvzCoo21O6QQnpcD6K7anlWwavclH7gKZV_6TH0ZxZd4maUhHhMI&usqp=CAU",
      "image4_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/22/9d/94/img-20191126-wa0020-largejpg.jpg?w=1200&h=1200&s=1",
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
      "image1_url": "https://www.kayak.com/rimg/himg/e9/09/45/leonardo-894010-694397-595660.jpg?width=836&height=607&crop=true",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/734657176.jpg?k=de34b72922d03cbe583426a19046a5a974831e8f1c55ff76fcd7ee5a6c0344cc&o=&hp=1",
      "image3_url": "https://content.skyscnr.com/available/1546428640/1546428640_WxH.jpg",
      "image4_url": "https://images.trvl-media.com/lodging/25000000/24210000/24207800/24207786/180c111e.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
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
      "image1_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/04/7b/1e/four-bed-deluxe.jpg?w=900&h=500&s=1",
      "image2_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/04/7b/30/deluxe-double.jpg?w=900&h=500&s=1",
      "image3_url": "https://pix10.agoda.net/hotelImages/547916/3533193/4801241147f8cfc58cd08097eb5d5a91.jpeg?ce=0&s=414x232",
      "image4_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFj_ufc0HEYIKAOIU37OU6lKbdIt9u9JgSZQ&s",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/532746651.jpg?k=f7f08424b4e470aeb5719d9517cfbf3d51b2bb94255e62b8e802e1052a56db0a&o=&hp=1",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/532746605.jpg?k=0d103eff811f8c7bbb266745aa715ad682090420f4180ae85cdffc0f38f1888f&o=&hp=1",
      "image3_url": "https://images.trvl-media.com/lodging/103000000/102800000/102791900/102791845/9c22cfa5.jpg?impolicy=fcrop&w=1200&h=800&quality=medium",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/532739644.jpg?k=7f33fad80a5dff26dad392dc293c2fd73cad62a2199cadf2e36adefb4540b093&o=&hp=1",
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
      "image1_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ_BTF7kzR04Hx9X1ogmCVveXsTN8rWqorJQ&s",
      "image2_url": "https://q-xx.bstatic.com/xdata/images/hotel/max500/82298279.jpg?k=f696471f1b25b890981f6f989ec518a742dcee25d985a540ec043513cb766c3d&o=",
      "image3_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY5HNPWht3MFC3e2PyByP5zcMoOH2JoEZL0mr5MowRKhQZAIkJQ8Fu2HWkhUzXtzgFIXI&usqp=CAU",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/82298209.jpg?k=f7434b55985a7d25fbf619b2e59829055cabd770b1bd09eb24ecee05bbaa10fa&o=&hp=1",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/668699732.jpg?k=5b5f28841268db7c1c4513dc6c560e040474ec8e159b19bb562fef5b552a00c1&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/668699734.jpg?k=2c88b3710f628c9b60a308f295ba10954c9953db764eb27e06ce295b8b796ebb&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/668699736.jpg?k=12069dd01602c7a4b3d27def627f086c5a21ba76d09e0f3a87d864a42ab6be31&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/668699738.jpg?k=4286c4ec69d89dc95a4f3de899b3f5039caa7feda4e49e9ed4f61c616d82f25b&o=",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090807.jpg?k=c2d3c9a2bec254dea0d3959c59c823ecd48a623b9799ee0e2088562fdddc61e3&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090765.jpg?k=13db65eecc37dac23dac61f148a1a39182a9d85a36d9dda387e20fa8d463178a&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090879.jpg?k=a0f558e69506473c2f24bf7a3d2fc2cce24efbcb39954578eba6a5aec075470f&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090827.jpg?k=0beb8f8bf9dd3d4f4a48fcac467340d9f82ea4cca09363e4465b7502674e56b2&o=",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/668699732.jpg?k=5b5f28841268db7c1c4513dc6c560e040474ec8e159b19bb562fef5b552a00c1&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/668699734.jpg?k=2c88b3710f628c9b60a308f295ba10954c9953db764eb27e06ce295b8b796ebb&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/668699736.jpg?k=12069dd01602c7a4b3d27def627f086c5a21ba76d09e0f3a87d864a42ab6be31&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/668699738.jpg?k=4286c4ec69d89dc95a4f3de899b3f5039caa7feda4e49e9ed4f61c616d82f25b&o=",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090807.jpg?k=c2d3c9a2bec254dea0d3959c59c823ecd48a623b9799ee0e2088562fdddc61e3&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090765.jpg?k=13db65eecc37dac23dac61f148a1a39182a9d85a36d9dda387e20fa8d463178a&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090879.jpg?k=a0f558e69506473c2f24bf7a3d2fc2cce24efbcb39954578eba6a5aec075470f&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090827.jpg?k=0beb8f8bf9dd3d4f4a48fcac467340d9f82ea4cca09363e4465b7502674e56b2&o=",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090801.jpg?k=fb361fd4ba8d4fc49a436eeeab1df511d0d55d05681e9c46802fe6d9a60f0d7a&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090797.jpg?k=61fe57059be79dbe74a5eaca63aa20225c54392c85d058aa7052d49b6f8d03f5&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090763.jpg?k=72b8e5973444c7d0675cf74f9147be8d08bd96064bedeb83dcb147d08034e388&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090762.jpg?k=2b3df28f9037e4d8b27b03eae5bf6646b085080b70bf36ec7338a66f4be817c4&o=",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/687875194.jpg?k=59771b40d01def6d498bcf47aa2892df53917abfd172d957aab8f7ba2f730d36&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/609809851.jpg?k=6d12a766b4cb246d9aaf2f04103d299b1f8a041e152c8b1cba859ac37b27a2b8&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/510656383.jpg?k=b7204db5e9d3ddd8c097516aa753ddfb9714e7dad33c2ba98c3a1394b80d81da&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/510907898.jpg?k=c2efe826104e454b04e004e1be8d5a2719253688bb797019864877d6cbafe967&o=",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/609810972.jpg?k=04e9b63e1ce2dd9b4b192be81e0b637f124f38104c7eb373cbbb95fb215f67c2&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/522594821.jpg?k=d6a822f77e410a78b78f8c1e1d0fa46d557657e099216c3d7682eaca8c332a74&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/522897909.jpg?k=d199f833f6a10ce8dd20cee966bae440c63d69fbc6a56d8c8b0292fcc36a4db3&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/522898021.jpg?k=5bfd23daf606001517732c0687e24165efc00be5b1b30be0717266664ba6e9af&o=",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/618303146.jpg?k=5f211aab23a182db19416edab897305e7f84c96561b1dfb486f7d40eefd3890a&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/618303148.jpg?k=0f4bca9f023a6592f35285e2df98d40447f4265a370ea92afa5908c4dfdb05b9&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/305301647.jpg?k=32b79be9f708a4c16bd72c71b72eaa818d212e7134404a3a2f7b60e7e14d2bba&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/246935128.jpg?k=a4320cd1a64b1b304c64b3265c7cb7419a88f65e21651a9d10334cad9be5c89a&o=",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/289754850.jpg?k=5393ca24ef6d8b918ad5b29fc47c34d92d8e7c96ba4774e012732de61cc72f01&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/291518425.jpg?k=9b261512287b3964b767e157bb1e3deea1dc589dbf953e7db18a194fafa384ec&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/291526523.jpg?k=b68c3d399230a68be54c3d483a13747ffa01f1fdfc8a70b35d40c228dae437fb&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/506958567.jpg?k=1cfeb1f5aa644f83137152642517539110f914e904857828580bd4171dba72a1&o=",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/618303075.jpg?k=4bbf22f6fe676a5f4a1883ce9a4d17cee547372d77a5392ea8151eb97073cb24&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/66503044.jpg?k=ad1d8f1469d548e82565a57693a4c02e196ccd25c8e23f41c66f6a3320368062&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/398777796.jpg?k=99b76ecdfc01c20e389941491d5adb46bcfd1e787aff7dc7807a3aaaf197f4c8&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/437694134.jpg?k=445da49640245edc4dce770f9b200cf5f03823b9e291009841bb2443d22c3c9e&o=",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/513121120.jpg?k=2d722bb9e60a1dabbd7fa2c79a29ea7b42587a479a090164ac34b017356eff25&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/508028606.jpg?k=348266fbf46e3985a61fda9e8110c69c7019ff4758b2f0e2ba2b61b19a99f418&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/581537275.jpg?k=93c06bd19a4a18bbf9032d3cc223e696ab4deefb9f59e188f1b07f1708b6f3e7&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/581547964.jpg?k=8c47492e36c0c1ff26bd80a7b9dce039e4385ae63fbb2537a47bb6f3739ed388&o=",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/677348777.jpg?k=ffa3204db96330dcdcdba25857c372750e4c04ad396efb8507f78590a53a6a1d&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/692740664.jpg?k=7edd6585f7cf93f1b496afb4fcb45b6d8027ea4da711fe32f51ade119b5e2c44&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/677349266.jpg?k=db8274a3c2da8759fd7d2a8d7bda758452c9b848fdcabe00d25c22168d8e2caf&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/688544881.jpg?k=215078c90da275be1e956e5f1690a67fc40fe0c70c496d2adb7685985d3af668&o=",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/289754850.jpg?k=5393ca24ef6d8b918ad5b29fc47c34d92d8e7c96ba4774e012732de61cc72f01&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/291518425.jpg?k=9b261512287b3964b767e157bb1e3deea1dc589dbf953e7db18a194fafa384ec&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/291526523.jpg?k=b68c3d399230a68be54c3d483a13747ffa01f1fdfc8a70b35d40c228dae437fb&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/506958567.jpg?k=1cfeb1f5aa644f83137152642517539110f914e904857828580bd4171dba72a1&o=",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/513121120.jpg?k=2d722bb9e60a1dabbd7fa2c79a29ea7b42587a479a090164ac34b017356eff25&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/508028606.jpg?k=348266fbf46e3985a61fda9e8110c69c7019ff4758b2f0e2ba2b61b19a99f418&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/581537275.jpg?k=93c06bd19a4a18bbf9032d3cc223e696ab4deefb9f59e188f1b07f1708b6f3e7&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/581547964.jpg?k=8c47492e36c0c1ff26bd80a7b9dce039e4385ae63fbb2537a47bb6f3739ed388&o=",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/658196410.jpg?k=ddfccf2112af162a665124a6eb55d7ddc87553ba24e7b13cbab7eb34fccd86d6&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/658196503.jpg?k=eee37aa7bcacc581e06bfbf058c096cb7afecd5e3aa51d385c9e223d0f8fcf70&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/658196359.jpg?k=8818d33690b7293517572d291c5cc26b4aaba8b61166a41ebd2bd308da31a3d5&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/658196439.jpg?k=3c3e91a761bb541ded4fb52ae9da41f214a26c465b4ed266c272d1c71ddbdc01&o=",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/497152824.jpg?k=6a0c3e5f027cd2059937901dc6e0e2e99cd578d6aa7ea4be8ea87dff281887ab&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/497384797.jpg?k=42ba85e14f6a67ff06a42af43211d21b12a05f09cb2f3aa0abcc26b0b8dd5258&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/497385459.jpg?k=af7e6dfba91429e54e90e30e30f177e30ab9a2a074a48e0b9b4e43107b25e454&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/705648791.jpg?k=4a40bedbd7a1a57aa29ffbb0649e99b119dd41c9174a0fafdbeb3bdcfd05af07&o=",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/639557121.jpg?k=caed499385f0a1d83a2488cffcb16701bbf17e4bb390f9e680881a6cd4130783&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/639557162.jpg?k=f776d1dc426c32e5e65e55d15e016a8371968cedbc32ad71ae8e0010b279ea80&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/639557157.jpg?k=d38fba8558f987d5c80bae1dae48dc13dd09cab5b0268bcdf6948f0ccf3252b3&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/639557178.jpg?k=12f914e8f48aedb53a36a7e440f8cd788c7ff9c27c02b509598e659200de3e8d&o=",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/526862966.jpg?k=432b86517fd924059172c8208d7de7fd33abb31ea5294edec7e1c274e78e0422&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/485506890.jpg?k=9c7a9425f228964b821e86849e0f991a919752bf2ea8831f7aa62d43a79b48ae&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/485506416.jpg?k=0d5061c6de5fe752b0139674ba31150ba4322939547d08f0ba525d8e980332a0&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/485507979.jpg?k=6899e0ac2485df20e642d18ee52867b8dba0e2a1e5c49b77e79d5a7f96cde064&o=",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/708442365.jpg?k=90bb4e70f3daa7b6348a691ef0de7b4da38ab33de4ad2279b02f6514340f21ae&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/708442565.jpg?k=7c13514f26d30a3d6e80a60566b1b7156c161ba69ecb02c0e072e9ec95d512f2&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/675917491.jpg?k=2904e25df0eb53d10943d18e21bf6a9f8d10dc4beb591bbe21b0ae273a9e4791&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/708519805.jpg?k=db12a5d4f2615d0773cf6897b7c496d25f8bf7e9b43fa8720118c1d3c7550db9&o=",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090863.jpg?k=e4cb6a665adbd698ccd9ba4e591f2a8516e951a007d7a625e8d0991fdacfaadc&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090769.jpg?k=0c3007bb22bde568c3bf09c79f9e3e082201e66dc190bb0b2e224d3723e900d8&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090885.jpg?k=9ef1c0f5d72e74e90a30e1b83cb010f156e00d0e86d32c944d2502534dff4be7&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635090848.jpg?k=e5c26ec46c6f5412b08826682da412c4c0c76c5b910c0264014082457c715138&o=",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/677348777.jpg?k=ffa3204db96330dcdcdba25857c372750e4c04ad396efb8507f78590a53a6a1d&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/692740664.jpg?k=7edd6585f7cf93f1b496afb4fcb45b6d8027ea4da711fe32f51ade119b5e2c44&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/677349266.jpg?k=db8274a3c2da8759fd7d2a8d7bda758452c9b848fdcabe00d25c22168d8e2caf&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/688544881.jpg?k=215078c90da275be1e956e5f1690a67fc40fe0c70c496d2adb7685985d3af668&o=",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/66502995.jpg?k=b2567b34a2e134a75551301424eddf8973e9e5e702b2672f058fb26e8350c3b2&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/437694160.jpg?k=dc02b4f5bc7f2cebcf12b74755319419084f9454e3ecd0b542a654fff4a74296&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/437694126.jpg?k=8bc14c56faf5c999bce803a901060dbc817b4105434c9fbdb0565dd69974059f&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/437694127.jpg?k=3b3a420266b3d8fb98cca61e31d1d7d3d55f243b57f0d714d8c42b1035ee5302&o=",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/735058810.jpg?k=da19797d956ee9b59beb676f9723525ace43e41aade366d99e5bb1a1766655bb&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/484544433.jpg?k=974af48e42b0bf00ca642a679c18482736e5b3dfc6f6baceaaf5fbadc7a07492&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/729479294.jpg?k=cbe9a8bf2226227f77aa1d4691eb3c83fc7153467af1ac0ec6c3c4b9e6f24b7d&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/735062759.jpg?k=ca0ebd7829012910d66d7b6dbf34d380b8b641ea0f83305a1fb62d1f1b639ee1&o=", 
      "description": "Comfortable hotel near Andheri East, good for airport access and business travellers."
    },
    // Himachal Pradesh
  
  
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/160050285.jpg?k=d097d9b7d6cb8018dbf345346d44884ecf83b6efe9b2563699df45fcdc2fb124&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/160050132.jpg?k=06bff38f48f9dfe653d295a984c6f8ccdd3862e8645c4022344466446a950117&o= ",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/160050133.jpg?k=e4c699c499aa32127f6602a244b5b5ee588143878fbf7180a4858f16a6d822cc&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/90280316.jpg?k=863e555cb804778a0b36be509b9e72970c2d491fcf16ed26e418c14064a9b8f8&o=",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/602221040.jpg?k=53b0739ddcd7ac72604bafe96ab3d213aeaf7995d0d636e5aa48651a5abb0055&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/602223896.jpg?k=fe034234013ee026bc1662b111bdd570cdf71f4482b6a15645e59fe7f9ac764a&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/602220109.jpg?k=3457dd681e25cf20de914cbb73610517633b97b4d0abf758626b3a850a92991d&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/602220476.jpg?k=afa5591aaba4e7cc40a1f4a9ec882f00fccdc367cfb8610c6d133e50479b0a1e&o=",
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/685085550.jpg?k=ad0fe1b02cb64624ccf160aee4d8c52caf861077854040d4e5b84df1994ed312&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/684791575.jpg?k=27d5af0f3ca1b2910520accc72fdf79c8aa38da787ec735318cb33665f83fbba&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/537748568.jpg?k=c1ef13e859f0618ba47369fbeb2438c5262911d97403e505216c144d6ee95033&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/663608816.jpg?k=2bac1d854849c78133a816caf3d7a5f89c192791c4cf13ce02fc17042758f025&o=&hp=1",
      "description": "Luxury hotel offering well-furnished rooms, multi-cuisine restaurant, spa, and outdoor pool."
    },


    {
      "id": 253,
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/577792903.jpg?k=37e1c9db38af8cc538987133300c1ffb48d5a58a18d87cd470806341148be192&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/584016311.jpg?k=fd9f9219420b47b8c4a064a340a82eab94872abc7c2f182356f05240914cda13&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/584016657.jpg?k=773959ba522732472066b64165895e90c0e09606c0ad28cd7e4c38666f7ddc27&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/577789977.jpg?k=a27cb8f0f6d749814fa8a09055352b0cccb78bffd4b79f79f71a3d8ff2c9d6a1&o=",
      "description": "Hotel offering luxurious rooms, multi-cuisine restaurant, spa, and outdoor pool with panoramic views."
    },
    {
      "id": 254,
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/398012269.jpg?k=2f45456bdb98e943f8262eb6478241480ae6e8839b29641aec5390d559319fe4&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/227368434.jpg?k=729c81d3911f4fd3a424bf3744cd82209b0349605cef26b5ae74c94eae32dd33&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/398384340.jpg?k=31e7205a53c8a2b25ea2c80d3be06fb81fbb618a81c8e793d6989213803f7830&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/227367275.jpg?k=b0a05fb45924e74e79c0a1eb342d2e3cb6aa3030f456c403435995f9761efddb&o=",
      "description": "Located in Old Manali, offering scenic views, comfortable rooms, and essential amenities for a pleasant stay."
    },

    // Bikaner
    {
      "id": 255,
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/600061476.jpg?k=a0ef8f1b683890c1be8cbd96ee912d67315f5e62fd30d93e072ef615e62eb138&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/600061504.jpg?k=616397d1a874b200156634a75f40e0e64c099fc85c9b1aa76c173cc5d4849b25&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/600061492.jpg?k=d932e63d98901b6b8a5e472f612df73ca4d89cef9138f435e0ff8ebd520ce887&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/600061878.jpg?k=63ddc0b8384d5b487d43187c71c2467761436722875b2443f34ac561b58d6bb7&o=",
      "description": "Located near Bikaner Railway Station, Hotel Jaswant Bhawan offers comfortable rooms with modern amenities, making it a convenient choice for travelers."
    },
    {
      "id": 256,
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/507802791.jpg?k=f1d5763196e0d5a4b6f902e5068915cf861f6ebed3b2b3fb288b74490009fa1b&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/507802779.jpg?k=8e3edc4f4612a7ae8daf68701724eba08935c50061204676bf427607bb7ad889&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/507802780.jpg?k=fcf6256be052abaee4fc5d99acb6245cfd234c3316873c761f4f51f242828783&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/507802794.jpg?k=004c6e3b419b2515c9e162a412881989c600e02eac8e5325670611706f1818f4&o=",
      "description": "Hotel Sagar Haveli offers a blend of traditional Rajasthani architecture and modern amenities, featuring a swimming pool and spa services."
    },
    {
      "id": 257,
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/556814784.jpg?k=b8c8e80ed01852a816d1a659274f0974414be0e10a0a7f42a6bbd3f615e05073&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/556814905.jpg?k=e4da9dd10f140b5a17d8cd6cf831af9e78bdcb9b6a09c4f659b6ace80ddbf858&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/556814946.jpg?k=8ed5ec0a5fc3283e7efe0d2fd707b8c2c46cf426ce861d68ca614ff8adf3424c&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/556814775.jpg?k=03aa75befcc22f4ad48841d72a9c009ca79a0d179efab41b4cd7c961ccf26735&o=",
      "description": "Situated in Adarsh Colony, Hotel Marudhar Palace offers well-furnished rooms with essential amenities, providing a comfortable stay for guests."
    },
    {
      "id": 258,
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/528656542.jpg?k=12de7eeca43c818b3d55c379905b27453c33889a25f02d9062cd2b5f313f0ccf&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/583972779.jpg?k=07c8fece972dfb29cd24dc77f700ad1310ab2b6b688268b4011ea978d663c326&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/583973340.jpg?k=a1fe067db271e334de77be919cee071e28ee90d4497ad7e630591b2f3969ae7a&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/536150893.jpg?k=0f8e1ac8bab06bcc0ba8149f4de245deff080936c7f977a7280ebcb759a05ba3&o=",
      "description": "Hotel Raj Vilas Palace offers luxurious accommodations with royal Rajasthani decor, located near the historic Junagarh Fort."
    },
    {
      "id": 259,
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/413716733.jpg?k=8e236682c6e090ea36ab877b8ea6e396b465d1199338debed9a45a3d541260af&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/413716723.jpg?k=5cd52f1e40fb15e2109ce371fc735612d680b7f26f481d0879734b1a9371f3db&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/413716749.jpg?k=cccd41a18bfb7b16ce5a768603ff7248271830ae3c3256cee07322a5798f0b76&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/413716695.jpg?k=0f74595a0d7ff1dacf92d76316e135a8cbb60112b42e08ec1a20860c0a5aee30&o=",
      "description": "Located in Gajner, The Ganga Resort offers a serene environment with luxurious amenities, including a spa and outdoor pool."
    },
    {
      "id": 260,
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
      "image1_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/709901044.jpg?k=2e1078951ca6dc714927b3e555bdbc36dde113352c36d4b810d4427185f13efa&o=",
      "image2_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/710242534.jpg?k=a78c1800107766cd75b176ef91d0c1626e2438bc5f9da5ac75f55c0cc399f266&o=",
      "image3_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/286929779.jpg?k=86a85d6a525b73217554854a799f31805652f6d85004ae61e3dbdd810c7ea1e5&o=",
      "image4_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/710242478.jpg?k=ed12e4afa9e85f53b2deadb0d5347fbf0dcfde2aa6718902494a2c58fe79f8cd&o=",
      "description": "Hotel Sagar Niwas provides budget-friendly accommodations with essential amenities, ideal for short stays near the railway station."
    },
    {
      "id": 261,
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
      "image1_url": "https://media.istockphoto.com/id/1370825295/photo/modern-hotel-room-with-double-bed-night-tables-tv-set-and-cityscape-from-the-window.jpg?s=612x612&w=0&k=20&c=QMXz9HJVhU-8MtBYyeJxtqLz90j7r0SrR6FTWniPkgc=",
      "image2_url": "https://media.istockphoto.com/id/1050564510/photo/3d-rendering-beautiful-luxury-bedroom-suite-in-hotel-with-tv.jpg?s=612x612&w=0&k=20&c=ZYEso7dgPl889aYddhY2Fj3GOyuwqliHkbbT8pjl_iM=",
      "image3_url": "https://assets-news.housing.com/news/wp-content/uploads/2022/11/25115530/image6-20.jpg",
      "image4_url": "https://t3.ftcdn.net/jpg/02/71/08/28/360_F_271082810_CtbTjpnOU3vx43ngAKqpCPUBx25udBrg.jpg",
      "description": "Hotel Bikalal offers a blend of traditional Rajasthani hospitality and modern amenities, located near the historic Junagarh Fort."
    }
  ]