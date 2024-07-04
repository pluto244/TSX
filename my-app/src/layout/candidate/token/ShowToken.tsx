// показывать email и маскировать код и полученный токен
import React from 'react'
import CodeTokenStore from '../../../stores/CodeTokenStore'

const ShowToken = () => {
    return (
        <div>
            <h2>Ваш сформированный токен</h2>
            <ul>
                <li>Email: {CodeTokenStore.email}</li>
                <li>Code: {CodeTokenStore.maskedCoin}</li>
                <li>Token: {CodeTokenStore.maskedToken}</li>
            </ul>
        </div>
    )
}

export default ShowToken