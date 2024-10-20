import React from "react";
import { View, Text, Button, SafeAreaView, StyleSheet, ScrollView, TouchableHighlight, TouchableOpacity } from "react-native";
import NavBar from "../components/NavBar";
import BadgerBar from "../components/BadgesBar";
import FilterBar from "../components/FilterBar";
import BookBtn from "../components/BookBtn";
import BookBar from "../components/BookBar";

export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={style.Container}>
            <View>
                <NavBar />
                <BadgerBar />
            </View>
            <ScrollView>
                <View>
                <View style={style.LandingContainer}>
                    <Text style={style.LandingTitle}>Bem Vindo(a) ao Quindle!</Text>
                    <Text style={style.LandingText}>Descubra uma nova gameplay tocando em uma categoria ou capa</Text>
                </View>
                <View>
                    <FilterBar />
                </View>
                <View>
                    <BookBar />
                    <TouchableOpacity style={style.btnContainer}>
                        <Text>Ver mais</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <BookBar />
                    <TouchableOpacity style={style.btnContainer}>
                        <Text>Ver mais</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    Container: {
        flexGrow: 1,
    },
    LandingContainer: {
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#fff",
        paddingTop: 60,
        paddingBottom: 40,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
    },
    LandingTitle: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 15,
    },
    LandingText: {
        textAlign: "center",
        justifyContent: "center",
        fontSize: 20,
        fontWeight: "400",
        paddingHorizontal: 30,
    },
    btnContainer: {
        alignItems: "flex-start",
        justifyContent: "flex-start",
        backgroundColor: "#E0E8ED",
        padding: 10,
        marginHorizontal: 10,
        marginBottom: 20,
    },

});