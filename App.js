import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { Image } from "react-native";

import AddScreen from "./screens/AddScreen";
import CartScreen from "./screens/CartScreen";
import ChatScreen from "./screens/ChatScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <LoginScreen onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            let icon;

            if (route.name === "Home")
              icon = require("./assets/tabs/Home.png");
            else if (route.name === "Cart")
              icon = require("./assets/tabs/Cart.png");
            else if (route.name === "Add")
              icon = require("./assets/tabs/Add.png");
            else if (route.name === "Chat")
              icon = require("./assets/tabs/Chat.png");
            else if (route.name === "Profile")
              icon = require("./assets/tabs/Profile.png");

            return (
              <Image
                source={icon}
                style={{
                  width: 28,
                  height: 28,
                  tintColor: focused ? "#2C32FA" : "#7D848F",
                }}
              />
            );
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Add" component={AddScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
