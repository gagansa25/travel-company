import packages from "../data/packages";
import PackageCard from "../components/PackageCard";

function Packages() {
  return (
    <div className="page">
      <h1>Tour Packages</h1>
      <div className="grid">
        {packages.map((item) => (
          <PackageCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Packages;
