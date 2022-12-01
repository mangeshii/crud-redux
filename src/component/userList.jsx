import SearchBar from "./searchBar"
import "./style.css"
import { useState,useEffect } from "react"
import AccordionCard from "./accordionCard"
import { useDispatch, useSelector } from "react-redux"
import { set_celebrities } from "../redux/actions/celebrityAction"
import celebrityData from "../json/celebrity.json"

const UserList = () => {
    const userData = useSelector((state) => state.setCelebrity.celebrityData)
    const [searchName, setSearchName] = useState("")
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(set_celebrities(celebrityData))
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className="containr d-flex justify-content-center align-items-center flex-column " >
                <SearchBar setSearchName={setSearchName} />
                <div className="accordion acc w-100 " id="accordionExample">
                    {// eslint-disable-next-line
                    userData.filter((val) => {
                        if (searchName === "") {
                            return val
                        } else if (val.first.toLowerCase().includes(searchName.toLowerCase())) {
                            return val
                        }
                    }).map((item)=>{
                        return(
                            <AccordionCard celebrity={item} key={item.id} />
                        )
                    })}
                </div>
            </div>

        </>
    )
}
export default UserList