import { Box, Button, SimpleGrid } from "@chakra-ui/react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { current } from "../Redux/Actions/authActions"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
const Profile = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(current())
    },[])
    const user = useSelector(state=>state.authReducer.user)
    return (
        <div style={{textAlign:"center"}}>
            
        
            <SimpleGrid minChildWidth='120px' spacing='40px'>
  <Box bg='tomato' height='80px'><Button as={Link} to='/ajouter-une-annonce'> Ajouter une annonce </Button></Box>
  <Box bg='tomato' height='80px'><Button as={Link} to='/mes-informations'> Mes Informations</Button></Box>
  <Box bg='tomato' height='80px'><Button as={Link} to='/mes-favoris'> Mes Favoris</Button></Box>
  <Box bg='tomato' height='80px'><Button as={Link} to='/mes-annonces'> Mes Annonces</Button></Box>
        
</SimpleGrid>
        </div>
        
    )
}

export default Profile