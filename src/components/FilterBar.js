import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import FilterBtn from "./FilterBtn";

export default function FilterBar() {
    return (
        <ScrollView horizontal={true}>
            <View style={style.FilterBar}>
                <FilterBtn filter={'LIVROS MAIS VENDIDOS'} />
                <FilterBtn filter={'NOVOS LANÇAMENTOS'} />
                <FilterBtn filter={'LITERATURA E FICÇÃO'} />
                <FilterBtn filter={'ROMANCE'} />
                <FilterBtn filter={'MISTÉRIO E SUSPENSE'} />
            </View>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    FilterBar: {
        flexDirection: "row",
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingHorizontal: 20,
        gap: 10,

    },
});