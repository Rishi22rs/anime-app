import React from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const AnimeDescriptionCardForEpAndChar = ({
  uri,
  title = "Mikasa",
  height,
  navigation,
  data,
  goDesc,
  news,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        navigation.navigate(
          goDesc ? "AnimeDescription" : news ? "News" : "Character",
          {
            navigation,
            data,
          }
        );
      }}
    >
      <View
        style={{
          height,
          marginLeft: 10,
          marginBottom: 20,
          marginRight: 10,
          borderRadius: 15,
          overflow: "hidden",
        }}
      >
        <ImageBackground
          // resizeMode="contain"
          source={{
            uri: uri,
          }}
          style={{ height: 100 + "%", width: 150 }}
        >
          <Text
            style={{
              position: "absolute",
              bottom: 10,
              marginLeft: 10,
              marginRight: 10,
              fontWeight: "bold",
              color: "white",
              backgroundColor: "rgba(52, 52, 52, 0.8)",
              // width: 100 + "%",
              padding: 10,
              borderRadius: 20,
            }}
            numberOfLines={2}
          >
            {title}
          </Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default AnimeDescriptionCardForEpAndChar;
