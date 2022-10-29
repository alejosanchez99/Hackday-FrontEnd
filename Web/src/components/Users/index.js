import { useEffect, useState } from 'react'
import { initWSConnection, getData } from '../../services/utilsWS'
import './styles.css'

const Users = () => {
  const [connection, setConnection] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersTest = [
      { name: "Daniel Arboleda", id: "" },
      { name: "Alejandro Sanchez", id: "" },
      { name: "Diego Correa", id: "" },
      { name: "Kevin Suárez", id: "" },
      { name: "Cristian Herrera", id: "" },
      { name: "Kevin Suárez", id: "" },
      { name: "Cristian Herrera", id: "" },
      { name: "Daniel Arboleda", id: "" },
      { name: "Alejandro Sanchez", id: "" },
      { name: "Diego Correa", id: "" },
    ]

    setUsers(usersTest);
  }, []);

  useEffect(() => {
    setConnection(initWSConnection('user'))
  }, [])

  useEffect(() => {
    getData(connection, 'users', setUsers)
  }, [connection])

  useEffect(() => {
    console.log("users", users);
  }, [users]);

  return (
    <div className='users'>
      {
        users.map((user) => {
          return <span class="badge text-bg-dark">{user.name}</span>
        })
      }
    </div>
  )
}

export default Users
