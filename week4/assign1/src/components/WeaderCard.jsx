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
    fetch(
      `https://api.openweathermap.org/data/2.5/${apiType}?q=${area}&appid=${
        import.meta.env.VITE_APP_WEATHER
      }&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.cod == 200) {
          // 주간 데이터에는 '200'으로, 일간 데이터에는 200으로 되어있기에 ===이 아닌 ==을 사용
          let tmpWeatherData = [];
          const today = new Date();
          const todayMonth = today.getMonth() + 1;
          const todayDate = today.getDate();

          switch (type) {
            case "today":
              setWeaderData([
                {
                  id: 0,
                  date: `${todayMonth}/${todayDate}`,
                  weather: data.weather.main,
                  temp: data.main.temp,
                  feels_like: data.main.feels_like,
                  temp_min: data.main.temp_min,
                  temp_max: data.main.temp_max,
                  clouds: data.clouds.all,
                },
              ]);
              break;
            case "week":
              data.list
                .filter((i, idx) => {
                  return idx % 8 === 1 ? i : undefined; //5일간의 정보를 받아오기 위한 parsing
                })
                .map((data, idx) => {
                  tmpWeatherData.push({
                    id: idx,
                    date: `${todayMonth}/${todayDate + idx}`,
                    weather: data.weather.main,
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
