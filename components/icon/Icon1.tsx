import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const Icon1 = (props: SvgProps) => (
  <Svg width={26} height={22} fill="none" {...props}>
    <Path
      stroke="#000"
      strokeWidth={2}
      d="M3.91 1 13 10.524m0 0L23 21H3l10-10.476Zm0 0L22.09 1"
    />
  </Svg>
);

export default Icon1;
