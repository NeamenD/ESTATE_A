function Filter() {
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
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
            </select>
          </div>

          <div className="item">
            <label htmlFor="property">Property</label>
            <select name="property" id="property">
              <option value="apartment">Apartment</option>
              <option value="apartment">Home</option>
              <option value="apartment">Condo</option>
              <option value="apartment">Land</option>
            </select>
          </div>

          <div className="item">
            <label htmlFor="city">Location</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City Location"
            />
          </div>

          <div className="item">
            <label htmlFor="city">Location</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City Location"
            />
          </div>

          <div className="item">
            <label htmlFor="city">Location</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City Location"
            />
          </div>

          <button>
            <img src="/search.png" alt="" />
          </button>
        </div>
      </h1>
    </div>
  );
}

export default Filter;
