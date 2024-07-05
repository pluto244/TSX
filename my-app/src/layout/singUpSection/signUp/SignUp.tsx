import React from 'react';
import { observer } from 'mobx-react';
import userFormStore from '../../../stores/UserFormStore';
import rolesStore from '../../../stores/RolesStore';
import emailStore from '../../../stores/EmailStore';
import styled from 'styled-components';
import { StyledErrorResponse, StyledInvalidInput, StyledResponse } from '../../../components/fonts/FontsStyles';

const SignUp = observer(() => {
    const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        userFormStore.setLastName(event.target.value);
    };

    const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        userFormStore.setFirstName(event.target.value);
    };

    const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        userFormStore.setSelectedRole(event.target.value);
    };

    const handleSignInClick = () => {
        if (userFormStore.validateForm()) {
            userFormStore.submitForm();
        }
    };

    return (
        <StyledForm >
            <StyledLabel>
                <span>Фамилия</span>
                <StyledInput
                    name="lastName"
                    value={userFormStore.lastName}
                    onChange={handleLastNameChange}
                    disabled={userFormStore.isSubmitted}
                />
                {userFormStore.errors.lastName && <StyledInvalidInput>{userFormStore.errors.lastName}</StyledInvalidInput>}
            </StyledLabel>

            <StyledLabel>
                <span>Имя</span>
                <StyledInput
                    name="firstName"
                    value={userFormStore.firstName}
                    onChange={handleFirstNameChange}
                    disabled={userFormStore.isSubmitted}
                />
                {userFormStore.errors.firstName && <StyledInvalidInput>{userFormStore.errors.firstName}</StyledInvalidInput>}
            </StyledLabel>

            <StyledLabel>
                <span>Ваша роль</span>
                <StyledSelect
                    name="roleSelector"
                    value={userFormStore.selectedRole}
                    onChange={handleRoleChange}
                    disabled={userFormStore.isSubmitted}
                >
                    <option value="">Выберите направление</option>
                    {rolesStore.roles.map((role) => (
                        <option key={role.id} value={role.name}>
                            {role.name}
                        </option>
                    ))}
                </StyledSelect>
                {userFormStore.errors.selectedRole && <StyledInvalidInput>{userFormStore.errors.selectedRole}</StyledInvalidInput>}
            </StyledLabel>

            <div>
                <span>E-mail: {emailStore.email}</span>
            </div>

            <button
                onClick={handleSignInClick}
                disabled={userFormStore.isSubmitted || userFormStore.loading}
            >
                {userFormStore.loading ? "Подтверждаем запись" : "Отправить"}
            </button>

            {userFormStore.loading && <StyledResponse>Получаем результат...</StyledResponse>}
            {userFormStore.error && <StyledErrorResponse>{userFormStore.error}</StyledErrorResponse>}
            {userFormStore.responseMessage && <StyledResponse>{userFormStore.responseMessage}</StyledResponse>}
        </StyledForm>
    );
});

export default SignUp;

const StyledForm = styled.div`
    max-width: 350px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;

`
const StyledLabel = styled.label`
    width:100%;
`

const StyledInput = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 0px 0px 10px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`

const StyledSelect = styled.select`
    width: 100%;
    padding: 12px 20px;
    margin: 0px 0px 10px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`

