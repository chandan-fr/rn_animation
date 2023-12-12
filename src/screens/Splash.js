import { SafeAreaView, StyleSheet, Text, View, Animated } from 'react-native'
import React, { useEffect } from 'react'
import { boxHeight, boxWidth, rBox, pBox, sequenceAnimation } from '../config/AnimationConfig';



const Splash = ({ navigation }) => {
  useEffect(() => {
    sequenceAnimation.start();
    setTimeout(() => {
      navigation.replace('genmenu');
    }, 6300);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, flexDirection: "row" }}>
      {/* 1st box */}
      <Animated.View
        style={[
          styles.box,
          styles.boxColor1,
          {
            transform: [
              { translateX: pBox.positionBox1.x },
              { translateY: pBox.positionBox1.y },
              { rotate: rBox.rotateBox1 },
            ]
          }
        ]}
      >
        <Text style={styles.heading}>S</Text>
      </Animated.View>

      {/* 2nd box */}
      <Animated.View
        style={[
          styles.box,
          styles.boxColor2,
          {
            transform: [
              { translateX: pBox.positionBox2.x },
              { translateY: pBox.positionBox2.y },
              { rotate: rBox.rotateBox2 },
            ]
          }
        ]}
      >
        <Text style={styles.heading}>P</Text>
      </Animated.View>

      {/* 3rd box */}
      <Animated.View
        style={[
          styles.box,
          styles.boxColor3,
          {
            transform: [
              { translateX: pBox.positionBox3.x },
              { translateY: pBox.positionBox3.y },
              { rotate: rBox.rotateBox3 },
            ]
          }
        ]}
      >
        <Text style={styles.heading}>L</Text>
      </Animated.View>

      {/* 4th box */}
      <Animated.View
        style={[
          styles.box,
          styles.boxColor4,
          {
            transform: [
              { translateX: pBox.positionBox4.x },
              { translateY: pBox.positionBox4.y },
              { rotate: rBox.rotateBox4 },
            ]
          }
        ]}
      >
        <Text style={styles.heading}>A</Text>
      </Animated.View>

      {/* 5th box */}
      <Animated.View
        style={[
          styles.box,
          styles.boxColor5,
          {
            transform: [
              { translateX: pBox.positionBox5.x },
              { translateY: pBox.positionBox5.y },
              { rotate: rBox.rotateBox5 },
            ]
          }
        ]}
      >
        <Text style={styles.heading}>S</Text>
      </Animated.View>

      {/* 6th box */}
      <Animated.View
        style={[
          styles.box,
          styles.boxColor6,
          {
            transform: [
              { translateX: pBox.positionBox6.x },
              { translateY: pBox.positionBox6.y },
              { rotate: rBox.rotateBox6 },
            ]
          }
        ]}
      >
        <Text style={styles.heading}>H</Text>
      </Animated.View>
    </SafeAreaView>
  )
}

export default Splash;

const styles = StyleSheet.create({
  box: {
    width: boxWidth,
    height: boxHeight,
    borderRadius: 7,
    elevation: 4,
    alignItems: "center",
    justifyContent: "center",
    margin: 3
  },
  heading: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
  boxColor1: {
    backgroundColor: "#0f0",
    borderColor: "#0f0",
  },
  boxColor2: {
    backgroundColor: "#ff0",
    borderColor: "#ff0",
  },
  boxColor3: {
    backgroundColor: "#00bfff",
    borderColor: "#00bfff",
  },
  boxColor4: {
    backgroundColor: "#f00",
    borderColor: "#f00",
  },
  boxColor5: {
    backgroundColor: "#0ff",
    borderColor: "#0ff",
  },
  boxColor6: {
    backgroundColor: "#ff00ff",
    borderColor: "#ff00ff",
  },
});