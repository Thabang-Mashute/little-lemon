import food from "../icons_assets/restauranfood.jpg";
function CallToAction() {
  return (
    <section className="cta2">
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>
        We are a family owned resturant with Fresh ingredients, authentic
        recipes, cozy atmosphere.
      </p>
      <button>Reserve a Table</button>

      <div className="img-wrapper">
        <img src={food} alt="hero image" className="hero-img" />
      </div>
    </section>
  );
}

export default CallToAction;
