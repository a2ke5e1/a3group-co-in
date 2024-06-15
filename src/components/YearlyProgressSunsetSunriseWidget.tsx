"use client";

import YearlyProgressWidget from "@/components/YearlyProgressWidget";


const OPEN_WEATHER_API_KEY = process.env.OPEN_WEATHER_API_KEY;

type Coordinates = [number, number];

export default async function YearlyProgressSunsetSunriseWidget() {

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
    `https://api.openweathermap.org/data/2.5/weather?&lat=${lat}&lon=${lon}&units=metric&appid=${OPEN_WEATHER_API_KEY}`,
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
