import React from "react";
import { Sudoku } from "../../Sudoku";
import { useState } from "react";

export const Level_1 = ({choice_Game, links}) => {

    const [sudoku, setSudoku] = useState(
        [
            [{ id: 0, index: 0 }, { id: 1, index: 1 }, { id: 2, index: 2 }, { id: 3, index: 3, value: 8, isInitialValue: true }, { id: 4, index: 4 }, { id: 5, index: 5 }, { id: 6, index: 6 }, { id: 7, index: 7 }, { id: 8, index: 8, value: 9, isInitialValue: true }],
            [{ id: 9, index: 0 }, { id: 10, index: 1, value: 1, isInitialValue: true }, { id: 11, index: 2, value: 9, isInitialValue: true }, { id: 12, index: 3 }, { id: 13, index: 4 }, { id: 14, index: 5, value: 5, isInitialValue: true }, { id: 15, index: 6, value: 8, isInitialValue: true }, { id: 16, index: 7, value: 3, isInitialValue: true }, { id: 17, index: 8 }],
            [{ id: 18, index: 0 }, { id: 19, index: 1, value: 4, isInitialValue: true }, { id: 20, index: 2, value: 3, isInitialValue: true }, { id: 21, index: 3 }, { id: 22, index: 4, value: 1, isInitialValue: true }, { id: 23, index: 5 }, { id: 24, index: 6 }, { id: 25, index: 7 }, { id: 26, index: 8, value: 7, isInitialValue: true }],
            [{ id: 27, index: 0, value: 4, isInitialValue: true }, { id: 28, index: 1 }, { id: 29, index: 2 }, { id: 30, index: 3, value: 1, isInitialValue: true }, { id: 31, index: 4, value: 5, isInitialValue: true }, { id: 32, index: 5 }, { id: 33, index: 6 }, { id: 34, index: 7 }, { id: 35, index: 8, value: 3, isInitialValue: true }],
            [{ id: 36, index: 0 }, { id: 37, index: 1 }, { id: 38, index: 2, value: 2, isInitialValue: true }, { id: 39, index: 3, value: 7, isInitialValue: true }, { id: 40, index: 4 }, { id: 41, index: 5, value: 4, isInitialValue: true }, { id: 42, index: 6 }, { id: 43, index: 7, value: 1, isInitialValue: true }, { id: 44, index: 8 }],
            [{ id: 45, index: 0 }, { id: 46, index: 1, value: 8, isInitialValue: true }, { id: 47, index: 2 }, { id: 48, index: 3 }, { id: 49, index: 4, value: 9, isInitialValue: true }, { id: 50, index: 5 }, { id: 51, index: 6, value: 6, isInitialValue: true }, { id: 52, index: 7 }, { id: 53, index: 8 }],
            [{ id: 54, index: 0 }, { id: 55, index: 1, value: 7, isInitialValue: true }, { id: 56, index: 2 }, { id: 57, index: 3 }, { id: 58, index: 4 }, { id: 59, index: 5, value: 6, isInitialValue: true }, { id: 60, index: 6, value: 3, isInitialValue: true }, { id: 61, index: 7 }, { id: 62, index: 8 }],
            [{ id: 63, index: 0 }, { id: 64, index: 1, value: 3, isInitialValue: true }, { id: 65, index: 2 }, { id: 66, index: 3 }, { id: 67, index: 4, value: 7, isInitialValue: true }, { id: 68, index: 5 }, { id: 69, index: 6 }, { id: 70, index: 7, value: 8, isInitialValue: true }, { id: 71, index: 8 }],
            [{ id: 72, index: 0, value: 9, isInitialValue: true }, { id: 73, index: 1 }, { id: 74, index: 2, value: 4, isInitialValue: true }, { id: 75, index: 3, value: 5, isInitialValue: true }, { id: 76, index: 4 }, { id: 77, index: 5 }, { id: 78, index: 6 }, { id: 79, index: 7 }, { id: 80, index: 8, value: 1, isInitialValue: true }]
        ]
    )

    return (
          <Sudoku sudoku={sudoku} 
                  setSudoku={setSudoku} 
                  choice_Game={choice_Game} 
                  links={links} 
                  />
    )
}