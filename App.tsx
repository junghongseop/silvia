import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Button } from "react-native";
import SymbolTable from "./components/SymbolTable";
import SymbolButton from "./components/SymbolButton";
import TestList from "./components/TestList";
import React from "react";
import { useGame } from "./hooks/useGame";

const App = () => {
  // 테스트 상태 및 핸들러를 커스텀 훅으로부터 가져옴
  const { state, averageReactionTime, handleStart, handleSelect } = useGame();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>숫자-기호 대치 검사</Text>
      <Text style={styles.text}>정답 횟수: {state.score}회</Text>
      {state.isStarted ? (
        // 테스트가 진행 중일때의 UI
        <>
          {/* 실시간 반응 시간 표시 */}
          <Text style={styles.text}>
            현재 반응 시간: {(state.liveTime / 1000).toFixed(1)}초
          </Text>

          {/* 숫자-기호 대응 테이블 */}
          <SymbolTable />

          {/* 현재 문제 시퀀스 출력 */}
          <TestList
            sequence={state.sequence}
            currentIndex={state.currentIndex}
          />

          {/* 선택 가능한 기호 버튼 목록 */}
          <SymbolButton
            shuffledSymbols={state.shuffledSymbols}
            onSelect={handleSelect}
          />
        </>
      ) : (
        // 테스트가 시작되지 않았을 때 (또는 실패 후)의 UI
        <>
          {/* 평균 반응 시간 출력 */}
          <Text style={styles.text}>
            평균 반응속도: {(averageReactionTime / 1000).toFixed(1)}초
          </Text>

          {/* 시작/재시작 버튼 */}
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
