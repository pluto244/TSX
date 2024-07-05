import React from 'react';
import { observer } from 'mobx-react-lite';
import codeTokenStore from '../../../stores/CodeTokenStore';
import ShowToken from './ShowToken';
import { SectionWrapper } from '../../../components/wrappers/Wrappers';

const GetTokenCode = observer(() => {
    const handleFetchCoin = () => {
        codeTokenStore.getToken();
    };

    return (
            <SectionWrapper>
                <button disabled={codeTokenStore.getTokenLoaded || codeTokenStore.getTokenLoading} onClick={handleFetchCoin}>
                    {codeTokenStore.getTokenLoading ? "В поисках ответа..." : "Запросить код"}
                </button>

                {codeTokenStore.getTokenLoaded && (
                    <>
                        <h3>Запрошенный код:</h3>
                        <p>{codeTokenStore.maskedCoin}</p>
                        <ShowToken />

                    </>
                )}
            </SectionWrapper>
    );
});

export default GetTokenCode;
