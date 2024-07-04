import React from 'react';
import { observer } from 'mobx-react';
import userFormStore from '../../../stores/UserFormStore';
import rolesStore from '../../../stores/RolesStore';
import emailStore from '../../../stores/EmailStore';

const SignUp: React.FC = observer(() => {
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
        userFormStore.submitForm();
    };

    return (
        <div>
            <label>
                <span>Фамилия</span>
                <input
                    name="lastName"
                    value={userFormStore.lastName}
                    onChange={handleLastNameChange}
                    disabled={userFormStore.isSubmitted}
                />
            </label>

            <label>
                <span>Имя</span>
                <input
                    name="firstName"
                    value={userFormStore.firstName}
                    onChange={handleFirstNameChange}
                    disabled={userFormStore.isSubmitted}
                />
            </label>

            <label>
                <span>Ваша роль</span>
                <select
                    name="roleSelector"
                    value={userFormStore.selectedRole}
                    onChange={handleRoleChange}
                    disabled={userFormStore.isSubmitted}
                >
                    <option value="">Select a role</option>
                    {rolesStore.roles.map((role) => (
                        <option key={role.id} value={role.name}>
                            {role.name}
                        </option>
                    ))}
                </select>
            </label>

            <div>
                <span>E-mail: {emailStore.email}</span>
            </div>

            <button
                onClick={handleSignInClick}
                disabled={userFormStore.isSubmitted || userFormStore.loading}
            >
                {userFormStore.loading ? "Подтверждаем запись" : "Отправить"}
            </button>

            {userFormStore.loading && <p>Получаем результат...</p>}
            {userFormStore.error && <p>{userFormStore.error}</p>}
            {userFormStore.responseMessage && <p>{userFormStore.responseMessage}</p>}
        </div>
    );
});

export default SignUp;
