// app/page.jsx
"use client";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card_img2/Card_img2.jsx";
import styles from "./page.module.css";
import Navbar2Black from "@/components/Navbar2Black/Navbar2Black";

const CMS_URL = "https://cms.tathva.org";
const CMS_API_TOKEN =
  "cf24717e06945bd267da2c6b4e983642100e236a8f3484ab39a1bfa153a39ab9e0de1b2ed41fa2e3c252d5d765a6212fb02c088897569bbfa26e296acb296f3c877bfdd2b22bd707d304d8176883bea754e65e15fa768006a1d1cd9a1da1d49f95731919595be42630efd6b2fa8deed72675cf7ca46f34a511bb4e5cf0bb3d92";

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
    </>
  );
}
