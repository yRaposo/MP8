export const getBooks = async () => {
    try {
        const response = await fetch("https://api.rawg.io/api/games?key=91a9c4ccc4104305b87494386582ae51&page_size=5");
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.log(error);
        return [];
    }
}