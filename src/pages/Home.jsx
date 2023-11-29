import React, { useState } from "react";
import Header from "components/Header";
import Members from "components/Members";
import Input from "components/Input";
import CardList from "components/CardList";

function Home({ cardList, setCardList }) {
  // 전체, 찬혁, 수현
  const [selectMember, setSelectMember] = useState("전체");

  return (
    <div>
      <Header />
      <Members selectMember={selectMember} setSelectMember={setSelectMember} />
      <Input setCardList={setCardList} />
      <CardList
        cardList={cardList}
        setCardList={setCardList}
        selectMember={selectMember}
      />
    </div>
  );
}

export default Home;
