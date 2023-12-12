import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Dimensions, TouchableHighlight, TouchableOpacity, Alert, PermissionsAndroid, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { addEventListener, useNetInfo } from '@react-native-community/netinfo'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const { height, width } = Dimensions.get("window");

const ScreenOne = ({ navigation }) => {
    const [deviceData, setDeviceData] = useState({
        battery: "",
        carier: "",
        api: "",
        id: "",
        device_id: "",
        device_name: "",
        model_name: "",
        ip: "",
        phone: "",
    });

    const { type, isConnected, isInternetReachable } = useNetInfo();

    // const internetId = addEventListener(state => {
    // console.log("type==>", type);
    // console.log("connection==>", isConnected);
    // console.log("reachable==>", isInternetReachable);
    // });

    const batteryIndicator = async () => {
        const res = await DeviceInfo.getPowerState();
        setDeviceData({ ...deviceData, battery: res });
    }

    const getCarierInfo = async () => {
        const res = await DeviceInfo.getCarrier();
        setDeviceData({ ...deviceData, carier: res });
    }

    const getAndroidInfo = async () => {
        const res = await DeviceInfo.getApiLevel();
        setDeviceData({ ...deviceData, api: res });
    }

    const getAndroidId = async () => {
        const res = await DeviceInfo.getAndroidId();
        setDeviceData({ ...deviceData, id: res });
    }

    const getDevicedId = () => {
        const res = DeviceInfo.getDeviceId();
        setDeviceData({ ...deviceData, device_id: res });
    }

    const getDeviceName = async () => {
        const res = await DeviceInfo.getDeviceName();
        setDeviceData({ ...deviceData, device_name: res });
    }

    const getModelName = async () => {
        const res = await DeviceInfo.getDevice();
        setDeviceData({ ...deviceData, model_name: res });
    }

    const getIpAddress = async () => {
        const res = await DeviceInfo.getIpAddress();
        setDeviceData({ ...deviceData, ip: res });
    }

    const getPhoneNumber = async () => {
        const res = await DeviceInfo.getPhoneNumber();
        setDeviceData({ ...deviceData, phone: res });
    }

    const getCameraPermission = async () => {
        const cam = await PermissionsAndroid.check("android.permission.CAMERA");
        // const mediaStorage = await PermissionsAndroid.check("android.permission.READ_MEDIA_IMAGES");
        if (!cam) await PermissionsAndroid.request("android.permission.CAMERA");
        // if(PermissionsAndroid.RESULTS.GRANTED === granted){
        const result = await launchCamera({ saveToPhotos: true });
        if (result?.assets?.length) navigation.navigate('scrtwo', { img: result?.assets[0] })
        // console.log(result?.assets[0]);
        // }
        // if(!mediaStorage) await PermissionsAndroid.request("android.permission.CAMERA");
    }

    useEffect(() => {
        const getPhonePermission = async () => {
            if (Platform.Version >= 30) {
                const res = await PermissionsAndroid.check("android.permission.READ_PHONE_NUMBERS");
                if (!res) await PermissionsAndroid.request("android.permission.READ_PHONE_NUMBERS");
            } else {
                const res = await PermissionsAndroid.check("android.permission.READ_PHONE_STATE");
                if (!res) await PermissionsAndroid.request("android.permission.READ_PHONE_STATE");
            }
        };

        getPhonePermission();

        // internetId();
    }, []);

    useEffect(() => {
        if (isConnected === false) Alert.alert("Turn on Internet.")
        if (isInternetReachable === false) Alert.alert("Internet is not Connected.")
    }, [isConnected, isInternetReachable]);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.backArrow} onPress={() => navigation.goBack()}>
                    <Text style={{ color: "#000", fontSize: 16, }}>Back</Text>
                </TouchableOpacity>

                <View style={styles.boxTop}>
                    <View style={{ paddingLeft: 10, marginVertical: 10 }}>
                        <Text style={{ color: "#000", fontSize: 22, fontWeight: "bold" }}>Device Information</Text>
                    </View>

                    <Text style={styles.textRow}>
                        Battery : {deviceData?.battery?.batteryLevel && deviceData?.battery?.batteryLevel * 100 + "%"} {deviceData?.battery?.batteryState}
                    </Text>
                    <Text style={styles.textRow}>
                        Android Version : {deviceData?.api && deviceData?.api - 20}
                    </Text>
                    <Text style={styles.textRow}>Android ID : {deviceData?.id}</Text>
                    <Text style={styles.textRow}>Carier : {deviceData?.carier}</Text>
                    <Text style={styles.textRow}>Device ID : {deviceData?.device_id}</Text>
                    <Text style={styles.textRow}>Device Name : {deviceData?.device_name}</Text>
                    <Text style={styles.textRow}>Model Name : {deviceData?.model_name}</Text>
                    <Text style={styles.textRow}>IP Address : {deviceData?.ip}</Text>
                    <Text style={styles.textRow}>Phone : {deviceData?.phone}</Text>
                </View>

                <View style={styles.boxBottom}>
                    <View style={styles.row}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => batteryIndicator()}
                        >
                            <Text style={{ color: "#fff", fontSize: 20 }}>Battery</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={() => getCarierInfo()}>
                            <Text style={{ color: "#fff", fontSize: 20 }}>Carier</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.row}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => getAndroidInfo()}
                        >
                            <Text style={{ color: "#fff", fontSize: 20 }}>API</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={() => getAndroidId()}>
                            <Text style={{ color: "#fff", fontSize: 20 }}>ID</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.row}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => getDevicedId()}
                        >
                            <Text style={{ color: "#fff", fontSize: 20 }}>Device ID</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={() => getDeviceName()}>
                            <Text style={{ color: "#fff", fontSize: 20 }}>Device Name</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.row}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => getIpAddress()}
                        >
                            <Text style={{ color: "#fff", fontSize: 20 }}>IP Address</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={() => getModelName()}>
                            <Text style={{ color: "#fff", fontSize: 20 }}>Model Name</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.spacer} />

                    <TouchableOpacity
                        style={styles.buttonLarge}
                        onPress={() => getPhoneNumber()}
                    >
                        <Text style={{ color: "#fff", fontSize: 20 }}>Phone</Text>
                    </TouchableOpacity>

                    <View style={styles.spacer} />

                    <TouchableOpacity
                        style={styles.buttonLarge}
                        onPress={() => getCameraPermission()}
                    >
                        <Text style={{ color: "#fff", fontSize: 20 }}>Camera</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ScreenOne;

const styles = StyleSheet.create({
    boxTop: {
        margin: 5,
        flex: 1.5,
        elevation: 3,
        padding: 10,
        borderRadius: 5,
    },
    boxBottom: {
        margin: 5,
        flex: 1,
        elevation: 3,
        padding: 10,
        borderRadius: 5,
        justifyContent: "center"
    },
    button: {
        backgroundColor: "#62C1E5",
        paddingVertical: 7,
        paddingHorizontal: 10,
        alignItems: "center",
        justifyContent: "center",
        width: width / 2.3,
        borderRadius: 5
    },
    buttonLarge: {
        backgroundColor: "#62C1E5",
        paddingVertical: 7,
        paddingHorizontal: 10,
        alignItems: "center",
        justifyContent: "center",
        // width: width / 2.3,
        borderRadius: 5
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 6,
    },
    textRow: {
        color: "#000",
        fontSize: 20,
        backgroundColor: "#cfecf7",
        paddingVertical: 5,
        marginTop: 5,
        paddingLeft: 10,
        marginHorizontal: 10
    },
    spacer: {
        marginTop: 5
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