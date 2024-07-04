import React from 'react'
import SignUp from './signUp/SignUp'
import GetTokenCode from './token/GetTokenCode'
import ShowToken from './token/ShowToken'
import SetStatusCandidate from './token/SetStatusCandidate'

export default function CandidateSection() {
    return (
        <section>
            <h2>Запишитесь в таблицу кандидатов</h2>
            <SignUp />
            <GetTokenCode />




            <h2>Установите статус записи в таблицу кандидатов</h2>
            <SetStatusCandidate />
        </section>
    )
}
