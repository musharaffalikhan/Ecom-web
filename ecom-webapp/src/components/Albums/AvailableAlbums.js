import React from "react";
import Albums from "./Albums";
import classes from "./AvailableAlbum.module.css";

const productsArr = [
  {
    title: "Album 1",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Album 2",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Album 3",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Album 4",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const AvailableAlbums = () => {
  const productLists = productsArr.map((product) => (
    <Albums
      key={product.id}
      title={product.title}
      imageUrl={product.imageUrl}
      price={product.price}
    />
  ));
  return (
    <section className={classes["music-content"]}>
     <ul>{productLists}</ul> 
    </section>
  );
};
export default AvailableAlbums;
