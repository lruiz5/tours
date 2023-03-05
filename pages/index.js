import Nav from "@/components/nav";
import About from "@/components/About";
import Header from "@/components/Header";
import Features from "@/components/Features";
import Tours from "@/components/Tours";
import Stories from "@/components/Stories";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import PopUp from "@/components/PopUp";

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <main>
        <About />
        <Features />
        <Tours />
        <Stories />
        <Booking />
      </main>
      <Footer />
      <PopUp />
    </>
  );
}
