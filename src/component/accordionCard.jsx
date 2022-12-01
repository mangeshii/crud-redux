import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react'
import { GrEdit } from 'react-icons/gr';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch } from "react-redux";
import { updateCelebrity, removeSelectedCelebrity } from "../redux/actions/celebrityAction"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AccordionCard = ({ celebrity }) => {
    const dispatch = useDispatch()
    const current = new Date();
    const date = `${current.getFullYear()}`;

    const [isEditMode, setIsEditMode] = useState(false);

    const [localUser, setLocalUser] = useState(celebrity);

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleUpdateCountry = (country) => {
        setLocalUser({ ...localUser, country });
    };

    const handleUpdateGender = (gender) => {
        setLocalUser({ ...localUser, gender })
    }

    const handleUpdateDescription=(description)=>{
        setLocalUser({...localUser,description})
    }
    const handleSave = () => {
        dispatch(updateCelebrity(localUser));
        toggleEditMode();
    };

    const handleCancel = () => {
        setLocalUser(celebrity);
        toggleEditMode();
    }

    const toggleDeleteModal = () => setShowDeleteModal(!showDeleteModal);
    const toggleEditMode = () => setIsEditMode(!isEditMode);

    const handleDelete = () => {
        dispatch(removeSelectedCelebrity(celebrity.id))
    }

    return (
        <>
            {showDeleteModal && (
                <Modal show={showDeleteModal} onHide={toggleDeleteModal}>
                    <Modal.Body>Are you sure you want to delete?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={toggleDeleteModal}>
                            Cancel
                        </Button>
                        <Button variant="danger" onClick={() => handleDelete()}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}

            <Accordion className="accordion acc1" >
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <img className="image img-fluid" src={celebrity.picture} alt="" />
                        <div className="full-name"> {`${celebrity.first} ${celebrity.last} `}</div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="main d-flex flex-column">
                            <div className="top-section d-flex">
                                <div className="age-cont col-md-4 col-4">
                                    <div className="col">Age</div>
                                    <input size="1" value={`${date - celebrity.dob.slice(0, 4)}`} disabled={true} />
                                </div>
                                <div className="gender-cont col-md-4 col-4">
                                    <div className="col">Gender</div>
                                    <select value={localUser.gender} onChange={(e) => handleUpdateGender(e.target.value)} disabled={!isEditMode}>
                                        <option value="male">male</option>
                                        <option value="female">female</option>
                                        <option value="transgender">transgender</option>
                                        <option value="other">other</option>
                                    </select>
                                </div>
                                <div className="country-cont col-md-4 col-4">
                                    <div className="col">Country</div>
                                    <input type="text" size="6" disabled={!isEditMode}
                                        onChange={(e) => handleUpdateCountry(e.target.value)}
                                        value={localUser.country}
                                    />
                                </div>
                            </div>
                            <div className="bottom-section">
                                <div className="col">Description</div>
                                <textarea value={localUser.description} disabled={!isEditMode}
                                    onChange={(e)=>handleUpdateDescription(e.target.value)}
                                    rows="5" cols="50"
                                />
                            </div>

                            <div className="icon-cont d-flex justify-content-end">
                                {!isEditMode ? (
                                    <>
                                        <div className="edit-icon">
                                            <GrEdit onClick={toggleEditMode} />
                                        </div>
                                        <div className="delete-icon">
                                            <RiDeleteBin6Line onClick={toggleDeleteModal} />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="check-icon">
                                            <button onClick={handleSave}>Save</button>
                                        </div>
                                        <div className="cancel-icon">
                                            <button onClick={handleCancel}>Cancel</button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}
export default AccordionCard