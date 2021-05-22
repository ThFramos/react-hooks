import React ,{useState,useEffect,useMemo}from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function sum(value1,value2){
    const future = Date.now() + 2000;
    while(Date.now() < future) {} 
    return parseInt(value1 ) + parseInt(value2);
}
const UseMemo = (props) => {
    const [n1,setN1] =useState(0)
    const [n2,setN2] =useState(0)
    const [n3,setN3] =useState(0)
    //const [soma, setSoma] = useState(0)
    // useEffect(()=>{
    //     setSoma(sum(n1,n2));
    // },[n1,n2])

    const soma = useMemo(()=> sum(n1,n2) ,[n1,n2])


    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />
            <SectionTitle title="Exercício #1"/>
            <div className="center">
                <input type="number" className="input" value={n1} onChange={(e)=>{setN1(e.target.value)}}/>
                <input type="number" className="input" value={n2} onChange={(e)=>{setN2(e.target.value)}}/>
                <input type="number" className="input" value={n3} onChange={(e)=>{setN3(e.target.value)}}/>
    <span className="text">{soma}</span>
            </div>
        </div>
    )
}

export default UseMemo
