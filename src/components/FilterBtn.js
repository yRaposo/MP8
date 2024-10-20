import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function FilterBtn(Comp) {
    return (
        <>
            <TouchableOpacity style={style.container}>
                <Text style={style.Text}>{Comp.filter}</Text>
            </TouchableOpacity>
        </>
    );
}

const style = StyleSheet.create({
    container: {

        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderRadius: 100,
        height: 60,
        minWidth: 100,
        maxWidth: 160,
        paddingHorizontal: 30,
        borderWidth: 1,
        borderColor: "#0476D9",
    },
    containerSelect: {

        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "#0476D9",
        borderRadius: 100,
        height: 60,
        minWidth: 100,
        maxWidth: 150,
        paddingHorizontal: 30,
        borderWidth: 1,
        borderColor: "#0476D9",
    },
    Text: {
        color: "#0476D9",
        fontSize: 15,
        fontWeight: "500",
        textAlign: "center",
    },
    TextSelect: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "500",
        textAlign: "center",
    },
});