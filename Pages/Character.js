import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SliderBox } from "react-native-image-slider-box";
import { CharacterPics } from "../Api";
import Icon from "react-native-vector-icons/FontAwesome";

const Character = ({ navigation, route }) => {
  const [pics, setPics] = useState();
  const newData = [];

  useEffect(() => {
    CharacterPics(route.params.data.mal_id).then((res) => {
      res.data.pictures.forEach((x) => newData.push(x.large));
      setPics(newData);
    });
  }, []);

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
      <ScrollView style={styles.container}>
        <View style={{ height: 500 }}>
          {pics && (
            <SliderBox
              images={pics}
              style={{
                height: 500,
                marginRight: 20,
                borderRadius: 15,
                marginLeft: 20,
                overflow: "hidden",
              }}
            />
          )}
        </View>
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              marginLeft: 20,
              marginRight: 60,
              fontWeight: "bold",
              color: "white",
            }}
          >
            {route.params.data && route.params.data.name}
          </Text>
          <Text
            style={{
              marginTop: 5,
              marginLeft: 20,
              marginRight: 60,
              color: "grey",
            }}
          >
            {route.params.data && route.params.data.role}
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: "#393C44",
          }}
        >
          {route.params.data && route.params.data.voice_actors.length > 0 && (
            <>
              <Text
                style={{
                  marginLeft: 20,
                  marginRight: 60,
                  fontWeight: "bold",
                  color: "white",
                  fontSize: 30,
                }}
              >
                Voice Actor
              </Text>
              <View style={{ display: "flex", width: 100 + "%", height: 300 }}>
                <Text
                  style={{
                    marginLeft: 20,
                    marginRight: 60,
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  {route.params.data &&
                    route.params.data.voice_actors &&
                    route.params.data.voice_actors[0].name}
                </Text>
                <Image
                  resizeMode="contain"
                  source={{
                    uri:
                      route.params.data &&
                      route.params.data.voice_actors[0].image_url,
                  }}
                  style={{ height: 200, borderRadius: 2 }}
                />
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#1B1F28",
    width: 100 + "%",
  },
});

export default Character;
