import React from 'react'
import RolesDisplay from '../roles/RolesDisplay'
import styled from 'styled-components'
import UserForm from '../candidate/singUp/UserForm'

export default function ApiCaller() {

    return (
        <FlexContainer>
            <RolesDisplay />
        </FlexContainer>
    )
}

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: center;
    flex-wrap: wrap;
    gap: 30px;
`