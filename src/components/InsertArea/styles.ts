import styled from "styled-components";

export const Container = styled.form`
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-block: 15px;
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
`;

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const StyledInput = styled.input`
  border: 1px solid blue;
  border-radius: 4px;
  height: 20px;
  width: 180px;
  padding: 2px 5px;
  cursor: auto;
`;

export const StyledSelect = styled.select`
  border: 1px solid blue;
  border-radius: 4px;
  height: 26px;
  width: 180px;
  padding: 2px 5px;
  cursor: auto;

  &:active {
    border: 1px solid blue;
  }
`;

export const StyledOption = styled.option`
  &:hover {
    background-color: blue;
    color: white;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  border: 1px solid blue;
  border-radius: 4px;
  background-color: blue;
  color: white;
  cursor: pointer;
  width: 100px;
  padding: 5px 10px;
  outline: none;

  &:hover {
    color: blue;
    background-color: white;
  }
`;
