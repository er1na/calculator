type DisplayProps = {
    input: string;
    result: string;
}

const Display = ({input, result}: DisplayProps) =>{
    return(
        <div style={{border: '1px solid', padding: '10px 20px', margin: '10px', width: '200px'}}>
            input: {input}
            <div style={{display: "flex", justifyContent: "flex-end"}}>{result}</div>
        </div>
    )
}

export default Display;