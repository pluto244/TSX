import React from 'react';
import { observer } from 'mobx-react-lite';
import codeTokenStore from '../../../stores/CodeTokenStore';
import ShowToken from './ShowToken';

const GetTokenCode = observer(() => {
    const handleFetchCoin = () => {
        codeTokenStore.getToken();
    };

    return (
        <div>
            <h2>Получите свой код, сгенерированный при записи в таблицу кандидатов</h2>

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

        </div>
    );
});

export default GetTokenCode;
