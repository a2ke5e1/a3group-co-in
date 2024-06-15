import YearlyProgressWidget from "@/components/YearlyProgressWidget";
import info from "../../../../info/yearly-progress.json";
import { Metadata } from "next";

const OPEN_WEATHER_API_KEY = process.env.OPEN_WEATHER_API_KEY;

type Coordinates = [number, number];


export const metadata: Metadata = {
  metadataBase: new URL("https://a3group.co.in"),
  title: info.name,
  description: info.desc.about,
  icons: "/yearly-progress/favicon/android-chrome-192x192.png",
};

export default async function YearlyProgressWebApp() {
  // const getLocationPermission = await navigator.permissions.query({
  //   name: "geolocation",
  // });

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

  const convertUnixSeconds = (unix: number) => {
    const date = new Date(unix * 1000);
    return date.toLocaleTimeString().toUpperCase();
  };

  return (
    <div className="2xl:mx-0 mx-2">
      <div className="my-4">
        <h1 className="font-bold text-2xl ">
          Yearly Progress <span className="text-sm text-blue-800">v0.01</span>
        </h1>
        <p className="ml-1 text-gray-700 font-light">
          Yearly Progress but in the web.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 my-4 grid-cols-1">
        <YearlyProgressWidget type="year" />
        <YearlyProgressWidget type="month" />
        <YearlyProgressWidget type="week" />
        <YearlyProgressWidget type="day" />
        <YearlyProgressWidget type="custom" custom={
          {
            title: "Daylight",
            description: `Sunrise at ${convertUnixSeconds(sunrise)} and Sunset at ${convertUnixSeconds(sunset)}.`,
            startTimestamp: sunrise * 1000,
            endTimestamp: sunset * 1000,
          }
        } />
        
      </div>
    </div>
  );
}
