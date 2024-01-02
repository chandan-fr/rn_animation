import { Image, StyleSheet, Text, View, Animated, Easing, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'

type TestCSSPropertyProps = {
  navigation: any;
}

const TestCSSProperty = ({ navigation }: TestCSSPropertyProps): JSX.Element => {
  const position = new Animated.ValueXY({ x: 0, y: 0 });
  const currentValue = new Animated.Value(1000);

  const seqAnimation = Animated.sequence([

  ]);

  useEffect(() => {
    Animated.timing(currentValue, {
      toValue: 50,
      duration: 2500,
      // easing: Easing.bezier(1,0,0,1), // smooth transition
      easing: Easing.elastic(0.65), // bouncy transition
      useNativeDriver: true,
    }).start();

  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#babef0" }}>
      <TouchableOpacity style={styles.backArrow} onPress={() => navigation.goBack()}>
        <Text style={{ color: "#000", fontSize: 16, }}>Back</Text>
      </TouchableOpacity>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {/* <Text>TestCSSProperty TestCSSProperty TestCSSProperty </Text> */}
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <Animated.View
            style={[styles.imgWrap, {
              transform: [
                { perspective: currentValue },
                { rotateY: '-13deg' }
              ],
            }]}
          >
            <Image source={require("../../assets/images/nd3.png")} style={styles.image} />
          </Animated.View>

          <Animated.View
            style={[styles.imgWrap, {
              transform: [
                { perspective: currentValue },
                { rotateY: '13deg' }
              ],
            }]}
          >
            <Image source={require("../../assets/images/nd3.png")} style={styles.image} />
          </Animated.View>
        </View>
      </View>
    </SafeAreaView>

  )
}

export default TestCSSProperty;

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
  },
  imgWrap: {
    width: 160,
    height: 160,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1
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
});