import "./homePage.scss";

export default function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
        <p>
          Discover the perfect home with our extensive real estate listings.
          Whether you're looking for a cozy apartment in the city or a spacious
          house in the suburbs, we have options to suit every preference and
          budget. Our experienced agents are here to help you navigate the
          market and find the property that fits your lifestyle. Start your
          journey to owning your dream place today!
        </p>
      </div>
      <div className="imgContainer">
        <img src="img/bg.png" alt="Background image of building" />
      </div>
    </div>
  );
}
