import styled, { css } from "styled-components";

const members = [{ name: "전체" }, { name: "찬혁" }, { name: "수현" }];

function Members({ selectMember, setSelectMember }) {
  const onClickMemberSelector = (member) => {
    setSelectMember(member);
  };

  return (
    <MembersStyle>
      {members.map((members) => (
        <MembersListStyle
          $selectMember={selectMember}
          key={members.name}
          onClick={() => onClickMemberSelector(`${members.name}`)}
        >
          {members.name}
        </MembersListStyle>
      ))}
    </MembersStyle>
  );
}

const MembersStyle = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  margin-bottom: 20px;
`;

const MembersListStyle = styled.li`
  font-size: medium;
  font-weight: bolder;
  text-align: center;
  line-height: 200%;
  width: 155px;
  height: 35px;
  border-radius: 5px;
  border: 1px solid white;
  box-shadow: 3px 2px 15px 0 rgb(255, 255, 255);
  transition: 0.3s;
  &:hover {
    background-color: rgb(255, 104, 174);
    color: white;
    cursor: pointer;
  }

  ${(props) => {
    if (props.$selectMember === props.children) {
      return css`
        background-color: rgb(255, 104, 174);
        color: white;
      `;
    }
    return css`
      background-color: transparent;
      color: rgb(95, 2, 46);
    `;
  }}
`;

export default Members;
