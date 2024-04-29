import { Route, Routes } from "react-router-dom"
import {HeroesRoutes} from '../heroes/index'
import {LoginPage} from '../auth/index'




export const AppRouter = () => {
  
  return (
    <>
        <Routes>
            <Route path="login" element={<LoginPage/>} />
            <Route path="/*" element={<HeroesRoutes/>} />
     
        </Routes>
    </>
  )
}
