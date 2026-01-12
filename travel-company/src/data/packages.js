import goa from "../assets/goa.jpg";
import kashmir from "../assets/kashmir.jpg";
import kerala from "../assets/kerala.jpg";
import rajasthan from "../assets/rajasthan.jpg";

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
  }
];

export default packages;
