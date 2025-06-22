import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { SYMBOL_MAP } from "../constants/constant";

interface TestListProps {
  sequence: number[];
  currentIndex: number;
}

const TestList = ({ sequence, currentIndex }: TestListProps) => {
  const currentNumber = sequence[currentIndex];

  return (
    <View style={styles.wrapper}>
      <View style={styles.centerBlock}>
        <View style={styles.cell}>
          <Text>⬇️</Text>
        </View>
        <View style={styles.cell}>
          <Text>{currentNumber}</Text>
        </View>
      </View>
      <View style={styles.leftStack}>
        {sequence.slice(0, currentIndex).map((num, idx) => {
          const SymbolComponent = SYMBOL_MAP[num];
          return (
            <View key={`${num}-${idx}`}>
              <View style={styles.cell}>
                <Text>{num}</Text>
              </View>
              <View key={idx} style={styles.cell}>
                <SymbolComponent />
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default TestList;

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  centerBlock: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: [{ translateX: -20 }],
    alignItems: "center",
    zIndex: 10,
  },
  leftStack: {
    flexDirection: "row",
    position: "absolute",
    top: 0,
    right: "50%",
    transform: [{ translateX: -40 }],
  },
  cell: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
});
