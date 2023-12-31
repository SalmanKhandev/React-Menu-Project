import React from "react";

const Menu = ({ menuItems }) => {
  // console.log(items);
  return (
    <div className="section-center">
      {menuItems.map((item) => {
        const { img, title, desc, price } = item;
        return (
          <article key={item.id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
