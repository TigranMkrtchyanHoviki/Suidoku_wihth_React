import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import HeaderStyles from "./style.module.css"
import logo from "./../../logo/logo_1.png"
import { Li, 
         Header_Container_Logo, 
         Header_Container,
         Levels,
         About_game_btn } from "./header.style"


export const Header = ({ showGamesList_level_1, showGamesList_level_2, showGamesList_level_3, links, handlerShowGamesList, handlerHideGamesList }) => {

    const [level_game_x, setLevel_game_x] = useState(null)

    // console.log("level_game_x", level_game_x)

    const levelRef = useRef()
    const level_1_Ref = useRef()
    const level_2_Ref = useRef()
    const level_3_Ref = useRef()    

    useEffect(() => {
        // const distance = levelRef.current.offsetLeft
        const width_header = levelRef.current.parentNode.offsetWidth

        // const difference = width_header - distance 

        const level_1_distance = width_header - level_1_Ref.current.offsetLeft
        const level_2_distance = width_header - level_2_Ref.current.offsetLeft
        const level_3_distance = width_header - level_3_Ref.current.offsetLeft

        console.log(level_1_distance)
        console.log(level_2_distance)
        console.log(level_3_distance)

        console.log("level_game_x", level_game_x)
         if(showGamesList_level_1)
           setLevel_game_x((prev) => level_1_distance)
        else if(showGamesList_level_2)
           setLevel_game_x((prev) => level_2_distance)
        else if(showGamesList_level_3)
           setLevel_game_x((prev) => level_3_distance)
    }, [showGamesList_level_1, showGamesList_level_2, showGamesList_level_3])

    useEffect(() => {
         
    }, [])

    const getLevels_params = (i) => {
          if(i === 0) 
          return level_1_Ref
          if(i === 1) 
          return level_2_Ref
          if(i === 2) 
          return level_3_Ref
    }

    return (
        <Header_Container>

            <Header_Container_Logo>
                <img src={logo} />
            </Header_Container_Logo>

            <Levels ref={levelRef}>

                {/* start */}


                <ul>
                    {
                        links.map((link_elem, i) => {

                            return (

                                <li  
                                     ref={getLevels_params(i)}
                                     key={i}
                                     onClick={() => handlerShowGamesList(i)}>
                                     level {i + 1}

                                    <ul>

                                        {
                                            showGamesList_level_1 && i === 0
                                            &&
                                            link_elem.map((link, j) => {
                                                return (
                                                    <Li      
                                                        x={level_game_x}
                                                        count={j}
                                                        // id="li"
                                                        key={link}
                                                        className={`${HeaderStyles.level_1}`}
                                                        onClick={(e) => {handlerHideGamesList(link)}}>
                                                        <Link className={`${HeaderStyles.link}`} to={`/${link}`}>Game {j + 1}</Link>
                                                    </Li>
                                                )

                                            }) ||

                                            showGamesList_level_2 && i === 1
                                            &&
                                            link_elem.map((link, j) => {
                                                return (
                                                    <Li
                                                        x={level_game_x}
                                                        key={link}
                                                        className={`${HeaderStyles.level_2}`}
                                                        onClick={() => handlerHideGamesList(link)}>
                                                        <Link className={`${HeaderStyles.link}`} to={`/${link}`}>Game {j + 1}</Link>
                                                    </Li>
                                                )

                                            }) ||

                                            showGamesList_level_3 && i === 2
                                            &&
                                            link_elem.map((link, j) => {
                                                return (
                                                    <Li
                                                        x={level_game_x}
                                                        key={link}
                                                        className={`${HeaderStyles.level_3}`}
                                                        onClick={() => handlerHideGamesList(link)}>
                                                        <Link className={`${HeaderStyles.link}`} to={`/${link}`}>Game {j + 1}</Link>
                                                    </Li>
                                                )

                                            })
                                        }

                                    </ul>


                                </li>

                            )

                        })
                    }
                </ul>



                {/* end */}
            </Levels>
            <About_game_btn>
                <Link to="/about" className={`${HeaderStyles.about_game}`}>About Game</Link>
            </About_game_btn>
        </Header_Container>
    )
}