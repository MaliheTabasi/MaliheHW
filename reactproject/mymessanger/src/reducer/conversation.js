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
     case 'SAVE_CONVERSATION_ID' :
    return {
        ...state ,
        convId: action.payload
     }
     case 'ADD_NEW_MESSAGES' :
         console.log('this reducer', this)
    return {
        messages:[
            ...state.messages ,{
                sender:{
                    id: window.localStorage.getItem('id')
                },
                text:action.payload
            } 
        ] 
     }

    default:
    return state
 }
} 
export default conversation