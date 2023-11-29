import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Detail from "pages/Detail";
import Home from "pages/Home";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const Router = () => {
  const cards = [
    {
      id: uuidv4(),
      member: "수현",
      nickname: "Dr. Clint Christiansen",
      contents:
        "수현 좋아요 Vitae recusandae tenetur debitis impedit ut dolorem atque reprehenderit magnam. Cum dolor magnam commodi qui perferendis. Vel temporibus soluta. Eum delectus blanditiis. Neque dicta non quod ex. Maiores aspernatur fuga reprehenderit a magni eaque fuga voluptatum hic.",
    },
    {
      id: uuidv4(),
      member: "찬혁",
      nickname: "Chad Graham",
      contents:
        "찬혁 좋아요 Ipsam aspernatur nostrum eos unde velit molestiae dolorem. Tenetur ullam nostrum pariatur. Et in eos. Harum commodi ipsa quaerat aspernatur quod dignissimos quae quidem sapiente.",
    },
    {
      id: uuidv4(),
      member: "수현",
      nickname: "Tommy Abshire",
      contents:
        "수현 좋아요 Itaque nihil quae neque itaque. Non a officiis ducimus nemo consectetur. Ducimus libero voluptatum consequuntur.",
    },
  ];

  const [cardList, setCardList] = useState(cards);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home cardList={cardList} setCardList={setCardList} />}
        />
        <Route
          path="Detail/:memberId"
          element={<Detail cardList={cardList} setCardList={setCardList} />}
        />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
