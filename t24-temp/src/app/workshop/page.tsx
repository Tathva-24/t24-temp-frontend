// app/page.jsx
'use client'
import React from "react";
import Card from "./Card/Card.jsx";
import styles from "./page.module.css";
// import Navbar from '../../components/navbar/navbar'
import Navbar2Black from "@/components/Navbar2Black/Navbar2Black";

const CMS_URL = "https://cms.tathva.org";
const CMS_API_TOKEN = "daf1d4fd1e2b55fae1379ca1b36fbb2e3cc2ad02e5a723166f129817950b4b333582c9d8a6e8ede49bcf82252fa130154123f1b3c0d70667f10cefd70f653ed17f07cf3f6095d3f66d50fc9ce08f1f3ef0455f12c78e507667394f202e4eb0aecd98e0c0675f651d42b6285a9f043a8515d30be9b681f2c503b627a05042fd85"

const res = await fetch(CMS_URL + '/api/workshops?populate=posterImage', {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
		'Authorization': 'Bearer ' + CMS_API_TOKEN, // Optional, if needed
	}
});
const data = await res.json();
console.log(data);
//console.log(workshops);
const workshops = data.data;


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
              image={CMS_URL + workshop.posterImage.url}
              heading={workshop.name}
              description={workshop.description}
              price={"₹" + workshop.regPrice}
              date={workshop.eventDate}
              link={workshop.regLink}
            />
          ))}
        </div>
      </div>
    </>
  );
}
