import greeksalad from "../icons_assets/greek salad.jpg";
import bruchetta from "../icons_assets/bruchetta.svg";
import lemondessert from "../icons_assets/lemon dessert.jpg";

function Specials() {
  return (
    <section className="menu" aria-labelledby="specials-title">
      <div className="menu-desc">
        <h2 id="specials-title" className="title menu-title">
          This week's specials!
        </h2>
        <button className="btn" aria-label="View full online menu">
          Online Menu
        </button>
      </div>

      <div className="cards">
        <article className="card" aria-label="Greek Salad">
          <img className="menu-img" src={greeksalad} alt="Greek Salad" />
          <div className="name-price">
            <h3 className="item-name">Greek Salad</h3>
            <p className="item-price">$12.99</p>
          </div>
          <p className="item-desc">
            The famous Greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </p>
          <div className="delivery">
            <button aria-label="Order Greek Salad for delivery">
              Order a delivery
            </button>
          </div>
        </article>

        <article className="card" aria-label="Bruschetta">
          <img className="menu-img" src={bruchetta} alt="Bruschetta" />
          <div className="name-price">
            <h3 className="item-name">Bruschetta</h3>
            <p className="item-price">$5.99</p>
          </div>
          <p className="item-desc">
            Our Bruschetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil.
          </p>
          <div className="delivery">
            <button aria-label="Order Bruschetta for delivery">
              Order a delivery
            </button>
          </div>
        </article>

        <article className="card" aria-label="Lemon Dessert">
          <img className="menu-img" src={lemondessert} alt="Lemon Dessert" />
          <div className="name-price">
            <h3 className="item-name">Lemon Dessert</h3>
            <p className="item-price">$5.00</p>
          </div>
          <p className="item-desc">
            This comes straight from grandma’s recipe book, every last
            ingredient has been sourced and is as authentic as can be imagined.
          </p>
          <div className="delivery">
            <button aria-label="Order Lemon Dessert for delivery">
              Order a delivery
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Specials;
