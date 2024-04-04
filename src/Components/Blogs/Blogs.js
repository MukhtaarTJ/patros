import React from "react";
import styles from "./Blogs.module.css";
import short from "../../Assets/short.png";
import firstBlog from "../../Assets/blog-1.jpeg";
import secondBlog from "../../Assets/blog-2.jpeg";
import thirdBlog from "../../Assets/blog-3.jpeg";

const Blogs = () => {
  return (
    <div className="my-5">
      <h1 className="text-center pt-5 fs-2">LATEST BLOG POSTS</h1>
      <img src={short} alt="" className="mx-auto d-block" />
      <div className="row ms-auto me-auto my-5 " style={{ maxWidth: "90%" , width:"1100px"}}>
        <div className=" col-md-4 border">
          <img
            src={firstBlog}
            alt=""
            className={`mx-auto d-block ${styles.img}`}
          />
          <div className={styles.text_layout}>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              viverra euismod odio, gravida pellentesque urna varius vitae.
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <button className="d-block mx-auto p-2 text-white" style={{background:"#d83616",border:"none"}}>Read More</button>
        </div>
        <div className=" col-md-4 border">
          <img
            src={secondBlog}
            alt=""
            className={`mx-auto d-block ${styles.img}`}
          />
          <div className={styles.text_layout}>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              viverra euismod odio, gravida pellentesque urna varius vitae.
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <button className="d-block mx-auto p-2 text-white" style={{background:"#d83616",border:"none"}}>Read More</button>

        </div>
        <div className="col-md-4 border">
          <img
            src={thirdBlog}
            alt=""
            className={`mx-auto d-block ${styles.img}`}
          />
          <div className={styles.text_layout}>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              viverra euismod odio, gravida pellentesque urna varius vitae.
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <button className="d-block mx-auto p-2 text-white" style={{background:"#d83616", border:"none"}}>Read More</button>

        </div>
      </div>
    </div>
  );
};

export default Blogs;
