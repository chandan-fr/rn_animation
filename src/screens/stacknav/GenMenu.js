import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const GenMenu = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.parent}>
            <View style={styles.body}>

                {/* Row 1 */}
                <View style={styles.row}>
                    <View style={styles.buttonBox}>
                        <TouchableOpacity onPress={() => navigation.navigate("scrone")}>
                            <Image source={require("../../assets/images/deviceinfo.png")} style={styles.img} />
                            <Text style={styles.btnTextHeading}>Device Info</Text>
                            <Text style={styles.btnTextPara}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonBox}>
                        <TouchableOpacity onPress={() => navigation.navigate("tut1")}>
                            <Image source={require("../../assets/images/gesture.jpg")} style={styles.img} />
                            <Text style={styles.btnTextHeading}>Gesture</Text>

                            <Text style={styles.btnTextPara}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Row 2 */}
                <View style={styles.row}>
                    <View style={styles.buttonBox}>
                        <TouchableOpacity onPress={() => navigation.navigate("tut2")}>
                            <Image source={require("../../assets/images/tutorial.jpg")} resizeMode='contain' style={styles.img} />
                            <Text style={styles.btnTextHeading}>Bouncy</Text>
                            <Text style={styles.btnTextPara}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.buttonBox, ]}>
                        <TouchableOpacity onPress={() => navigation.navigate("genpass")}>
                            <Image source={require("../../assets/images/passgen.jpg")} resizeMode='contain' style={styles.img} />
                            <Text style={styles.btnTextHeading}>Password Generator</Text>

                            <Text style={styles.btnTextPara}>Lorem Ipsum is simply dummy text of the.</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default GenMenu;

const styles = StyleSheet.create({
    parent: {
        flex: 1,
    },
    body: {
        flex: 1,
        justifyContent: "center",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: 40,
        marginBottom: 10,
        borderWidth: 0,
    },
    buttonBox: {
        backgroundColor: "#fff",
        elevation: 4,
        borderRadius: 10,
    },
    btnTextHeading: {
        color: "#000",
        fontSize: 20,
        width: 150,
        textAlign: "justify",
        paddingHorizontal: 5,
        marginBottom: 6,
        marginTop: 10,
        fontWeight: "bold",
    },
    btnTextPara: {
        color: "#0f0000",
        fontSize: 14,
        width: 150,
        textAlign: "justify",
        paddingHorizontal: 5,
        marginBottom: 5,
    },
    img: {
        width: 150,
        height: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
});