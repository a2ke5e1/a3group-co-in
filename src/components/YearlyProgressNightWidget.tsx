"use client";
import React, { useEffect, useState } from "react";
import YearlyProgressWidget from "@/components/YearlyProgressWidget";
import { parse } from "path";
import {
  Coordinates,
  Results,
  convertDateTimeToUnix,
  convertUnixToTime,
  getLongLat
} from "@/components/YearlyProgressDaylightWidget";

export const fetchSunsetSunriseWithRangeApi = async (
  lat: number, lon: number, 
  startDate: string, endDate: string
) => {

  

  const staticData = await fetch(
    `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lon}&date_start=${startDate}&date_end=${endDate}`,
    { cache: "force-cache" }
  );

  return staticData.json();
};


const YearlyProgressNightWidget = () => {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [results, setResults] = useState<Results[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // const fetchWeatherData = async (lat: number, lon: number) => {
  //   const staticData = await fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`,
  //     { cache: "force-cache" }
  //   );
  //   return staticData.json();
  // };

  useEffect(() => {
    

    const fetchData = async () => {
      try {
        const [lat, lon] = await getLongLat();
        setCoordinates([lat, lon]);

        const currentDate = new Date();
        const prevDate = new Date();

        // add day 1 to the next date
        prevDate.setDate(currentDate.getDate() - 1);

        var endDate = ""; 
        endDate += currentDate.getFullYear() + "-";
        endDate += (currentDate.getMonth() + 1) + "-";
        endDate += currentDate.getDate();

        var startDate = "";
        startDate += prevDate.getFullYear() + "-";
        startDate += (prevDate.getMonth() + 1) + "-";
        startDate += prevDate.getDate();



        console.log("Start Date:", endDate);
        console.log("End Date:", startDate);
        
        


        const { results } = await fetchSunsetSunriseWithRangeApi(lat, lon, startDate, endDate,);
        setResults(results);

        

        console.log("Results:", results);

       
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div></div>;
  }


  if (!results) {
    return <div></div>;
  }

  // const { sunset, sunrise } = weatherData.sys;

  return (
    <YearlyProgressWidget
      type="custom"
      custom={{
        title: "Night",
        description: `Last light on ${results[0].date} at ${convertUnixToTime(
          convertDateTimeToUnix(results[0].date, results[0].last_light)
        )} and first light on ${results[1].date} at ${convertUnixToTime(
          convertDateTimeToUnix(results[1].date, results[1].first_light)
        )}.`,
        startTimestamp: convertDateTimeToUnix(results[0].date, results[0].last_light),
        endTimestamp: convertDateTimeToUnix(results[1].date, results[1].first_light),
      }}
    />
  );
};

export default YearlyProgressNightWidget;
