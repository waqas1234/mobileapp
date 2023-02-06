import React, { useEffect, useRef } from "react";
import { Camera, CameraType } from "expo-camera";
import CaptureRef from "react-native-view-shot";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function CameraPage({ navigation }) {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [detecting, setdetecing] = useState(false);

  const ref = useRef();

  function takePicture() {
    if (Camera) {
      setdetecing(true);
      const data = async () => {
        try {
          await ref.current.capture().then((uri) => {
            fetch("http://192.168.2.105:5000/", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                image: uri,
              }),
            })
              .then((response) => response.json())
              .then((json) => {
                console.log(json);
              })
              .catch((error) => {
                console.error(error);
              });
          });
        } catch (error) {
          console.log(error);
        }
      };
      return data();
    }
  }

  

  useEffect(() => {
    requestPermission();
    setType(CameraType.front);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {permission ? (
          <Camera style={styles.camera} type={type}>
            <CaptureRef
              ref={ref}
              options={{
                format: "jpg",
                quality: 0.9,
              }}
              style={styles.buttonContainer}
            >
              <TouchableOpacity style={styles.button} onPress={takePicture}>
                <Text style={styles.text}>{`${
                  detecting === true ? "Detecting ..." : "Start Detecting"
                }`}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.Closebutton}
                onPress={() => {
                  navigation.navigate("Home");
                }}
              >
                <Text>
                  <MaterialCommunityIcons
                    name="window-close"
                    size={24}
                    color="white"
                  />
                </Text>
              </TouchableOpacity>
            </CaptureRef>
          </Camera>
        ) : (
          <Text
            style={{
              fontSize: 20,
              color: "red",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            No access to camera
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  camera: {
    width: 400,
    height: "100%",
  },

  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  button: {
    width: "80%",
    borderRadius: 5,
    backgroundColor: "rgba(0,0,0,0.5)",
    height: 50,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
  },

  Closebutton: {
    width: "15%",
    borderRadius: 5,
    // light red
    backgroundColor: "rgba(255, 0, 0, 0.4)",
    height: 50,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 18,
    color: "white",
  },
});
