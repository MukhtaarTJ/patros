import React from 'react';
import styles from "./Home.module.css";
import { Carousel } from 'react-bootstrap';
import firstBackground from "../../Assets/background-1.jpeg";
import secondBackground from "../../Assets/background-2.jpeg";
import thirdBackground from "../../Assets/background-3.jpeg";

const Home = () => {
  return (
    <Carousel className={`cb slideshow carousel slide ${styles.container}`} interval={3000} controls={false}>
      <Carousel.Item>
        <img src={firstBackground} alt="" className={styles.img} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={secondBackground} alt="" className={styles.img} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={thirdBackground} alt="" className={styles.img} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;
