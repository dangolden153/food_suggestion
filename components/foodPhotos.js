import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Image } from "react-native-elements/dist/image/Image";
import { mealData } from "./data";
import EmptyPost from "./EmptyPost";
import { useSelector } from "react-redux";

const FoodPhotos = () => {
  const [state, setstate] = useState(false);
  const { foodRecipes } = useSelector((state) => state);

  const toggleState = () => setstate(!state);
  return (
    <>
      {mealData.length > 0 ? (
        <View style={styles.container}>
          <View style={styles.box}>
            <Text
              h3
              style={{
                textAlign: "left",
                fontSize: 23,
                fontWeight: "bold",
                margin: 10,
              }}
            >
              Food Photos
            </Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {mealData.map((meal) => (
                <View style={styles.content} meal={meal} key={meal.id}>
                  <Image
                    onPress={toggleState}
                    source={meal.img}
                    style={{
                      height: 80,
                      width: 80,
                      borderRadius: 20,
                      margin: 10,
                    }}
                  />
                  {state ? (
                    <Text style={{ fontSize: 17, color: "red" }}>
                      {meal.mealName}
                    </Text>
                  ) : (
                    <Text style={{ fontSize: 17, color: "black" }}>
                      {meal.mealName}
                    </Text>
                  )}
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      ) : (
        <EmptyPost />
      )}
    </>
  );
};

export default FoodPhotos;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexGrow: 0.1,
  },
  box: {
    // padding: 20,
    // alignItems: "flex-start",
  },
  content: {
    alignItems: "center",
  },
});
