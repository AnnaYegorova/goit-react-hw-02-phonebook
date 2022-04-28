import styled from '@emotion/styled';

export const ContactUl = styled.ul`
  font-size: 8px;
  list-style: none;
  width: 220px;
  font-size: 12px;
  padding-left: 10px;
`;
export const ContactItem = styled.li`
  ::before {
    content: '\\2022';
    color: #5252d3;
    font-weight: bold;
  }
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
`;

export const Span = styled.span`
  padding: 0;
  margin: 0;
  display: flex;
  text-align: start;
  font-size: 12px;
`;
export const BtnDelete = styled.button`
  background-color: #5252d3;
  border-radius: 4px;
  border: 1px;
  width: 50px;
  height: 18px;
  margin: 2px 2px;
  text-align: center;
  font-size: 12px;

  :hover {
    color: white;
  }
`;
