import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { SYMBOL_MAP } from "../constants/constant";

/**
 * SymbolTable 컴포넌트
 * - 숫자(1~9)와 해당 숫자에 대응되는 SVG 기호를 표 형식으로 표시
 * - 사용자는 이 테이블을 참고해 문제를 풀게 됨
 */
const SymbolTable = () => {
  return (
    <SafeAreaView>
      <View style={styles.row}>
        {Object.entries(SYMBOL_MAP).map(([num, SymbolComponent]) => (
          <View key={num}>
            {/* 숫자 표시 셀 */}
            <View style={styles.cell}>
              <Text>{num}</Text>
            </View>

            {/* 대응되는 기호 표시 셀 */}
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
