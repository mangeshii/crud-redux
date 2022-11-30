import { useDispatch, useSelector } from "react-redux"
import "./style.css"
import { set_celebrities, remove_selected_celebrity ,edit_celebrity} from "../redux/actions/celebrityAction"
import celebrityData from "../json/celebrity.json"
import Accordion from 'react-bootstrap/Accordion';
import { GrEdit } from 'react-icons/gr';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from "react";
import { BiCheckCircle } from 'react-icons/bi';
import { MdOutlineCancel } from 'react-icons/md'

const UserList = () => {
    const data = useSelector((state) => state.setCelebrity.celebrityData)
    const [show, setShow] = useState(false);
    const [searchName, setSearchName] = useState("")
    const [id, setId] = useState();
    const [isDisabled, setIsDisabled] = useState(null);
    // const [enabledId,setEnabledId]=useState(null)
    const dispatch = useDispatch()
    const current = new Date();
    const date = `${current.getFullYear()}`;


    useEffect(() => {
        dispatch(set_celebrities(celebrityData))
        // eslint-disable-next-line
    }, [])


    const handleClose = () => setShow(false);

    const handleShow = (id) => {
        setId(id)
        setShow(true);
    }

    const handleDelete = () => {
        dispatch(remove_selected_celebrity(id))
        setShow(false)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        setSearchName(e.target.value)
    }

    const handleEdit = (e) => {
        console.log(e)
        setIsDisabled(e)
    }
    
    const handleEditSuccess=()=>{  
        setIsDisabled(null)
    }

    const setUpdatedData=(e,key,id)=>{
        dispatch(edit_celebrity({[key]:e,id}))
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
                <div className="search-cont " >
                    <div className="search-input " >
                        <input className="input-area " type="text" placeholder="Search user" onChange={handleSearch} />
                    </div>
                </div>
                <div className="accordion acc w-100 " id="accordionExample">
                    {// eslint-disable-next-line
                        data &&
                        data.filter((val) => {
                            if (searchName === "") {
                                return val
                            } else if (val.first.toLowerCase().includes(searchName.toLowerCase())) {
                                return val
                            }
                        }).map((item) => {
                            return (
                                <div key={item.id}>
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
                                                            <input onChange={(e)=>{setUpdatedData(e.target.value)}} defaultValue={`${date - item.dob.slice(0, 4)}`} disabled={true} size="1" />
                                                        </div>
                                                        <div className="gender-cont col-md-4 col-4">
                                                            <div className="col">Gender</div>
                                                            <input onChange={(e)=>{setUpdatedData(e.target.value,"gender",item.id)}} defaultValue={item.gender} disabled={isDisabled !== item.id} size="2" />
                                                        </div>
                                                        <div className="country-cont col-md-4 col-4">
                                                            <div className="col">Country</div>
                                                            <input onChange={(e)=>{setUpdatedData(e.target.value,"country",item.id)}} defaultValue={item.country} disabled={isDisabled !== item.id} size="6" />
                                                        </div>
                                                    </div>
                                                    <div className="bottom-section">
                                                        <div className="col">Description</div>
                                                        <div>{item.description}</div>
                                                        {/* <input onChange={(e)=>{setUpdatedData(e.target.value)}} defaultValue={item.description} disabled={isDisabled} size="6" /> */}

                                                    </div>
                                                    {isDisabled !== item.id ? (
                                                        <div className="icon-cont d-flex justify-content-end">
                                                            <div className="edit-icon">
                                                                <GrEdit onClick={()=>handleEdit(item.id)} />
                                                            </div>
                                                            <div className="delete-icon">
                                                                <RiDeleteBin6Line onClick={() => handleShow(item.id)} />
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div className="icon-cont d-flex justify-content-end">
                                                            <div className="check-icon">
                                                                <BiCheckCircle onClick={handleEditSuccess}/>
                                                            </div>
                                                            <div className="cancel-icon">
                                                                <MdOutlineCancel />
                                                            </div>
                                                        </div>
                                                    )}

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

