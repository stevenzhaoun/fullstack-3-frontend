import Layout from './components/Layout'
import { Routes, Route } from 'react-router'

function Dashboard() {
  return <div>Dashboard</div>
}

function Users() {
  return <div>Users</div>
}

function Roles() {
  return <div>Roles</div>
}

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="roles" element={<Roles />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
