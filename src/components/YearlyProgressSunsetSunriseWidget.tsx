"use client";
import React, { useEffect, useState } from "react";
import YearlyProgressWidget from "@/components/YearlyProgressWidget";
import { parse } from "path";

type YearlyProgressSunsetSunriseWidgetProps = {
  apiKey?: string;
};

type Coordinates = [number, number];
type SunsetSunrise = {
  sunrise: number;
  sunset: number;
};

const YearlyProgressSunsetSunriseWidget = ({
  apiKey,
}: YearlyProgressSunsetSunriseWidgetProps) => {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [weatherData, setWeatherData] = useState<any>(null);
  const [sunriseSunset, setSunriseSunset] = useState<SunsetSunrise|null>(null); // [sunset, sunrise
  const [loading, setLoading] = useState<boolean>(true);

  const convertUnixSeconds = (unix: number) => {
    const date = new Date(unix);
    return date.toLocaleTimeString().toUpperCase();
  };

  // const fetchWeatherData = async (lat: number, lon: number) => {
  //   const staticData = await fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`,
  //     { cache: "force-cache" }
  //   );
  //   return staticData.json();
  // };

  const fetchSunsetSunrise = async (lat: number, lon: number) => {

    const staticData = await fetch(
      `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lon}`,
      { cache: "force-cache" }
    );

    
    return staticData.json();
  }

  useEffect(() => {
    const getLongLat = async (): Promise<Coordinates> => {
      if (!navigator.geolocation) {
        throw new Error("Geolocation is not supported by your browser");
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

    const fetchData = async () => {
      try {
        const [lat, lon] = await getLongLat();
        setCoordinates([lat, lon]);

        // console.log("Coordinates:", lat, lon);
        
        const { results } = await fetchSunsetSunrise(lat, lon);
        // console.log("Sunset/Sunrise:", results);

        const { date, sunrise, sunset } = results;

        
        const sunsetUnix = new Date(`${date} ${sunset}`);
        const sunriseUnix = new Date(`${date} ${sunrise}`);

        

        setSunriseSunset({ sunrise: sunriseUnix.getTime(), sunset: sunsetUnix.getTime() });

        

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

  if (!sunriseSunset) {
    return <div></div>;
  }

  // const { sunset, sunrise } = weatherData.sys;

  return (
    <YearlyProgressWidget
      type="custom"
      custom={{
        title: "Daylight",
        description: `Sunrise at ${convertUnixSeconds(
          sunriseSunset.sunrise
        )} and Sunset at ${convertUnixSeconds(
          sunriseSunset.sunset
        )}.`,
        startTimestamp: sunriseSunset.sunrise,
        endTimestamp: sunriseSunset.sunset,
      }}
    />
  );
};

export default YearlyProgressSunsetSunriseWidget;
