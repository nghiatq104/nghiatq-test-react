import { memo } from "react";
import styled, { css, keyframes } from "styled-components";

const barWidth = keyframes`
  0%   {width: 0%;}
  25%  {width: 50%;}
  50%  {width: 100%;}
  75%  {width: 50%;}
  100% {width: 0%;}
`;

const HorizontalBarWap = styled.div`
  ${(props) =>
    props.load &&
    css`
      height: 1px;
      width: 100%;
      .bar {
        position: relative;
        width: 0%;
        height: 100%;
        margin: 0 auto;
        animation: ${barWidth};
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        &.bar1 {
          animation-delay: 0s;
          background: #da2a1c;
          top: 0;
          z-index: 1;
        }
      }
    `}
`;
const LoadingHorizontal = memo(({ load }) => {
  return (
    <HorizontalBarWap load={load ? 1 : 0}>
      <div className="bar1 bar"></div>
    </HorizontalBarWap>
  );
});

export default LoadingHorizontal;
