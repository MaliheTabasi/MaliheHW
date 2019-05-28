
export const saveConvList = (conversationList) => ({

  type: 'SAVE_CONVERSATION_LIST',
  payload: conversationList

})
export const saveChatScreenMessages = (messages) => ({

  type: 'SAVE_CHATSCREEN_MESSAGES',
  payload: messages

})

export const UserToHeader = (user) => ({

  type: 'TRANSFER_USER_TO_HEADER',
  payload: user

})

export const saveConversationId = (convId) => ({

  type: 'SAVE_CONVERSATION_ID',
  payload: convId

})
export const AddNewMessages = (newMessage) => ({

  type: 'ADD_NEW_MESSAGES',
  payload: newMessage

})
