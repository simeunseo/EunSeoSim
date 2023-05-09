import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
const WeaderCard = () => {
  const { type, area } = useParams();
  const [weaderData, setWeaderData] = useState({
    1: {
      temp: 0.0,
      feels_like: 0.0,
      temp_min: 0.0,
      temp_max: 0.0,
      clouds: 0.0,
    },
  });

  const apiType = type === "today" ? "weather" : "forecast";
  const getWeaderInfo = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/${apiType}?q=${area}&appid=${
        import.meta.env.VITE_APP_WEATHER
      }&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.cod === 200) {
          setWeaderData({
            1: {
              temp: data.main.temp,
              feels_like: data.main.feels_like,
              temp_min: data.main.temp_min,
              temp_max: data.main.temp_max,
              clouds: data.clouds.all,
            },
          });
          console.log(weaderData);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getWeaderInfo();
  }, []);

  return (
    <>
      <p>현재 온도 {weaderData[1].temp}</p>
      <p>체감 온도 {weaderData[1].feels_like}</p>
      <p>최저 기온 {weaderData[1].temp_min}</p>
      <p>최고 기온 {weaderData[1].temp_max}</p>
      <p>구름량 {weaderData[1].clouds}</p>
    </>
  );
};

export default WeaderCard;
