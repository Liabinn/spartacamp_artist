import React from 'react'
import Card from './Card';
import styled from 'styled-components';

function CardList({cardList, setCardList, selectMember}) {

  return (
    <CardListStyle>
      {cardList.filter(card =>{
        if(selectMember ==='전체'){ return card; }
        if(card.member === selectMember){
          return card;
        }
      }).map((card) => (
        
      <Card
        key={card.id}
        memberId={card.id}
        member={card.member}
        nickname={card.nickname}
        contents={card.contents} />
        ))}
    </CardListStyle>
  )
}

const CardListStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  margin-bottom: 65px;
`

export default CardList