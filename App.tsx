import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Button } from "react-native";
import SymbolTable from "./components/SymbolTable";
import SymbolButton from "./components/SymbolButton";
import TestList from "./components/TestList";
import React from "react";
import { useGame } from "./hooks/useGame";

const App = () => {
  const { state, averageReactionTime, handleStart, handleSelect } = useGame();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>숫자-기호 대치 검사</Text>
      <Text style={styles.text}>정답 횟수: {state.score}회</Text>
      {state.isStarted ? (
        <>
          <Text style={styles.text}>
            현재 반응 시간: {(state.liveTime / 1000).toFixed(1)}초
          </Text>
          <SymbolTable />
          <TestList
            sequence={state.sequence}
            currentIndex={state.currentIndex}
          />
          <SymbolButton
            shuffledSymbols={state.shuffledSymbols}
            onSelect={handleSelect}
          />
        </>
      ) : (
        <>
          <Text style={styles.text}>
            평균 반응속도: {(averageReactionTime / 1000).toFixed(1)}초
          </Text>
          <Button
            title={state.hasFailed ? "다시 시작" : "게임 시작"}
            onPress={handleStart}
          />
        </>
      )}
      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 80,
    gap: 50,
  },
  text: {
    fontSize: 20,
  },
});
