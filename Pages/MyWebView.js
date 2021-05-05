import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { WebView } from "react-native-webview";

const MyWebView = ({ navigation, route }) => {
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
      <View
        style={{
          flex: 1,
          paddingTop: 50,
          backgroundColor: "#1B1F28",
          width: 100 + "%",
        }}
      >
        <WebView source={{ uri: route.params.data.forum_url }} />
      </View>
    </>
  );
};

export default MyWebView;
