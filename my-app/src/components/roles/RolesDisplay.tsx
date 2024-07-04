import React, { useEffect } from "react";
import { observer } from "mobx-react";
import rolesStore from "../../stores/RolesStore";

const RolesDisplay = () => {
    useEffect(() => {
        rolesStore.loadFromLocalStorage();
    }, []);

    const handleFetchRoles = () => {
        rolesStore.fetchRoles();
    };

    return (
        <div>
            <button 
                onClick={handleFetchRoles} 
                disabled={rolesStore.loading}
            >
                {rolesStore.loading ? 'Fetching...' : 'Fetch Roles'}
            </button>
            {rolesStore.loading && <p>Загружаем роли...</p>}
            {rolesStore.error && <p>Ошибка: {rolesStore.error}</p>}
            {rolesStore.roles.length === 0 && !rolesStore.loading && !rolesStore.error && (
                <p>Загрузите роли</p>
            )}
            {rolesStore.roles.length > 0 && (
                <ul>
                    {rolesStore.roles.map((role) => (
                        <li key={role.id}>{role.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default observer(RolesDisplay);
