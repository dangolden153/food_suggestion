import { StatusBar } from "expo-status-bar";
import React, { createContext, useContext, useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { Context } from "./context";
import { Provider } from "react-redux";
import { createStore } from "redux";
import foodReducer from "./reducer/foodReducer/FoodReducer";

import Sign_up from "./Screens/SignUp";
import Sign_in from "./Screens/SignIn";
// import CountryList from "./Screens/CountryList";
import Meal from "./Screens/Meal";
import Profile from "./Screens/Profile";
import Popular from "./Screens/PopularFood";
import ForgotPassword from "./Screens/ForgotPassword";
import Cupboard from "./Screens/Cupboard";
import Breakfast from "./Screens/Breakfast";
import Lunch from "./Screens/Lunch";
import Dinner from "./Screens/Dinner";
import Brunch from "./Screens/Brunch";
import MealContent from "./Screens/MealContent";
import { auth, db } from "./firebase";

const store = createStore(foodReducer);

const Stack = createStackNavigator();

function AppNavigator() {
  const [state, setState] = useState(1);
  const [isloggedIn, setIsloggedIn] = useState(null);

  // useEffect(async () => {
  //   const token = await AsyncStorage.getItem("token");
  //   console.log(token);
  //   if (token) {
  //     setIsloggedIn(true);
  //   } else {
  //     setIsloggedIn(false);
  //   }
  // }, [setIsloggedIn]);

  const config = {
    animation: "spring",
    config: {
      stiffness: 1000,
      damping: 50,
      mass: 3,
      overShootingClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user !== null) {
        setIsloggedIn(true);
        // dispatch({ type: "users_details", payload: user });
        console.log("users_details", user);
      }

      ///do other thing
      else {
        setIsloggedIn(false);
        console.log("not authenticated");
      }
    });
  }, [setIsloggedIn]);

  return (
    <Provider store={store}>
      <Context.Provider value={{ setState, state }}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="signup"
            mode="modal"
            screenOptions={{
              gestureEnabled: true,
              gestureDirection: "horizontal",
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          >
            {isloggedIn ? (
              <>
                <Stack.Screen
                  name="meal"
                  component={Meal}
                  options={{ headerTitleAlign: "center" }}
                />
                <Stack.Screen
                  name="Breakfast"
                  component={Breakfast}
                  options={{ headerTitleAlign: "center" }}
                />
                <Stack.Screen name="Lunch" component={Lunch} />
                <Stack.Screen name="Dinner" component={Dinner} />
                <Stack.Screen name="Brunch" component={Brunch} />
                <Stack.Screen name="cupboard" component={Cupboard} />

                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Popular" component={Popular} />

                <Stack.Screen
                  name="MealContent"
                  component={MealContent}
                  options={{ ...TransitionPresets.ModalSlideFromBottomIOS }}
                />
              </>
            ) : (
              <>
                <Stack.Screen name="signup" component={Sign_up} />
                <Stack.Screen name="signin" component={Sign_in} />
                <Stack.Screen
                  name="forgotPassword"
                  component={ForgotPassword}
                />
              </>
            )}
            {/* <Stack.Screen name="country-list" component={CountryList} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </Context.Provider>
    </Provider>
  );
}

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// builds that remain

// redux done _/
// Screens
// popular Meals  _/
// forgot Password _/
// cupboard  _/
// login  _/
// description  _/

// Component
// shotening the text  _/
// no post on the profile screen _/
// no favourite recipes _/
// add to cupboard functionality _/
//check how to style textInput color on stackoverflow _?

//  functionalities
// search .. check how to make use of search input feild
// remove food from the favourite list
// open up a search component screen
// display the number of favourite item picked
/// check how to use .env

//// installing firebase .../
/// setting up the sign up and signout functionalities .../

/// fetch food details from google
/// work on the searcing functionalities
/// push the add to cupboard to firebase firestore
///
