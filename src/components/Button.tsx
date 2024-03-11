import React, {useState} from "react"
import {useCounter} from "../Provider/Counter"


interface MyButtonProps{
    text?:string;
    onClickFun?:()=>void
}

interface Book{
    name:string;
    price:number | string //it is number or string 
}

const MyButton: React.FC<MyButtonProps>=(props)=>{
    const context=useCounter()
    const {text,onClickFun}=props
    const [value,setState]=useState<Book>({
        name:"Harry Potter",
        price:500
    })

    const getAlert=()=>{
        onClickFun?.()
    }

    return<>
    <div>
        <h1 onClick={(e)=>context?.setCount(context?.value+1)}>{context?.value}</h1>
        <h1>{value.name}</h1>
        <p>Price {value.price}</p>
        <button onClick={()=>setState({name:"potter",price:450})}>{text}</button>
        <button onClick={getAlert}>alert</button>
    </div>
    </>




}

export default MyButton