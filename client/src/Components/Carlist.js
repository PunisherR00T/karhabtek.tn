import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCars } from "../Redux/Actions/carActions"
import Carinfocard from "./Carinfocard"

const Carlist = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCars())
    },[])
    const Cars = useSelector(state=> state.carReducer.Cars)
    return (
        <section id="Section" style={{textAlign:"center"}}>
            <h2>Occasions</h2>
            {
                Cars.map(Car => <Carinfocard key={Car._id} Car={Car}/>)
            }
            
        </section>
    )
}

export default Carlist