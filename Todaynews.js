import React, { Component, useState, useEffect } from 'react';
import MovieAccordion from './MovieAccordion';
import NewscommentAccordion from './NewscommentAccordion';
import NewsgoodAccordion from './NewsgoodAccordion';
import NewswarmAccordion from './NewswarmAccordion';
import NewssadAccordion from './NewssadAccordion';
import NewsangryAccordion from './NewsangryAccordion';
import NewswantAccordion from './NewswantAccordion';
import axios from "axios";

const Todaynews = () => {
 const [hotday, setHotday] = useState([]);
 const [commentday, setCommentday] = useState([]);
 const [goodday, setGoodday] = useState([]);
 const [warmday, setWarmday] = useState([]);
 const [sadday, setSadday] = useState([]);
 const [angryday, setAngryday] = useState([]);
 const [wantday, setWantday] = useState([]);
 const [err, setErr] = useState("");
 const [errBool, setErrBool] = useState(false);
 const [loading, setLoading] = useState(true);
 
 let URL = {"URL_HOTDAY":`http://27.113.65.95:8081/news/api_hotday/`,
  "URL_COMMENTDAY":`http://27.113.65.95:8081/news/api_commentday/`,
  "URL_GOODDAY":`http://27.113.65.95:8081/news/api_goodday/`,
  "URL_WARMDAY":`http://27.113.65.95:8081/news/api_warmday/`,
  "URL_SADDAY":`http://27.113.65.95:8081/news/api_sadday/`,
  "URL_ANGRYDAY":`http://27.113.65.95:8081/news/api_angryday/`,
  "URL_WANTDAY":`http://27.113.65.95:8081/news/api_wantday/`};
  
 const fetchMovies = (url) => {
   axios
   .get(
     url
   )
   .then(response => {
     switch(url) {
      case `http://27.113.65.95:8081/news/api_hotday/`:
        setHotday(response.data);
        break;
      case `http://27.113.65.95:8081/news/api_commentday/`:
        setCommentday(response.data);
        break;
      case `http://27.113.65.95:8081/news/api_goodday/`:
        setGoodday(response.data);
        break;
      case `http://27.113.65.95:8081/news/api_warmday/`:
        setWarmday(response.data);
        break;
      case `http://27.113.65.95:8081/news/api_sadday/`:
        setSadday(response.data);
        break;
      case `http://27.113.65.95:8081/news/api_angryday/`:
        setAngryday(response.data);
        break;
      case `http://27.113.65.95:8081/news/api_wantday/`:
        setWantday(response.data);
        break;
      default:
        setHotday(response.data);
     }
     setLoading(false);
   })
   .catch(err => {
     setErr(err.message);
     setErrBool(true);
     setLoading(false);
   });
 }
 
 useEffect(() => {
   fetchMovies(URL["URL_HOTDAY"]);
 }, [URL["URL_HOTDAY"]]);
 
 useEffect(() => {
   fetchMovies(URL["URL_COMMENTDAY"]);
 }, [URL["URL_COMMENTDAY"]]);
 
 useEffect(() => {
   fetchMovies(URL["URL_GOODDAY"]);
 }, [URL["URL_GOODDAY"]]);
 
 useEffect(() => {
   fetchMovies(URL["URL_WARMDAY"]);
 }, [URL["URL_WARMDAY"]]);
 
 useEffect(() => {
   fetchMovies(URL["URL_SADDAY"]);
 }, [URL["URL_SADDAY"]]);
 
 useEffect(() => {
   fetchMovies(URL["URL_ANGRYDAY"]);
 }, [URL["URL_ANGRYDAY"]]);
 
 useEffect(() => {
   fetchMovies(URL["URL_WANTDAY"]);
 }, [URL["URL_WANTDAY"]]);
  
 return (
   <>
      <h1> Todaynews Page </h1>
      <MovieAccordion movies={hotday} />
      <NewscommentAccordion movies={commentday} />
      <NewsgoodAccordion movies={goodday} />
      <NewswarmAccordion movies={warmday} />
      <NewssadAccordion movies={sadday} />
      <NewsangryAccordion movies={angryday} />
      <NewswantAccordion movies={wantday} />
   </>
 );
};
export default Todaynews;