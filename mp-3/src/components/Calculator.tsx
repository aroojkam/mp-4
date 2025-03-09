import { useState } from "react";
import styled from "styled-components";

const CalculatorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgb(241, 184, 234);
    padding: 20px;
    border-radius: 10px;
    max-width: 400px;
    width: 90%;
    margin: 20px auto;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;
`;

const Button = styled.button`
    padding: 10px;
    margin: 5px;
    border: none;
    border-radius: 5px;
    background: rgb(128, 0, 85);
    color: white;
    flex-grow: 1;
    text-align: center;
    font-size: 16px;
`;

const Input = styled.input`
    width: 80%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    font-size: 16px;
    text-align: center;
`;

const Calculator = () => {
    const [num1, setNum1] = useState<string>("");
    const [num2, setNum2] = useState<string>("");
    const [result, setResult] = useState<string>("");

    const handleCalculation = (operation: string) => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        if (isNaN(n1) || isNaN(n2)) {
            setResult("Enter valid numbers");
            return;
        }

        switch (operation) {
            case "+": setResult((n1 + n2).toString()); break;
            case "-": setResult((n1 - n2).toString()); break;
            case "*": setResult((n1 * n2).toString()); break;
            case "/": setResult(n2 !== 0 ? (n1 / n2).toString() : "Cannot divide by zero"); break;
            case "^": setResult(Math.pow(n1, n2).toString()); break;
            default: setResult("");
        }
    };

    return (
        <CalculatorWrapper>
            <h2>Calculator</h2>
            <Input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
            <Input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
            <ButtonContainer>
                <Button onClick={() => handleCalculation("+")}>+</Button>
                <Button onClick={() => handleCalculation("-")}>-</Button>
                <Button onClick={() => handleCalculation("*")}>*</Button>
                <Button onClick={() => handleCalculation("/")}>/</Button>
                <Button onClick={() => handleCalculation("^")}>^</Button>
            </ButtonContainer>
            <h3>Result: {result}</h3>
        </CalculatorWrapper>
    );
};

export default Calculator;
