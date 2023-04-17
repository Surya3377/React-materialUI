import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { useNavigate,useRedirect } from "react-router-dom";

const Header = () => {


  const navigate = useNavigate();


const todoHandler = () => {
  navigate("/new-Todo")
}

  return (
    <div className={classes.header}>
      <div className={classes.header_left}>
        <h1>React-Router</h1>
      </div>
      <div className={classes.header_right}>
        <div>
          <Link to="/Filter"  className={classes.link}>
            Filter
          </Link>
        </div>
        <div>
          <Link to="/Delete" className={classes.link}>
            Delete
          </Link>
        </div>
        <div>
          <Link to="/Comments" className={classes.link}>
            Comments
          </Link>
        </div>
        <div>
          <Link to="/Todo" onClick={{todoHandler}} className={classes.link}>
            Todo
          </Link>
        </div>
        <div>
          <Link to="/Users" className={classes.link}>
            Users
          </Link>
        </div>
        <div>
          <Link to="/Quotes" className={classes.link}>
            Quotes
          </Link>
        </div>
        <div>
          <Link to="/Post" className={classes.link}>
            Post
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
