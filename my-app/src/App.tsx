import React from "react";
import ApiCaller from "./components/apiCaller/ApiCaller";
import styled from "styled-components";
import EmailField from "./layout/emailSection/EmailField";
import EmailSection from "./layout/emailSection/EmailSection";
import RolesSection from "./layout/RolesSection";
import CandidateSection from "./layout/CandidateSection";

const App = () => {
    return (
        
        <AppContainer>
            <h1>Внести себя в специальные списки лагеря</h1>
            <EmailSection/>
            <RolesSection/>
            <CandidateSection/>
        </AppContainer>
    );
};


const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: center;
    flex-wrap: wrap;
    gap: 30px
`



export default App;
