import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  Pressable,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function Login({ navigation }) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onChangeText = ({ email, password }) => {
    setEmail(email);
    setPassword(password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.LoginScreen}>
        <View style={styles.TopBar}>
          <Text>
            <MaterialCommunityIcons
              onPress={() => {
                navigation.navigate("Home");
              }}
              name="window-close"
              size={24}
              color="black"
            />
          </Text>
          <Text>
            <AntDesign name="questioncircleo" size={24} color="black" />
          </Text>
        </View>
      </View>
      <View style={styles.LoginScreen.SignInForm}>
        <Text style={styles.LoginScreen.SignInForm.WelcomeText}>
          Welcome back!
        </Text>
        <Text style={styles.LoginScreen.SignInForm.TagLine}>
          Sign in to your account
        </Text>

        <TextInput
          style={styles.LoginScreen.SignInForm.TextInputEmail}
          onChangeText={(email) => onChangeText(email)}
          placeholder="Email Address"
          name="email"
          value={Email}
        />

        <TextInput
          secureTextEntry={true}
          style={styles.LoginScreen.SignInForm.TextInputPassword}
          onChangeText={(password) => onChangeText(password)}
          placeholder="Password"
          name="password"
          value={Password}
        />

        <Text style={styles.LoginScreen.SignInForm.ForgotPassword}>
          Forgot Password?
        </Text>

        <Pressable
          onPress={() => {
            navigation.navigate("Camera");
          }}
          style={styles.LoginScreen.SignInForm.SignInButton}
        >
          <Text
            style={styles.LoginScreen.SignInForm.SignInButton.SignInButtonText}
          >
            Sign In
          </Text>
        </Pressable>

        <Text style={styles.LoginScreen.SignInForm.SignUpText}>
          Don't have an account?
          <Pressable
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text
              style={styles.LoginScreen.SignInForm.SignUpText.SignUpTextLink}
            >
              &nbsp;Sign Up
            </Text>
          </Pressable>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },

  LoginScreen: {
    justifyContent: "center",

    SignInForm: {
      flex: 1,
      marginTop: 20,

      WelcomeText: {
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: "Roboto-Bold",
      },

      TagLine: {
        fontSize: 18,
        fontFamily: "Roboto-Regular",
        color: "#6e7d92",
        marginTop: 15,
      },

      TextInputEmail: {
        height: 60,
        borderColor: "#f1f5f9",
        borderWidth: 1,
        shadowColor: "#a9a9a9",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
        marginTop: 30,
        backgroundColor: "#f1f5f9",
        borderRadius: 5,
        padding: 10,
      },

      TextInputPassword: {
        height: 60,
        borderColor: "#f1f5f9",
        borderWidth: 1,
        shadowColor: "#a9a9a9",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
        marginTop: 15,
        backgroundColor: "#f1f5f9",
        borderRadius: 5,
        padding: 10,
      },

      ForgotPassword: {
        fontSize: 16,
        fontFamily: "Roboto-Bold",
        color: "#6e7d92",
        marginTop: 15,
        textAlign: "right",
      },

      SignInButton: {
        backgroundColor: "#1a202e",
        height: 50,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,

        SignInButtonText: {
          color: "#fff",
          fontSize: 18,
          fontFamily: "Roboto-Bold",
        },
      },

      SignUpText: {
        fontSize: 16,
        fontFamily: "Roboto-Bold",
        color: "#1a202e",
        marginTop: 15,
        textAlign: "center",

        SignUpTextLink: {
          color: "#1a202e",
          fontSize: 16,
          textDecorationLine: "underline",
          fontFamily: "Roboto-Bold",
        },
      },
    },
  },
  TopBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
