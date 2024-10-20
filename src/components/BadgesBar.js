import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function BadgesBar() {
    return (
        <View style={style.container}>
            <View style={style.ExploreSubContainer}>
                <TouchableOpacity style={style.ExploreBtn}>
                    <Text style={style.Text}>Explorar</Text>
                </TouchableOpacity>
            </View>
            <View style={style.subContainer}>
                <TouchableOpacity style={style.BtnSelect}>
                    <Text style={style.Text}>Todos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.Btn}>
                    <Text style={style.Text}>Quindle Unlimited</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.Btn}>
                    <Text style={style.Text}>Prime Reading</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const style = StyleSheet.create(
    {
        container: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            backgroundColor: "#E0E8ED",
            paddingVertical: 10,
            paddingHorizontal: 20,
        },
        ExploreSubContainer: {
            alignItems: "center",
            justifyContent: "center",
            paddingRight: 10,
            borderRightWidth: 1,
            borderColor: "#595959",
        },
        ExploreBtn: {
            backgroundColor: "#E0E8ED",
            color: "#000",
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 2,
            borderWidth: 1,
            borderColor: "#D9A3A3",
        },
        ExploreBtnSelect: {
            backgroundColor: "#E0E8ED",
            color: "#000",
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 2,
            borderWidth: 1,
            borderColor: "#067373",
        },
        subContainer:{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            paddingLeft: 10,
        },
        Btn:{
            backgroundColor: "#E0E8ED",
            color: "#000",
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 100,
            borderWidth: 1,
            borderColor: "#000",
        },
        BtnSelect:{
            backgroundColor: "#E0E8ED",
            color: "#000",
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 100,
            borderWidth: 1,
            borderColor: "#067373",
        },
        Text:{
            color: "#000",
            fontWeight: "bold",
        },
    }
);