import React from "react";
import { BiBluetooth } from "react-icons/bi";
import { AiOutlineWifi } from "react-icons/ai";
import { AiFillSignal } from "react-icons/ai";
import { MdBatteryChargingFull } from "react-icons/md";
import classes from "../Task/Task.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import foodStreet from "../assets/images/foodStreet.jpeg";

const Task = () => {
  return (
    <div>
      <div className={classes.header}>
        <div className={classes.header_left}>23:35</div>
        <div className={classes.header_right}>
          <BiBluetooth />
          <AiOutlineWifi />
          <h7>Volte</h7>
          <AiFillSignal />
          <AiFillSignal />
          <MdBatteryChargingFull />
        </div>
      </div>
      <div className={classes.content}>
        <h2>
          <AiOutlineArrowLeft />
        </h2>
        <h3>Arjun</h3>
      </div>
      <div className={classes.image}>
        <img
          src={foodStreet}
          alt={foodStreet}
          height="700px"
          width="100%"
        />
      </div>
      <div className={classes.bottom}></div>
    </div>
  );
};

export default Task;
