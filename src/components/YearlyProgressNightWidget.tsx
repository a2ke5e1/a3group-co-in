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

type NightData = {
  startTimestamp: number;
  endTimestamp: number;
}


const YearlyProgressNightWidget = () => {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [results, setResults] = useState<Results[] | null>(null);
  const [nightData, setNightData] = useState<NightData | null>(null);
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

        const startRange = new Date();
        const endRange = new Date();

        startRange.setDate(startRange.getDate() -1);
        endRange.setDate(endRange.getDate() + 1);

        var startDate = ""; 
        startDate += startRange.getFullYear() + "-";
        startDate += (startRange.getMonth() + 1) + "-";
        startDate += startRange.getDate();

        var endDate = "";
        endDate += endRange.getFullYear() + "-";
        endDate += (endRange.getMonth() + 1) + "-";
        endDate += endRange.getDate();



        console.log("Start Date:", startDate);
        console.log("End Date:", endDate);
        
        


        const { results } = await fetchSunsetSunriseWithRangeApi(lat, lon, startDate, endDate);
        setResults(results);


        // get current time 
        const currentTime = new Date();
        const currentHour = currentTime.getHours();

        if (currentHour >= 0 && currentHour < 12) {
          setNightData({
            startTimestamp: convertDateTimeToUnix(results[0].date, results[0].sunset),
            endTimestamp: convertDateTimeToUnix(results[1].date, results[1].sunrise),
          });
        } else {
          setNightData({
            startTimestamp: convertDateTimeToUnix(results[1].date, results[1].sunset),
            endTimestamp: convertDateTimeToUnix(results[2].date, results[2].sunrise),
          });
        }

        console.log("Current Hour:", currentHour);
        

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


  if (!results || !nightData) {
    return <div></div>;
  }

  // const { sunset, sunrise } = weatherData.sys;

  return (
    <YearlyProgressWidget
      type="custom"
      custom={{
        title: "Night",
        description: `Last night's sunset was at ${convertUnixToTime(nightData.startTimestamp)} and next sunrise will be at ${convertUnixToTime(nightData.endTimestamp)}`,
        startTimestamp: nightData.startTimestamp,
        endTimestamp: nightData.endTimestamp,
      }}
    />
  );
};

export default YearlyProgressNightWidget;
