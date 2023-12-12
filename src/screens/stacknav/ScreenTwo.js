import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions, TouchableOpacity, ScrollView, Linking } from 'react-native'
import React from 'react'


const { width, height } = Dimensions.get('window');

const ScreenTwo = ({ navigation, route }) => {
    const { img } = route?.params;


    return (
        <SafeAreaView style={styles.parent}>
            <TouchableOpacity style={styles.backArrow} onPress={() => navigation.goBack()}>
                <Text style={{ color: "#000", fontSize: 16, }}>Back</Text>
            </TouchableOpacity>

            <View style={styles.container}>
                <Text style={styles.textHeading}>Image Preview</Text>
                <View style={styles.spacer} />
                <Image
                    style={{ width: width - 20, height: height / 2 }}
                    source={{ uri: img?.uri }}
                    alt='Captured Image'
                    resizeMode='cover'
                />
                
                <View style={styles.spacer} />
                <View style={styles.spacer} />

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.paraBody}>
                        <Text style={styles.textPara}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum <Text onPress={()=>Linking.openURL("https://reactnative.dev/docs/image")} style={styles.txtLink}>...read more</Text>
                        </Text>
                    </View>
                </ScrollView>

                <View style={styles.spacer} />
            </View>
        </SafeAreaView>
    )
}

export default ScreenTwo;

const styles = StyleSheet.create({
    parent: {
        flex: 1,
    },
    container: {
        flex: 1,
        margin: 10,
        borderRadius: 10,
        backgroundColor: "#fff",
        elevation: 4,
    },
    spacer: {
        marginVertical: 5
    },
    textHeading: {
        color: "#000",
        fontSize: 20,
        width: width - 20,
        paddingHorizontal: 5,
        marginLeft: 10,
        marginTop: 10,
        fontWeight: "bold",
    },
    textPara: {
        color: "#0f0000",
        fontSize: 16,
        width: width - 20,
        textAlign: "justify",
        paddingHorizontal: 10,
        lineHeight: 24,
    },
    paraBody: {
        flex: 1,
    },
    backArrow: {
        marginLeft: 10,
        alignSelf: "flex-start",
        marginTop: 25,
        paddingHorizontal: 10,
        paddingVertical: 7,
        backgroundColor: "#cfecf7",
        borderRadius: 5
    },
    txtLink: {
        color: "#00f",
        borderWidth: 1,
    }
});