import React from "react";

import { Number_Container } from "./chooseNumber.style";
import { Number } from "./chooseNumber.style";

export const ChooseNumber = ({handlerAddNumber}) => {

    const handlerForAddingNumber = (i) => {
        handlerAddNumber(i)
    }

    const createNumber = () => {
        const numbers = []

        for (let i = 1; i <= 9; i++) {
            numbers.push(<Number 
                            key={i}
                            onClick={() => handlerForAddingNumber(i)}
                            >{i}</Number>)
        }

        return numbers
    }

    return <Number_Container>
        {createNumber()}
    </Number_Container>
}