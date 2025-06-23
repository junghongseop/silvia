import { SvgProps } from "react-native-svg";
import Icon1 from "../components/icon/Icon1";
import Icon2 from "../components/icon/Icon2";
import Icon3 from "../components/icon/Icon3";
import Icon4 from "../components/icon/Icon4";
import Icon5 from "../components/icon/Icon5";
import Icon6 from "../components/icon/Icon6";
import Icon7 from "../components/icon/Icon7";
import Icon8 from "../components/icon/Icon8";
import Icon9 from "../components/icon/Icon9";

/**
 * 숫자(1~9)와 해당 숫자에 대응하는 SVG 아이콘 컴포넌트를 매핑한 객체
 * - 숫자-기호 대치 검사에서 숫자 대신 기호를 사용하기 위해서 할당
 * - 각 아이콘 컴포넌트는 React.FC<SvgProps> 타입을 따름
 */
export const SYMBOL_MAP: Record<number, React.FC<SvgProps>> = {
  1: Icon1,
  2: Icon2,
  3: Icon3,
  4: Icon4,
  5: Icon5,
  6: Icon6,
  7: Icon7,
  8: Icon8,
  9: Icon9,
};
