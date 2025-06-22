import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const Icon9 = (props: SvgProps) => (
  <Svg width="20" height="14" fill="none" {...props}>
    <Path
      d="M10 1C12.5814 1 14.876 1.7337 16.498 2.86914C18.1232 4.00678 19 5.48292 19 7C19 8.51708 18.1232 9.99322 16.498 11.1309C14.876 12.2663 12.5814 13 10 13C7.41859 13 5.12402 12.2663 3.50195 11.1309C1.87682 9.99322 1 8.51708 1 7C1 5.48292 1.87682 4.00678 3.50195 2.86914C5.12402 1.7337 7.41859 1 10 1Z"
      stroke="black"
      stroke-width="2"
    />
  </Svg>
);

export default Icon9;
