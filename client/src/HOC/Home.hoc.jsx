import React from 'react'
import {Route, Routes} from "react-router-dom";

//layouts
import HomeLayout from '../layouts/Homepage.layout';

function HomeLayoutHoc({component: Component,path, ...rest}) {
    return (
        <>
        <Routes>
            <Route 
                {...rest}
                path={path}
                element={
                    <HomeLayout>
                        <Component />
                    </HomeLayout>
                } />
        </Routes>
        
        </>
        )
}

export default HomeLayoutHoc;
