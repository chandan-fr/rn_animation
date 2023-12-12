import { StyleSheet, Text, View, SafeAreaView, StatusBar, Animated, Easing, Dimensions, PanResponder, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'

const { width, height } = Dimensions.get('window');

const Tut1 = ({navigation}) => {
  const position = new Animated.ValueXY({ x: 0, y: 0 });
  // Animated.timing(position, {
  //   toValue: { x: 10, y: 600 },
  //   duration: 2000,
  //   useNativeDriver: true,
  // }).start()

  const rotate = position.x.interpolate({
    inputRange: [0, 100],
    outputRange: ["0deg", "180deg"]
  })

  const pan = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (e, ges) => position.setValue({ x: ges.dx, y: ges.dy }),
    // or  //
    // onPanResponderMove: Animated.event([
    //   null,
    //   { dx: position.x, dy: position.y }
    // ], { useNativeDriver: false }),

    onPanResponderRelease: () => {
      Animated.spring(position, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: true,
      }).start()
    }
  });



  return (
    <SafeAreaView style={styles.parent} >
      <TouchableOpacity style={styles.backArrow} onPress={() => navigation.goBack()}>
        <Text style={{ color: "#000", fontSize: 16, }}>Back</Text>
      </TouchableOpacity>
      <View style={styles.body}>
        <Animated.View
          {...pan.panHandlers}
          style={{
            width: width / 3,
            height: 100,
            backgroundColor: 'white',
            alignItems: "center",
            justifyContent: "center",
            transform: [
              { translateX: position.x },
              { translateY: position.y },
              { rotate: rotate }
            ],
            elevation: 5,
            borderRadius: 10
          }}
        >
          <Text style={{ color: 'blue', fontSize: 20, letterSpacing: 10, fontWeight: 600 }}>Tut1</Text>
        </Animated.View>
      </View>

    </SafeAreaView>
  )
}

export default Tut1

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backArrow: {
    marginLeft: 10,
    alignSelf: "flex-start",
    marginTop: 35,
    paddingHorizontal: 10,
    paddingVertical: 7,
    backgroundColor: "#cfecf7",
    borderRadius: 5
  },
})