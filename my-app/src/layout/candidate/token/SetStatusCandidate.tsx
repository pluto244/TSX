import React from 'react'
import { observer } from 'mobx-react';
import codeTokenStore from '../../../stores/CodeTokenStore';

const SetStatusCandidate = observer(() => {
    const handleSetStatus= () => {
        codeTokenStore.setStatus();
    }
    return (
        <div>
            <button disabled={codeTokenStore.setStatusLoaded || codeTokenStore.setStatusLoading} onClick={handleSetStatus}>
                {codeTokenStore.setStatusLoading ? "Устанавливаем статус..." : "Установить статус"}
            </button>
            
            {codeTokenStore.setStatusLoaded && (
                <>
                    <h3>Ваш статус:</h3>
                    <p>{codeTokenStore.statusRequest}</p>
                </>
            )}
        </div>
    )
});


export default SetStatusCandidate
