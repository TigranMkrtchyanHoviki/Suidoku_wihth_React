import React from "react";
import chooseNumbersStyles from "./chooseNumber.module.css"

export const ChooseNumber = ({handlerAddNumber}) => {

    const handlerForAddingNumber = (i) => {
        handlerAddNumber(i)
    }

    const createNumber = () => {
        const numbers = []

        for (let i = 1; i <= 9; i++) {
            numbers.push(<div 
                            key={i}
                            onClick={() => handlerForAddingNumber(i)}
                            className={`${chooseNumbersStyles.number}`}>{i}</div>)
        }

        return numbers
    }

    return <div className={`${chooseNumbersStyles.container}`}>
        {createNumber()}
    </div>
}