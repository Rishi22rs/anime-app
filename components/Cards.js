import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Cards({
  synopsis = "",
  navigation,
  rank = "#1",
  uri = "https://static.displate.com/280x392/displate/2020-07-11/8c421b9377ced8af7f46a32b892aa83e_04a308b1c1e139b45c2c94b3e4598805.jpg",
  title = "Darling in the Franxxx",
  data,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() =>
        navigation.navigate("AnimeDescription", { data, navigation, synopsis })
      }
    >
      <View style={styles.container}>
        <ImageBackground
          // resizeMode="contain"
          source={{
            uri: uri,
          }}
          style={{ height: 100 + "%" }}
        >
          <Text
            style={{
              backgroundColor: "orange",
              maxWidth: 70,
              left: 10,
              top: 10,
              padding: 5,
              textAlign: "center",
              borderRadius: 15,
              color: "white",
            }}
          >
            {rank}
          </Text>
          {/* <LinearGradient
            // Button Linear Gradient
            colors={["#09203f", "#537895"]}
            start={[0.1]}
          > */}
          <Text
            style={{
              position: "absolute",
              bottom: 10,
              marginLeft: 10,
              marginRight: 60,
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
          {/* </LinearGradient> */}
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    marginLeft: 20,
    marginBottom: 20,
    marginRight: 20,
    borderRadius: 15,
    overflow: "hidden",
  },
});
