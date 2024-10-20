import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function BookBtn(comp) {
    return (
        <>
            <TouchableOpacity
            style={styles.container}
            onPress={() => alert(comp.title)}
            >
                <Image 
                    source={{uri: comp.cover}}
                    style={styles.img}
                />
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        width: 120,
        height: 200,
    },
    img:{
        width: 120,
        height: 200,
    },
});