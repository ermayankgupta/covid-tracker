import React, { useEffect } from "react";

const Covid = () => {
  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const accutalData = await res.json();
      console.log(accutalData);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <h1>Live</h1>
      <h2>COVID-19 TRACKER</h2>
    </>
  );
};

export default Covid;
