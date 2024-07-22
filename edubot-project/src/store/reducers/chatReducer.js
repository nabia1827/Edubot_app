import { types } from "../types";

const initialValues = {
    messageList: [],

};

export const chatReducer = (state = initialValues, action) => {
    switch (action.type) {
        case types.setMessageList:
            return {
                ...state,
                messageList: [...action.payload],
            };
        case types.addUserMessage:
            return {
                ...state,
                messageList: [...state.messageList, action.payload],
            };
        case types.addBotMessages: 
            return {
                ...state,
                messageList: [...state.messageList, ...action.payload],
            };
        default:
            return state;
    }
};
