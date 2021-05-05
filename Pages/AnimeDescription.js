import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as animeApi from "../Api";
import VerticalCardScroll from "../components/VerticalCardsScroll";
import { SliderBox } from "react-native-image-slider-box";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-community/async-storage";

const AnimeDescription = ({ navigation, route }) => {
  const [data, setData] = useState();
  const [episodes, setEpisodes] = useState();
  const [news, setNews] = useState();
  const [recommendations, setRecommendations] = useState();

  useEffect(() => {
    clear();
    animeApi
      .GetAnimeDetails(route.params.data.mal_id, "characters_staff")
      .then((res) => {
        setData(res.data.characters);
      });
    animeApi
      .GetAnimeDetails(route.params.data.mal_id, "episodes")
      .then((res) => {
        setEpisodes(res.data.episodes);
      });
    animeApi.GetAnimeDetails(route.params.data.mal_id, "news").then((res) => {
      setNews(res.data.articles);
    });
    animeApi
      .GetAnimeDetails(route.params.data.mal_id, "recommendations")
      .then((res) => {
        setRecommendations(res.data.recommendations);
      });
  }, [route.params.data.mal_id]);

  const clear = () => {
    setData([]);
    setEpisodes([]);
    setNews([]);
    setRecommendations([]);
  };

  return (
    <>
      <Icon
        name="arrow-left"
        size={30}
        color="#393C44"
        style={{
          position: "absolute",
          zIndex: 10,
          backgroundColor: "#10131A",
          padding: 13,
          height: 55,
          borderRadius: 20,
          width: 50,
          left: 20,
          top: 50,
        }}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView style={style.container}>
        <Image
          resizeMode="stretch"
          source={{
            uri: route.params.data.image_url,
          }}
          style={{ height: 500, borderRadius: 10, marginBottom: 25 }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <View>
            <Text
              style={{
                bottom: 10,
                marginRight: 60,
                fontWeight: "bold",
                color: "white",
              }}
            >
              {route.params.data.title}
            </Text>
            <Text
              style={{
                bottom: 10,
                marginRight: 60,
                marginTop: 5,
                color: "#66707D",
              }}
            >
              {route.params.data.start_date}
            </Text>
          </View>
        </View>
        {route.params.data.synopsis && (
          <Text
            style={{
              bottom: 10,
              marginRight: 60,
              marginTop: 5,
              color: "#66707D",
            }}
          >
            {route.params.data.synopsis}
          </Text>
        )}

        {data && data.length > 0 && (
          <Text
            style={{
              bottom: 10,
              marginRight: 60,
              marginTop: 30,
              fontWeight: "bold",
              color: "white",
              fontSize: 25,
            }}
          >
            Characters
          </Text>
        )}
        {data ? (
          <VerticalCardScroll data={data} navigation={navigation} />
        ) : (
          <ActivityIndicator
            size="large"
            color="#393C44"
            style={{ marginBottom: 10 }}
          />
        )}
        {episodes && episodes.length > 0 && (
          <Text
            style={{
              bottom: 10,
              marginRight: 60,
              marginTop: 30,
              fontWeight: "bold",
              color: "white",
              fontSize: 25,
            }}
          >
            Episodes released
          </Text>
        )}
        <View style={{ padding: 5, marginBottom: 20, marginTop: -10 }}>
          {episodes &&
            episodes.length > 0 &&
            episodes.map((x, key) => (
              <Text
                style={{
                  backgroundColor: "#393C44",
                  marginTop: 10,
                  padding: 10,
                  borderRadius: 15,
                  color: "white",
                }}
              >
                {x.title}
              </Text>
            ))}
        </View>
        {news && news.length > 0 && (
          <Text
            style={{
              bottom: 10,
              marginRight: 60,
              marginTop: 30,
              fontWeight: "bold",
              color: "white",
              fontSize: 25,
            }}
          >
            News
          </Text>
        )}
        {news && (
          <VerticalCardScroll
            data={news}
            news={true}
            height={100}
            navigation={navigation}
          />
        )}
        {recommendations && recommendations.length > 0 && (
          <Text
            style={{
              bottom: 10,
              marginRight: 60,
              marginTop: 30,
              fontWeight: "bold",
              color: "white",
              fontSize: 25,
            }}
          >
            Recommendations
          </Text>
        )}
        {recommendations && recommendations.length > 0 && (
          <VerticalCardScroll
            navigation={route.params.navigation}
            data={recommendations}
            reco={true}
            clear={clear}
            goDesc={true}
          />
        )}
      </ScrollView>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "#1B1F28",
    width: 100 + "%",
    height: "100%",
    padding: 10,
  },
});

export default AnimeDescription;
