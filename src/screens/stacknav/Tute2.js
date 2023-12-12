import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Animated, Image } from 'react-native'
import React, { useEffect, useState } from 'react'


const AnimatedView = Animated.createAnimatedComponent(View);

const Tute2 = ({ navigation }) => {
    const currentValue = new Animated.Value(1);

    const [like, setLike] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (like) {
            Animated.spring(currentValue, {
                toValue: 2,
                friction: 2,
                useNativeDriver: true,
            }).start(() => {
                setShow(false)
                Animated.spring(currentValue, {
                    toValue: 1,
                    friction: 2,
                    useNativeDriver: true,
                }).start();
            });
        }
    }, [like]);

    return (
        <SafeAreaView style={styles.parent}>
            <TouchableOpacity style={styles.backArrow} onPress={() => navigation.goBack()}>
                <Text style={{ color: "#000", fontSize: 16, }}>Back</Text>
            </TouchableOpacity>

            <View style={styles.body}>
                {show && (
                    <AnimatedView style={{
                        position: "absolute",
                        transform: [
                            { scale: currentValue },
                        ],
                    }}>
                        <Image
                            source={require("../../assets/icons/heart3d.png")}
                            style={styles.animIcon}
                        />
                    </AnimatedView>
                )}

                <TouchableOpacity onPress={() => {
                    if (!like) setShow(true);
                    setLike(!like);
                }}>
                    <Image
                        source={
                            like ?
                                require("../../assets/icons/heart3d.png")
                                :
                                require("../../assets/icons/love.png")
                        }
                        style={{ width: 50, height: 50 }}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Tute2;

const styles = StyleSheet.create({
    parent: {
        flex: 1,
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
    body: {
        flex: 1,
        margin: 10,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },
    txt: {
        color: "#000",
        fontSize: 20,
    },
    txtLink: {
        color: "#fff",
        fontSize: 20,
    },
    touchBtn: {
        backgroundColor: '#007BFF',
    },
    animIcon: {
        width: 200,
        height: 200,
    },
});