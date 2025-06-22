import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { SYMBOL_MAP } from "../constants/constant";

const SymbolTable = () => {
  return (
    <SafeAreaView>
      <View style={styles.row}>
        {Object.entries(SYMBOL_MAP).map(([num, SymbolComponent]) => (
          <View key={num}>
            <View style={styles.cell}>
              <Text>{num}</Text>
            </View>
            <View style={styles.cell}>
              <SymbolComponent />
            </View>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default SymbolTable;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  cell: {
    width: 40,
    height: 40,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
