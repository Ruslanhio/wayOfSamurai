const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'
let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likeNumber: 15 },
                { id: 2, message: 'It\'s my first post', likeNumber: 24 }
            ],
            newPostText: 'It-kamasutra.com'
        },
        messagesPage: {
            dialogs: [
                { id: 1, name: 'Ruslan' },
                { id: 2, name: 'Dima' },
                { id: 3, name: 'Evgen' },
                { id: 4, name: 'Natasha' },
                { id: 5, name: 'Ksusha' }
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'I am fine' },
                { id: 4, message: 'Thanks' },
                { id: 5, message: 'Good bye' }

            ],
            newMessageBody: 'It cool'
        },
        sidebar: {
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },


    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeNumber: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    sendMessage() {
        let newMessage = {
            id: 5,
            message: this._state.messagesPage.UPDATE_NEW_MESSAGE_BODY,
            likeNumber: 0
        };
        this._state.messagesPage.messages.push(newMessage);
        this._state.messagesPage.newMessageBody = ''
        this._callSubscriber(this._state)
    },
    updateNewMessageBody(newMessage) {
        this._state.messagesPage.newMessageBody = newMessage
        this._callSubscriber(this._state)
    },
    dispatch(action) { // {type: 'ADD-POST'}
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeNumber: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }

        else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
            this._state.messagesPage.newMessageBody = action.body
            this._callSubscriber(this.state)
        }
        else if (action.type === 'SEND-MESSAGE') {
           let body =   this._state.messagesPage.newMessageBody
            this._state.messagesPage.messages.push({id: 6, message: body})
            this._state.messagesPage.newMessageBody = ''
            this._callSubscriber(this.state)
        }

    }
}


export const addPostActionCreator = () => ({ type: ADD_POST })
export const UpdateNewPostTextActionCreator = (text) =>
({
    type: UPDATE_NEW_POST_TEXT, newText: text
})
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, Body: body })



export default store;
window.store = store










