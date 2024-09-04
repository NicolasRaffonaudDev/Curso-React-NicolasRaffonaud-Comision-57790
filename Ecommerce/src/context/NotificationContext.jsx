import { createContext, useState } from "react";


export const NotificationContext = createContext

export const NotificationProvider = ({children}) => {
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('succes')

    const setNotification = (sev, msg) => {
        setMessage(msg)
        setSeverity(sev)
        setTimeout(()=>{
            setMessage('')
        }, 3000)
    }

    return (
        <NotificationContext.Provider value={{ setNotification }}>
            <Notification message={message} severity={severity}/>
            {children}
        </NotificationContext.Provider>
    );

}

const Notification = ({message, severity}) => {
    const background = {
        success: 'green',
        warning: 'orange',
        default: 'blue',
        danger: 'red',
    }

    const notificationStyles = {
        position: 'absolute',
        top: '100',
        right: '30',
        backgroundColor: background[severity] || background.default,
        color: 'white'
    };

    if(message === '') return
    return (
        <div style={notificationStyles}>
            {message}
        </div>
    )
}