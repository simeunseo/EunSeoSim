import { useEffect } from "react";

const WeaderCard = () => {
  const getWeaderInfo = () => {
    const area = "bucheon";
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${
        import.meta.env.VITE_APP_WEATHER
      }&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.cod === 200) {
          console.log(data);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getWeaderInfo();
  }, []);

  return <div>WeaderCard</div>;
};

export default WeaderCard;
