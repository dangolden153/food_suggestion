import { StatusBar } from "expo-status-bar";
import React, { useState, useLayoutEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import { Input, Button } from "react-native-elements";
import { Context } from "../context";
import pics from "../images/login.png";

const Sign_up = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPassword, setcComfirmPassword] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: "#F64B29" },
      headerTitleStyle: { color: "white" },
      title: "Sign ",
      headerShown: false,
    });
  }, [navigation]);

  const { state, setState } = useContext(Context);

  const navigateContext = () => {
    navigation.navigate("signin");
    setState(state + 1);
  };

  // {Platform.OS ? "padding" : "height"}
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* <Image style={{height: 50, width:50}} /> */}
      <View style={styles.contBackground}>
        <KeyboardAvoidingView
          style={styles.contBackgroundAvoidingVIew}
          keyboardVerticalOffset={90}
        >
          <Text
            h3
            style={{
              textAlign: "center",
              marginTop: 10,
              fontSize: 30,
              letterSpacing: 1,
              fontWeight: "bold",
            }}
          >
            Sign up
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholderTextColor={"black"}
              style={styles.input}
              value={username}
              onChangeText={(text) => setUsername(text)}
              placeholder="Username"
              type="text"
              autoFocus
            />

            <TextInput
              placeholderTextColor={"black"}
              style={styles.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Email"
              type="email"
              autoFocus
            />

            <TextInput
              placeholderTextColor={"black"}
              style={styles.input}
              placeholder="password"
              type="password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
            />

            <TextInput
              placeholderTextColor={"black"}
              style={styles.input}
              value={comfirmPassword}
              onChangeText={(text) => setcComfirmPassword(text)}
              type="password"
              secureTextEntry
              placeholder="comfirm Password"
            />
          </View>

          <View style={styles.btnContainer}>
            <Button
              containerStyle={styles.btn}
              buttonStyle={{ backgroundColor: "#F64B29" }}
              title="Sign up"
              raised
              onPress={navigateContext}
            />

            <Text style={{ paddingTop: 20, fontSize: 16 }}>
              you already have an account?{" "}
              <Text
                style={{ color: "#f64b29" }}
                onPress={() => navigation.navigate("signin")}
              >
                Login in
              </Text>
            </Text>
          </View>

          <View style={{ height: 20 }} />
          <View style={styles.circleBox} />
          <View style={styles.circleBox1} />
          <View style={styles.circleBox2} />
          <View style={styles.circleBox3} />
          <View style={styles.circleBox4} />
          <View style={styles.circleBox5} />
          <View style={styles.circleBox6} />
          <View style={styles.circleBox7} />
          <View style={styles.circleBox8} />
          <View style={styles.circleBox9} />
          <View style={styles.circleBox10} />
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default Sign_up;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A21",
    position: "relative",
  },
  contBackground: {
    backgroundColor: "#C4C4C4",
    height: "80%",
    width: "100%",
    position: "absolute",
    bottom: 0,

    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
  },
  contBackgroundAvoidingVIew: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  inputContainer: {
    width: "80%",
  },
  // input: {
  //   marginTop: 10,
  //   width: "100%",
  // },
  btn: {
    backgroundColor: "#F64B29",
    color: "black",
    width: 200,
    borderRadius: 20,
    marginTop: 25,
  },
  btnContainer: {
    alignItems: "center",
  },
  input: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 10,
    marginRight: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 20,
    fontSize: 19,
  },

  circleBox: {
    width: 65,
    height: 65,
    borderRadius: 100,
    backgroundColor: "white",
    opacity: 0.6,
    position: "absolute",
    bottom: 20,
    left: 10,
  },
  circleBox1: {
    width: 105,
    height: 110,
    borderRadius: 100,
    backgroundColor: "white",
    opacity: 0.7,
    position: "absolute",
    top: 10,
    right: 50,
  },
  circleBox2: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: "white",
    opacity: 0.5,
    position: "absolute",
    bottom: "25%",
    left: -80,
  },
  circleBox3: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: "white",
    opacity: 0.7,
    position: "absolute",
    bottom: 20,
    left: 10,
  },
  circleBox4: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: "white",
    opacity: 0.7,
    position: "absolute",
    top: "20%",
    left: "20%",
  },
  circleBox5: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: "white",
    opacity: 0.7,
    position: "absolute",
    top: "17%",
    right: "-10%",
  },
  circleBox6: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: "white",
    opacity: 0.7,
    position: "absolute",
    left: "40%",
    bottom: 10,
  },
  circleBox7: {
    width: 15,
    height: 15,
    borderRadius: 100,
    backgroundColor: "white",
    opacity: 0.7,
    position: "absolute",
    left: "70%",
    bottom: 30,
  },
  circleBox8: {
    width: 15,
    height: 15,
    borderRadius: 100,
    backgroundColor: "white",
    opacity: 0.7,
    position: "absolute",
    left: "50%",
    bottom: "10%",
    zIndex: -1,
  },
  circleBox9: {
    width: 55,
    height: 55,
    borderRadius: 100,
    backgroundColor: "white",
    opacity: 0.7,
    position: "absolute",
    left: "50%",
    bottom: "60%",
    zIndex: -1,
  },
  circleBox10: {
    width: 55,
    height: 55,
    borderRadius: 100,
    backgroundColor: "white",
    opacity: 0.7,
    position: "absolute",
    right: -10,
    bottom: "40%",
    zIndex: -1,
  },
});
