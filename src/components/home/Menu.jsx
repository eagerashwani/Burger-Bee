import React from "react";
import MenuCArd from "./MenuCArd";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const Menu = () => {
    const addToCart = (itemNum)=> console.log(`Burger selected ${itemNum}`)
  return (
    <section id="menu">
      <h1>MENU</h1>
      <div>
        <MenuCArd
          itemNum={1}
          burgerSrc={burger1}
          price={79}
          title="Cheese Overloaded"
          handler={addToCart}
          delay={0.1}
        />
        <MenuCArd
          itemNum={2}
          burgerSrc={burger2}
          price={119}
          title="Cheesy Onion"
          handler={addToCart}
          delay={0.5}
        />
        <MenuCArd
          itemNum={3}
          burgerSrc={burger3}
          price={159}
          title="Extra Tandori veggies"
          handler={addToCart}
          delay={0.8}
        />
      </div>
    </section>
  );
};

export default Menu;
