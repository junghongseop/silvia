import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const Icon2 = (props: SvgProps) => (
  <Svg width="20" height="22" fill="none" {...props}>
    <Path
      d="M0 1H12.8571V11M0 21H12.8571V11M12.8571 11H20"
      stroke="black"
      stroke-width="2"
    />
  </Svg>
);

export default Icon2;
