import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

import { getBooks } from "../data/api";
import BookBtn from "./BookBtn";

export default function BookBar() {

    const [books, setBooks] = React.useState([]);

    React.useEffect(() => {
        const fetchBooks = async () => {
            const books = await getBooks();
            setBooks(books);
        }
        fetchBooks();
    }, []);

    console.log(books);

    return (
        <>
            <ScrollView horizontal={true}>
                <View style={style.container}>
                    {books.map((book) => (
                        <BookBtn key={book.id} cover={book.background_image} title={book.name} />
                    ))}
                </View>
            </ScrollView>
        </>
    );
}

const style = StyleSheet.create({
    container:{
        marginTop: 20,
        marginHorizontal: 20,
        marginBottom: 10,
        flexDirection: "row",
        gap: 10,

    },
});