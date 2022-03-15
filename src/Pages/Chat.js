import ChatDisplay from "../Components/ChatDisplay"

function Chat() {
    return(
        <>
            <h2 style={{textAlign: "center"}}>Do you have any <span style={{color: "#128079"}}>questions</span>? Ask away...</h2>
                <div className="container-fluid mb-5">
                    <div className="row justify-content-center pt-1">
                        <div className="col-md-4 mt-5 pt-3 rounded" style={{minHeight: '30rem', width: "60rem", backgroundColor: 'rgb(241, 237, 237)'}}>
                            <ChatDisplay />
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Chat