import { Box, Toolbar } from "@mui/material"
import { NavBar, SideBar } from "../components"

const drawerWidth = 240

export const JournalLayout = ({children}) => {
    return (
        <Box sx={{ display: 'flex' }}>
            {/* NavBar */}
            <NavBar drawerWidth={drawerWidth}/>
            {/* Side BAR */}
            <SideBar drawerWidth={drawerWidth}/>
            <Box 
                component={'main'}
                sx={{ flexGrow: 1, p: 0.5 }}>
                {/* ToolBar */}
                <Toolbar></Toolbar>
                {children}
            </Box>
        </Box>
    )
}
