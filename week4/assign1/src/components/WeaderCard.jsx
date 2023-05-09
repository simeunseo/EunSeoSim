import WEATHER_TYPE_IMAGE from "../assets/weatherTypeImage";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

const WeaderCard = () => {
  const { type, area } = useParams();
  const [weaderData, setWeaderData] = useState([
    {
      id: 0,
      date: "",
      weather: "",
      temp: 0.0,
      feels_like: 0.0,
      temp_min: 0.0,
      temp_max: 0.0,
      clouds: 0.0,
    },
  ]);

  const apiType = type === "today" ? "weather" : "forecast";
  const getWeaderInfo = () => {
    let tmpWeatherData = [];
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = String(today.getMonth() + 1).padStart(2, "0");
    const todayDate = String(today.getDate()).padStart(2, "0");
    const comparingDate = `${todayYear}-${todayMonth}-${todayDate}`;
    const comparingTime = "12:00:00";

    /*
      주간 날씨 데이터에서,
      오늘 날짜의 경우 각 시간대별 예보 중 가장 첫번째 값을,
      오늘 날짜가 아닌 경우 12:00:00시의 예보 값을 가져와
      5일치의 데이터를 정리하는 함수
    */
    const filterWeatherData = (weatherDataList) => {
      let filteredDataList = {};

      filteredDataList = [
        weatherDataList[0],
        ...weatherDataList
          .filter((data) => {
            return !data.dt_txt.includes(comparingDate);
          })
          .filter((data) => {
            return data.dt_txt.includes(comparingTime);
          }),
      ];

      return filteredDataList;
    };

    fetch(
      `https://api.openweathermap.org/data/2.5/${apiType}?q=${area}&appid=${
        import.meta.env.VITE_APP_WEATHER
      }&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.cod == 200) {
          // 주간 데이터에는 '200'으로, 일간 데이터에는 200으로 되어있기에 ===이 아닌 ==을 사용
          switch (type) {
            case "today":
              setWeaderData([
                {
                  id: 0,
                  date: `${todayMonth}/${todayDate}`,
                  weather_description: data.weather[0].description,
                  weather_img_url: WEATHER_TYPE_IMAGE.filter(
                    (i) => i.description === data.weather[0].description
                  )[0].imgURL,
                  temp: data.main.temp,
                  feels_like: data.main.feels_like,
                  temp_min: data.main.temp_min,
                  temp_max: data.main.temp_max,
                  clouds: data.clouds.all,
                },
              ]);
              break;
            case "week":
              filterWeatherData(data.list).map((data, idx) => {
                tmpWeatherData.push({
                  id: idx,
                  date: `${todayMonth}/${parseInt(todayDate) + idx}`,
                  weather_description: data.weather[0].description,
                  weather_img_url: WEATHER_TYPE_IMAGE.filter(
                    (i) => i.description === data.weather[0].description
                  )[0].imgURL,
                  temp: data.main.temp,
                  feels_like: data.main.feels_like,
                  temp_min: data.main.temp_min,
                  temp_max: data.main.temp_max,
                  clouds: data.clouds.all,
                });
              });
              setWeaderData(tmpWeatherData);
              break;
          }
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getWeaderInfo();
  }, [type, area]);

  return (
    <>
      <h1>카드</h1>
      {weaderData.map((data, idx) => (
        <li key={idx}>
          <img src={data.weather_img_url} alt={data.weather_description}></img>
          <p>오늘 날짜 {data.date}</p>
          <p>현재 온도 {data.temp}</p>
          <p>체감 온도 {data.feels_like}</p>
          <p>최저 기온 {data.temp_min}</p>
          <p>최고 기온 {data.temp_max}</p>
          <p>구름량 {data.clouds}</p>
        </li>
      ))}
    </>
  );
};

export default WeaderCard;
