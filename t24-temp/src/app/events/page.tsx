// app/page.jsx
"use client";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card_img2/Card_img2.jsx";
import styles from "./page.module.css";
import Navbar2Black from "@/components/Navbar2Black/Navbar2Black";
import { HeroHighlight } from "../../components/ui/hero-highlight";

const CMS_URL = "https://cms.tathva.org";
const CMS_API_TOKEN =
  "994fefbd051fa13866a7b0eed4df028a0d4b2bbbc22b1feaa23b0dfd849fc804e26750a92be9c4205fefd04c5aab555ebd2436e60f68ec0287c34e6fb7763a54b89d7239b1d73dcc1650f2eea905279f2c8eaafeed4b083294c30a8c9bdb4edefde6dea87986f992ff69a687d84d39ce2ad02c19fcbb053f57b6e29357cf7538";

export default function Event() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(
          CMS_URL + "/api/competitions?populate=coverImage",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + CMS_API_TOKEN,
            },
          }
        );
        const data = await res.json();
        setEvents(data.data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <HeroHighlight>
        <Navbar2Black />
        <div className={`${styles.container} font-kodeMono mt-20 `}>
          <h1 className={styles.title}> COMPETITIONS</h1>

          {/* Container for the workshops */}
          <div className={styles.cardContainer}>
            {events.map((events, index) =>
              events.coverImage?.url &&
              events.title &&
              events.description &&
              events.regFee &&
              events.eventDate &&
              events.regLink ? (
                <Card
                  key={index}
                  image={CMS_URL + events.coverImage.url}
                  heading={events.title}
                  description={events.description}
                  price={"₹" + events.regFee}
                  date={events.eventDate}
                  link={events.regLink}
                />
              ) : null
            )}
          </div>
        </div>
      </HeroHighlight>
    </>
  );
}
