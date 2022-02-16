import styled, { css } from "styled-components";

const COLORS = {
  primary: {
    "--main": "#171717",
    "--accent": "#EDEDED",
  },
  secondary: {
    "--main": "blue",
    "--accent": "indigo",
  },
};

// function Button({ variant = "fill", color = "primary", ...props }) {
//   let Component;
//   if (variant === "fill") {
//     Component = FillButton;
//   } else if (variant === "outline") {
//     Component = OutlineButton;
//   }

//   return <Component style={COLORS[color]} {...props} />;
// }

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;

const ButtonBase = styled.button`
  cursor: pointer;
  font-size: 1rem;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 8px 16px;
  text-decoration: none;
`;

const FillButton = styled(ButtonBase)`
  background-color: var(--main);
  color: var(--accent);

  &:hover {
    opacity: 0.9;
  }
`;

const OutlineButton = styled(ButtonBase)`
  background-color: white;
  color: var(--main);
  border: 2px solid var(--main);

  &:hover {
    background: hsl(235deg 85% 97%);
  }
`;

export default Button;
