import { useState } from "react"
import { createMessage } from "../API/messages"

function CreateNewMessage(props) {

    const { loadMessages } = props
    const [newUsername, setNewUsername] = useState('')
    const [newMessage, setNewMessage] = useState('')
    const [messageCreating, setMessageCreating] = useState(false)

    const createMessageAction = async () => {
        setMessageCreating(true)
        await createMessage(newUsername, newMessage)
        await loadMessages()
        setMessageCreating(false)
        setNewMessage('')
    }

    return (
        <div>
            <div className="row ">
                <div className="col-12">
                    <span>Username:</span>
                    <input
                        type="text"
                        style={{ height: "2rem"}}
                        className="m-2 rounded text-start"
                        value={newUsername}
                        onChange={(event) => setNewUsername(event.target.value)}
                    ></input>
                </div>
            </div>
            <div className="row align-items-center mb-4">
                <div className="col-10">
                    <span>Message:</span>
                    <input
                        type="text"
                        style={{height: "5rem", width: "48rem"}}
                        className="m-2 rounded"
                        value={newMessage}
                        onChange={(event) => setNewMessage(event.target.value)}
                    ></input>
                </div>
                <div className="col-2">
                    <button
                        className="btn btn-danger green-btn m-2 p-3"
                        disabled={messageCreating}
                        onClick={createMessageAction}
                    >Send</button>
                </div>
            </div>
        </div>
    )
}

export default CreateNewMessage