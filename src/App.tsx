import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Top from './pages/Top'
import MVV from './pages/MVV'
import Member from './pages/Member'
import Company from './pages/Company'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Top />} />
          <Route path="/mvv" element={<MVV />} />
          <Route path="/member" element={<Member />} />
          <Route path="/company" element={<Company />} />
          <Route path="*" element={<Top />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
