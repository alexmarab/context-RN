import React from "react";
import {
  createBottomTabNavigator,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Button } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import QRCode from "react-native-qrcode-svg";

import { useAuth } from "../context/AuthContext";

type TabNavParamList = {
  Info: undefined;
  Git: undefined;
  Home: undefined;
};

type InfoScreenProps = BottomTabScreenProps<TabNavParamList, "Info">;

function Info({ navigation, route }: InfoScreenProps) {
  const imagen = require("../../assets/images/Ana.jpg");
  const {
    auth: { user },
    logout,
  } = useAuth();

  const cierraSesion = () => {
    logout();
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Avatar.Image size={150} source={imagen} />
      <Text style={styles.user}>{user}</Text>
      <Text style={styles.text}>
        Hola, soy administrativa y estudiante de DAM.
      </Text>

      <Button
        mode="contained"
        style={styles.button}
        onPress={() => cierraSesion()}
      >
        Logout
      </Button>
    </View>
  );
}

function Git(): React.JSX.Element {
  return (
    <View style={styles.container}>
      {/* AQUÍ DEBES PONER LA URL A TU GIT */}
      <Text style={styles.paragraph}>Accede a mi repositorio Git</Text>
      <QRCode value="http://awesome.link.qr" size={250} />
    </View>
  );
}

const Tab = createBottomTabNavigator<TabNavParamList>();

type IconType =
  | "information-circle"
  | "information-circle-outline"
  | "list-outline"
  | "list-circle-outline";

const PorfolioScreen = (): React.JSX.Element => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({
          focused,
          color,
          size,
        }: {
          focused: boolean;
          color: string;
          size: number;
        }) => {
          let iconName: string;

          if (route.name === "Info") {
            iconName = focused
              ? "information-circle"
              : "information-circle-outline";
          } else if (route.name === "Git") {
            iconName = focused ? "list-outline" : "list-circle-outline";
          } else {
            iconName = "default-icon-name";
          }

          return (
            <Ionicons name={iconName as IconType} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Info" component={Info} />
      <Tab.Screen name="Git" component={Git} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  user: {
    fontSize: 25,
    fontWeight: "500",
    marginTop: 10,
  },
  text: {
    margin: 20,
    textAlign: "center",
  },
  button: {
    margin: 10,
    width: 200,
  },
  paragraph: {
    marginBottom: 20,
    fontSize: 20,
  },
});

export default PorfolioScreen;
