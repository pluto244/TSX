import React from 'react'
import { StyledSection } from '../../components/wrappers/Wrappers'
import SignUp from './signUp/SignUp'
import { StyledH2 } from '../../components/fonts/FontsStyles'

export default function SingUpSection() {
    return (
        <StyledSection>
            <StyledH2>Запишитесь в таблицу кандидатов</StyledH2>
            <SignUp />
        </StyledSection>
    )
}
