import { useState } from "react";
import packagesData from "../data/packages";
import PackageCard from "../components/PackageCard";

function Packages() {
  const [search, setSearch] = useState("");

  const filteredPackages = packagesData.filter((pkg) =>
    pkg.place.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <h1>Tour Packages</h1>

      {/* 🔍 Search Bar */}
      <div className="package-search">
        <input
          type="text"
          placeholder="Search destination"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>Search</button>
      </div>

      <div className="grid">
        {filteredPackages.length > 0 ? (
          filteredPackages.map((pkg) => (
            <PackageCard key={pkg.id} data={pkg} />
          ))
        ) : (
          <p>No packages found</p>
        )}
      </div>
    </div>
  );
}

export default Packages;