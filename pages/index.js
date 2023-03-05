import Head from "next/head";
import Nav from "@/components/Nav";
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
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Natours | Exciting tours for adventurous people</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
