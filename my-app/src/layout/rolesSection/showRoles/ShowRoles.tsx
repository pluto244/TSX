import React from 'react'
import rolesStore from '../../../stores/RolesStore'
import { observer } from 'mobx-react'



const ShowRoles = () => {
    return (
        <ul>
            {rolesStore.roles.map((role) => (
                <li key={role.id}>{role.name}</li>
            ))}
        </ul> 
    )
}

export default observer(ShowRoles)