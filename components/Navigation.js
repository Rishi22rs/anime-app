import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Pages/Home";
import Waifu from "../Pages/Waifu";
import SearchList from "../Pages/SearchList";
import AnimeDescription from "../Pages/AnimeDescription";
import Character from "../Pages/Character";
import MyWebView from "../Pages/MyWebView";
import SavedAnime from "../Pages/SavedAnime";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Waifu" component={Waifu} />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="Tab" component={TabNavigation} /> */}
        <Stack.Screen name="Search" component={SearchList} />
        <Stack.Screen name="AnimeDescription" component={AnimeDescription} />
        <Stack.Screen name="Character" component={Character} />
        <Stack.Screen name="News" component={MyWebView} />
        <Stack.Screen name="Saved" component={SavedAnime} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
