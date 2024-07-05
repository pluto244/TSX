import React from 'react'
import EmailField from './EmailField'
import { StyledSection } from '../../components/wrappers/Wrappers'
import { StyledH2 } from '../../components/fonts/FontsStyles'

export default function EmailSection() {
    return (
        <StyledSection>
            <StyledH2>Email</StyledH2>
            <EmailField />
        </StyledSection>
    )
}
