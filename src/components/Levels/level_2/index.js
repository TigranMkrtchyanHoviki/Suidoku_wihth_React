import React from "react";
import { Sudoku } from "../../Sudoku";
import { useState } from "react";

export const Level_2 = ({choice_Game, links}) => {

    const [sudoku, setSudoku] = useState(
        [
            [{ value: 6, isInitialValue: true}, {}, {}, {}, { value: 1, isInitialValue: true }, {}, {}, { value: 4, isInitialValue: true }, {}],
            [{}, { value: 5, isInitialValue: true }, {}, {}, { value: 7, isInitialValue: true }, { value: 4, isInitialValue: true }, {}, {}, {}],
            [{}, {}, { value: 3, isInitialValue: true }, {}, {}, {}, {}, {}, { value: 2, isInitialValue: true }],
            [{ value: 8, isInitialValue: true }, {}, { value: 9, isInitialValue: true }, {}, {}, { value: 1, isInitialValue: true }, {}, {value: 7, isInitialValue: true }, {}],
            [{ value: 3, isInitialValue: true }, { value: 4, isInitialValue: true }, {}, {}, {}, {}, {}, { value: 9, isInitialValue: true }, { value: 8, isInitialValue: true}],
            [{}, { value: 7, isInitialValue: true }, {}, { value: 8, isInitialValue: true}, {}, {}, { value: 5, isInitialValue: true }, {}, { value: 4, isInitialValue: true}],
            [{ value: 5, isInitialValue: true }, {}, {}, {}, {}, {}, { value: 8, isInitialValue: true}, {}, {}],
            [{}, {}, {}, {value: 4, isInitialValue: true }, { value:2, isInitialValue: true }, {}, {}, { value: 5, isInitialValue: true }, {}],
            [{}, { value: 3, isInitialValue: true}, {}, {}, { value:8, isInitialValue: true }, {}, {}, {}, { value: 6, isInitialValue: true}]
        ]
    )

    // console.log("Level_2" ,sudoku)
    

    return (
          <Sudoku sudoku={sudoku} 
                  setSudoku={setSudoku} 
                  choice_Game={choice_Game} 
                  links={links} 
                  />
    )
}