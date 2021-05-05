import { Text, View, FlatList, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import AsyncStorage from "@react-native-community/async-storage";
import { TouchableOpacity } from "react-native-gesture-handler";

const SavedAnime = ({ navigation }) => {
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    setData(await AsyncStorage.getItem("saved"));
  };
  console.log(data);
  return (
    <View
      style={{
        backgroundColor: "#1B1F28",
        width: 100 + "%",
        height: "100%",
        padding: 10,
      }}
    >
      <Icon
        onPress={() => navigation.goBack()}
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
      />
      <View
        style={{
          flex: 1,
          paddingTop: 50,
          backgroundColor: "#1B1F28",
          width: 100 + "%",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          About
        </Text>
        <View
          style={{
            height: 165,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 40,
            borderRadius: 15,
            overflow: "hidden",
            backgroundColor: "#10131A",
          }}
        >
          <Text style={{ margin: 20, fontSize: 17, color: "#393C44" }}>
            A lot more is yet to be added to this app. If you want to check out
            the source code of this application you can check out this GitHub
            repository.
          </Text>
          <TouchableOpacity>
            <Icon.Button
              name="github"
              style={{ textAlign: "center", padding: 25, left: 20, height: 35 }}
              backgroundColor="#EF921D"
            >
              <Text
                style={{
                  fontSize: 15,
                  color: "white",
                  textAlign: "center",
                }}
              >
                Github repo link
              </Text>
            </Icon.Button>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SavedAnime;
