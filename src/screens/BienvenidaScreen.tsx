import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { useNavigation } from "@react-navigation/native";

import { useAuth } from "../context/AuthContext";

// import { RootStackParamList } from "../types/types";
// type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;
// : React.FC<HomeScreenProps> = ({ navigation })

import { RootDrawerParamList } from "../types/types";
type HomeScreenProps = NativeStackScreenProps<RootDrawerParamList, "Home">;

const BienvenidaScreen = ({ navigation }: HomeScreenProps) => {
  // const navegar = useNavigation<HomeScreenProps>();
  const {
    auth: { user },
  } = useAuth();

  const irAlLogin = () => {
    // navegar.navigate("Login");
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Bienvenid@ {"\n"}
        {user ? user : ""}
      </Text>

      <View style={styles.colocarImagen}>
        <Image source={require("../../assets/snack-icon.png")} />
      </View>

      {!user && (
        <View>
          <TouchableOpacity style={styles.boton} onPress={() => irAlLogin()}>
            <Text style={styles.login}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#a3c2c2",
    alignItems: "center",
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#003366",
    padding: 50,
    textAlign: "center",
  },
  colocarImagen: {
    marginBottom: 60,
  },
  login: {
    fontSize: 30,
    fontWeight: "100",
    color: "white",
  },
  boton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: "#ff9900",
    borderRadius: 50,
  },
});

export default BienvenidaScreen;
