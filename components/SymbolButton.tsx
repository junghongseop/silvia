import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import { SvgProps } from "react-native-svg";

interface Props {
  shuffledSymbols: [string, React.FC<SvgProps>][];
  onSelect: (num: number) => void;
}

const SymbolButton = ({ onSelect, shuffledSymbols }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        {shuffledSymbols.map(([num, SymbolComponent]) => (
          <TouchableOpacity
            style={styles.button}
            key={num}
            onPress={() => onSelect(Number(num))}
          >
            <SymbolComponent />
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
