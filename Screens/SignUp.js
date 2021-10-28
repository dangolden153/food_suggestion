import { StatusBar } from "expo-status-bar";
import React, { useState, useLayoutEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Alert,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-elements";

import pics from "../images/apple.png";
import { auth } from "../firebase";
import { Icon } from "react-native-elements";

const Sign_up = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPassword, setcComfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [state, setState] = useState(false);
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: "#F64B29" },
      headerTitleStyle: { color: "white" },
      title: "Sign ",
      headerShown: false,
    });
  }, [navigation]);

  const handleCancel = () => {
    if (state) {
      setState(false) && setLoading(false);
      return;
    }
  };

  // database sign up

  // const signUp = async () => {
  //   console.log("hallo");
  //   fetch("http://10.0.2.2:5000/api/user/signup", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       username: username,
  //       email: email,
  //       password: password,
  //       comfirmPassword: comfirmPassword,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then(async (data) => {
  //       console.log(data);
  //       try {
  //         await AsyncStorage.setItem("token", data);
  //       } catch {
  //         (err) => console.log(err);
  //       }
  //     });
  // };
  const handleLoginVadilation = () => {
    if (!username.length) {
      Alert.alert("invalid username!");
      return true;
    }

    if (!email) {
      Alert.alert("invalid email!");
      return true;
    }

    if (!password || password.length < 6) {
      Alert.alert("invalid password!");
      return true;
    }

    if (!comfirmPassword || comfirmPassword.length < 6) {
      Alert.alert("invalid comfirmPassword!");
      return true;
    }

    if (password !== comfirmPassword) {
      Alert.alert("password did not match!");
      return true;
    }
  };

  const handleSignUp = () => {
    if (handleLoginVadilation()) {
      return null;
    }

    setLoading(true);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        setState(true);
        setLoading(false);
      })
      .catch((err) => {
        Alert.alert(err.message);
        // setState(true);
        setLoading(false);

        console.log(err);
      });
  };

  // {Platform.OS ? "padding" : "height"}
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      {state && (
        <View
          style={{
            textAlign: "center",
            width: 250,
            paddingVertical: 10,
            paddingHorizontal: 5,
            backgroundColor: "#3f3f3fb0",
            top: 200,
            left: 80,
            zIndex: 10,
          }}
        >
          <TouchableOpacity onPress={handleCancel}>
            <Icon
              name="cancel"
              type="materialIcons"
              color="white"
              style={{ zIndex: 50, alignSelf: "flex-end" }}
            />
          </TouchableOpacity>
          <Text
            style={{
              textAlign: "center",
              marginTop: 10,
              fontSize: 15,
              letterSpacing: 1,
              color: "white",
            }}
          >
            {error}
          </Text>
        </View>
      )}
      <Image
        source={pics}
        style={{
          height: 250,
          width: 150,
          position: "absolute",
          top: 30,
          left: "33%",
          resizeMode: "contain",
        }}
      />
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
              color: "white",
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
              loading={loading}
              onPress={() => handleSignUp()}
            />

            <TouchableOpacity>
              <Text style={{ paddingTop: 20, fontSize: 16, color: "white" }}>
                you already have an account?{" "}
                <Text
                  style={{ color: "#f64b29" }}
                  onPress={() => navigation.navigate("signin")}
                >
                  Login in
                </Text>
              </Text>
            </TouchableOpacity>
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
    </SafeAreaView>
  );
};

export default Sign_up;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C4C4C4", /////1A1A21
    position: "relative",
  },
  contBackground: {
    backgroundColor: "#1A1A21", /////C4C4C4
    height: "70%",
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
