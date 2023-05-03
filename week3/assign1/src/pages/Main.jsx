import Cards from "../components/Cards";
import { GlobalContextProvider } from "../context/context";
import Header from "../components/Header";
import { useState } from "react";

const Main = () => {
  const [compareList, setCompareList] = useState([]); // 비교 대상인 카드의 {pk, imgId}를 저장
  const [pairedList, setPairedList] = useState([]); // 짝을 맞춘 카드의 {pk, imgId}를 저장

  return (
    <GlobalContextProvider>
      <Header
        compareList={compareList}
        setCompareList={setCompareList}
        pairedList={pairedList}
        setPairedList={setPairedList}
      />
      <Cards
        compareList={compareList}
        setCompareList={setCompareList}
        pairedList={pairedList}
        setPairedList={setPairedList}
      />
    </GlobalContextProvider>
  );
};

export default Main;
