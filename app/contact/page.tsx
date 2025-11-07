import Navbar from "@/components/Navbar";
import Footer from "@/components/home/footer";
import ContactHeader from "@/components/Contact/ContactHeader";
import BackToTop from "@/components/BackToTop/BackToTop";
import styles from "../about-us/page.module.css";

export default function Contact() {
  return (
    <div className={styles.pageContainer}>
      <Navbar />

      <main className={styles.mainContent}>
        <ContactHeader />
      </main>

      <Footer />
      <BackToTop backgroundColor="rgb(42, 35, 34)" />
    </div>
  );
}
