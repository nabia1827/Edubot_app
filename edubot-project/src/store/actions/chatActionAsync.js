import api from "../../services/api";
import { cargarMensajes, agregarMensajeUser, agregarMensajesBot } from "./chatActionSync";
import { transformData } from "../../utils/demoUtils/demoUtils";


export const getBotResponse = (userMessage) => async (dispatch) => {
    try {
        const body = {
            message: userMessage,
        }
        const resp = await api.bot.sendMesage(body);

        console.log("API respuesta:", resp)

        if (resp !== null) {
            const mensajes = transformData(resp,'bot')
            dispatch(agregarMensajesBot(mensajes));
        }


    } catch (error) {
    }
};