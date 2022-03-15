import axios from "axios";

const baseUrl = 'http://localhost:3033/messages'

export async function getMessages() {

    const response = await axios.get(baseUrl)
    return response.data
}
export async function createMessage(username, message) {
    const data = {
        username: username,
        message: message,
    }

    await axios.post(baseUrl, data)

}

export async function deleteMessage(id) {
    const url = `${baseUrl}/${id}`
    await axios.delete(url)
}