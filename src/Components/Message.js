import { deleteMessage } from "../API/messages"

function Message(props) {

    const { message, loadMessages } = props

    const deleteMessageAction = async () => {
        await deleteMessage(message._id)
        await loadMessages()
    }

    return (
        <div>
            <div className="card border-light d-flex justify-content-between">
                <div className="card-header m-1" style={{backgroundColor: "#F5EE9E"}}>
                    <strong>{message.username}</strong>
                    {/* const time = format(new Date(createdAt), "dd-MM-yyyy HH:mm");
                console.log(time) */}
                    <span className="m-3">{message.createdAt}</span>
                </div>
                <div className="card-body m-1 d-flex justify-content-between">
                    {message.message}
                    <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={deleteMessageAction}
                    >X
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Message