import Layout from './components/Layout'
import { Routes, Route } from 'react-router'
import ListUsers from './modules/users/ListUsers'
import CreateOrUpdateUser from './modules/users/CreateOrUpdateUser'
import ListRoles from './modules/roles/ListRoles'
import Login from './components/Login'
import UserContext from './context/userContext'
import { useState } from 'react'
import useInitialLoading from './hooks/useInitialLoading'
import RootContainer from './modules/RootContainer'

function Dashboard() {
  return <div>Dashboard</div>
}

function Products() {
  return <div>Products</div>
}

function Orders() {
  return <div>Orders</div>
}

function App() {

  const [userData, setUserData] = useState(null)

  const contextValue = {
    userData: userData,
    setUserData: setUserData
  }


  return (
    <>
      <UserContext.Provider value={contextValue}>
        <RootContainer>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/users" element={<ListUsers />} />
              <Route path="/users/:userId" element={<CreateOrUpdateUser />} />
              <Route path="/roles" element={<ListRoles />} />
              <Route path="/products" element={<Products />} />
              <Route path="/orders" element={<Orders />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </RootContainer>
      </UserContext.Provider>
    </>
  )
}

export default App
