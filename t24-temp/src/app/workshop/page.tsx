// app/page.jsx
"use client";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card.jsx";
import styles from "./page.module.css";
// import Navbar from '../../components/navbar/navbar'
import Navbar2Black from "@/components/Navbar2Black/Navbar2Black";
import { HeroHighlight } from "../../components/ui/hero-highlight";

const CMS_URL = "https://cms.tathva.org";

const CMS_API_TOKEN = "fecee17e1e701ae4b85dfe015508ab24270c911fed283fa78752a6a233c11a2c232c464cc88dd0d96a07a9a71c82f6f04391795e58f94561fdfafa45a8d22d88209ee67f06b0ecfbe8ff6be3473f533fab42d6fd3b0c5cbc9a860b6733e744104818e113022e0e46f3b459acb648f8e04bc66198cd47ed303ea62a1f7186c980";

export default function Workshop() {
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const res = await fetch(
          CMS_URL + "/api/workshops?populate=posterImage",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + CMS_API_TOKEN,
            },
          }
        );
        const data = await res.json();
        setWorkshops(data.data);
      } catch (error) {
        console.error("Error fetching workshops:", error);
      }
    };

    fetchWorkshops();
  }, []);

  return (
    <>
      <HeroHighlight>
        <Navbar2Black />
        <div className={`${styles.container} font-kodeMono mt-20 `}>
          <h1 className={styles.title}>WORKSHOPS</h1>

          {/* Container for the workshops */}
          <div className={styles.cardContainer}>
            {workshops.map((workshop, index) =>
              workshop.posterImage?.url &&
              workshop.name &&
              workshop.description &&
              workshop.regPrice &&
              workshop.eventDate &&
              workshop.regLink ? (
                <Card
                  key={index}
                  image={CMS_URL + workshop.posterImage.url}
                  heading={workshop.name}
                  description={workshop.description}
                  price={"₹" + workshop.regPrice}
                  date={workshop.eventDate}
                  link={workshop.regLink}
                />
              ) : null
            )}
          </div>
        </div>
      </HeroHighlight>
    </>
  );
}
