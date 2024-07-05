import React from 'react'
import { StyledSection } from '../../components/wrappers/Wrappers'
import GetTokenCode from './getToken/GetTokenCode'
import { StyledH2 } from '../../components/fonts/FontsStyles'

export default function GetTokenSection() {
    return (
        <StyledSection>
            <StyledH2>Получите свой код, сгенерированный при записи в таблицу кандидатов</StyledH2>
            <GetTokenCode />
        </StyledSection>
    )
}
