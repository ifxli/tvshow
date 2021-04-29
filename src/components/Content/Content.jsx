import React, { useState } from "react";
import axios from "axios";
import { Chrono } from "react-chrono";
import { Search } from "./Search/Search";
import { WaterMark } from "./WaterMark/WaterMark";
import { BASE_API_URL } from "../../constants";
import {
  Container,
  ContentWrapper,
  ShowContent,
  ShowTitle,
} from "./styledComponents";

export const Content = () => {
  const [selectedShow, setSelectedShow] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  async function callGetShowEpisodesApi(showId) {
    const result = await axios(`${BASE_API_URL}shows/${showId}/episodes`);
    if (result.data) {
      const season1Episodes = result.data.filter((item) => item.season === 1);
      const updatedEpisodes = season1Episodes.map((item) => {
        return {
          title: `Episode ${item.number}`,
          cardTitle: item.name,
          cardSubtitle: `${item.airdate} ${item.airtime}`,
          cardDetailedText: item.summary,
          media: {
            name: item.name,
            source: {
              url: item.image.original,
            },
            type: "IMAGE",
          },
        };
      });
      console.log("season1 episodes = ", season1Episodes);
      setEpisodes(updatedEpisodes);
    }
  }

  const handleShowSelected = (selectedShow) => {
    setSelectedShow(selectedShow);
    setEpisodes([]);
    selectedShow && callGetShowEpisodesApi(selectedShow.show.id);
  };

  return (
    <Container>
      <ContentWrapper>
        <Search onShowSelected={handleShowSelected} />
        {selectedShow && (
          <ShowContent>
            <ShowTitle>{selectedShow.show.name}</ShowTitle>
            <div
              dangerouslySetInnerHTML={{ __html: selectedShow.show.summary }}
            />
          </ShowContent>
        )}
        {episodes.length > 0 && <Chrono items={episodes} />}
      </ContentWrapper>
      <WaterMark />
    </Container>
  );
};
