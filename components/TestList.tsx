import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { SYMBOL_MAP } from "../constants/constant";

interface TestListProps {
  sequence: number[]; // 전체 문제 시스퀀스 (숫자 배열)
  currentIndex: number; // 현재 풀고 있는 문제의 인덱스
}

/**
 * TestList 컴포넌트
 * - 현재 문제 숫자를 중앙에 표시
 * - 이전에 풀었던 문제들(숫자 + 기호)을 왼쪽에 스택 형태로 나열
 */
const TestList = ({ sequence, currentIndex }: TestListProps) => {
  const currentNumber = sequence[currentIndex]; // 현재 문제 숫자

  return (
    <View style={styles.wrapper}>
      {/* 중앙에 현재 문제 숫자 표시 */}
      <View style={styles.centerBlock}>
        <View style={styles.cell}>
          <Text>⬇️</Text>
          {/* 현재 항목 표시 아이콘 */}
        </View>
        <View style={styles.cell}>
          <Text>{currentNumber}</Text>
        </View>
      </View>

      {/* 왼쪽에 이전 문제 내역 나열 (숫자 + 기호) */}
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
