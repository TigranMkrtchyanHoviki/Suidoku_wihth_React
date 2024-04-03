import React, { useEffect, useMemo, useRef } from "react";
import { useState } from "react";
import SudocuStyles from "./sudoku.module.css"
import { AiFillCloseCircle } from "react-icons/ai";
import { Container_Reset_Btn } from "./sudoku.style"
import { ChooseNumber } from "../chooseNumber";
import src_sound_victory  from "./../../audio/victory_sound.mp3"
import src_sound_empty_field from "./../../audio/sound_resultText.mp3"
import src_sound_same_value from "./../../audio/sound_same_value.mp3"

import { Main_Container,
         Container,
         Container_Result_Btn,
         Result_Text,
         Boxes_Container,
          } from "./sudoku.style";

export const Sudoku = ({choice_Game, links, sudoku, setSudoku, info_about_change_link}) => {

    const [showNumbers, setShowNumbers] = useState(false)
    const [saveID, setSaveID] = useState(null)
    const [indexRow, setIndexRow] = useState(null)
    const [indexColumn, setIndexColumn] = useState(null)
    const [showResult, setShowResult] = useState(false)
    const [resultText, setResultText] = useState("")

    const timeOut_id_Ref = useRef()

    const initialSudoku = useMemo(() => {
          return sudoku
    }, [])

    const soundVictory = () => {
        new Audio(src_sound_victory).play()
    }

    const soundEmptyFeild = () => {
        new Audio(src_sound_empty_field).play()
    } 

    const soundSameValue = () => {
        new Audio(src_sound_same_value).play()
    }   
    useEffect(() => {
        let id = 0
        setSudoku(sudoku.map((elem, i) => {
            return elem.map((element, ind) => {
                if(i === 0 && ind === 0) {
                    if (element.value === undefined) {
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
                    console.log(element.value)
                    if (element.value === undefined) {
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
    }, [])

    useEffect(() => {
        console.log(sudoku)
 }, [sudoku])

    useEffect(() => {
        setSudoku(initialSudoku)
        setSaveID(null)
        setResultText("You have the empty field!")
    }, [choice_Game, info_about_change_link])

    useEffect(() => {
        if(!showResult)
          clearTimeout(timeOut_id_Ref.current)
    }, [showResult])


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

        setShowResult(true)

        let isWon = true

        let isEmpty = false

        row: for( let i = 0; i < sudoku.length; i++) {
                for(let j = 0; j < sudoku[i].length; j++) {
                    if(sudoku[i][j].isSame) {
                        console.log(sudoku[i][j])
                        setResultText("You have the same value!")
                        soundSameValue()
                        isEmpty = true
                        break row
                    }
                }
            }

            if(!isEmpty) {
              row: for( let i = 0; i < sudoku.length; i++) {
                     for(let j = 0; j < sudoku[i].length; j++) {
                        if(sudoku[i][j].value === null) {
                            setResultText("You have the empty field!")
                            soundEmptyFeild()
                            isWon = false
                            break row
                        }
                    }
                }

                if(isWon) {
                    setResultText("You won!")
                    soundVictory()
                }
            }
        
            timeOut_id_Ref.current = setTimeout(() => {
                 setShowResult(false)
            }, 3000)
        
    }

    const handlerReset = () => {
        setSudoku(sudoku.map((elem, i) => {
            return elem.map((element, j) => {
                if(!element.isInitialValue) {
                    return {
                        ...element,
                        value: null,
                        isSame: false,
                        backgroundGreen: false
                    }
                }else {
                    return {
                        ...element,
                        isSame: false,
                        backgroundGreen: false
                    }
                }
            })
        }))

        setSaveID(null)
    }

    useEffect(() => {
           if(resultText === "You won!") {
            setSudoku(sudoku.map((elem, i) => {
                return elem.map((element, j) => {
                    return {
                        ...element,
                        backgroundGreen: true
                    }
                })
            }))

           }
    }, [resultText])
    
    return (<Main_Container>

        <Container>

            <Container_Result_Btn>
                <button onClick={handlerShowResult}> RESULT </button>
            </Container_Result_Btn>

            <Container_Reset_Btn>
                <button onClick={handlerReset}> RESET </button>
            </Container_Reset_Btn>

            {
                showResult && <Result_Text resultText={resultText}> 
                                    <p>
                                        <AiFillCloseCircle className={`${SudocuStyles.icon}`} />
                                        {resultText}
                                    </p> 
                              </Result_Text>
                
            }

            <Boxes_Container className={`${SudocuStyles.aaa} ${choice_Game === links[0][0] && "" || 
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
                                                    ${element.backgroundGreen && SudocuStyles.choose_box}
                                                    `}
                                        style={{borderBottom: i === 2 ? "3px solid #000" : i === 5 ? "3px solid #000" : null,
                                                borderRight: j === 2 ? "3px solid #000" : j === 5 ? "3px solid #000" : null,
                                                }}

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
            </Boxes_Container>
            {
                showNumbers && <ChooseNumber handlerAddNumber={handlerAddNumber} />
            }

        </Container>

    </Main_Container>)
}