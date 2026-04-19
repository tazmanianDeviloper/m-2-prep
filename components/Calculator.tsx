"use client";

import {useState} from "react";
import {StyledButtons, StyledDiv, StyledInputs} from "@/styled-components/styled-components";

export default function Calculator() {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [res, setRes] = useState(0);

    function handleAddition(){
        setRes(firstNumber + secondNumber);
    }

    // Add the 3 functions, each for a button (math operation).


    return (
        <StyledDiv>
            <label htmlFor={`first`}>Enter a number: </label>
            <StyledInputs
                id="first"
                value={firstNumber}
                onChange={(e) => setFirstNumber(parseFloat(e.target.value))}
            />

            <label htmlFor={`second`}>Enter another number: </label>
            <StyledInputs
                id="second"
                value={secondNumber}
                onChange={(e) => setSecondNumber(parseFloat(e.target.value))}
            />

            {/*Addition*/}
            <StyledButtons onClick={handleAddition}>+</StyledButtons>

            {/*Add the 3 other buttons here*/}


            <p>Result: {res}</p>
        </StyledDiv>
    );
}
