import React from "react";
import styled from "styled-components";
import EmailSection from "./layout/emailSection/EmailSection";
import RolesSection from "./layout/rolesSection/RolesSection";
import CandidateSection from "./layout/setStatusSection/SetStatusSection";
import { theme } from "./styles/Theme";
import { font } from "./styles/Common";
import SingUpSection from "./layout/singUpSection/SingUpSection";
import GetTokenSection from "./layout/getTokenSection/GetTokenSection";

const App = () => {
    return (
        
        <AppContainer>
            <Title>Внести себя в специальные списки лагеря</Title>

            <EmailSection/>
            <RolesSection/>
            <SingUpSection/>
            <GetTokenSection/>
            <CandidateSection/>
        </AppContainer>
    );
};


const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    gap: 30px;
    margin-bottom: 30px;
`

const Title = styled.h1`
    ${font({ color: theme.colors.blue, weight: theme.fonts.h1.weight, Fmax: theme.fonts.h1.size })}
`


export default App;
