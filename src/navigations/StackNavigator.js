import React from "react";
import { View, textInput, Image } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";

import Icon from 'react-native-vector-icons/Ionicons';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from "../screens/Home";




const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#fff",
  },
  headerTintColor: "#000",
  headerBackTitle: "Back",
};

const MainStackNavigator = ({ navigation }) => {


  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} options={{
        
            // headerTitleAlign: 'center',
        title: "MDM Calculator Bihar",
        headerStyle: {
          backgroundColor: '#3f3849',
          elevation: 0
        },
        headerTitleStyle: {
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 18,
        },
        // headerLeft: () => (
        //   <Icon.Button name="ios-menu" size={35}
        //     backgroundColor="#3f3849" color='#fff'
        //     onPress={() => navigation.openDrawer()} />

        // ),
        headerRight: () => (
          <>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

              <MaterialCommunityIcons
                name="calendar-check" size={30} style={{ marginRight: 10 }}
                backgroundColor="#3f3849" color='#fff'
                onPress={() => navigation.navigate('MainApp')} />



              <Icon.Button name="md-notifications-outline" size={30}
                backgroundColor="#3f3849" color='#fff'
                onPress={() => alert('no notifications')} />
            </View>
          </>

        ),

      }} />

    
    </Stack.Navigator>
  );
}

export default MainStackNavigator