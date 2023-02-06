import { StatusBar } from "expo-status-bar";
import React from "react";
import { Pressable, View, StyleSheet, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Logo } from "../../../../assets/index";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.LogoOuter}>
        <Image source={Logo} style={styles.LogoStyle} resizeMode="contain" />
      </View>
      <View style={styles.TextOuter}>
        <Text style={styles.TextOuter.LoginText}>
          Sign In to record your video
        </Text>
        <Text style={styles.TextOuter.TextTagline}>
          Get started with your account
        </Text>
      </View>
      <View style={styles.SignupButtons}>
        <Pressable style={styles.SignupButtons.SignupButton}>
          <Text style={styles.SignupButtons.SignupButtonText}>
            Sign Up with Email ID
          </Text>
        </Pressable>
      </View>

      <View style={styles.LoginBlock}>
        <Text style={styles.LoginBlock.LoginText}>
          Already have an account?
          <Pressable
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={styles.LoginBlock.SignInText}> Sign In</Text>
          </Pressable>
        </Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  TextOuter: {
    flex: 1,
    alignItems: "center",

    LoginText: {
      fontFamily: "Roboto-Bold",
      fontSize: 40,
      textAlign: "center",
      color: "#1a202e",
      fontWeight: "bold",
    },

    TextTagline: {
      fontSize: 18,
      textAlign: "center",
      color: "#6e7d92",
      marginTop: 15,
    },
  },
  LogoOuter: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  LogoStyle: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },

  SignupButtons: {
    flex: 1,
    alignItems: "center",

    SignupButton: {
      backgroundColor: "#1a202e",
      width: 300,
      height: 50,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
    },

    SignupButtonText: {
      color: "#fff",
      fontSize: 17,
      fontWeight: "bold",
    },
  },

  LoginBlock: {
    flex: 1,
    alignItems: "end",
    justifyContent: "center",

    SignInText: {
      color: "#1a202e",
      textDecorationLine: "underline",
      fontSize: 17,
      fontWeight: "bold",
    },

    LoginText: {
      fontSize: 17,
      textAlign: "center",
      color: "#1a202e",
      fontWeight: "bold",
    },
  },
});
