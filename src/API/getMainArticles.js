import main1 from "../Images/main1.jpg"
import main2 from "../Images/main2.jpg"
import main3 from "../Images/main3.jpg"

function getMainArticles() {
    return (
       [
        {
            title: "Animal rescue",
            image: main1,
            description: "This is some text about animal rescue. Animals are wonderful, you should rescue one. We grantee you will feel very good about yourself.",
        },
        {
            title: 'With elderly',
            image: "https://images.pexels.com/photos/2050994/pexels-photo-2050994.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            description: "This is some text about cat rescue. Cats are wonderful, you should rescue one. We grantee you will feel very good about yourself.",
        },
        {
            title: 'Food sacristy',
            image: main3,
            description: "This is some text about cat rescue. Cats are wonderful, you should rescue one. We grantee you will feel very good about yourself.",
        },  
       ]
    )
}

export default getMainArticles