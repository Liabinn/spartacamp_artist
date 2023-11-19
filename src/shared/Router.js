import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "pages/Detail";
import Home from "pages/Home";
import { v4 as uuidv4 } from "uuid"
import { useState } from 'react';

const Router = () => {

  const cards = [
    {
      id: uuidv4(),
      member: "수현",
      nickname: "habin",
      contents: "수현좋아요 수현좋아요 수현좋아요 수현좋아요"
    },
    {
      id: uuidv4(),
      member: "찬혁",
      nickname: "habin",
      contents: "찬혁 좋아요"
    },
    {
      id: uuidv4(),
      member: "수현",
      nickname: "habin",
      contents: "수현 사랑해"
    },
  ];
  
  const [cardList, setCardList] = useState(cards);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home 
          cardList={cardList}
          setCardList={setCardList}
        />} />
        <Route path="Detail/:memberId" element={<Detail 
        cardList={cardList}
        setCardList={setCardList}
        />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;