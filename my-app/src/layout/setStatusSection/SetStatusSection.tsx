import React from 'react'
import SetStatusCandidate from './setStatusCandidate/SetStatusCandidate'
import { StyledSection } from '../../components/wrappers/Wrappers'
import { StyledH2 } from '../../components/fonts/FontsStyles'

export default function SetStatusSection() {
    return (
        <StyledSection>
            <StyledH2>Установите статус записи в таблицу кандидатов</StyledH2>
            <SetStatusCandidate />
        </StyledSection>

    )
}
