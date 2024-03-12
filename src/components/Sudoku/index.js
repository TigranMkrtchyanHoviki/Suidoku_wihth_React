import React, { useEffect } from "react";
import { useState } from "react";
import SudocuStyles from "./sudoku.module.css"

import { ChooseNumber } from "../chooseNumber";

export const Sudoku = ({choice_Game, links, sudoku, setSudoku}) => {

    const [showNumbers, setShowNumbers] = useState(false)
    const [saveID, setSaveID] = useState(null)
    const [indexRow, setIndexRow] = useState(null)
    const [indexColumn, setIndexColumn] = useState(null)
    const [showResult, setShowResult] = useState(false)
    const [resultText, setResultText] = useState("")
    // const [sudoku, setSudoku] = useState(
    //     [
    //         [{ id: 0, index: 0 }, { id: 1, index: 1 }, { id: 2, index: 2 }, { id: 3, index: 3, value: 8, isInitialValue: true }, { id: 4, index: 4 }, { id: 5, index: 5 }, { id: 6, index: 6 }, { id: 7, index: 7 }, { id: 8, index: 8, value: 9, isInitialValue: true }],
    //         [{ id: 9, index: 0 }, { id: 10, index: 1, value: 1, isInitialValue: true }, { id: 11, index: 2, value: 9, isInitialValue: true }, { id: 12, index: 3 }, { id: 13, index: 4 }, { id: 14, index: 5, value: 5, isInitialValue: true }, { id: 15, index: 6, value: 8, isInitialValue: true }, { id: 16, index: 7, value: 3, isInitialValue: true }, { id: 17, index: 8 }],
    //         [{ id: 18, index: 0 }, { id: 19, index: 1, value: 4, isInitialValue: true }, { id: 20, index: 2, value: 3, isInitialValue: true }, { id: 21, index: 3 }, { id: 22, index: 4, value: 1, isInitialValue: true }, { id: 23, index: 5 }, { id: 24, index: 6 }, { id: 25, index: 7 }, { id: 26, index: 8, value: 7, isInitialValue: true }],
    //         [{ id: 27, index: 0, value: 4, isInitialValue: true }, { id: 28, index: 1 }, { id: 29, index: 2 }, { id: 30, index: 3, value: 1, isInitialValue: true }, { id: 31, index: 4, value: 5, isInitialValue: true }, { id: 32, index: 5 }, { id: 33, index: 6 }, { id: 34, index: 7 }, { id: 35, index: 8, value: 3, isInitialValue: true }],
    //         [{ id: 36, index: 0 }, { id: 37, index: 1 }, { id: 38, index: 2, value: 2, isInitialValue: true }, { id: 39, index: 3, value: 7, isInitialValue: true }, { id: 40, index: 4 }, { id: 41, index: 5, value: 4, isInitialValue: true }, { id: 42, index: 6 }, { id: 43, index: 7, value: 1, isInitialValue: true }, { id: 44, index: 8 }],
    //         [{ id: 45, index: 0 }, { id: 46, index: 1, value: 8, isInitialValue: true }, { id: 47, index: 2 }, { id: 48, index: 3 }, { id: 49, index: 4, value: 9, isInitialValue: true }, { id: 50, index: 5 }, { id: 51, index: 6, value: 6, isInitialValue: true }, { id: 52, index: 7 }, { id: 53, index: 8 }],
    //         [{ id: 54, index: 0 }, { id: 55, index: 1, value: 7, isInitialValue: true }, { id: 56, index: 2 }, { id: 57, index: 3 }, { id: 58, index: 4 }, { id: 59, index: 5, value: 6, isInitialValue: true }, { id: 60, index: 6, value: 3, isInitialValue: true }, { id: 61, index: 7 }, { id: 62, index: 8 }],
    //         [{ id: 63, index: 0 }, { id: 64, index: 1, value: 3, isInitialValue: true }, { id: 65, index: 2 }, { id: 66, index: 3 }, { id: 67, index: 4, value: 7, isInitialValue: true }, { id: 68, index: 5 }, { id: 69, index: 6 }, { id: 70, index: 7, value: 8, isInitialValue: true }, { id: 71, index: 8 }],
    //         [{ id: 72, index: 0, value: 9, isInitialValue: true }, { id: 73, index: 1 }, { id: 74, index: 2, value: 4, isInitialValue: true }, { id: 75, index: 3, value: 5, isInitialValue: true }, { id: 76, index: 4 }, { id: 77, index: 5 }, { id: 78, index: 6 }, { id: 79, index: 7 }, { id: 80, index: 8, value: 1, isInitialValue: true }]
    //     ]
    // )

    useEffect(() => {
        let id = 0
        setSudoku(sudoku.map((elem, i) => {
            return elem.map((element, ind) => {
                if(i === 0 && ind === 0) {
                    if (!element.value) {
                        return {
                            ...element,
                            value: null,
                            rowIndex: i,
                            isSame: false,
                            index: ind,
                            id: 0
                        }
                    }else {
                        return {
                            ...element,
                            rowIndex: i,
                            isSame: false,
                            index: ind,
                            id: 0
                        }
                    }
                }else {
                    id += 1
                    if (!element.value) {
                        return {
                            ...element,
                            value: null,
                            rowIndex: i,
                            isSame: false,
                            index: ind,
                            id: id
                        }
                    }else {
                        return {
                            ...element,
                            rowIndex: i,
                            isSame: false,
                            index: ind,
                            id: id
                        }
                    }
                }
            })
        }))

        setSaveID(null)
    }, [choice_Game])


    const handlerChooseBox = (id, i, j) => {
        setShowNumbers(true)
        setSaveID(id)
        setIndexRow(i)
        setIndexColumn(j)
    }

    const handlerAddNumber = (chooseNumber) => {

        setSudoku(sudoku.map((elem, i) => {
            if ((saveID >= 0 && saveID <= 2 || saveID >= 9 && saveID <= 11 || saveID >= 18 && saveID <= 20) && (i >= 0 && i <= 2)) {
                return elem.map((element, ind) => {
                    if (ind >= 0 && ind <= 2) {
                        if (element.value === chooseNumber) {
                            return {
                                ...element,
                                isSame: true,
                            }
                        } else {
                            if (element.id === saveID) {
                                return {
                                    ...element,
                                    value: chooseNumber,
                                }
                            } else {
                                return {
                                    ...element,
                                    isSame: false,
                                }
                            }

                        }

                    } else {
                        if (element.value === chooseNumber) {
                            if (ind === indexColumn || i === indexRow) { 
                                return {
                                    ...element,
                                    isSame: true,
                                }
                            } else {
                                return {
                                    ...element,
                                    isSame: false,
                                }
                            }

                        } else {
                            return {
                                ...element,
                                isSame: false,
                            }
                        }
                    }
                })
            } else if ((saveID >= 3 && saveID <= 5 || saveID >= 12 && saveID <= 14 || saveID >= 21 && saveID <= 23) && (i >= 0 && i <= 2)) {
                return elem.map((element, ind) => {
                    if (ind >= 3 && ind <= 5) {
                        if (element.value === chooseNumber) {
                            return {
                                ...element,
                                isSame: true,
                            }
                        } else {
                            if (element.id === saveID) {
                                return {
                                    ...element,
                                    value: chooseNumber,
                                }
                            } else {
                                return {
                                    ...element,
                                    isSame: false,
                                }
                            }

                        }

                    } else {
                        if (element.value === chooseNumber) {
                            if (ind === indexColumn || i === indexRow) {
                                return {
                                    ...element,
                                    isSame: true,
                                }
                            } else {
                                return {
                                    ...element,
                                    isSame: false,
                                }
                            }

                        } else {
                            return {
                                ...element,
                                isSame: false,
                            }
                        }
                    }
                })
            } else if ((saveID >= 6 && saveID <= 8 || saveID >= 15 && saveID <= 17 || saveID >= 24 && saveID <= 26) && (i >= 0 && i <= 2)) {
                return elem.map((element, ind) => {
                    if (ind >= 6 && ind <= 8) {
                        if (element.value === chooseNumber) {
                            return {
                                ...element,
                                isSame: true,
                            }
                        } else {
                            if (element.id === saveID) {
                                return {
                                    ...element,
                                    value: chooseNumber,
                                }
                            } else {
                                return {
                                    ...element,
                                    isSame: false,
                                }
                            }

                        }

                    } else {
                        if (element.value === chooseNumber) {
                            if (ind === indexColumn || i === indexRow) {
                                return {
                                    ...element,
                                    isSame: true,
                                }
                            } else {
                                return {
                                    ...element,
                                    isSame: false,
                                }
                            }

                        } else {
                            return {
                                ...element,
                                isSame: false,
                            }
                        }
                    }
                })
            } else if ((saveID >= 27 && saveID <= 29 || saveID >= 36 && saveID <= 38 || saveID >= 45 && saveID <= 47) && (i >= 3 && i <= 5)) {
                return elem.map((element, ind) => {
                    if (ind >= 0 && ind <= 2) {
                        if (element.value === chooseNumber) {
                            return {
                                ...element,
                                isSame: true,
                            }
                        } else {
                            if (element.id === saveID) {
                                return {
                                    ...element,
                                    value: chooseNumber,
                                }
                            } else {
                                return {
                                    ...element,
                                    isSame: false,
                                }
                            }

                        }

                    } else {
                        if (element.value === chooseNumber) {
                            if (ind === indexColumn || i === indexRow) {
                                return {
                                    ...element,
                                    isSame: true,
                                }
                            } else {
                                return {
                                    ...element,
                                    isSame: false,
                                }
                            }

                        } else {
                            return {
                                ...element,
                                isSame: false,
                            }
                        }
                    }
                })
            } else if ((saveID >= 30 && saveID <= 32 || saveID >= 39 && saveID <= 41 || saveID >= 48 && saveID <= 50) && (i >= 3 && i <= 5)) {
                return elem.map((element, ind) => {
                    if (ind >= 3 && ind <= 5) {
                        if (element.value === chooseNumber) {
                            return {
                                ...element,
                                isSame: true,
                            }
                        } else {
                            if (element.id === saveID) {
                                return {
                                    ...element,
                                    value: chooseNumber,
                                }
                            } else {
                                return {
                                    ...element,
                                    isSame: false,
                                }
                            }

                        }

                    } else {
                        if (element.value === chooseNumber) {
                            if (ind === indexColumn || i === indexRow) {
                                return {
                                    ...element,
                                    isSame: true,
                                }
                            } else {
                                return {
                                    ...element,
                                    isSame: false,
                                }
                            }

                        } else {
                            return {
                                ...element,
                                isSame: false,
                            }
                        }
                    }
                })
            } else if ((saveID >= 33 && saveID <= 35 || saveID >= 42 && saveID <= 44 || saveID >= 51 && saveID <= 53) && (i >= 3 && i <= 5)) {
                return elem.map((element, ind) => {
                    if (ind >= 6 && ind <= 8) {
                        if (element.value === chooseNumber) {
                            return {
                                ...element,
                                isSame: true,
                            }
                        } else {
                            if (element.id === saveID) {
                                return {
                                    ...element,
                                    value: chooseNumber,
                                }
                            } else {
                                return {
                                    ...element,
                                    isSame: false,
                                }
                            }

                        }

                    } else {
                        if (element.value === chooseNumber) {
                            if (ind === indexColumn || i === indexRow) {
                                return {
                                    ...element,
                                    isSame: true,
                                }
                            } else {
                                return {
                                    ...element,
                                    isSame: false,
                                }
                            }

                        } else {
                            return {
                                ...element,
                                isSame: false,
                            }
                        }
                    }
                })
            } else if ((saveID >= 54 && saveID <= 56 || saveID >= 63 && saveID <= 65 || saveID >= 72 && saveID <= 74) && (i >= 6 && i <= 8)) {
                return elem.map((element, ind) => {
                    if (ind >= 0 && ind <= 2) {
                        if (element.value === chooseNumber) {
                            return {
                                ...element,
                                isSame: true,
                            }
                        } else {
                            if (element.id === saveID) {
                                return {
                                    ...element,
                                    value: chooseNumber,
                                }
                            } else {
                                return {
                                    ...element,
                                    isSame: false,
                                }
                            }

                        }

                    } else {
                        if (element.value === chooseNumber) {
                            if (ind === indexColumn || i === indexRow) {
                                return {
                                    ...element,
                                    isSame: true,
                                }
                            } else {
                                return {
                                    ...element,
                                    isSame: false,
                                }
                            }

                        } else {
                            return {
                                ...element,
                                isSame: false,
                            }
                        }
                    }
                })
            } else if ((saveID >= 57 && saveID <= 59 || saveID >= 66 && saveID <= 68 || saveID >= 75 && saveID <= 77) && (i >= 6 && i <= 8)) {
                return elem.map((element, ind) => {
                    if (ind >= 3 && ind <= 5) {
                        if (element.value === chooseNumber) {
                            return {
                                ...element,
                                isSame: true,
                            }
                        } else {
                            if (element.id === saveID) {
                                return {
                                    ...element,
                                    value: chooseNumber,
                                }
                            } else {
                                return {
                                    ...element,
                                    isSame: false,
                                }
                            }

                        }

                    } else {
                        if (element.value === chooseNumber) {
                            if (ind === indexColumn || i === indexRow) {
                                return {
                                    ...element,
                                    isSame: true,
                                }
                            } else {
                                return {
                                    ...element,
                                    isSame: false,
                                }
                            }

                        } else {
                            return {
                                ...element,
                                isSame: false,
                            }
                        }
                    }
                })
            } else if ((saveID >= 60 && saveID <= 62 || saveID >= 69 && saveID <= 71 || saveID >= 78 && saveID <= 80) && (i >= 6 && i <= 8)) {
                return elem.map((element, ind) => {
                    if (ind >= 6 && ind <= 8) {
                        if (element.value === chooseNumber) {
                            return {
                                ...element,
                                isSame: true,
                            }
                        } else {
                            if (element.id === saveID) {
                                return {
                                    ...element,
                                    value: chooseNumber,
                                }
                            } else {
                                return {
                                    ...element,
                                    isSame: false,
                                }
                            }

                        }

                    } else {
                        if (element.value === chooseNumber) {
                            if (ind === indexColumn || i === indexRow) {
                                return {
                                    ...element,
                                    isSame: true,
                                }
                            } else {
                                return {
                                    ...element,
                                    isSame: false,
                                }
                            }

                        } else {
                            return {
                                ...element,
                                isSame: false,
                            }
                        }
                    }
                })
            } else {
                return elem.map((element, ind) => {
                    if (element.value === chooseNumber && ind === indexColumn) {
                        return {
                            ...element,
                            isSame: true,
                        }
                    } else {
                        return {
                            ...element,
                            isSame: false,
                        }
                    }
                })

            }

        }))

        setShowNumbers(false)

    }

    const handlerShowResult = () => {

        let isWon = true

        let isEmpty = true

        if (showResult) {
            setShowResult(false)
        } else {

        row: for( let i = 0; i < sudoku.length; i++) {
                for(let j = 0; j < sudoku[i].length; j++) {
                    if(sudoku[i][j].value === null) {
                        console.log(sudoku[i][j])
                        setShowResult(true)
                        setResultText("You have the empty field")
                        isEmpty = false
                        break row
                    }
                }
            }

            if(isEmpty) {
              row: for( let i = 0; i < sudoku.length; i++) {
                     for(let j = 0; j < sudoku[i].length; j++) {
                        if(sudoku[i][j].isSame) {
                            setShowResult(true)
                            setResultText("You have the same value")
                            isWon = false
                            break row
                        }
                    }
                }

                if(isWon) {
                    setShowResult(true)
                    setResultText("You won")
                }
            }
        }

        
    }

    console.log("choice_Game" ,choice_Game)

    return (<div>

        <div className={`${SudocuStyles.container}`}>

            <div className={`${SudocuStyles.container_result_btn}`}>
                <button
                    onClick={() => handlerShowResult()}
                >RESULT</button>
            </div>

            {
                showResult ?
                    <div className={`${SudocuStyles.result_text}`}>
                        <p>{resultText}</p>
                    </div>
                    :
                    ""
            }

            <div className={`${SudocuStyles.boxes_container} ${choice_Game === links[0][0] && "" || 
                                                               choice_Game === links[0][1] && SudocuStyles.rotate_90deg || 
                                                               choice_Game === links[0][2] && SudocuStyles.rotate_180deg ||
                                                               choice_Game === links[0][3] && SudocuStyles.rotate_270deg }
                                                               
                                                             ${choice_Game === links[1][0] && "" || 
                                                               choice_Game === links[1][1] && SudocuStyles.rotate_90deg || 
                                                               choice_Game === links[1][2] && SudocuStyles.rotate_180deg ||
                                                               choice_Game === links[1][3] && SudocuStyles.rotate_270deg }
                                                               
                                                             ${choice_Game === links[2][0] && "" || 
                                                               choice_Game === links[2][1] && SudocuStyles.rotate_90deg || 
                                                               choice_Game === links[2][2] && SudocuStyles.rotate_180deg ||
                                                               choice_Game === links[2][3] && SudocuStyles.rotate_270deg }`
                                                               }>
                {
                    sudoku.map((elem, i) => {
                        return elem.map((element, j) => {
                            if (element.index === j)
                                return (
                                    <div
                                        key={element.id}
                                        onClick={() => handlerChooseBox(element.id, i, j)}
                                        className={
                                                   `${SudocuStyles.box} 
                                                    ${element.id === saveID && SudocuStyles.choose_box} 
                                                    ${element.isSame && SudocuStyles.the_same_value}
                                                    ${element.isInitialValue && SudocuStyles.initial_value}
                                                    `}

                                    >
                                        <span className={`${choice_Game === links[0][0] && "" || 
                                                            choice_Game === links[0][1] && SudocuStyles.rotate_back_90deg ||
                                                            choice_Game === links[0][2] && SudocuStyles.rotate_back_180deg || 
                                                            choice_Game === links[0][3] && SudocuStyles.rotate_back_270deg}
                                                            
                                                            ${choice_Game === links[1][0] && "" || 
                                                              choice_Game === links[1][1] && SudocuStyles.rotate_back_90deg || 
                                                              choice_Game === links[1][2] && SudocuStyles.rotate_back_180deg ||
                                                              choice_Game === links[1][3] && SudocuStyles.rotate_back_270deg }
                                                              
                                                            ${choice_Game === links[2][0] && "" || 
                                                              choice_Game === links[2][1] && SudocuStyles.rotate_back_90deg || 
                                                              choice_Game === links[2][2] && SudocuStyles.rotate_back_180deg ||
                                                              choice_Game === links[2][3] && SudocuStyles.rotate_back_270deg }`}
                                                            >
                                                            {element.value}
                                                            </span>
                                    </div>
                                )
                            else
                                return (
                                    <div
                                        key={element.id}
                                        onClick={() => handlerChooseBox(element.id, i, j)}
                                        className={`${SudocuStyles.box}`}></div>
                                )
                        })
                    })
                }
            </div>
            {
                showNumbers && <ChooseNumber handlerAddNumber={handlerAddNumber} />
            }

        </div>

    </div>)
}