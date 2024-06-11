import "./filter.scss";
import { useSearchParams } from "react-router-dom";
function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState({
    type: searchParams.get("type") || "",
    city: searchParams.get("city") || "",
    property: searchParams.get("property") || "",
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
    bedroom: searchParams.get("bedroom") || "",
  });

  return (
    <div className="filter">
      <h1>
        Search results for <b>Denver</b>
        <div className="top">
          <div className="item">
            <label htmlFor="city">Location</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City Location"
            />
          </div>
        </div>
        <div className="bottom">
          <div className="item">
            <label htmlFor="type">Type:</label>
            <select name="type" id="type">
              <option value="any">any</option>
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
            </select>
          </div>

          <div className="item">
            <label htmlFor="property">Property</label>
            <select name="property" id="property">
              <option value="any">any</option>
              <option value="apartment">Apartment</option>
              <option value="apartment">Home</option>
              <option value="apartment">Condo</option>
              <option value="apartment">Land</option>
            </select>
          </div>

          <div className="item">
            <label htmlFor="minPrice">Min Price</label>
            <input
              type="number"
              id="minPrice"
              name="minPrice"
              placeholder="any"
            />
          </div>

          <div className="item">
            <label htmlFor="maxPrice">Max Price</label>
            <input
              type="number"
              id="maxPrice"
              name="maxPrice"
              placeholder="any"
            />
          </div>

          <div className="item">
            <label htmlFor="Bedroom">Bedroom</label>
            <input
              type="number"
              id="Bedroom"
              name="Bedroom"
              placeholder="any"
            />
          </div>

          <button>
            <img src="/img/search.png" alt="" />
          </button>
        </div>
      </h1>
    </div>
  );
}

export default Filter;
