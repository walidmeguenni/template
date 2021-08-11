import React from "react";
import about from "../assets/images/9.jpeg";
import {Typography} from '@material-ui/core'
import "../styles/css/home.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
 brand:{
      color: '#fff',
      fontSize: '1.8em',
      fontWeight: 600,
      textDecoration: 'none',
      [theme.breakpoints.down("xs")]: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      },
  },
}));
const Home =()=> {
  const classes = useStyles();
    return (
      <div>
        <div className="scrollToTop-btn1">
          <i className="fas fa-angle-up"></i>
        </div>

        <header className="header1">
          <Typography  className={classes.brand}>Inventory</Typography>
          <div className="menu-btn1"></div>
          <div className="navigation">
            <a href="#main">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
            <a href="/auth">Signup</a>
          </div>
        </header>

        <section className="main section" id="main">
          <div className="space">
            <a href="/Dashboard" className="btn1">
              Jion
            </a>
            <a href="/auth" className="btn1">
              Log in
            </a>
          </div>
        </section>

        <section className="about1 section" id="about">
          <div className="title reveal">
            <h2 className="section-title">About</h2>
          </div>
          <div className="content">
            <div className="column col-left reveal">
              <div className="img-card1">
                <img src={about} alt="" />
              </div>
            </div>
            <div className="column col-right reveal">
              <h2 className="content-title">Hey There! I'm Jacob Stevens</h2>
              <p className="paragraph-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <a href="/" className="btn1">
                See More
              </a>
            </div>
          </div>
        </section>
        <section className="services section" id="services">
          <div className="title reveal">
            <h2 className="section-title">Services</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="content">
            <div className="card1 reveal">
              <div className="service-icon">
                <i className="fas fa-boxes"></i>
              </div>
              <div className="info">
                <h3>Storage Unlimited</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="card1 reveal">
              <div className="service-icon">
                <i className="fas fa-plug"></i>
              </div>
              <div className="info">
                <h3>Extension</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="card1 reveal">
              <div className="service-icon">
                <i className="fas fa-headset"></i>
              </div>
              <div className="info">
                <h3>Customers Service</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="contact section" id="contact">
          <div className="title reveal">
            <h2 className="section-title">Contact</h2>
          </div>
          <div className="content">
            <div className="row">
              <div className="card1 reveal">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="info">
                  <h3>Address</h3>
                  <span>Address, City, Country</span>
                </div>
              </div>
              <div className="card1 reveal">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="info">
                  <h3>Phone</h3>
                  <span>+00 0000 000 000</span>
                </div>
              </div>
              <div className="card1 reveal">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="info">
                  <h3>Email Address</h3>
                  <span>contact@email.com</span>
                </div>
              </div>
              <div className="card1 reveal">
                <div className="contact-icon">
                  <i className="fab fa-linkedin"></i>
                </div>
                <div className="info">
                  <h3>Account Linkedin</h3>
                  <span>Mwarehouse-Company</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer">
          <span className="footer-title">mwarehouse</span>
          <p>
            Copyright @2021 <a href="/">Mwarehouse Company</a>. All Rights
            Reserved.
          </p>
        </footer>
      </div>
    );
  
}

export {Home};
