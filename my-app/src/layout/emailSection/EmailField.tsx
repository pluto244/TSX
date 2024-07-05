import React from 'react';
import { observer } from 'mobx-react-lite';
import emailStore from '../../stores/EmailStore';
import { SectionWrapper } from '../../components/wrappers/Wrappers';
import styled from 'styled-components';

const EmailField = observer(() => {
    
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        emailStore.setEmail(event.target.value);
    };

    const handleSaveEmailClick = () => {
        emailStore.saveToLocalStorage();
    };

    const handleEditClick = () => {
        emailStore.toggleEditing();
    };


    return (
        <SectionWrapper>
            {emailStore.isEditing ? (
                <div>
                    <label>
                        E-mail:
                        <StyledEmailInput
                            name="email"
                            value={emailStore.email}
                            onChange={handleEmailChange}
                        />
                    </label>
                    {emailStore.showError && (
                        <div style={{ color: 'red' }}>Неверный формат email</div>
                    )}
                    <div>
                        <button onClick={handleSaveEmailClick}>Подтвердить</button>
                    </div>
                </div>
            ) : (
                <div>
                    <div>
                        <span>E-mail: {emailStore.email}</span>
                        </div>
                    <button onClick={handleEditClick}>Редактировать</button>
                </div>
            )}
        </SectionWrapper>
    );
});

export default EmailField;


const StyledEmailInput = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 0px 0px 10px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`