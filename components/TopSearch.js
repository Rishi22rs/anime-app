import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { TextInput, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

const TopSearch = ({ navigation, route }) => {
  const [search, setSearch] = useState("");

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingLeft: 15,
        paddingRight: 15,
      }}
    >
      <TouchableOpacity activeOpacity={0.7}>
        <Icon
          name={route.name == "Search" ? "arrow-left" : "user"}
          size={30}
          color="#393C44"
          style={{
            backgroundColor: "#10131A",
            padding: 13,
            height: 55,
            borderRadius: 20,
          }}
          c
          onPress={() => {
            // navigation.goBack();
            AsyncStorage.clear();
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7}>
        <TextInput
          onChangeText={(e) => {
            setSearch(e);
          }}
          onSubmitEditing={() => {
            navigation.navigate("Search", { search });
          }}
          placeholder="Search"
          textAlign="center"
          style={{
            height: 54,
            width: 200,
            backgroundColor: "#10131A",
            borderRadius: 20,
            marginBottom: 20,
            fontSize: 15,
            fontWeight: "bold",
            color: "#393C44",
          }}
          placeholderTextColor="#393C44"
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7}>
        <Icon
          onPress={() => navigation.navigate("Saved")}
          name="info"
          size={30}
          color="#393C44"
          style={{
            backgroundColor: "#10131A",
            padding: 18,
            height: 55,
            borderRadius: 20,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TopSearch;
