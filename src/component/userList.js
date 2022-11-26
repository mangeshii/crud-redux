import { useDispatch, useSelector } from "react-redux"
import "./style.css"
import { set_celebrities, remove_selected_celebrity  } from "../redux/actions/celebrityAction"
import celebrityData from "../json/celebrity.json"
import Accordion from 'react-bootstrap/Accordion';
import { GrEdit } from 'react-icons/gr';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from "react";

const UserList = () => {
    const data = useSelector((state) => state.setCelebrity.celebrityData)
    const [show, setShow] = useState(false);
    const [searchName,setSearchName]=useState("")
    const [id, setId] = useState();
    const dispatch = useDispatch()
    const current = new Date();
    const date = `${current.getFullYear()}`;

    useEffect(() => {
        dispatch(set_celebrities(celebrityData))
        // eslint-disable-next-line
    },[])
    

    const handleClose = () => setShow(false);

    const handleShow = (id) => {
        setId(id)
        setShow(true);
    }

    const handleDelete = () => {
        dispatch(remove_selected_celebrity(id))
        setShow(false)
    }
    
    const handleSearch=(e)=>{
            e.preventDefault()
            setSearchName(e.target.value)
    }

    return (
        <>

            {show && (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Body>Are you sure you want to delete?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="danger" onClick={() => handleDelete()}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}

            <div className="containr d-flex justify-content-center align-items-center flex-column " >
                <div className="search-cont">
                    <div className="search-input">
                        <input className="input-area" type="text" placeholder="Search user" onChange={handleSearch}/>
                    </div>
                </div>
                <div className="accordion acc w-100 " id="accordionExample">
                    {// eslint-disable-next-line
                    data.filter((val)=>{
                        if (searchName === "") {
                            
                            return val
                        } else if (val.first.toLowerCase().includes(searchName.toLowerCase())) {
                            return val
                        }
                    }).map((item, id) => {
                        return (
                            <div key={id}>
                                <Accordion className="accordion acc1 ">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            <img className="image img-fluid" src={item.picture} alt="" />
                                            <div className="full-name"> {`${item.first} ${item.last} `}</div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className="main d-flex flex-column">
                                                <div className="top-section d-flex">
                                                    <div className="age-cont col-md-4 col-4">
                                                        <div className="col">Age</div>
                                                        <div className="age">{`${date - item.dob.slice(0,4)}`}</div >
                                                    </div>
                                                    <div className="gender-cont col-md-4 col-4">
                                                        <div className="col">Gender</div>
                                                        <div className="gender">{item.gender}</div >
                                                    </div>
                                                    <div className="country-cont col-md-4 col-4">
                                                        <div className="col">Country</div>
                                                        <div className="country">{item.country}</div>
                                                    </div>
                                                </div>
                                                <div className="bottom-section">
                                                    <div className="col">Description</div>
                                                    <div>{item.description}</div>
                                                </div>
                                                <div className="icon-cont d-flex justify-content-end">
                                                    <div className="edit-icon">
                                                        <GrEdit />
                                                    </div>
                                                    <div className="delete-icon">
                                                        <RiDeleteBin6Line onClick={() => handleShow(id)} />
                                                    </div>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        )

                    })}

                </div>

            </div>
        </>
    )
}

export default UserList

