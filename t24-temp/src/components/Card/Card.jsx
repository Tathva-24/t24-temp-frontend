// app/components/Card.jsx
"use client"; // This is necessary for client components in Next.js
// import React, { useState, useEffect } from "react";
import styles from "./Card.module.css";
// import Modal from "../regpage/page"; // Ensure the correct path to your modal component

const Card = ({ image, heading, description, price, date, link }) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleRegisterClick = () => {
  //   setIsModalOpen(true); // Open the modal when the button is clicked
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false); // Close the modal
  // };

  // // Effect to handle body blur
  // useEffect(() => {
  //   if (isModalOpen) {
  //     document.body.classList.add(styles.blur); // Add blur effect to body
  //   } else {
  //     document.body.classList.remove(styles.blur); // Remove blur effect from body
  //   }

  // Clean up class on component unmount
  //   return () => {
  //     document.body.classList.remove(styles.blur);
  //   };
  // }, [isModalOpen]);

  return (
    <>
      <div className={`${styles.cardContainer} `}>
        <div className={styles.card}>
          <img src={image} alt={heading} className={styles.image} />
          <div className={styles.heading}>
          <h3 className={styles.h3}>{heading}</h3>
          </div>
          <div className={styles.info_head}>
          <p className={styles.p}>
            {description.slice(0, 200) +
              (description.length > 200 ? "..." : "")}
          </p>
         
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
            <p className={styles.price}>{price}</p>
            <p className={styles.date}>{date}</p>
            </div>
            <button className={styles.regbutton}>
              <a href={link}>Register</a>
              {/* onClick={handleRegisterClick} */}
            </button>
          </div>
        </div>
        </div>
        {/* Render the Modal component only if it is open */}
      </div>
    </>
  );
};

export default Card;
