import React from 'react'
import { Message } from 'semantic-ui-react'

const
    Notification = ( { type, header, content } ) => {
    
        const
            isInfo = type.toUpperCase() === 'INFO' ? true : false,
            icon = isInfo ? 'info circle' : 'warning circle',
            color = isInfo ? 'blue' : 'red';

        return (
            <Message color={ color }
                     icon={ icon }
                     header={ header}
                     content={ content } />
        )
    }

export default Notification