import YearlyProgressWidget from "@/components/YearlyProgressWidget";

type Coordinates = [number, number];

type YearlyProgressSunsetSunriseWidgetProps = {
  apiKey?: string;
};

export default async function YearlyProgressSunsetSunriseWidget({
  apiKey,
}: YearlyProgressSunsetSunriseWidgetProps) {
  const convertUnixSeconds = (unix: number) => {
    const date = new Date(unix * 1000);
    return date.toLocaleTimeString().toUpperCase();
  };

  const getLongLat = async (): Promise<Coordinates> => {
    // if (getLocationPermission.state === "granted") {
    //   const getPosition = new Promise<Coordinates>((resolve, reject) => {
    //     navigator.geolocation.getCurrentPosition(
    //       (position) => {
    //         resolve([position.coords.latitude, position.coords.longitude]);
    //       }
    //     );
    //   });
    //   return getPosition;
    // }

    const getIP = await fetch("http://ip-api.com/json/", {
      cache: "force-cache",
    });
    const ipData = await getIP.json();
    return [ipData.lat, ipData.lon];
  };
  const [lat, lon] = await getLongLat();
  const staticData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?&lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`,
    { cache: "force-cache" }
  );
  const data = await staticData.json();
  const [sunset, sunrise] = [data.sys.sunset, data.sys.sunrise];

  return (
    <YearlyProgressWidget
      type="custom"
      custom={{
        title: "Daylight",
        description: `Sunrise at ${convertUnixSeconds(
          sunrise
        )} and Sunset at ${convertUnixSeconds(sunset)}.`,
        startTimestamp: sunrise * 1000,
        endTimestamp: sunset * 1000,
      }}
    />
  );
}

/*

"use client";
import React, { useEffect, useState } from 'react';
import YearlyProgressWidget from "@/components/YearlyProgressWidget";


const OPEN_WEATHER_API_KEY = process.env.OPEN_WEATHER_API_KEY;
type Coordinates = [number, number];

const YearlyProgressSunsetSunriseWidget = () => {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const convertUnixSeconds = (unix: number) => {
    const date = new Date(unix * 1000);
    return date.toLocaleTimeString().toUpperCase();
  };

  useEffect(() => {
    const getLongLat = async (): Promise<Coordinates> => {
    //   if (navigator.geolocation) {
    //     return new Promise<Coordinates>((resolve, reject) => {
    //       navigator.geolocation.getCurrentPosition(
    //         (position) => {
    //           resolve([position.coords.latitude, position.coords.longitude]);
    //         },
    //         (error) => {
    //           reject(error);
    //         }
    //       );
    //     });
    //   } else {
        const getIP = await fetch('http://ip-api.com/json/', {
          cache: 'force-cache',
        });
        const ipData = await getIP.json();

        
        return [ipData.lat, ipData.lon];
    // }
    };

    const fetchWeatherData = async (lat: number, lon: number) => {
      const staticData = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${OPEN_WEATHER_API_KEY}`,
        { cache: 'force-cache' }
      );
      return staticData.json();
    };
    

    const fetchData = async () => {
      try {
        const [lat, lon] = await getLongLat();
        setCoordinates([lat, lon]);
        const data = await fetchWeatherData(lat, lon);
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!weatherData) {
    return <div>Error fetching weather data</div>;
  }

  const { sunset, sunrise } = weatherData.sys;

  return (
    <YearlyProgressWidget
      type="custom"
      custom={{
        title: 'Daylight',
        description: `Sunrise at ${convertUnixSeconds(
          sunrise
        )} and Sunset at ${convertUnixSeconds(sunset)}.`,
        startTimestamp: sunrise * 1000,
        endTimestamp: sunset * 1000,
      }}
    />
  );
};

export default YearlyProgressSunsetSunriseWidget;
 */
