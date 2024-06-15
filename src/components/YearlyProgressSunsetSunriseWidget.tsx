"use client";
import React, { useEffect, useState } from "react";
import YearlyProgressWidget from "@/components/YearlyProgressWidget";

type YearlyProgressSunsetSunriseWidgetProps = {
  apiKey?: string;
};

type Coordinates = [number, number];

const YearlyProgressSunsetSunriseWidget = ({
  apiKey,
}: YearlyProgressSunsetSunriseWidgetProps) => {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const convertUnixSeconds = (unix: number) => {
    const date = new Date(unix * 1000);
    return date.toLocaleTimeString().toUpperCase();
  };

  const fetchWeatherData = async (lat: number, lon: number) => {
    const staticData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`,
      { cache: "force-cache" }
    );
    return staticData.json();
  };

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
        const data = await fetchWeatherData(lat, lon);
        setWeatherData(data);
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

  if (!weatherData) {
    return <div></div>;
  }

  const { sunset, sunrise } = weatherData.sys;

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
};

export default YearlyProgressSunsetSunriseWidget;
