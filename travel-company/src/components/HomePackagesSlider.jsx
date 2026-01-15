import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import packages from "../data/packages";
import PackageCard from "./PackageCard";
import { useNavigate } from "react-router-dom";

function HomePackagesSlider() {
  const navigate = useNavigate();

  return (
    <section className="home-packages">
      <div className="home-packages-header">
        <h2>Popular Packages</h2>
        <button onClick={() => navigate("/packages")}>
          View All →
        </button>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1.2}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {packages.map((pkg) => (
          <SwiperSlide key={pkg.id}>
            <PackageCard data={pkg} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HomePackagesSlider;