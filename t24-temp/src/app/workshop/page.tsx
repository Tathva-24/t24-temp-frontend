// app/page.jsx
'use client'
import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card.jsx";
import styles from "./page.module.css";
// import Navbar from '../../components/navbar/navbar'
import Navbar2Black from "@/components/Navbar2Black/Navbar2Black";

const CMS_URL = "https://cms.tathva.org";
const CMS_API_TOKEN = "994fefbd051fa13866a7b0eed4df028a0d4b2bbbc22b1feaa23b0dfd849fc804e26750a92be9c4205fefd04c5aab555ebd2436e60f68ec0287c34e6fb7763a54b89d7239b1d73dcc1650f2eea905279f2c8eaafeed4b083294c30a8c9bdb4edefde6dea87986f992ff69a687d84d39ce2ad02c19fcbb053f57b6e29357cf7538";

export default function Workshop() {
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const res = await fetch(CMS_URL + '/api/workshops?populate=posterImage', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + CMS_API_TOKEN,
          }
        });
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
      <Navbar2Black />
      <div className={`${styles.container} font-kodeMono mt-20 `}>
        <h1 className={styles.title}>WORKSHOPS</h1>

        {/* Container for the workshops */}
        <div className={styles.cardContainer}>
          {workshops.map((workshop, index) => (
            workshop.posterImage?.url && workshop.name && workshop.description && workshop.regPrice && workshop.eventDate && workshop.regLink ? (
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
          ))}
        </div>
      </div>
    </>
  );
}
