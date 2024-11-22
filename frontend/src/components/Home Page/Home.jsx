import "./Home.css";
import "../Navbar/navbar.css";
import bluelightning from "../../logos/bluelightning.png";
import yellowlightning from "../../logos/yellowlightning.png";
import hands from "../../logos/hands.png";
import umbrella from "../../logos/Umbrella1.png";
import bike from "../../logos/bike.png";
import car from "../../logos/car.png";
import Family from "../../logos/Family.png";
import box from "../../logos/box.png";
import cr from "../../logos/cr1.png";
import child from "../../logos/child.png";
import flight from "../../logos/flight.png";
import people from "../../logos/people.png";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import { Navbar } from "../Navbar/Navbar";
import { CarouselProps } from "./CarouselProps";
import left from "../../logos/left-bg.webp";
import right from "../../logos/right-bg.png";
import party from "../../logos/Party.png";
import search from "../../logos/search.png";
import staremoji from "../../logos/staremoji.png";
import girl from "../../logos/girlmoji.png";
import Presentation1 from "../../logos/Presentation1.png";
import Presentation2 from "../../logos/Presentation2.png";
import Presentation3 from "../../logos/Presentation3.png";
import Presentation4 from "../../logos/Presentation4.png";
import Presentation5 from "../../logos/Presentation5.png";
import star from "../../logos/star.png";
import bigp from "../../logos/bigp.png";
import appstore from "../../logos/appstore.png";
import playstore from "../../logos/playstore.png";
import o1 from "../../logos/o1.png";
import o2 from "../../logos/o2.png";
import o3 from "../../logos/o3.png";
import o4 from "../../logos/o4.png";
import o5 from "../../logos/o5.png";
import o6 from "../../logos/o6.png";
import o7 from "../../logos/o7.png";
import o8 from "../../logos/o8.png";
import o9 from "../../logos/o9.png";
import o0 from "../../logos/o0.png";
import k1 from "../../logos/k1.png";
import k2 from "../../logos/k2.png";
import k3 from "../../logos/k3.png";
import k4 from "../../logos/k4.png";
import k5 from "../../logos/k5.png";
import k6 from "../../logos/k6.png";
import k7 from "../../logos/k7.png";
import k8 from "../../logos/k8.png";
import k9 from "../../logos/k9.png";
import k0 from "../../logos/k0.png";
import invest1 from "../../logos/invest1.png";
import invest2 from "../../logos/invest2.png";
import { Footer } from "./Footer";

import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  height: "65%",
  color: theme.palette.text.secondary,
}));

export const Home = () => {

    // const navigate=useNavigate()
  const handleClick = () => {
      window.location.href="/typescreen"
    // navigate("/typescreen")
  };

  return (
    <>
    

      <div className="home-main">
        <div className="home-total">
          <div className="home-head">
            <p>
              Let’s find you <br />
              the <b>Best Insurance</b>
            </p>
          </div>
          <div>
            <p>
              <img src={bluelightning} alt="bluelightning" />
              <p className="home-cont1">
                50+ insurers with one of the best prices{" "}
              </p>
            </p>
          </div>
          <div>
            <p>
              <img className="home-img" src={yellowlightning} alt="thunder" />
              <p className="home-cont2">Quick, easy & hassle free</p>
            </p>
          </div>
          <div className="home-da"></div>
          {/* ................................ */}
          <div className="parent">
            <div className="home-maind">
              <div className="home-tol" onClick={handleClick}>
                <img src={umbrella} alt="one" />
                <p className="home-tm">Guaranteed Return Plan </p>
              </div>
              <div className="home-tol">
                <img src={Family} alt="one" />
                <p className="home-tm">Family Health Insurance</p>
                <p className="home-tmc" style={{ marginTop: "0.1%" }}>
                  {" "}
                  <span className="home-dot1"> </span> New
                </p>
              </div>
              <div className="home-tol">
                <img src={bike} alt="one" />
                <p className="home-tm" onClick={() => {}}>
                  2 Wheeler Insurance{" "}
                </p>
                <p className="home-tm1-5" style={{ marginTop: "0.1%" }}>
                  {" "}
                  <span className="home-dot"> </span>Instant Policy
                </p>
              </div>
              <div className="home-tol">
                <img src={car} alt="one" />
                <p className="home-tm">Car Insurance Plan</p>
                <p className="home-tm1-5" style={{ marginTop: "0.1%" }}>
                  {" "}
                  <span className="home-dot"> </span> Covers covid-19
                </p>
              </div>
              <div className="home-tol">
                <img src={bike} alt="one" />
                <p className="home-tm">Investment Plans </p>
                <p className="home-tm1-5" style={{ marginTop: "0.1%" }}>
                  {" "}
                  <span className="home-dot"> </span> Covers covid-19
                </p>
              </div>
              <div className="home-tol">
                <img src={hands} alt="one" />
                <p className="home-tm">Term Life Insurance </p>
                <p className="home-tm1" style={{ marginTop: "-0.9%" }}>
                  {" "}
                  <span className="home-dot"> </span> Covers covid-19
                </p>
              </div>
              <div className="home-tol">
                <img src={umbrella} alt="one" />
                <p className="home-tm">Term Life Insurance </p>
                <p className="home-tm1" style={{ marginTop: "-0.4%" }}>
                  {" "}
                  <span className="home-dot"> </span> Covers covid-19
                </p>
              </div>
              <div className="home-tms">
                <img src={box} alt="one" />
                <p className="home-tm">View All Products </p>
              </div>
              <div className="home-tms">
                <img src={cr} alt="one" />
                <p className="home-tm"> 1 Cr Health Insurance </p>
              </div>
              <div className="home-tol">
                <img src={people} alt="one" />
                <p className="home-tm">Group Health Insurance</p>
                <p className="home-tmc" style={{ marginTop: "0.5%" }}>
                  {" "}
                  <span className="home-dot1"> </span> New
                </p>
              </div>
              <div className="home-tol">
                <img src={umbrella} alt="one" />
                <p className="home-tm">Retirement Plans </p>
                <p className="home-tmc">
                  {" "}
                  <span className="home-dot1"> </span> New
                </p>
              </div>
              <div className="home-tol">
                <img src={child} alt="one" />
                <p className="home-tm">Child Savings Plans</p>
                <p className="home-tmc">
                  {" "}
                  <span className="home-dot1"> </span> New
                </p>
              </div>
              <div className="home-tol">
                <img src={flight} alt="one" />
                <p className="home-tm">Travel Insurance </p>
                <p className="home-tm1-5" style={{ marginTop: "-0%" }}>
                  {" "}
                  <span className="home-dot"> </span> Covers covid-19
                </p>
              </div>
              <div className="home-tol" style={{ marginLeft: "6%" }}>
                <img src={umbrella} alt="one" />
                <p className="home-tm">Saral Jeevan Bima </p>
                <p className="home-tmc">
                  {" "}
                  <span className="home-dot1"> </span> New
                </p>
              </div>
            </div>
          </div>

          {/* ..................... */}
        </div>
        <p className="home-also">ALSO BUY</p>
        <Grid
          container
          spacing={2}
          style={{
            width: "80%",
            alignItems: "left",
            textAlign: "left",
            marginTop: "10px",
          }}
        >
          <Grid item xs="auto">
            <Item style={{ textAlign: "left" }}>
              <p className="home-te">
                {" "}
                <span className="home-dot3"></span> Term Life
              </p>
              <p className="home-te1">Return of Premium</p>
            </Item>
          </Grid>
          <Grid item xs="auto">
            <Item style={{ textAlign: "left" }}>
              <p className="home-te">
                {" "}
                <span className="home-dot3"></span> Term Life
              </p>
              <p className="home-te1">Non-Working Spouse Plan</p>
            </Item>
          </Grid>
          <Grid item xs="auto">
            <Item style={{ textAlign: "left" }}>
              <p className="home-te" style={{ color: "#FF4D4F" }}>
                {" "}
                <span
                  className="home-dot3"
                  style={{ backgroundColor: "#FF4D4F" }}
                ></span>{" "}
                Health
              </p>
              <p className="home-te1">Corona Virus Health Insurance</p>
            </Item>
          </Grid>
          <Grid item xs="auto">
            <Item style={{ textAlign: "left" }}>
              <p className="home-te" style={{ color: "#FF4D4F" }}>
                {" "}
                <span
                  className="home-dot3"
                  style={{ backgroundColor: "#FF4D4F" }}
                ></span>{" "}
                Health
              </p>
              <p className="home-te1">Arogya Sanjeevani</p>
            </Item>
          </Grid>
          <Grid item xs="auto">
            <Item style={{ textAlign: "left" }}>
              <p className="home-te">
                {" "}
                <span className="home-dot3"></span> Home
              </p>
              <p className="home-te1">Home Building & Items</p>
            </Item>
          </Grid>
          <Grid item xs="auto">
            <Item style={{ textAlign: "left" }}>
              <p className="home-te" style={{ color: "#3AC2F3" }}>
                {" "}
                <span
                  className="home-dot3"
                  style={{ backgroundColor: "#3AC2F3" }}
                ></span>{" "}
                Motor
              </p>
              <p className="home-te1">Comercial Vehicals</p>
            </Item>
          </Grid>
          <Grid item xs="auto">
            <Item style={{ textAlign: "left" }}>
              <p className="home-te">
                {" "}
                <span className="home-dot3"></span> Others
              </p>
              <p className="home-te1">pet Insurance</p>
            </Item>
          </Grid>
        </Grid>
      </div>
      <br></br>
      <br></br>
      <br></br>

      <div
        style={{ backgroundColor: "#F0F6FF", cursor: "pointer", padding: "3%" }}
      >
        <div style={{ marginLeft: "5%", height: "80%", marginBottom: "2%" }}>
          <CarouselProps
            style={{ marginLeft: "5%", height: "90%", marginBottom: "2%" }}
          />
        </div>
      </div>
      <div>
        <img style={{ float: "left" }} src={left} alt="left-bg" />
        <p
          style={{
            position: "absolute",
            marginTop: "8%",
            fontSize: "36px",
            marginLeft: "12%",
            color: "#253858",
          }}
        >
          What makes <br></br>
          <b> Policybazaar</b> the<br></br>
          <b> best place</b> to buy<br></br>
          <b> insurance</b> in India?
        </p>
        <img style={{ float: "right" }} src={right} alt="left-bg" />

        <div className="home-d1">
          <div className="home-l" style={{ backgroundColor: "#0550C7" }}></div>
          <img src={party} alt="party" />
          <p>
            <b
              style={{
                color: "#0550C7",
                position: "absolute",
                marginBottom: "13px",
              }}
            >
              Over 9 million
            </b>
          </p>
          <p className="home-d-text">
            Customers trust us & have bought their insurance on Policy bazaar
          </p>
        </div>
        <div className="home-d2">
          <div className="home-l" style={{ backgroundColor: "#3AC2F3" }}></div>
          <img src={search} alt="party" />
          <p>
            <b
              style={{
                color: "#3AC2F3",
                position: "absolute",
                marginBottom: "13px",
              }}
            >
              50+ insurers
            </b>
          </p>
          <p className="home-d-text">
            partnered with us so that you can compare easily & transparentlyr
          </p>
        </div>
        <div className="home-d3">
          <div className="home-l" style={{ backgroundColor: "#57CD1D" }}></div>
          <img src={staremoji} alt="party" />
          <p>
            <b
              style={{
                color: "#57CD1D",
                position: "absolute",
                marginBottom: "13px",
              }}
            >
              The Best Price
            </b>
          </p>
          <p className="home-d-text">
            for all insurance plans available online
          </p>
        </div>
        <div className="home-d4">
          <div className="home-l" style={{ backgroundColor: "#FFB62C" }}></div>
          <img src={girl} alt="party" />
          <p>
            <b
              style={{
                color: "#FFB62C",
                position: "absolute",
                marginBottom: "13px",
              }}
            >
              Claims
            </b>
          </p>
          <p className="home-d-text">
            support built in with every policy for help, when you need it the
            mostr
          </p>
        </div>
      </div>
      <div
        style={{
          marginTop: "45%",
          marginLeft: "12%",
          fontFamily:
            "Roboto,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif",
        }}
      >
        <h1>PB Advantage</h1>
        <div className="home-hl"></div>
        <p className="home-hp">
          When you buy insurance from us, you get more than just financial
          safety. You also get: our promise of simplifying complex insurance
          terms and conditions, quick stress-free claims, instant quotes from
          top insurers and being present for you in the toughest of times.
        </p>
        <p
          style={{ color: "#0663F6", fontWeight: "500", alignItems: "center" }}
        >
          Know more
        </p>
      </div>
      <div style={{ width: "80%", marginLeft: "15%" }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={2.2}>
            <Item
              style={{ height: "200px", alignItems: "center" }}
              className="home-de"
            >
              <img
                style={{ marginLeft: "15%", marginTop: "15%" }}
                src={Presentation1}
                alt="one"
              />
              <h4
                style={{
                  color: "black",
                  fontSize: "20px",
                  marginBottom: "0px",
                }}
              >
                On best Prices
              </h4>
              <p style={{ marginTop: "0px" }}>Guaranteed</p>
            </Item>
          </Grid>
          <Grid item xs={2.2}>
            <Item
              style={{ height: "200px", alignItems: "center" }}
              className="home-de"
            >
              <img
                style={{ marginLeft: "15%", marginTop: "15%" }}
                src={Presentation2}
                alt="one"
              />
              <h4
                style={{
                  color: "black",
                  fontSize: "20px",
                  marginBottom: "0px",
                }}
              >
                Unbiased Advice
              </h4>
              <p style={{ marginTop: "0px" }}>Keeping customers first.</p>
            </Item>
          </Grid>
          <Grid item xs={2.2}>
            <Item
              style={{ height: "200px", alignItems: "center" }}
              className="home-de"
            >
              <img
                style={{ marginLeft: "15%", marginTop: "15%" }}
                src={Presentation3}
                alt="one"
              />
              <h4
                style={{
                  color: "black",
                  fontSize: "20px",
                  marginBottom: "0px",
                }}
              >
                100% Reliable
              </h4>
              <p style={{ marginTop: "0px" }}>Regulated by IRDAI</p>
            </Item>
          </Grid>
          <Grid item xs={2.2}>
            <Item
              style={{ height: "200px", alignItems: "center" }}
              className="home-de"
            >
              <img
                style={{ marginLeft: "15%", marginTop: "15%" }}
                src={Presentation4}
                alt="one"
              />
              <h4
                style={{
                  color: "black",
                  fontSize: "20px",
                  marginBottom: "0px",
                }}
              >
                Claims Support
              </h4>
              <p style={{ marginTop: "0px" }}>Made Stress-free</p>
            </Item>
          </Grid>
          <Grid item xs={2.2}>
            <Item
              style={{ height: "200px", alignItems: "center" }}
              className="home-de"
            >
              <img
                style={{ marginLeft: "15%", marginTop: "15%" }}
                src={Presentation5}
                alt="one"
              />
              <h5
                style={{
                  color: "black",
                  fontSize: "20px",
                  marginBottom: "0px",
                }}
              >
                Happy to Help
              </h5>
              <p style={{ marginTop: "0px" }}>Every day of the week</p>
            </Item>
          </Grid>
        </Grid>
      </div>
      <div
        style={{
          backgroundColor: "#F0F6FF",
          width: "100%",
          height: "543px",
          marginTop: "5%",
        }}
      >
        <img
          style={{ float: "right", marginRight: "15%", marginTop: "5%" }}
          src={bigp}
          alt="phone"
        />
        <div
          style={{
            marginLeft: "13%",
            position: "absolute",
            fontFamily:
              "Roboto,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif",
          }}
        >
          <h1
            style={{
              fontWeight: "500",
              fontFamily:
                "Roboto,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif",
              lineHeight: "114%",
            }}
          >
            Get the Policybazaar app
          </h1>
          <div className="home-hl"></div>
          <p style={{ color: "#253858", fontSize: "18px" }}>
            Get control of all your insurance needs anywhere, anytime
          </p>

          <p style={{ position: "absolute", top: "100%", left: "0%" }}>
            {" "}
            <img src={star} alt="star" /> Compare different insurance policies
          </p>
          <p style={{ position: "absolute", top: "130%", left: "0%" }}>
            <img src={star} alt="star" /> Buy, store and share all your policies
            online
          </p>
          <p style={{ position: "absolute", top: "160%", left: "0%" }}>
            <img src={star} alt="star" /> Track your policy status on the go
          </p>
          <p style={{ position: "absolute", top: "190%", left: "0%" }}>
            <img src={star} alt="star" /> Download your policy with a single tap
          </p>
          <p
            style={{
              position: "absolute",
              top: "225%",
              left: "0%",
              color: "#253858",
            }}
          >
            Download our app from
          </p>
          <div
            style={{
              position: "absolute",
              top: "265%",
              left: "0%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <img src={playstore} alt="app" style={{ marginRight: "7%" }} />

            <img src={appstore} alt="app" />
          </div>
        </div>
      </div>
      <div className="home-ma-pat">
        <p className="home-pat">Our Partners</p>
        <p className="home-pat1">Leading insurers for your financial freedom</p>
        <div
          style={{
            width: "70%",
            marginLeft: "15%",
            marginRight: "15%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o1} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o2} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o3} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o4} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o5} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o6} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o7} alt="one" />
          </div>
        </div>

        <div
          style={{
            width: "70%",
            marginLeft: "15%",
            marginTop: "2%",
            marginRight: "15%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o8} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px", height: "40px" }} src={o9} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o4} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o5} alt="one" />
          </div>

          <div className="home-ob">
            <img style={{ width: "90px" }} src={o6} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o7} alt="one" />
          </div>

          <div className="home-ob">
            <img style={{ width: "90px" }} src={o5} alt="one" />
          </div>
        </div>
        <div
          style={{
            width: "70%",
            marginLeft: "15%",
            marginTop: "2%",
            marginRight: "15%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k1} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px", height: "40px" }} src={k0} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k3} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k2} alt="one" />
          </div>

          <div className="home-ob">
            <img style={{ width: "90px" }} src={k8} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k3} alt="one" />
          </div>

          <div className="home-ob">
            <img style={{ width: "90px" }} src={k5} alt="one" />
          </div>
        </div>
        <div
          style={{
            width: "70%",
            marginLeft: "15%",
            marginTop: "2%",
            marginRight: "15%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k7} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px", height: "40px" }} src={k6} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k5} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k0} alt="one" />
          </div>

          <div className="home-ob">
            <img style={{ width: "90px" }} src={k3} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k8} alt="one" />
          </div>

          <div className="home-ob">
            <img style={{ width: "90px" }} src={k4} alt="one" />
          </div>
        </div>
        <div
          style={{
            width: "70%",
            marginLeft: "15%",
            marginTop: "2%",
            marginRight: "15%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k2} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px", height: "40px" }} src={o0} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o4} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k1} alt="one" />
          </div>

          <div className="home-ob">
            <img style={{ width: "90px" }} src={k9} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k8} alt="one" />
          </div>

          <div className="home-ob">
            <img style={{ width: "90px" }} src={k4} alt="one" />
          </div>
        </div>
        <div
          style={{
            width: "70%",
            marginLeft: "15%",
            marginTop: "2%",
            marginRight: "15%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o3} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px", height: "40px" }} src={k2} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k1} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o5} alt="one" />
          </div>

          <div className="home-ob">
            <img style={{ width: "90px" }} src={o6} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px", height: "40px" }} src={o9} alt="one" />
          </div>

          <div className="home-ob">
            <img style={{ width: "90px" }} src={o0} alt="one" />
          </div>
        </div>
        <div
          style={{
            width: "70%",
            marginLeft: "15%",
            marginTop: "2%",
            marginRight: "15%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k7} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px", height: "40px" }} src={k6} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k5} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k0} alt="one" />
          </div>

          <div className="home-ob">
            <img style={{ width: "90px" }} src={k3} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k8} alt="one" />
          </div>

          <div className="home-ob">
            <img style={{ width: "90px" }} src={k4} alt="one" />
          </div>
        </div>
      </div>

      <div className="home-inv">
        <div
          style={{
            marginLeft: "12%",
            marginTop: "5%",
            fontFamily:
              "Roboto,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif",
          }}
        >
          <h1>Investors</h1>
          <div className="home-hl"></div>

          <div
            className="marquee"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
            }}
          >
            <div
              style={{
                width: "300px",
                height: "100px",
                backgroundColor: "white",
                borderRadius: "4px",
                paddingTop: "30px",
                paddingLeft: "40px",
                paddingRight: "40px",
              }}
            >
              <img src={invest1} alt="inv" />
            </div>
            <div
              style={{
                width: "200px",
                height: "100px",
                backgroundColor: "white",
                borderRadius: "4px",
                paddingTop: "35px",
                paddingLeft: "40px",
                paddingRight: "40px",
              }}
            >
              <img src={invest2} alt="inv" />
            </div>
            <div
              style={{
                width: "200px",
                height: "100px",
                backgroundColor: "white",
                borderRadius: "4px",
                paddingTop: "30px",
                paddingLeft: "40px",
                paddingRight: "40px",
              }}
            >
              <img src={invest1} alt="inv" />
            </div>
            <div
              style={{
                width: "200px",
                height: "100px",
                backgroundColor: "white",
                borderRadius: "4px",
                paddingTop: "35px",
                paddingLeft: "40px",
                paddingRight: "40px",
              }}
            >
              <img src={invest2} alt="inv" />
            </div>
            <div
              style={{
                width: "200px",
                height: "100px",
                backgroundColor: "white",
                borderRadius: "4px",
                paddingTop: "35px",
                paddingLeft: "40px",
                paddingRight: "40px",
              }}
            >
              <img src={invest2} alt="inv" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
