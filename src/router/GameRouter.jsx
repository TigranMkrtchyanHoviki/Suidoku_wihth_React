import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Sudoku } from "../components/Sudoku";

import GameStyles from "./style.module.css"
import { Header } from "../components/header";
import { Level_1 } from "../components/Levels/level_1";
import { Level_2 } from "../components/Levels/level_2";
import { Level_3 } from "../components/Levels/level_3";

export const GameRouter = () => {

    const [showGamesList_level_1, setShowGamesList_Level_1] = useState(false)
    const [showGamesList_level_2, setShowGamesList_Level_2] = useState(false)
    const [showGamesList_level_3, setShowGamesList_Level_3] = useState(false)
    const [choice_Game, setChoice_game] = useState(null)

    const links = [
        ["level1_game1", "level1_game2", "level1_game3", "level1_game4"],
        ["level2_game1", "level2_game2", "level2_game3", "level2_game4"],
        ["level3_game1", "level3_game2", "level3_game3", "level3_game4"],
    ]

    const handlerShowGamesList = (link_row) => {
        if (link_row === 0) {
            if (showGamesList_level_1) {
                setShowGamesList_Level_1(prev => false)
                setShowGamesList_Level_2(prev => false)
                setShowGamesList_Level_3(prev => false)
            } else {
                setShowGamesList_Level_1(prev => true)
                setShowGamesList_Level_2(prev => false)
                setShowGamesList_Level_3(prev => false)
            }
        }

        if (link_row === 1) {
            if (showGamesList_level_2) {
                setShowGamesList_Level_1(prev => false)
                setShowGamesList_Level_2(prev => false)
                setShowGamesList_Level_3(prev => false)
            } else {
                setShowGamesList_Level_2(prev => true)
                setShowGamesList_Level_1(prev => false)
                setShowGamesList_Level_3(prev => false)
            }
        }

        if (link_row === 2) {
            if (showGamesList_level_3) {
                setShowGamesList_Level_1(prev => false)
                setShowGamesList_Level_2(prev => false)
                setShowGamesList_Level_3(prev => false)
            } else {
                setShowGamesList_Level_2(prev => false)
                setShowGamesList_Level_1(prev => false)
                setShowGamesList_Level_3(prev => true)
            }
        }

    }

    const handlerHideGamesList = (link) => {
        console.log(link)
        setShowGamesList_Level_1(() => false)

        setChoice_game(link)
    }

    return (
        <BrowserRouter>

            <Header showGamesList_level_1={showGamesList_level_1}
                showGamesList_level_2={showGamesList_level_2}
                showGamesList_level_3={showGamesList_level_3}
                links={links}
                handlerShowGamesList={handlerShowGamesList}
                handlerHideGamesList={handlerHideGamesList}
            />

            <div className={`${GameStyles.cover_game}`}>
                <Routes>
                    <Route path={
                        `/${choice_Game === links[0][0] && links[0][0] ||
                        choice_Game === links[0][1] && links[0][1] ||
                        choice_Game === links[0][2] && links[0][2] ||
                        choice_Game === links[0][3] && links[0][3]
                        }`
                    }

                        element={<Level_1 choice_Game={choice_Game} links={links} />} />

                    <Route path={
                        `/${choice_Game === links[1][0] && links[1][0] ||
                        choice_Game === links[1][1] && links[1][1] ||
                        choice_Game === links[1][2] && links[1][2] ||
                        choice_Game === links[1][3] && links[1][3]
                        }`
                    }

                        element={<Level_2 choice_Game={choice_Game} links={links} />} />

                    <Route path={
                    `/${choice_Game === links[2][0] && links[2][0] ||
                        choice_Game === links[2][1] && links[2][1] ||
                        choice_Game === links[2][2] && links[2][2] ||
                        choice_Game === links[2][3] && links[2][3]
                        }`
                    }

                        element={<Level_3 choice_Game={choice_Game} links={links} />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}