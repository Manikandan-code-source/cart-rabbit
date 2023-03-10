import React from "react";
import NavBar from "../NavBar/navbar";
import NavPage from "../NavPage"
import Footer from "../Footer/footer"
import "./main.css"

export default function MainPage() {
  return (
    <section className="background">
      <div>
        <NavBar/>
      </div>
      <div>
        <NavPage/>
      </div>
      <div>
        <Footer/>
      </div>
    </section>
  );
}
