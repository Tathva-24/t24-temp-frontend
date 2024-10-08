// app/page.jsx
'use client'
import React from "react";
import Card from "./Card/Card.jsx";
import styles from "./page.module.css";
import Navbar from '../../components/navbar/navbar'
import Navbar2Black from "@/components/Navbar2Black/Navbar2Black";

const workshops = [
  {
    image: "/poster.png",
    heading: "Real Madrid VS BVB",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    price: "₹990",
    date: "1, June 2024",
  },
  {
    image: "/poster.png",
    heading: "Real Madrid VS BVB",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    price: "₹1200",
    date: "1, June 2024",
  },
  {
    image: "/poster.png",
    heading: "Real Madrid VS BVB",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    price: "₹1200",
    date: "1, June 2024",
  },
  {
    image: "/poster.png",
    heading: "Real Madrid VS BVB",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    price: "₹1200",
    date: "1, June 2024",
  },
  {
    image: "/poster.png",
    heading: "Real Madrid VS BVB",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    price: "₹1200",
    date: "1, June 2024",
  },
  {
    image: "/poster.png",
    heading: "Real Madrid VS BVB",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    price: "₹1200",
    date: "1, June 2024",
  },
  {
    image: "/poster.png",
    heading: "Real Madrid VS BVB",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    price: "₹1200",
    date: "1, June 2024",
  },

  {
    image: "/poster.png",
    heading: "Real Madrid VS BVB",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    price: "₹1500",
    date: "1, June 2024",
  },
];

export default function Workshop() {
  return (
    <>
      <Navbar2Black />
      <div className={styles.container}>
        <h1 className={styles.title}>WORKSHOPS</h1>

        {/* Container for the workshops */}
        <div className={styles.cardContainer}>
          {workshops.map((workshop, index) => (
            <Card
              key={index}
              image={workshop.image}
              heading={workshop.heading}
              description={workshop.description}
              price={workshop.price}
              date={workshop.date}
            />
          ))}
        </div>
      </div>
    </>
  );
}