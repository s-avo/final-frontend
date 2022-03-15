import Message from "./Message"

function MessageList(props) {

    const { messages, loadMessages } = props
    const messageList = messages.map((message, index) => {
        return <Message message={message} key={index} loadMessages={loadMessages}/>
    })

    return (
        <div>
            {messageList}
        </div>
    )
}

export default MessageList