import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Alert,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { useAuth } from "../context/AuthContext";
import { RootDrawerParamList } from "../types/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type LoginScreenProps = NativeStackScreenProps<RootDrawerParamList, "Login">;

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [passwordUsuario, setPasswordUsuario] = useState("");
  const imagenBarranquera = require("../../assets/images/Barranquera.jpg");

  const { login } = useAuth();

  // const navigation = useNavigation();

  const manejoIniciarSesion = () => {
    if (nombreUsuario === "atardecer" && passwordUsuario === "123") {
      // Alert.alert("¡Inicio de sesión exitoso!");

      login({ user: "Ana Isabel González Rosales" });

      navigation.navigate("Home");
    } else {
      Alert.alert("Credenciales incorrectas. Inténtalo de nuevo.");
    }
  };

  return (
    <ImageBackground
      source={imagenBarranquera}
      resizeMode="cover"
      style={styles.container}
    >
      <View style={styles.body}>
        <View>
          <Text style={styles.credenciales}>
            Bienvenid@ {"\n"}
            {"\n"} INTRODUZCA CREDENCIALES
          </Text>
        </View>
        <View>
          <Text style={styles.labelText}>Usuario</Text>
          <TextInput
            style={styles.formFieldText}
            autoCapitalize="none"
            placeholder="Introduzca el usuario"
            onChangeText={(newText) => setNombreUsuario(newText)}
          />
        </View>
        <View>
          <Text style={styles.labelText}>Contraseña</Text>
          <TextInput
            style={styles.formFieldText}
            autoCapitalize="none"
            placeholder="Introduzca la contraseña"
            secureTextEntry={true}
            onChangeText={(newText) => setPasswordUsuario(newText)}
          />
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.botonIniciarSesion,
            { backgroundColor: pressed ? "#2979FF" : "#efb810" },
          ]}
          onPress={manejoIniciarSesion}
        >
          <Text style={styles.textoIniciarSesion}>Iniciar Sesión</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    padding: "5%",
  },
  credenciales: {
    textAlign: "center",
    color: "white",
    fontSize: 30,
    marginVertical: 50,
    fontWeight: "600",
  },
  labelText: {
    color: "white",
    fontSize: 20,
    marginBottom: 12,
    paddingLeft: 5,
    paddingTop: 10,
  },
  formFieldText: {
    fontSize: 20,
    borderRadius: 15,
    borderWidth: 1,
    padding: 12,
    backgroundColor: "#efb810",
  },
  botonIniciarSesion: {
    borderRadius: 100,
    padding: 15,
    marginTop: 80,
  },
  textoIniciarSesion: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default LoginScreen;
