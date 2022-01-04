import React, { useEffect, useContext} from 'react'
import { UserContext } from '../App'
import Grid from "./Grid"
import UserCard from './UserCard'

export default function UserInformation() {
    const {user, setUser} = useContext(UserContext)
    useEffect(() => {
const url = "https://frebi.willandskill.eu/api/v1/me"
const token = localStorage.getItem("webb21-js3")
const headers = {"Content-Type": "application/json", "Authorization": `Bearer ${token}`}
fetch(url, {
    headers: headers
})
.then(res => res.json())
.then(data => setUser(data))
    }, [])
    return (
        <Grid item>
            {user && (<UserCard/>)}
        </Grid>
    )
}
