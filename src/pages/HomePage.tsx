import React from "react";

import Accordion from "../components/Accordion";

// The Accordion component is a stateful component.
// It has a prop, title, which is a string.
// It has a children prop, which is a React element for composition.

const HomePage = () => {
  return (
    <div>
      <h1>News Page</h1>
      {accordionData.map((p) => (
        <Accordion key={p.title} title={p.title}>
          <div style={{ backgroundColor: p.color, padding: "1rem" }}>
            {p.content}
          </div>
          <img src={p.photo} alt={p.title} />
        </Accordion>
      ))}
    </div>
  );
};

export default HomePage;

type Post = {
  title: string;
  content: string;
  color: string;
  photo: string;
};

// sample data
export const accordionData: Post[] = [
  {
    title: "Section 1",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum
    suscipit commodi eum enim atque at? Et perspiciatis dolore iure
    voluptatem.`,
    color: "dodgerblue",
    photo: "https://via.placeholder.com/300"
  },
  {
    title: "Section 2",
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
    reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
    quaerat iure quos dolorum accusantium ducimus in illum vero commodi
    pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
    quidem maiores doloremque est numquam praesentium eos voluptatem amet!
    Repudiandae, mollitia id reprehenderit a ab odit!`,
    color: "gold",
        photo: "https://via.placeholder.com/300"
  },
  {
    title: "Section 3",
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    dolor ut sequi minus iste? Quas?`,
    color: "pink",
        photo: "https://via.placeholder.com/250"
  },
];
