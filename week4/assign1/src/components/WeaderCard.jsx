import { useEffect } from "react";
import { useParams } from "react-router-dom";

const WeaderCard = (props) => {
  const { type, area } = useParams();

  const getWeaderInfo = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${
        import.meta.env.VITE_APP_WEATHER
      }&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if (data.cod === 200) {
          //console.log(data);
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
