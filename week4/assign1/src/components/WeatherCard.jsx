import WEATHER_TYPE_IMAGE from "../assets/weatherTypeImage";
import axios from "axios";
import skeletonImg from "../assets/skeleton-img.png";
import { styled } from "styled-components";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

const WeatherCard = () => {
  const { type, area } = useParams();
  const [weatherData, setWeatherData] = useState([
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiType = type === "today" ? "weather" : "forecast";
  const getWeatherInfo = async () => {
    let tmpWeatherData = [];
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = String(today.getMonth() + 1).padStart(2, "0");
    const todayDate = String(today.getDate()).padStart(2, "0");
    const comparingDate = `${todayYear}-${todayMonth}-${todayDate}`;
    const comparingTime = "12:00:00";

    try {
      // 요청을 시작할 때 loading 상태를 true로 설정한다.
      setLoading(true);
      setError("");

      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/${apiType}?q=${area}&appid=${
            import.meta.env.VITE_APP_WEATHER
          }&units=metric`
        )
        .then((res) => res.data)
        .then((data) => {
          if (data.cod == 200) {
            // 주간 데이터에는 '200'으로, 일간 데이터에는 200으로 되어있기에 ===이 아닌 ==을 사용
            switch (type) {
              case "today":
                setWeatherData([
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
                console.log(data);
                data.list
                  .filter((i, idx) => [0, 8, 16, 24, 32].indexOf(idx) !== -1)
                  .map((data, idx) => {
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
                setWeatherData(tmpWeatherData);

                break;
            }
          }
        });
    } catch (err) {
      setError(err.response.data.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getWeatherInfo();
  }, [type, area]);

  return (
    <St.WeatherCardWrapper>
      {loading ? (
        type === "today" ? (
          <>
            <h3 className="weather-title">...왜 이렇게 늦게 와?...</h3>
            <div className="cards">
              {weatherData.map((data, idx) => (
                <li className="skeleton__cards_card" key={idx}>
                  <p className="skeleton__date"></p>
                  <img src={skeletonImg} alt={data.weather_description}></img>

                  <div className="skeleton__info"></div>
                </li>
              ))}
            </div>
            <h3>...보고 싶어 죽는 줄...</h3>
          </>
        ) : (
          <>
            <h3 className="weather-title">...왜 이렇게 늦게 와?...</h3>
            <div className="cards">
              {[0, 1, 2, 3, 4].map((data, idx) => (
                <li className="skeleton__cards_card" key={idx}>
                  <p className="skeleton__date"></p>
                  <img src={skeletonImg} alt={data.weather_description}></img>

                  <div className="skeleton__info"></div>
                </li>
              ))}
            </div>
            <h3>...보고 싶어 죽는 줄...</h3>
          </>
        )
      ) : error ? (
        <>
          <h3 className="weather-error__text">
            동은아, 이제부터 네가 에러 체크 좀 해줄래?
          </h3>
          <h3 className="weather-error__description">{error}</h3>
        </>
      ) : (
        <>
          <h3 className="weather-title">
            {area}의 {type === "week" ? "주간" : "오늘"} 날씨 정보 알려드립니다.
          </h3>
          <div className="cards">
            {weatherData.map((data, idx) => (
              <li className="cards__card" key={idx}>
                <p>{data.date}</p>
                <img
                  src={data.weather_img_url}
                  alt={data.weather_description}
                ></img>

                <p>현재 {data.temp.toFixed(1)}°C</p>
                <p>체감 {data.feels_like.toFixed(1)}°C</p>
                <p>최저 {data.temp_min.toFixed(1)}°C</p>
                <p>최고 {data.temp_max.toFixed(1)}°C</p>
                <p>구름량 {data.clouds}%</p>
              </li>
            ))}
          </div>
          <h3>박연진이었습니다.</h3>
        </>
      )}
    </St.WeatherCardWrapper>
  );
};

export default WeatherCard;

const St = {
  WeatherCardWrapper: styled.section`
    margin-top: 3rem;
    padding: 3rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    ${({ theme }) => theme.fonts.R_Content_1};

    .weather-error__text {
      margin-top: 1rem;

      ${({ theme }) => theme.fonts.R_Content_1};
    }

    .weather-error__description {
      margin-top: 3rem;

      ${({ theme }) => theme.fonts.R_Content_1};
      color: ${({ theme }) => theme.colors.Red};
    }

    .cards__card,
    .skeleton__cards_card {
      border: 0.1rem solid ${({ theme }) => theme.colors.Black};

      background-color: ${({ theme }) => theme.colors.Grey};

      list-style: none;

      margin: 0 1rem;
      padding: 2rem;

      ${({ theme }) => theme.fonts.R_Content_1};
    }

    img {
      width: 10rem;
    }

    p {
      padding: 0.3rem;
    }

    .cards {
      margin: 5rem 0;

      display: flex;
      flex-wrap: wrap;
    }

    .skeleton__cards_card {
      border: 0.1rem solid ${({ theme }) => theme.colors.Grey};

      background-color: ${({ theme }) => theme.colors.Grey};
    }

    .skeleton__date {
      width: 5rem;
      height: 2rem;

      margin: auto;

      background-color: ${({ theme }) => theme.colors.White};
    }

    .skeleton__info {
      width: 10.5rem;
      height: 12.5rem;

      background-color: ${({ theme }) => theme.colors.White};
    }
  `,
};
