import React from 'react'
import Roles from './Roles'
import { StyledSection } from '../../components/wrappers/Wrappers'
import { StyledH2 } from '../../components/fonts/FontsStyles'

export default function RolesSection() {
    return (
        <StyledSection>
            <StyledH2>Направления подготовки в лагере</StyledH2>
            <Roles/>
        </StyledSection>
    )
}
