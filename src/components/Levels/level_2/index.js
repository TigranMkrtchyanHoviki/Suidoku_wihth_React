import React from "react";
import { Sudoku } from "../../Sudoku";
import { useState } from "react";

import { useSudoku } from "../../../hooks/useSudoku/useSudoku";

export const Level_2 = ({choice_Game, links, info_about_change_link}) => {

    const arr = [
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
          
    const [sudoku, setSudoku] = useState(useSudoku(arr))
    

    return (
          <Sudoku sudoku={sudoku} 
                  setSudoku={setSudoku} 
                  choice_Game={choice_Game} 
                  links={links}
                  info_about_change_link={info_about_change_link} 
                  />
    )
}