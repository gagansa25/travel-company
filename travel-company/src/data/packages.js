import goa from "../assets/goa.jpg";
import kashmir from "../assets/kashmir.jpg";
import kerala from "../assets/kerala.jpg";
import rajasthan from "../assets/rajasthan.jpg";
import manali from "../assets/manali.jpg";
import shimla from "../assets/shimla.jpg";
import andaman from "../assets/andaman.jpg";
import darjeeling from "../assets/darjeeling.jpg";
import mumbai from "../assets/mumbai.jpg";
import agra from "../assets/agra.jpg";

const packages = [
  {
    id: 1,
    place: "Goa",
    duration: "5 Days / 4 Nights",
    price: "₹18,000",
    image: goa,
    includes: ["Hotel", "Breakfast", "Sightseeing", "Airport Pickup"],
    description: "Enjoy beautiful beaches, nightlife, and water sports in Goa."
  },
  {
    id: 2,
    place: "Kashmir",
    duration: "6 Days / 5 Nights",
    price: "₹25,000",
    image: kashmir,
    includes: ["Houseboat Stay", "Meals", "Sightseeing"],
    description: "Experience snow-capped mountains and breathtaking valleys."
  },
  {
    id: 3,
    place: "Kerala",
    duration: "5 Days / 4 Nights",
    price: "₹20,000",
    image: kerala,
    includes: ["Backwater Cruise", "Hotel", "Breakfast"],
    description: "Relax in serene backwaters and lush green landscapes."
  },
  {
    id: 4,
    place: "Rajasthan",
    duration: "7 Days / 6 Nights",
    price: "₹30,000",
    image: rajasthan,
    includes: ["Heritage Hotels", "City Tours", "Cultural Shows"],
    description: "Explore royal palaces, forts, and desert culture."
  },
  {
    id: 5,
    place: "Manali",
    duration: "5 Days / 4 Nights",
    price: "₹22,000",
    image: manali,
    includes: ["Hotel", "Breakfast", "Sightseeing"],
    description: "Enjoy the scenic beauty and adventure activities in Manali."
  },
  {
    id: 6,
    place: "Shimla",
    duration: "6 Days / 5 Nights",
    price: "₹28,000",
    image: shimla,
    includes: ["Hotel", "Meals", "Sightseeing"],
    description: "Experience the beauty of snow-covered hills and colonial architecture in Shimla."
  },
  {
    id: 7,
    place: "Andaman Islands",
    duration: "5 Days / 4 Nights",
    price: "₹35,000",
    image: andaman ,
    includes: ["Hotel", "Breakfast", "Snorkeling", "Sightseeing"],
    description: "Discover pristine beaches, coral reefs, and vibrant marine life in the Andaman Islands."
  },
  {
    id: 8,
    place: "Darjeeling",
    duration: "5 Days / 4 Nights",
    price: "₹24,000",
    image: darjeeling,
    includes: ["Hotel", "Breakfast", "Sightseeing"],
    description: "Experience the charm of tea gardens, colonial architecture, and panoramic views in Darjeeling."
  },
  {
    id: 9,
    place: "Mumbai",
    duration: "4 Days / 3 Nights",
    price: "₹15,000",
    image: mumbai,
    includes: ["Hotel", "Breakfast", "City Tour"],
    description: "Explore the bustling city of Mumbai, its vibrant culture, and iconic landmarks."
  },
  {
    id: 10,
    place: "Agra",
    duration: "3 Days / 2 Nights",
    price: "₹12,000",
    image: agra,
    includes: ["Hotel", "Breakfast", "Taj Mahal Tour"],
    description: "Visit the iconic Taj Mahal and explore the rich history of Agra."
  }
  
];

export default packages;
