
import React from 'react';
import { StatusBar, StyleSheet, Text, View, Image, Button } from 'react-native';
import CommonStyles from '../styles/CommonStyles';
import GradientNavigationBar from '../elements/GradientNavigationBar';
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {
  colors,
  fontFamily,
  fontSize,
  deviceHeight,
  deviceWidth,
} from '../styles/variables';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = props => {


  return (
    <>
      <View style={[CommonStyles.normalPageContainer]}>
        <StatusBar backgroundColor={colors.primary} />
        <GradientNavigationBar
          title="Hello Sir,"
          subtitle=" Good Evening"
          titleStyle={{
            color: colors.white,
            fontSize: fontSize.medium,
            fontFamily: fontFamily.regular,
            paddingTop: 10,
          }}
          subtitleStyle={{
            color: colors.white,
            fontSize: fontSize.title,
            fontFamily: fontFamily.bold,
          }}

        />
        <View style={{ marginTop: 60, }}>
          <View style={[CommonStyles.wrapperBox]}>
            <View style={styles.subContainer}>
              <View style={[CommonStyles.row]}>
                <View style={styles.addButtonView}>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('AddTaskScreen')}>
                      
                    <View style={styles.box1}>
                      <Text style={styles.boxtexthead}>कक्षा 1</Text>
                      <Text style={styles.boxtextsubhead}>से</Text>
                      <Text style={styles.boxtextnum}>5 तक </Text>

                    </View>
                  </TouchableOpacity>
                </View>

                {/*  */}
                <View style={styles.addButtonView2}>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('AddTaskScreen')}>
                    <View style={styles.box2}>
                      <Text style={styles.boxtexthead}>कक्षा 6</Text>
                      <Text style={styles.boxtextsubhead}>से</Text>
                      <Text style={styles.boxtextnum}>8 तक</Text>

                    </View>
                  </TouchableOpacity>
                </View>


                <View style={{ marginTop: 150, marginLeft: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('AddTaskScreen')}>
                    <View style={styles.box3}>
                      <Text style={styles.boxtexthead}>कीमत देखे</Text>
                    </View>
                  </TouchableOpacity>


                
                    <TouchableOpacity>
                    
                      {/* onPress={() => props.navigation.navigate('AddTaskScreen')}> */}
                      <View style={styles.box4}>
                        <Text style={styles.boxtexthead}>परिवर्तन दर कि विवरन</Text>

                      </View>
                    
                    </TouchableOpacity>

               

                </View>


                {/*  */}

              </View>

            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: colors.secondary,
    borderWidth: 0.5,
    borderRadius: 50,
    marginVertical: 5,
    height: 'auto',
    width: deviceWidth / 1.2,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: colors.white,

    alignSelf: 'center',
  },

  textCategory: {
    color: colors.white,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.header,
  },
  subContainer: {
    display: 'flex',
    height: deviceHeight * 0.59,
    width: deviceWidth * deviceWidth,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: deviceHeight * 0.1,
    bottom: 0,
  },
  box1: {
    width: 140,
    height: 160,
    borderRadius: 20,
    backgroundColor: colors.skyblue,
    alignItems: "center",
    justifyContent: "center",
    marginLeft:5
  },
  box2: {
    width: 140,
    height: 160,
    borderRadius: 20,
    backgroundColor: colors.lightgray,
    alignItems: "center",
    justifyContent: "center",
    marginLeft:5
  },
  box3: {
    width: 120,
    height: 130,
    borderRadius: 20,
    backgroundColor: '#40E0D0',

    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15
  },
  box4: {
    width: 120,
    height: 130,
    borderRadius: 20,
    backgroundColor: '#FFBF00',

    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15
  },

  addButtonView: {
    position: 'absolute',
    marginTop: deviceHeight * -0.1,
    left: deviceWidth / 17,
  },
  addButtonView2: {
    position: 'absolute',
    marginTop: deviceHeight * -0.1,
    left: deviceWidth / 2,
  },
  boxtexthead: {
    fontSize: fontSize.header,
    fontFamily: fontFamily.extraBold,
    color: colors.primary,
    width: 100,
    textAlign: 'center',
    fontSize: 25
  },
  boxtextsubhead: {
    fontSize: fontSize.medium,
    fontFamily: fontFamily.regular,
    color: colors.primary,
    width: 80,
    textAlign: 'center',
    fontSize: 25
  },
  boxtextnum: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.small,
    color: colors.primary,
    paddingTop: 10,
    width: 100,
    textAlign: 'center',
    fontSize: 25
  },







});


