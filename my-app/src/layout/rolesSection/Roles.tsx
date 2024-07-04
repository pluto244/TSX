import React from "react";
import { observer } from "mobx-react-lite";
import rolesStore from "../../stores/RolesStore";
import ShowRoles from "./showRoles/ShowRoles";

const Roles = observer(() => {
    const handleFetchRoles = () => {
        rolesStore.fetchRoles();
    };

    return (
        <div>
            <button 
                onClick={handleFetchRoles} 
                disabled={rolesStore.loading}
            >
                {rolesStore.loading ? 'Ищем...' : 'Загрузить все направления'}
            </button>
            {rolesStore.loading && <p>Загружаем роли...</p>}
            {rolesStore.error && <p>Ошибка: {rolesStore.error}</p>}
            {rolesStore.roles.length === 0 && !rolesStore.loading && !rolesStore.error && (
                <p>Загрузите роли</p>
            )}

            {rolesStore.roles.length > 0 && (
                <ShowRoles />
            )}
            
        </div>
    );
});

export default Roles;
