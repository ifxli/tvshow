import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  text-align: left;
`;

export const Label = styled.div`
  font-size: 13px;
  font-weight: bold;
`;

export const InvalidLabel = styled.div`
  font-size: 13px;
  font-weight: bold;
  color: red;
`;

export const Suggestion = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SuggestionName = styled.div``;
export const SuggestionPremiered = styled.div``;
export const SuggestionRate = styled.div``;

export const ClearButton = styled.button`
  width: fit-content;
  align-self: flex-end;
  margin-top: 10px;
  padding: 5px 15px;
  background: transparent;
  border: 2px solid red;
  border-radius: 5px;
  color: red;
  font-size: 14px;
  font-weight: bold;
  &:focus {
    outline: red;
  }
`;
