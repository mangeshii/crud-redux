import { useDispatch, useSelector } from "react-redux"
import "./style.css"
import { set_celebrities } from "../redux/actions/celebrityAction"
import celebrityData from "../json/celebrity.json"
import Accordion from 'react-bootstrap/Accordion';

const UserList = () => {
    const data = useSelector((state) => state.setCelebrity.celebrityData)
    const dispatch = useDispatch()
    dispatch(set_celebrities(celebrityData))

    console.log(data)

    return (
        <>
            <div className="containr d-flex justify-content-center align-items-center flex-column " >
                <div className="accordion acc w-100 " id="accordionExample">
                    {data.map((item) => {
                        return (
                            <Accordion className="accordion acc1 ">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <img className="image img-fluid" src={item.picture} alt=""/>
                                        <div className="full-name"> {`${item.first} ${item.last} `}</div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className="main d-flex flex-column">
                                            <div className="top-section d-flex">
                                                <div className="age-cont col-md-4">
                                                    <div className="col">Age</div>
                                                    <div className="age">22</div >
                                                </div>
                                                <div className="gender-cont col-md-4">
                                                    <div className="col">Gender</div>
                                                    <div className="gender">{item.gender}</div >
                                                </div>
                                                <div className="country-cont col-md-4">
                                                    <div className="col">Country</div>
                                                    <div className="country">{item.country}</div>
                                                </div>
                                            </div>
                                            <div className="bottom-section">
                                                <div className="col">Description</div>
                                                <div>{item.description}</div>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default UserList

