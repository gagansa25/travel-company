function PackageCard({ data }) {
  return (
    <div className="card">
      <img src={data.image} alt={data.place} className="card-img" />
      <h3>{data.place}</h3>
      <p>{data.duration}</p>
      <p className="price">{data.price}</p>
      <button>Enquire Now</button>
    </div>
  );
}

export default PackageCard;
