import React, {useState, useCallback} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButton from './UseCallbackButton'

const UseCallback = (props) => {
    const [count, setcount] = useState(0);
    

    const inc = useCallback((delta)=>{
        setcount(curr=> curr + delta)
    },[setcount])
   
    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <div className="center">
                <span className="text">{count}</span>
                <UseCallbackButton inc={inc}/>
            </div>
        </div>
    )
}

export default UseCallback
