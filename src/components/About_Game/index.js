import { React, useEffect, useRef, useState } from "react"
import sudoku_rules from "../../../src/imgs/rules_img/sudoku-rules_general.png"
import { Link, useNavigate } from "react-router-dom"

import {
    About_Section,
    About_Game_Container,
    About_Game_inner_container,
    About_Game_img_container,
    About_Game_rules_text,
    About_Game_start_game_container,
    About_Game_title
} from "./About_Game.style"

import 'animate.css'

export const About_Game = () => {

    const navigate = useNavigate()

    const [btn_animation, setBtn_animation] = useState(false)

    const handlerEnterAnimation = () => {
        setBtn_animation(true)
    }

    const handlerLeaveAnimation = () => {
        setBtn_animation(false)
    }

    const handler_go_to_sudoku_page = () => {
        navigate(-1)
    }

    return (
        <About_Section className="about">
            <About_Game_title className="title">
                <span>About Game</span>
            </About_Game_title>

            <About_Game_Container className="about_container">
                <About_Game_inner_container>
                    <div>
                        <About_Game_rules_text>
                            Sudoku is played on a grid of 9 x 9 spaces. Within the rows and columns are 9 “squares” (made up of 3 x 3 spaces). Each row, column and square (9 spaces each) needs to be filled out with the numbers 1-9, without repeating any numbers within the row, column or square.
                        </About_Game_rules_text>

                        <About_Game_start_game_container>
                            <button
                                onClick={handler_go_to_sudoku_page}
                                onMouseEnter={() => handlerEnterAnimation()}
                                onMouseLeave={() => handlerLeaveAnimation()}
                                className={`animate__animated ${btn_animation ? "animate__rubberBand" : null}`}>

                                Start Game</button>
                        </About_Game_start_game_container>
                    </div>

                    <About_Game_img_container >
                        <img src={sudoku_rules} />
                    </About_Game_img_container>
                </About_Game_inner_container>
            </About_Game_Container>
        </About_Section>
    )
}