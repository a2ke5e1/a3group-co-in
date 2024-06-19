"use client";
import React, { useEffect, useState } from "react";
import YearlyProgressWidget from "@/components/YearlyProgressWidget";
import { parse } from "path";

export type Coordinates = [number, number];
type SunsetSunrise = {
  sunrise: number;
  sunset: number;
};

export type Results = {
  date: string;
  dawn: string;
  day_length: string;
  dusk: string;
  first_light: string;
  golden_hour: string;
  last_light: string;
  solar_noon: string;
  sunrise: string;
  sunset: string;
  timezone: string;
  utc_offset: number;
};

export const convertUnixToTime = (unix: number) => {
  const date = new Date(unix);
  return date.toLocaleTimeString().toUpperCase();
};

export const convertUnixToDateTime = (unix: number) => {
  const date = new Date(unix);
  return date.toLocaleDateString() + " " + date.toLocaleTimeString();
};

export const convertDateTimeToUnix = (date: string, time: string): number => {
  const dateTime = new Date(`${date} ${time}`);
  return dateTime.getTime();
};

export const fetchSunsetSunriseApi = async (lat: number, lon: number) => {
  const currentDate = new Date();

  var formatedDate = "";
  formatedDate += currentDate.getFullYear() + "-";
  formatedDate += currentDate.getMonth() + 1 + "-";
  formatedDate += currentDate.getDate();

  const staticData = await fetch(
    `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lon}&date=${formatedDate}`,
    { cache: "force-cache" }
  );

  return staticData.json();
};

export const getLongLat = async (): Promise<Coordinates> => {
  if (!navigator.geolocation) {
    const ip = await fetch("/api/v1/ip");
    const { location } = await ip.json();
    return new Promise<Coordinates>((resolve, reject) => {
      resolve([location.lat, location.lon]), 
      reject("No location available");
    });
  }

  return new Promise<Coordinates>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve([position.coords.latitude, position.coords.longitude]);
      },
      (error) => {
        reject(error);
      }
    );
  });
};

const YearlyProgressDaylightWidget = () => {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [results, setResults] = useState<Results | null>(null);
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

        console.log("Coordinates:", lat, lon);

        const { results } = await fetchSunsetSunriseApi(lat, lon);
        // console.log("Sunset/Sunrise:", results);
        setResults(results);

        const { date, sunrise, sunset } = results;

        console.log("Results:", results);

        // const data = await fetchWeatherData(lat, lon);
        // setWeatherData(data);
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

  // if (!weatherData) {
  //   return <div></div>;
  // }

  if (!results) {
    return <div></div>;
  }

  // const { sunset, sunrise } = weatherData.sys;

  return (
    <YearlyProgressWidget
      type="custom"
      custom={{
        title: "Daylight",
        description: `Today sunrise at ${convertUnixToTime(
          convertDateTimeToUnix(results.date, results.sunrise)
        )} and sunset at ${convertUnixToTime(
          convertDateTimeToUnix(results.date, results.sunset)
        )}.`,
        startTimestamp: convertDateTimeToUnix(results.date, results.sunrise),
        endTimestamp: convertDateTimeToUnix(results.date, results.sunset),
      }}
    />
  );
};

export default YearlyProgressDaylightWidget;
