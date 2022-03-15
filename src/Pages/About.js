import Map from "../Components/Map"
import Founder from '../Components/AboutTabs/Founder'
import Values from '../Components/AboutTabs/Values'
import Mission from '../Components/AboutTabs/Mission'
import History from '../Components/AboutTabs/History'
import WhyJoin from '../Components/AboutTabs/WhyJoin'
import image1 from "../Images/image1.jpg"
import {useState} from 'react'

function About() {
    const [activeTab, setActiveTab] = useState('founder');
    const founder = [
        {image: image1,  name: "Sally May Johnes-Parson"},
    ]

    let tabContent = '';
    if (activeTab === 'founder') {
        tabContent = <Founder  founder={founder}/>
    } else if (activeTab === 'values') {
        tabContent = <Values />
    } else if (activeTab === 'mission') {
        tabContent = <Mission />
    } else if (activeTab === 'history') {
        tabContent = <History />
    } else if (activeTab === 'whyjoin') {
        tabContent = <WhyJoin />
    }
 
    return (
        <div className="container mb-5">
            <div className="row">
            <div className="col">
                </div>
            </div>
            <div className="row">
                <div className="col">
                <h2 className="mb-3">Find out more <strong style={{color: "#128079"}}>about us:</strong></h2>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col mb-5 border-bottom p-0" style={{backgroundColor: 'white', borderRadius: '5px 5px'}}>
                    <ul class="nav nav-tabs justify-content-center px-5 pt-3 tabs-border">
                        <li class="nav-item">
                            <button class={'nav-link text-dark' + (activeTab === 'founder' ? ' active' : '')} onClick={() => setActiveTab('founder')}>Founder</button>
                        </li>
                        <li class="nav-item">
                            <button class={'nav-link text-dark' + (activeTab === 'values' ? ' active' : '')} onClick={() => setActiveTab('values')}>Values</button>
                        </li>
                        <li class="nav-item">
                            <button class={'nav-link text-dark' + (activeTab === 'mission' ? ' active' : '')} onClick={() => setActiveTab('mission')}>History</button>
                        </li>
                        <li class="nav-item">
                            <button class={'nav-link text-dark' + (activeTab === 'history' ? ' active' : '')} onClick={() => setActiveTab('history')}>Mission</button>
                        </li>
                        <li class="nav-item">
                            <button class={'nav-link text-dark' + (activeTab === 'whyjoin' ? ' active' : '')} onClick={() => setActiveTab('whyjoin')}>Why Join</button>
                        </li>
                    </ul>
                    {tabContent}
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <Map />
        </div>
            <div className="col-6">
                <h5>Address</h5>
                <p>All Over The World</p>
                <h5>Email</h5>
                <p>info@bettertogether.com</p>
                <h5>Phone</h5>
                <p>+12 34 45 67 89</p>
                </div>
            </div>
        </div>
    )
}

export default About