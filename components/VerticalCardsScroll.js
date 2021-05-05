import React from "react";
import { Text, FlatList } from "react-native";
import AnimeDescriptionCardForEpAndChar from "./AnimeDescriptionCardForEpAndChar";
import Cards from "./Cards";

const VerticalCardScroll = ({
  navigation,
  data,
  news = false,
  height = 200,
  reco = false,
  goDesc = false,
}) => {
  return (
    <FlatList
      data={data}
      horizontal={true}
      renderItem={({ item }) =>
        data && (
          <AnimeDescriptionCardForEpAndChar
            goDesc={goDesc}
            data={item}
            uri={item.image_url}
            title={news ? item.intro : reco ? item.title : item.name}
            keyExtractor={(item) => item.rank}
            height={height}
            navigation={navigation}
            news={news}
          />
        )
      }
      keyExtractor={(item, index) => JSON.stringify(item.rank)}
    />
  );
};

export default VerticalCardScroll;
