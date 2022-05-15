
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator, View } from "react-native";

import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./src/screens/Home";
import MainStackNavigator from "./src/navigations/StackNavigator";



const AppStack = createStackNavigator();

const App = () => {



  //   const [isLoading, setIsLoading] = React.useState(true);

  //   const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);


  //   useEffect(() => {

  //     setTimeout(() => {
  //       setIsLoading(false)
  //     }, 1000)
  //     AsyncStorage.getItem('alreadyLaunched').then(value => {
  //       if (value == null) {
  //         AsyncStorage.setItem('alreadyLaunched', 'true');
  //         setIsFirstLaunch(false)
  //       } else {
  //         setIsFirstLaunch(false)
  //       }

  //     })

  //   }, [])
  //   if (isLoading) {
  //     return (
  //       <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
  //         <ActivityIndicator size="large" color='#000' />
  //         {/* <LottieView source={require('./src/assets/lf30_editor_sxybc2l9.json')} autoPlay loop /> */}

  //       </View>
  //     )
  //   }

  //   if (isFirstLaunch == null) {
  //     return null;
  //   } else if (isFirstLaunch == false) {
  //     return (
  //       <NavigationContainer>

  //         <AppStack.Navigator
  //           headerMode="none"

  //         >
  //           <AppStack.Screen name="StartUpScreen" component={StartUpScreen} />
  //           <AppStack.Screen name="SignUpScreen" component={SignUpScreen} />
  //           <AppStack.Screen name="SignInScreen" component={SignInScreen} />
  //           <AppStack.Screen name="DrawerNavigator" component={DrawerNavigator} />

  //         </AppStack.Navigator>
  //       </NavigationContainer>
  //     )
  //   } else {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>

  )
}


export default App

