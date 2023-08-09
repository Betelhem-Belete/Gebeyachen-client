import React from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import './styles.css';
import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import yab from "../assets/yab.jpg";
import beti from "../assets/beti.jpg";
// import about from "../assets/about.png";
import "./styles.css";
import "./About.css";
function About() {
  return (
    <div>
      <Navbar />
      <div className="content">about</div>
      <div className="tt">
        <div class="container about_pg">
          <div class="row coverfor_about">
            <div class="col-md-12 text-center mb-4">
              <h1>Welcome to Gebeyachen eCommerce</h1>
              <p>
                Gebeyachen store is developed for the purpose of delivrering
                fast, secure, reliable and easy way to communicate buyers and
                sellers to buy and sell products. It is developed in 2015 by two
                university students.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="person-card">
                <img src={yab} alt="Yabtsega Taye" class="person-image" />
                <h2 class="person-title">Yabtsega Taye</h2>
                <p class="person-position">CEO and Developer of Gebeyachen</p>
                <p class="person-description">
                  Yabtsega Taye is a visionary leader and talented developer,
                  serving as the CEO and Developer of Gebeyachen. With a passion
                  for technology and innovation, Yabtsega has led the company to
                  new heights. Alongside these achievements, Yabtsega is also a
                  Full Stack Developer and currently pursuing studies at Unity
                  University.
                </p>
                <ul class="skills-list">
                  <li>Web Development</li>
                  <li>Mobile App Development</li>
                  <li>Database Management</li>
                  <li>UI/UX Design</li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div class="person-card">
                <img src={beti} alt="Betelhem Belete" class="person-image" />
                <h2 class="person-title">Betelhem Belete</h2>
                <p class="person-position">
                  Manager and Developer of Gebeyachen
                </p>
                <p class="person-description">
                  Betelhem Belete is a dedicated Manager and Developer at
                  Gebeyachen. With a strong background in Full Stack
                  Development, Betelhem brings a wealth of expertise to the
                  team. Currently pursuing studies at a prestigious university,
                  Betelhem continues to excel in both academic and professional
                  realms.
                </p>
                <ul class="skills-list">
                  <li>Front-end Development</li>
                  <li>Back-end Development</li>
                  <li>DevOps</li>
                  <li>Project Management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>