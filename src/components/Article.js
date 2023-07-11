import React from "react";

function Article({ title, date, preview, minutes }) {
  const coffeeCups = Math.ceil(minutes / 5);
  const bentoBoxes = Math.ceil(minutes / 10);

  const renderCoffeeCups = () => {
    const coffeeCupEmojis = [];
    for (let i = 0; i < coffeeCups; i++) {
      coffeeCupEmojis.push("☕️");
    }
    return coffeeCupEmojis;
  };

  const renderBentoBoxes = () => {
    const bentoBoxEmojis = [];
    for (let i = 0; i < bentoBoxes; i++) {
      bentoBoxEmojis.push("🍱");
    }
    return bentoBoxEmojis;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || "January 1, 1970"}</small>
      <p>{preview}</p>
      <p>
        {minutes <= 30 ? renderCoffeeCups() : renderBentoBoxes()} {minutes} min
        read
      </p>
    </article>
  );
}

export default Article;
