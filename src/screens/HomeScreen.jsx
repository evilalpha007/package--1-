import React from "react";
import Header from "../components/user/Header";
import Carousel from "../components/user/Carousel";
import SubCard from "../components/user/SubCard";
import Card from "../components/user/Card";
import EditorChoice from "../components/user/EditorChoice";
import PaymentCarousel from "../components/user/PaymentCarousel";
import BlueImage from "../components/user/BlueImage";
import Footer from "../components/user/Footer";

export default function HomeScreen() {
  return (
    <>
      <Header />
      <Carousel />
      <SubCard />
      <Card />
      <EditorChoice />
      <PaymentCarousel />
      <BlueImage />
      <Footer />
    </>
  );
}
