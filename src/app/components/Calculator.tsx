"use client"

import { useState } from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";

const Calculator = () => {
    const [input, setInput] = useState('0');
    const [result, setResult] = useState('');

    const handleButtonClick = (value: string) => {
        if(value === 'ac'){
            setInput('0');
            setResult('');
        }else if(value === '='){
            try{
                const res = eval(input)
                setResult(res.toString());
            }catch{
                setResult('error');
            }
        }else{
            setInput((prev) => (prev === '0' ?value : prev + value))
        }
    }

    return(
        <div style={{display: 'flex', width: '350px', flexDirection: 'column', alignItems: 'center', border: '1px solid', padding: '10px'}}>
            Calculator
            <Display input={input} result={result}/>
            <ButtonPanel onButtonClick={handleButtonClick}/>
        </div>
    )
}

export default Calculator;
