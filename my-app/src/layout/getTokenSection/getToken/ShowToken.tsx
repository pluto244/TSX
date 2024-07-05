// показывать email и маскировать код и полученный токен
import React from 'react'
import CodeTokenStore from '../../../stores/CodeTokenStore'
import { StyledH2 } from '../../../components/fonts/FontsStyles'
import emailStore from '../../../stores/EmailStore'
import styled from 'styled-components'
import { theme } from '../../../styles/Theme'

const ShowToken = () => {
    return (
        <div>
            <StyledH3>Ваш сформированный токен</StyledH3>
            <ul>
                <li>Email: {emailStore.getEmail()}</li>
                <li>Code: {CodeTokenStore.maskedCoin}</li>
                <li>Token: {CodeTokenStore.maskedToken}</li>
            </ul>
        </div>
    )
}

export default ShowToken

const StyledH3 = styled.h3`
    color: ${theme.colors.green}
`