import Button from "./Button";

type ButtonPanelProps = {
    onButtonClick: (value: string) => void;
};

const ButtonPanel = ({onButtonClick}: ButtonPanelProps) => {
    return(
        <div>
            <Button onClick={onButtonClick}/>
        </div>
    );
};

export default ButtonPanel;