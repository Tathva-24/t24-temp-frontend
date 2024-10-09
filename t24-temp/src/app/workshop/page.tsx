// app/page.jsx
'use client'
import React from "react";
import Card from "./Card/Card.jsx";
import styles from "./page.module.css";
// import Navbar from '../../components/navbar/navbar'
import Navbar2Black from "@/components/Navbar2Black/Navbar2Black";

const workshops = [
  {
    image: "/workshops/devops.jpeg",
    heading: "Workshop - Accelerate Innovation",
    description:
      "Accelerate Innovation : Master DevOps to Streamline Development, Automate Workflows, and Drive Continuous Delivery. Join us at the TATHVA workshop to unlock the power of seamless collaboration, and embrace the tech journey under our insightful experts",
    price: "₹999",
    date: "October 25, 2024",
    link: "https://tiqr.events/e/Workshop---Accelerate-Innovation--287"
  },
  {
    image: "/workshops/cyber.jpeg",
    heading: "CyberForensic And Data Security",
    description:
      "Gear up for an exciting Cyberforensic and Data Security Workshop at Tathva’24, powered by Techbyheart! Dive into real-world digital forensics, learn how to protect sensitive data, and master the latest in cybersecurity defenses.",
    price: "₹999",
    date: "October 25, 2024",
    link: "https://tiqr.events/e/Workshop---CyberForensic-And-Data-Security--285"

  },
  {
    image: "/workshops/AWS.jpeg",
    heading: "Amazon Web Services",
    description:
      "Enter the cloud and explore the domain of flexible and fast networking⚡. Join us at Tathva’24, Amazon Web Services workshop and delve through the facets of cloud computing🌩, servers and data management.",
    price: "₹999",
    date: "October 25, 2024",
    link: "https://tiqr.events/e/Workshop---Amazon-Web-Services--286"

  },
];

export default function Workshop() {
  return (
    <>
      <Navbar2Black />
      <div className={`${styles.container} font-kodeMono mt-20 `}>
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
              link={workshop.link}
            />
          ))}
        </div>
      </div>
    </>
  );
}