import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Cards from "../components/Cards";
import * as animeApi from "../Api";
import TopSearch from "../components/TopSearch";

export default function SearchList({ navigation, route }) {
  const [data, setData] = useState();

  useEffect(() => {
    GetAnime();
  }, [route.params.search]);

  const GetAnime = () => {
    setData([]);
    animeApi.SearchAnime(route.params.search).then((res) => {
      setData(res.results);
    });
  };

  return (
    <View style={styles.container}>
      <TopSearch navigation={navigation} GetAnime={GetAnime} route={route} />
      {data && data.length > 0 ? (
        <FlatList
          data={data}
          renderItem={({ item }) =>
            data && (
              <Cards
                synopsis={item.synopsis}
                uri={item.image_url}
                rank={item.score}
                title={item.title}
                navigation={navigation}
                data={item}
              />
            )
          }
          keyExtractor={(item, index) => item.rank}
        />
      ) : (
        <ActivityIndicator
          size="large"
          color="#393C44"
          style={{ marginBottom: 10 }}
        />
      )}
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
