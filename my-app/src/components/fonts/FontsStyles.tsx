import styled from "styled-components";
import { font } from "../../styles/Common";
import { theme } from "../../styles/Theme";

export const StyledH2 = styled.h2`
    padding: 4px 10px;
    ${font({ color: theme.colors.blue, weight: theme.fonts.h2.weight, Fmax: theme.fonts.h2.size })}
`

export const StyledResponse = styled.p`
    color: ${theme.colors.greenHover}
`

export const StyledErrorResponse = styled.p`
    color: ${theme.colors.pink}
`


export const StyledInvalidInput = styled.p`
    color: ${theme.colors.pink};
    font-size: 15px;
`