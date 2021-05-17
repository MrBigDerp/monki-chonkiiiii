import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Header } from "react-native-elements";
import db from "./db";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      displayText: "",
      chunks: [],
    };
  }
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header
            backgroundColor={"#9C8210"}
            centerComponent={{
              text: "MONKI-CHONKI",
              style: { color: "#FFF", fontSize: 20 },
            }}
          />
          <TextInput
            style={styles.inputBox}
            onChangeText={(text) => {
              this.setState({
                text: text,
              });
            }}
          />
          <TouchableOpacity
            style={styles.goButton}
            onPress={() => {
              this.setState({
                displayText: this.state.text,
                chunks: db[this.state.text].chunks,
              });
            }}
            styles={styles.goButton}
          >
            <Text styles={styles.buttonText}>GO</Text>
          </TouchableOpacity>
          <Text style={styles.displayText}>{this.state.displayText}</Text>
          <View>
            {this.state.chunks.map((item) => {
              return (
                <TouchableOpacity style={styles.chunkButton}>
                  <Text style={styles.displayText}>{item}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <Text></Text>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#b8b8b8" },
  inputBox: {
    marginTop: 200,
    width: "80%",
    alignSelf: "center",
    height: 40,
    textAlign: "center",
    borderWidth: 4,
    outline: "none",
  },
  goButton: {
    backgroundColor: "#9C8210",
    width: "50%",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    fontStyle: "italic",
    height: 55,
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "center",
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  displayText: { textAlign: "center", fontSize: 30 },
  chunkButton: {
    width: "60%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
    margin: 5,
    backgroundColor: "red",
  },
});
