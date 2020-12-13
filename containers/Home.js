import React, { useState, useEffect } from "react";
import "./Home.css";
import axiosInstance from "../axiosApi";
import { onError } from "../libs/errorLib";

export default function Home() {
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    axiosInstance.get('/hello/').then(function(response) {
        console.log(response)
        setMessage(response.data.hello);
    }).catch(function (error) {
        //console.log(error);
        onError(error);
    });
  });
  
  return (
    <div className="Home">
      <div className="lander">
        <h1>Scratch</h1>
        <p className="text-muted">A simple note taking app</p>
        <p>{message}</p>
      </div>
    </div>
  );
}