import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Button,
} from "react-native";
import Cards from "../components/Cards";
import * as animeApi from "../Api";
import TopSearch from "../components/TopSearch";
import ModalDropdown from "react-native-modal-dropdown";

export default function Home({ navigation, route }) {
  const [data, setData] = useState([]);
  // const [fact, setFact] = useState("");
  const [page, setPage] = useState(1);
  const [o, setO] = useState("airing");

  useEffect(() => {
    getAnime();
    // getFact();
  }, []);

  const getAnime = () => {
    animeApi.getTopAnime(page, o).then((res) => {
      setPage(page + 1);
      setData((prev) => prev.concat(res.top));
    });
  };

  // const getFact = () => {
  //   setFact("");
  //   animeApi.RandomFact().then((res) => {
  //     console.log("res", res);
  //     setFact(res.fact);
  //   });
  // };

  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  const myOptions = ["airing", "upcoming", "tv", "movie", "ova", "special"];

  return (
    <View style={styles.container}>
      <TopSearch navigation={navigation} route={route} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <Text
          style={{
            backgroundColor: "#10131A",
            marginLeft: 23,
            height: 27,
            width: 70,
            textAlign: "center",
            color: "white",
            borderRadius: 10,
            fontSize: 20,
          }}
        >
          Filter:
        </Text>
        <ModalDropdown
          onSelect={(e) => {
            setPage(1);
            setO(myOptions[e]);
            setData([]);
            animeApi.getTopAnime(page, myOptions[e]).then((res) => {
              setData((prev) => prev.concat(res.top));
            });
          }}
          style={{
            height: 30,
            width: 100,

            borderBottomColor: "#10131A",
            borderBottomWidth: 2,
            marginBottom: 20,
            marginLeft: 20,
            // marginRight: 20,
            color: "#393C44",
          }}
          textStyle={{
            color: "white",
            textAlign: "center",
            width: "100%",
            fontSize: 20,
          }}
          dropdownStyle={{
            backgroundColor: "#1B1F28",
            width: 200,
          }}
          dropdownTextStyle={{
            backgroundColor: "#393C44",
            color: "white",
            fontSize: 20,
          }}
          defaultIndex={0}
          defaultValue="airing"
          options={myOptions}
        />
      </View>
      <ScrollView
        style={{ zIndex: -1 }}
        onScroll={({ nativeEvent }) => {
          if (isCloseToBottom(nativeEvent)) {
            animeApi.getTopAnime(page, o).then((res) => {
              setPage(page + 1);
              setData((prev) => prev.concat(res.top));
            });
          }
        }}
        scrollEventThrottle={400}
      >
        {/* <View
          style={{
            backgroundColor: "#10131A",
            marginLeft: 20,
            marginRight: 20,
            borderRadius: 15,
            padding: 20,
            marginBottom: 20,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        > */}
        {/* <View style={{ width: "80%" }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Random anime fact:
            </Text>
            <Text
              style={{
                marginLeft: 20,
                marginRight: 20,
                color: "grey",
              }}
            >
              {fact === "" ? (
                <ActivityIndicator
                  size="large"
                  color="#393C44"
                  style={{ marginBottom: 10 }}
                />
              ) : (
                fact
              )}
            </Text>
          </View>
          <TouchableOpacity activeOpacity={0.4}>
            <Icon
              name="random"
              size={30}
              color="#10131A"
              style={{
                backgroundColor: "#393C44",
                padding: 13,
                height: 55,
                borderRadius: 20,
                marginRight: 20,
              }}
              onPress={getFact}
            />
          </TouchableOpacity>
        </View> */}

        <FlatList
          data={data}
          renderItem={({ item }) =>
            data && (
              <Cards
                data={item}
                navigation={navigation}
                uri={item.image_url}
                rank={`#${item.rank}`}
                title={item.title}
                keyExtractor={(item) => item.rank}
              />
            )
          }
          keyExtractor={(item, index) => JSON.stringify(item.rank)}
        />
        <ActivityIndicator
          size="large"
          color="#393C44"
          style={{ marginBottom: 10 }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#1B1F28",
    width: 100 + "%",
  },
});
