import { StyledContainer } from "./styles";
import { ContainerProps } from "../types";

import styled from "styled-components";



const Container = ({ border, children }: ContainerProps) => (
  <StyledContainer border={border}>{children}</StyledContainer>
);

export default Container;
