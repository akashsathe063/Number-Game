import { Text, StyleSheet, Platform } from "react-native";
import Colors from "../../constants/Colors";

function Title(props) {
  return <Text style={styles.title}>{props.children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    // fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderColor: "white",
    //borderWidth: Platform.OS === "android" ? 2 : 0,
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
