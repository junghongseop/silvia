import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const Icon4 = (props: SvgProps) => (
  <Svg width="20" height="16" fill="none" {...props}>
    <Path
      d="M8.14634 1L2 8.25926M2 8.25926L7.70732 15M2 8.25926H20"
      stroke="black"
      stroke-width="2"
    />
  </Svg>
);

export default Icon4;
