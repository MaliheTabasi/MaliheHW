const INIT ={
    newMessage: '',
    messages:[],
    conversationList:[],
    user: {
        first_name: 'Your Name'
    }
}

function conversation (state = INIT,action)  {
switch(action.type){
    case 'SAVE_NEW_MESSAGE' :
    return {
        ...state ,
        newMessage: action.payload,
     }
    case 'SAVE_CONVERSATION_LIST' :
    return {
        ...state ,
        conversationList: action.payload
     }
     case 'SAVE_CHATSCREEN_MESSAGES' :
    return {
        ...state ,
        messages: action.payload
     }
     case 'TRANSFER_USER_TO_HEADER' :
    return {
        ...state ,
        user: action.payload
     }


    default:
    return state
 }
} 
export default conversation