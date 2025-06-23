import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import { SvgProps } from "react-native-svg";

interface Props {
  shuffledSymbols: [string, React.FC<SvgProps>][]; // [숫자 문자열, 아이콘 컴포넌트] 쌍 배열
  onSelect: (num: number) => void; // 선택된 숫자를 상위 컴포넌트에 전달되는 콜백
}

/**
 * SymbolButton 컴포넌트
 * - 주어진 숫자-기호 쌍을 버튼으로 렌더링
 * - 사용자가 버튼을 누르면 해당 숫자를 onSelect 콜백으로 전달
 */
const SymbolButton = ({ onSelect, shuffledSymbols }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        {shuffledSymbols.map(([num, SymbolComponent]) => (
          <TouchableOpacity
            style={styles.button}
            key={num}
            onPress={() => onSelect(Number(num))} // 숫자 문자열을 number로 변환 후 전달
          >
            <SymbolComponent />
            {/* SVG 아이콘 표시 */}
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default SymbolButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    gap: 5,
  },
  button: {
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
  },
});
