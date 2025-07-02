import Layout from './components/Layout'
import { Routes, Route } from 'react-router'
import ListUsers from './modules/users/ListUsers'
import CreateOrUpdateUser from './modules/users/CreateOrUpdateUser'
import ListRoles from './modules/roles/ListRoles'

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

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<ListUsers />} />
          <Route path="/users/:userId" element={<CreateOrUpdateUser />} />
          <Route path="/roles" element={<ListRoles />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
