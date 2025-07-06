import React, {createContext, useContext, useState } from 'react'

const DataContext = createContext()

export const DataProvider = ({ children }) => {

    const [data, setData] = useState(null)
	
    const values = {
        data, setData
    }


    return <DataContext.Provider value={values}>{children}</DataContext.Provider>
}

export const useData = ()=> useContext(DataContext)
