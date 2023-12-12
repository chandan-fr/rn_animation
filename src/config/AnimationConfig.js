const { Dimensions, Animated } = require("react-native");

const { width, height } = Dimensions.get('window');


// const position = new Animated.ValueXY({ x: -80, y: height / 2 });

// const rotate = position.x.interpolate({
//     inputRange: [0, (width / 2) - 40 / 2],
//     outputRange: ["0deg", "360deg"]
// });

// Animated.timing(position, {
//     toValue: { x: (width / 2) - 40 / 2, y: height / 2 },
//     duration: 1500,
//     useNativeDriver: true,
// }).start();

const boxWidth = 40;
const boxHeight = 40;

const pBox = {
    positionBox1: new Animated.ValueXY({ x: -boxWidth, y: height / 2 }),
    positionBox2: new Animated.ValueXY({ x: -boxWidth * 3, y: height / 2 }),
    positionBox3: new Animated.ValueXY({ x: -boxWidth * 4, y: height / 2 }),
    positionBox4: new Animated.ValueXY({ x: -boxWidth * 5, y: height / 2 }),
    positionBox5: new Animated.ValueXY({ x: -boxWidth * 6, y: height / 2 }),
    positionBox6: new Animated.ValueXY({ x: -boxWidth * 8, y: height / 2 }),
};

// Create a rotate interpolation for each box
const rBox = {
    rotateBox1: pBox.positionBox1.x.interpolate({
        inputRange: [0, (width / 2) - (boxWidth * 3.5)],
        outputRange: ["0deg", "720deg"]
    }),
    rotateBox2: pBox.positionBox2.x.interpolate({
        inputRange: [0, (width / 2) - (boxWidth * 3.5)],
        outputRange: ["0deg", "360deg"]
    }),
    rotateBox3: pBox.positionBox3.x.interpolate({
        inputRange: [0, (width / 2) - (boxWidth * 3.5)],
        outputRange: ["0deg", "360deg"]
    }),
    rotateBox4: pBox.positionBox4.x.interpolate({
        inputRange: [0, (width / 2) - (boxWidth * 3.5)],
        outputRange: ["0deg", "360deg"]
    }),
    rotateBox5: pBox.positionBox5.x.interpolate({
        inputRange: [0, (width / 2) - (boxWidth * 3.5)],
        outputRange: ["0deg", "360deg"]
    }),
    rotateBox6: pBox.positionBox6.x.interpolate({
        inputRange: [0, (width / 2) - (boxWidth * 3.5)],
        outputRange: ["0deg", "360deg"]
    })
};

const sequenceAnimation = Animated.sequence([
    // First box
    Animated.timing(pBox.positionBox1, {
        toValue: { x: (width / 2) - (boxWidth * 3.5), y: height / 2 },
        duration: 1000,
        useNativeDriver: true,
    }),
    // Second box
    Animated.timing(pBox.positionBox2, {
        toValue: { x: (width / 2) - (boxWidth * 3.5), y: height / 2 },
        duration: 1000,
        useNativeDriver: true,
    }),
    // Third box
    Animated.timing(pBox.positionBox3, {
        toValue: { x: (width / 2) - (boxWidth * 3.5), y: height / 2 },
        duration: 1000,
        useNativeDriver: true,
    }),
    // Fourth box
    Animated.timing(pBox.positionBox4, {
        toValue: { x: (width / 2) - (boxWidth * 3.5), y: height / 2 },
        duration: 1000,
        useNativeDriver: true,
    }),
    // Fifth box
    Animated.timing(pBox.positionBox5, {
        toValue: { x: (width / 2) - (boxWidth * 3.5), y: height / 2 },
        duration: 1000,
        useNativeDriver: true,
    }),
    // sixth box
    Animated.timing(pBox.positionBox6, {
        toValue: { x: (width / 2) - (boxWidth * 3.5), y: height / 2 },
        duration: 1000,
        useNativeDriver: true,
    }),
]);

module.exports = { sequenceAnimation, rBox, pBox, boxHeight, boxWidth };
