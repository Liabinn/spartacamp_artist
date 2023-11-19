import React, { useState } from 'react'
import styled from 'styled-components';

const members = [
    { name: "전체" },
    { name: "찬혁" },
    { name: "수현" },
  ];

function Members({selectMember, setSelectMember}) {

const onClickMemberSelector =(member) => {
  setSelectMember(member);
}

  return (
    <MembersStyle>
      <MembersButtonStyle onClick={()=>onClickMemberSelector('전체')}>전체보기</MembersButtonStyle>
      <MembersButtonStyle onClick={()=>onClickMemberSelector('찬혁')}>찬혁</MembersButtonStyle>
      <MembersButtonStyle onClick={()=>onClickMemberSelector('수현')}>수현</MembersButtonStyle>
      {/* {members.map(members => 
        <MembersButtonStyle onClick={()=>onClickMemberSelector('전체')}>
          {members.name}
        </MembersButtonStyle>
      )} */}
    </MembersStyle>
  )
}

const MembersStyle = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  margin-bottom: 20px;
`

const MembersButtonStyle = styled.button`
  font-size: medium;
  font-weight: bolder;
  color: rgb(95, 2, 46);
  width: 155px;
  height: 35px;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid white;
  box-shadow: 3px 2px 15px 0 rgb(255, 255, 255);
  transition: 0.3s;
  &:hover {
    background-color: rgb(255, 104, 174);
    color: white;
    cursor: pointer;
  }
  &:active,
  &:focus,
  &.active {
    background-color: rgb(255, 104, 174);
    color: white;
  }
`

export default Members;
