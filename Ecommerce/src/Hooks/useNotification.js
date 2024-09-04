import { useContext } from "react"
import { NotificationContext } from "../Context/NotificationContext"

export const useNotification = () => {
    return useContext(NotificationContext)
}