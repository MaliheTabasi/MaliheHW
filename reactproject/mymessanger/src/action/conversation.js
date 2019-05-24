export const addNewMessage = (newMessage) => ({

        type:'SAVE_NEW_MESSAGE',
        payload: newMessage

})
export const saveConvList = (conversationList) => ({

    type:'SAVE_CONVERSATION_LIST',
    payload: conversationList

})
export const saveChatScreenMessages = (messages) => ({

    type:'SAVE_CHATSCREEN_MESSAGES',
    payload: messages

})

export const UserToHeader = (user) => ({

    type:'TRANSFER_USER_TO_HEADER',
    payload: user

})
 
