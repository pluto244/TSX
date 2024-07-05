import React from 'react'
import { observer } from 'mobx-react';
import codeTokenStore from '../../../stores/CodeTokenStore';
import { SectionWrapper } from '../../../components/wrappers/Wrappers';
import { StyledResponse } from '../../../components/fonts/FontsStyles';

const SetStatusCandidate = observer(() => {
    const handleSetStatus= () => {
        codeTokenStore.setStatus();
    }
    return (
        <SectionWrapper>
            <button disabled={codeTokenStore.setStatusLoaded || codeTokenStore.setStatusLoading} onClick={handleSetStatus}>
                {codeTokenStore.setStatusLoading ? "Устанавливаем статус..." : "Установить статус"}
            </button>
            
            {codeTokenStore.setStatusLoaded && (
                <>
                    <h3>Ваш статус:</h3>
                    <StyledResponse>{codeTokenStore.statusRequest}</StyledResponse>
                </>
            )}
        </SectionWrapper>
    )
});


export default SetStatusCandidate
