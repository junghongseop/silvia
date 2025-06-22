import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const Icon3 = (props: SvgProps) => (
  <Svg width="20" height="20" {...props} fill="none">
    <Path d="M1 1L21 21" stroke="black" stroke-width="2" />
  </Svg>
);

export default Icon3;
