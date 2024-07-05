import React from "react";
import { observer } from "mobx-react-lite";
import rolesStore from "../../stores/RolesStore";
import ShowRoles from "./showRoles/ShowRoles";
import { SectionWrapper } from "../../components/wrappers/Wrappers";
import { StyledResponse } from "../../components/fonts/FontsStyles";

const Roles = observer(() => {
    const handleFetchRoles = () => {
        rolesStore.fetchRoles();
    };

    return (
        <SectionWrapper>
            <button 
                onClick={handleFetchRoles} 
                disabled={rolesStore.loading}
            >
                {rolesStore.loading ? 'Ищем...' : 'Загрузить все направления'}
            </button>
            {rolesStore.loading && <StyledResponse>Загружаем роли...</StyledResponse>}
            {rolesStore.error && <StyledResponse>Ошибка: {rolesStore.error}</StyledResponse>}
            {rolesStore.roles.length === 0 && !rolesStore.loading && !rolesStore.error && (
                <StyledResponse>Загрузите роли</StyledResponse>
            )}

            {rolesStore.roles.length > 0 && (
                <ShowRoles />
            )}
            
        </SectionWrapper>
    );
});

export default Roles;
