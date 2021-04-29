import React, { useState } from "react";
import axios from "axios";
import Autosuggest from "react-autosuggest";
import { BASE_API_URL } from "../../../constants";
import {
  Container,
  Label,
  InvalidLabel,
  ClearButton,
  Suggestion,
  SuggestionName,
  SuggestionPremiered,
  SuggestionRate,
} from "./styledComponents";

const getSuggestionValue = (suggestion) => suggestion.show.name;
const renderSuggestion = (suggestion) => (
  <Suggestion>
    <SuggestionName>{suggestion.show.name}</SuggestionName>
    <SuggestionPremiered>{suggestion.show.premiered}</SuggestionPremiered>
    <SuggestionRate>Rating: {suggestion.show.rating.average}</SuggestionRate>
  </Suggestion>
);

export const Search = ({ onShowSelected }) => {
  const [inputValue, setInputValue] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [shows, setShows] = useState([]);

  async function callGetShowsApi(query) {
    const result = await axios(`${BASE_API_URL}search/shows?q=${query}`);
    if (result.data) {
      console.log(result.data);
      setShows(result.data);
    } else {
      setIsInvalid(true);
    }
  }

  const handleSuggestionsFetch = ({ value, reason }) => {
    if (reason === "input-changed") {
      callGetShowsApi(value);
    }
  };

  const handleSuggestionSelected = (e, { suggestion }) => {
    onShowSelected(suggestion);
  };

  const onChange = (e, { newValue }) => {
    setIsInvalid(false);
    setInputValue(newValue);
  };

  const onClearButtonClicked = () => {
    setInputValue("");
    setIsInvalid(false);
    onShowSelected(null);
  };

  return (
    <Container>
      {isInvalid ? (
        <InvalidLabel>Search TV show - Please enter valid title</InvalidLabel>
      ) : (
        <Label>Search TV show</Label>
      )}
      <Autosuggest
        suggestions={shows}
        onSuggestionsFetchRequested={handleSuggestionsFetch}
        onSuggestionsClearRequested={() => setShows([])}
        onSuggestionSelected={handleSuggestionSelected}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={{
          placeholder: "Please enter TV show title",
          value: inputValue,
          onChange: onChange,
        }}
      />
      <ClearButton onClick={onClearButtonClicked}>Clear</ClearButton>
    </Container>
  );
};
