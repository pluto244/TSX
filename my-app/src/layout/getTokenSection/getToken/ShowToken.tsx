// показывать email и маскировать код и полученный токен
import React from 'react'
import CodeTokenStore from '../../../stores/CodeTokenStore'
import { StyledH2 } from '../../../components/fonts/FontsStyles'

const ShowToken = () => {
    return (
        <div>
            <StyledH2>Ваш сформированный токен</StyledH2>
            <ul>
                <li>Email: {CodeTokenStore.email}</li>
                <li>Code: {CodeTokenStore.maskedCoin}</li>
                <li>Token: {CodeTokenStore.maskedToken}</li>
            </ul>
        </div>
    )
}

export default ShowToken