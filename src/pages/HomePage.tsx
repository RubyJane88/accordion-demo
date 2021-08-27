import React from "react";

import Index from "../components/Accordion";

const HomePage = () => {
  return (
    <div>
      <h1>News Page</h1>
      {accordionData.map((p) => (
        <Index key={p.title} title={p.title}>
          <div style={{ backgroundColor: p.color, padding: "1rem" }}>
            {p.content}
          </div>
        </Index>
      ))}
    </div>
  );
};

export default HomePage;

type Post = {
  title: string;
  content: string;
  color: string;
};

export const accordionData: Post[] = [
  {
    title: "Section 1",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum
    suscipit commodi eum enim atque at? Et perspiciatis dolore iure
    voluptatem.`,
    color: "dodgerblue",
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
  },
  {
    title: "Section 3",
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    dolor ut sequi minus iste? Quas?`,
    color: "pink",
  },
];
