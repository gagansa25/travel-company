import { useState } from "react";


function PackageCard({ data }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="card">
        <img src={data.image} alt={data.place} className="card-img" />

        <h3>{data.place}</h3>
        <p className="duration">{data.duration}</p>
        <p className="desc">{data.description}</p>

        <ul className="includes">
          {data.includes.map((item, index) => (
            <li key={index}>✔ {item}</li>
          ))}
        </ul>

        <p className="price">{data.price}</p>

        <button onClick={() => setOpen(true)}>Explore More</button>
      </div>

      {open && (
        <EnquiryForm
          place={data.place}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}

export default PackageCard;
