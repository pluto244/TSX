import React from 'react';
import { observer } from 'mobx-react-lite';
import emailStore from '../../stores/EmailStore';

const EmailField: React.FC = observer(() => {
    
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
        <div>
            {emailStore.isEditing ? (
                <div>
                    <label>
                        E-mail:
                        <input
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
                    <div>E-mail: {emailStore.email}</div>
                    <button onClick={handleEditClick}>Редактировать</button>
                </div>
            )}
        </div>
    );
});

export default EmailField;
