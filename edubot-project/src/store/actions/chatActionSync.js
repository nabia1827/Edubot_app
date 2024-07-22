import { types } from "../types";

export const cargarMensajes = data => ({
    type: types.setMessageList,
    payload: data,
});

export const agregarMensajeUser = data => ({
    type: types.addUserMessage,
    payload: data,
});

export const agregarMensajesBot = data => ({
    type: types.addBotMessages,
    payload: data,
});