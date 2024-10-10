import Navbar2 from "../Navbar2/Navbar2";
import styles from "./navbar.module.css";
import Link from "next/link";

export default function Landing() {
  return (
    <>
      <div
        className={`h-screen w-screen flex flex-col justify-between text-white font-kodeMono`}
      >
        <Navbar2 />
        <div className="contatiner flex flex-col justify-center items-center text-white font-kodeMono h-full">
          <h1 className="text-[15vw] md:text-[8vw]">TATHVA&#39;24</h1>
          <h3 className="text-[11vw] md:text-[4vw] mb-2">COMING SOON</h3>
          <Link href="/workshop" className={styles.navItem}>
            Register Here
          </Link>
          <div className="px-7 mt-5 text-[3.5vw] md:text-[2.5vw] flex justify-between items-center gap-10">
            <p className="mx-3">25 OCT</p>
            <p className="mx-3">26 OCT</p>
            <p className="mx-3">27 OCT</p>
          </div>
        </div>
      </div>
    </>
  );
}
