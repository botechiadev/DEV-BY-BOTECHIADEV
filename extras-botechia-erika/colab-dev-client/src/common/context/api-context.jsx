import { useState } from "react";
import { createContext } from "react";

export const ApiContext = createContext()



export const ApiProvider = ({children})=>{
const [m, setM] = useState([
    {
        id: "M1",
        title: "FUNDAMENTOS WEB",
        content: ["JS", "HTML", "CSS"],
        path: "",
        totalEx: 0,
        totalPg: 0,
        totalFx: 0,
        totalCh: 0,
        projects: [],
        stack: "VAINILLA"
    }
    ,
        {
        id: "M2",
        title: "REACT",
        content: ["REACT", "APIS"],
        path: "",
        totalEx: 0,
        totalPg: 0,
        totalFx: 0,
        totalCh: 0,
        projects: [],
        stack: "FRONT-END-REACT"
    },
        {
        id: "M3",
        title: "BACK-END",
        content: ["TYPESCRIPT", "NODE", "APIS"],
        path: "",
        totalEx: 0,
        totalPg: 0,
        totalFx: 0,
        totalCh: 0,
        projects: [],
        stack: "BACK-END"
    }
    ,
        {
        id: "M3",
        title: "DATABASE",
        content: ["DB", "SQLITE", "SQL", "JSON"],
        path: "",
        totalEx: 0,
        totalPg: 0,
        totalFx: 0,
        totalCh: 0,
        projects: [],
        stack: "DATABASE"
    },
    {
        id: "M3",
        title: "TESTING",
        content: ["TESTING"],
        path: "",
        totalEx: 0,
        totalPg: 0,
        totalFx: 0,
        totalCh: 0,
        projects: [],
        stack: "FULL-STACK"
    }
    
])

const [items, setItems] = useState([])






    const contextValue = {
        m,
        setM,
        items,
        setItems
    }

    return (<ApiContext.Provider value={contextValue}>{children}</ApiContext.Provider>)
}