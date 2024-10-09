// @ts-nocheck

"use client";

import React, {
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  FormEvent,
} from "react";
import styles from "./reg.module.css";
import Image from "next/image";
import gsap from "gsap";
import Infocont from "./infoconweb";
import InfoconMob from "./infoconmob";
import { motion } from "framer-motion";

// Define types for NameAndBox props
interface NameAndBoxProps {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const NameAndBox: React.FC<NameAndBoxProps> = ({
  label,
  type,
  placeholder,
  name,
  value,
  handleChange,
}) => {
  return (
    <div>
      <label htmlFor={name}>
        <div className={styles.inputbox_header}>{label}</div>
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className={`${styles.inputbox} bg-neutral-800 text-neutral-200`}
      />
    </div>
  );
};

// Define types for form data
interface FormData {
  name: string;
  email: string;
  college: string;
  number: string;
}

const Regform: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    college: "",
    number: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert(
      `Name: ${formData.name}, Email: ${formData.email}, College: ${formData.college}, Number: ${formData.number}`
    );
  };

  return (
    <>
      <form className={styles.regformdiv} onSubmit={handleSubmit}>
        <div className={styles.regformhead}>COMING SOON</div>
        <div className={styles.regforma}>
          <NameAndBox
            label="Name"
            type="text"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            handleChange={handleChange}
          />
          <NameAndBox
            label="College Name"
            type="text"
            placeholder="Your College Name"
            name="college"
            value={formData.college}
            handleChange={handleChange}
          />
          <NameAndBox
            label="Email"
            type="email"
            placeholder="example@gmail.com"
            name="email"
            value={formData.email}
            handleChange={handleChange}
          />
          <NameAndBox
            label="Contact Number"
            type="text"
            placeholder="+91"
            name="number"
            value={formData.number}
            handleChange={handleChange}
          />
        </div>
        <div className={styles.paydiv}>
          <div className={styles.buttonshadow}>
            <button className={styles.regbutton} type="submit">
              COMING SOON
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, CSSRulePlugin, Draggable);

const Info: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeRef1 = useRef<HTMLDivElement>(null);
  const marqueeRefm = useRef<HTMLDivElement>(null);
  const marqueeRef1m = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef1.current;
    if (marquee) {
      const duplicateMarqueeContent = marquee.innerHTML;
      marquee.innerHTML += duplicateMarqueeContent;
      const totalWidth = marquee.scrollWidth / 2;
      gsap.to(marquee, {
        x: -totalWidth,
        duration: 80,
        ease: "none",
        repeat: -1,
      });
    }
  }, []);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      const duplicateMarqueeContent = marquee.innerHTML;
      marquee.innerHTML += duplicateMarqueeContent;
      const totalWidth = marquee.scrollWidth / 2;
      gsap.to(marquee, {
        x: -totalWidth,
        duration: 80,
        ease: "none",
        repeat: -1,
      });
    }
  }, []);

  useEffect(() => {
    const marqueem = marqueeRef1m.current;
    if (marqueem) {
      const duplicateMarqueemContent = marqueem.innerHTML;
      marqueem.innerHTML += duplicateMarqueemContent;
      const totalWidth = marqueem.scrollWidth / 2;
      gsap.to(marqueem, {
        x: -totalWidth,
        duration: 80,
        ease: "none",
        repeat: -1,
      });
    }
  }, []);

  useEffect(() => {
    const marqueem = marqueeRefm.current;
    if (marqueem) {
      const duplicateMarqueemContent = marqueem.innerHTML;
      marqueem.innerHTML += duplicateMarqueemContent;
      const totalWidth = marqueem.scrollWidth / 2;
      gsap.to(marqueem, {
        x: -totalWidth,
        duration: 80,
        ease: "none",
        repeat: -1,
      });
    }
  }, []);

  return (
    <div className={styles.infodiv}>
      <div className={styles.infoimg}>
        <Image
          src="/x2.svg"
          alt="Description of the image"
          width={500}
          height={500}
        />
        <div className={styles.marqueecontainer}>
          <div ref={marqueeRef} className={styles.marquee}>
            HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY
            LOOK
          </div>
        </div>
        <div className={styles.marqueecontainer1}>
          <div ref={marqueeRef1} className={styles.marquee}>
            HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY
            LOOK
          </div>
        </div>
      </div>

      <div className={styles.infoimgmob}>
        <Image
          src="/b2.svg"
          alt="Description of the image"
          width={500}
          height={500}
        />
        <div className={styles.marqueecontainer}>
          <div ref={marqueeRefm} className={styles.marquee}>
            HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY
            LOOK
          </div>
        </div>
        <div className={styles.marqueecontainer1}>
          <div ref={marqueeRef1m} className={styles.marquee}>
            HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY
            LOOK
          </div>
        </div>
      </div>

      <div className={styles.infodiv2}>
        <div className={styles.infodivchead}>
          <p>Prompt Engineering</p>
        </div>
        <div className={styles.infodivc0}>
          <p>Learn the Language of AI</p>
        </div>
        <div className={styles.infodivc1}>
          <p>About the Workshop</p>
        </div>
        <div className={styles.infodivc2}>
          <p>
            These attributes allow you to customize the behavior and validation
            of input boxes in HTML forms, enhancing user experience and data
            collection. You can combine these attributes based on your
            requirements to create efficient forms.
          </p>
        </div>
      </div>

      <Infocont />
      <InfoconMob />
    </div>
  );
};

// Define types for Modal props
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <motion.div
      className={styles.modalBackdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className={styles.modalContent}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.main}>
          <div className={styles.page}>
            <button className={styles.closeButton} onClick={onClose}>
              X
            </button>
            <div className={styles.form}>
              <Info />
              <Regform />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
