import * as React from "react";
import { View, StyleSheet } from "react-native";
import { SearchBar, Icon } from "react-native-elements";

export default () => {
  const [value, setValue] = React.useState("");
  return (
    <View style={style.container}>
      <View style={style.notifyContainer}>
        <Icon
          color="#434343"
          containerStyle={{}}
          disabledStyle={{}}
          iconProps={{}}
          iconStyle={{}}
          name="notifications"
          onLongPress={() => console.log("onLongPress()")}
          onPress={() => console.log("onPress()")}
          size={40}
          type="material"
        />
      </View>
      <View style={style.searchBarContainer}>
        <SearchBar
          platform="default"
          containerStyle={{}}
          inputContainerStyle={{}}
          inputStyle={{}}
          leftIconContainerStyle={{}}
          rightIconContainerStyle={{}}
          lightTheme
          loadingProps={{}}
          onChangeText={newVal => setValue(newVal)}
          onClearText={() => console.log(onClearText())}
          placeholder="Pesquisar no Quindle"
          placeholderTextColor="#888"
          round
          cancelButtonTitle="Cancel"
          cancelButtonProps={{}}
          onCancel={() => console.log(onCancel())}
          value={value}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E0E8ED",
    paddingTop: 50,
    borderBottomWidth: 1,
    borderColor: "#595959",
  },
  notifyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  searchBarContainer: {
    flex: 6,
  },
});