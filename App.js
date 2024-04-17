import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Form from "./src/components/form/index";
import Title from "./src/components/title/index";

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Form />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
  },
  Text: {
    color: "white",
  },
});
