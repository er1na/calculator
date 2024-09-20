type ButtonProps = {
    onClick: (value: string) => void;
}

const Button = ({onClick}: ButtonProps) => {
    const numbers: string[] = ['7', '8', '9', 'ac', '6', '5', '4', '+','3', '2', '1', '-', '*', '0', '/', '='];

    return(
        <div style={{display: "grid", gridTemplateColumns: 'repeat(4, 1fr)', width: '200px', marginBottom: '10px'}}>
            {numbers.map((num, index) => (
                <button key= {index} onClick={() => onClick(num)} style={{border: '1px solid', fontSize: '30px'}}>
                    {num}
                </button>
            ))}
        </div>
    );
};

export default Button;