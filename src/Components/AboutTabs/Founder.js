function Founder({founder}) {

    let content = founder.map((found, index) => {
    
        return (
            <tr key={index}>
                <td>
                    <img src={found.image} className="img-fluid" style={{maxHeight: '200px'}} />
                </td>
                <td>{found.name}</td>
            </tr>
        )
    })


    return (
        <table style={{width: "100%"}}>
            <thead>
                <tr>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {content}
            </tbody>
        </table>
    )
}

export default Founder