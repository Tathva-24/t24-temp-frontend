// app/page.jsx
"use client";
import React from "react";
import Card from "../../components/Card/Card";
import styles from "../workshop/page.module.css";
import ComingSoon from "../../components/ComingSoon/ComingSoon";

import Navbar2Black from "@/components/Navbar2Black/Navbar2Black";
const workshops = [];

export default function Workshop() {
  return (
    <>
      <Navbar2Black />
      <div className={`${styles.container} mt-20`}>
        <h1 className={styles.title}>LECTURES</h1>
        <ComingSoon />
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
              link={workshop.link}
            />
          ))}
        </div>
      </div>
    </>
  );
}
