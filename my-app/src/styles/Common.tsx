import { theme } from './Theme';

type FontPropsType = {
    family?: string;
    weight?: number;
    color?: string;
    height?: number;
    Fmax: number
}

let variablePart = 0

const findRem = (Fmax: number) => {
    variablePart = (Fmax - Fmax/2) / (1220 - 360);

    return parseFloat(((Fmax - 1220 * variablePart) / 16).toFixed(3));
}

const findVw = () => {  
    const result = parseFloat((100 * variablePart).toFixed(2));
    return result;
}

export const font = ({family, weight, color, height, Fmax}: FontPropsType) =>
`
    font-family: ${family || "'Montserrat-Bold', sans-serif"}; 
    font-weight: ${weight || 400};
    color: ${color || theme.colors.mainFont}; 
    line-height: ${height || 1.2};
    font-size: calc((100vw - 360px)/(1220 - 360) *(${Fmax} - ${Fmax/2}) + ${Fmax/2}px);
    font-size: clamp(${Fmax/2}px, ${findRem(Fmax)}rem + ${findVw()}vw, ${Fmax}px);
`