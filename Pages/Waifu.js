import React, { useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { useState } from "react/cjs/react.development";
import { RandomWaifu } from "../Api";
import TopSearch from "../components/TopSearch";
import { SliderBox } from "react-native-image-slider-box";

const Waifu = ({ navigation, route }) => {
  const [data, setData] = useState();
  useEffect(() => {
    getWaifu();
  }, []);

  const getWaifu = () => {
    RandomWaifu().then((res) => setData(res));
  };

  return (
    <View style={styles.container}>
      <TopSearch navigation={navigation} route={route} />

      <View style={{ height: 500 }}>
        {data && (
          // <Image
          //   resizeMode="contain"
          // style={{
          //   height: 500,
          //   marginRight: 20,
          //   borderRadius: 15,
          //   marginLeft: 20,
          //   overflow: "hidden",
          // }}
          //   source={{
          //     uri: data.images[0],
          //   }}
          // />

          <SliderBox
            images={data && data.images}
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
              marginLeft: 20,
              marginRight: 60,
              fontWeight: "bold",
              color: "white",
            }}
            numberOfLines={2}
          >
            {data && data.names.en}
          </Text>
          <Text
            style={{
              marginLeft: 20,
              marginRight: 60,
              fontWeight: "bold",
              color: "white",
            }}
            numberOfLines={2}
          >
            {data && data.names.jp}
          </Text>
          <Text
            style={{
              marginTop: 5,
              marginLeft: 20,
              marginRight: 60,
              color: "grey",
            }}
            numberOfLines={2}
          >
            {data && data.from.name}
          </Text>
        </View>
        <View>
          <TouchableOpacity activeOpacity={0.5}>
            <Icon
              name="random"
              size={30}
              color="#393C44"
              style={{
                backgroundColor: "#10131A",
                padding: 13,
                height: 55,
                borderRadius: 20,
                marginRight: 20,
              }}
              onPress={getWaifu}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
export default Waifu;
