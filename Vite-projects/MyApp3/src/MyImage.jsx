import React, { Component } from "react";
import banner from "./assets/banner.jpg";

export function MyImage() {
  return (
    <div>
      <img src={banner} alt="Banner" />
    </div>
  );
}

export default MyImage;
