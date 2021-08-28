import React, { useEffect, useLayoutEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Video, AVPlaybackStatus } from "expo-av";
import sampleVideo from "../images/video.mp4";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { foodType } from "../reducer/foodReducer/food_type";
import { useSelector } from "react-redux";
import { Button } from "react-native-elements/dist/buttons/Button";
import { useNavigation } from "@react-navigation/native";

const MealContent = ({ route }) => {
  const [status, setStatus] = React.useState({});
  const [state, setState] = React.useState(false);
  const navigation = useNavigation();
  const { cupboard, foodRecipes } = useSelector((state) => state);

  const { mealName, description, id, img, screenName } = route.params.item;
  //   const { mealName, description, id, img, screenName } = item;
  const video = React.useRef(null);
  const dispatch = useDispatch();
  const toggleFav = () => setState(!state);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          backgroundColor: "#c4c4c4",
          borderRadius: 100,
          height: 40,
          width: 40,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: 50,
          left: 20,
          zIndex: 1,
        }}
      >
        <AntDesign name="arrowleft" size={30} color="black" />
      </TouchableOpacity>
      <View style={styles.videoContainer}>
        <Video
          style={{ height: "100%", width: "100%" }}
          source={sampleVideo}
          useNativeControls
          resizeMode="cover"
          isLooping
          isMuted={false}
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      </View>

      {/* /////// description section */}
      <View style={styles.description}>
        {/* /////// feedback section */}
        <View style={styles.feedback}>
          <Text style={{ color: "white", fontSize: 20, color: "#F7B02E" }}>
            Feedback
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "40%",
            }}
          >
            <Ionicons name="star" size={20} color="#F7B02E" />
            <Ionicons name="star" size={20} color="#F7B02E" />
            <Ionicons name="star-outline" size={20} color="#F7B02E" />
            <Ionicons name="star-outline" size={20} color="#F7B02E" />
            <Ionicons name="star-outline" size={20} color="#F7B02E" />
          </View>
        </View>

        <View style={styles.sub_desc}>
          <Text
            style={{
              color: "black",
              fontSize: 25,
              fontWeight: "bold",
              letterSpacing: 1,
            }}
          >
            {mealName}
          </Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 17,
                color: "black",
                opacity: 0.7,
              }}
            >
              {description}
            </Text>
          </ScrollView>
        </View>

        {/* for button and favorite icon */}
        <View style={styles.btn_icon}>
          <View
            style={{
              backgroundColor: "#c4c4c4",
              borderRadius: 100,
              height: 40,
              width: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={toggleFav}
          >
            <TouchableOpacity onPress={toggleFav}>
              {state ? (
                <Ionicons name="heart" size={28} color="red" />
              ) : (
                <Ionicons name="heart-outline" size={28} color="red" />
              )}
            </TouchableOpacity>
          </View>

          <Button
            titleStyle={{ fontSize: 15 }}
            containerStyle={styles.btn}
            title="ADD TO CUPBOARD"
            onPress={() =>
              dispatch({
                type: foodType.CUPBOARD,
                payload: { mealName, description, id, img },
              })
            }
          />
        </View>
      </View>
    </View>
  );
};

export default MealContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A21",
    position: "relative",
  },
  videoContainer: {
    flex: 1,
    height: 250,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.6,
  },
  feedback: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  description: {
    backgroundColor: "#1A1A21",
    height: 357,
    position: "relative",
  },

  sub_desc: {
    backgroundColor: "white",
    paddingHorizontal: 23,
    paddingTop: 20,
    paddingBottom: 54,
    borderTopStartRadius: 20,
    borderTopRightRadius: 20,
    height: "85%",
    // position: "absolute",
    // bottom: 0,
  },
  btn_icon: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    width: "100%",
    paddingHorizontal: 23,
  },
  btn: {
    backgroundColor: "#f64b29",
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
