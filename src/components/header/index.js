import React from "react";
import { Link } from "react-router-dom";
import HeaderStyles from "./style.module.css"
import logo from "./../../logo/logo_1.png"

export const Header = ({ showGamesList_level_1, showGamesList_level_2, showGamesList_level_3, links, handlerShowGamesList, handlerHideGamesList }) => {

    return (
        <header>
            <div className={`${HeaderStyles.container_logo}`}>
                <img src={logo} />
            </div>
            <div className={`${HeaderStyles.levels}`}>

                {/* start */}


                <ul>
                    {
                        links.map((link_elem, i) => {

                            return (

                                <li  key={i}
                                     onClick={() => handlerShowGamesList(i)}>
                                    level {i + 1}

                                    <ul>

                                        {
                                            showGamesList_level_1 && i === 0
                                            &&
                                            link_elem.map((link, j) => {
                                                return (
                                                    <li
                                                        key={link}
                                                        className={`${HeaderStyles.level_1}`}
                                                        onClick={() => handlerHideGamesList(link)}>
                                                        <Link className={`${HeaderStyles.link}`} to={`/${link}`}>Game {j + 1}</Link>
                                                    </li>
                                                )

                                            }) ||

                                            showGamesList_level_2 && i === 1
                                            &&
                                            link_elem.map((link, j) => {
                                                return (
                                                    <li
                                                        key={link}
                                                        className={`${HeaderStyles.level_2}`}
                                                        onClick={() => handlerHideGamesList(link)}>
                                                        <Link className={`${HeaderStyles.link}`} to={`/${link}`}>Game {j + 1}</Link>
                                                    </li>
                                                )

                                            }) ||

                                            showGamesList_level_3 && i === 2
                                            &&
                                            link_elem.map((link, j) => {
                                                return (
                                                    <li
                                                        key={link}
                                                        className={`${HeaderStyles.level_3}`}
                                                        onClick={() => handlerHideGamesList(link)}>
                                                        <Link className={`${HeaderStyles.link}`} to={`/${link}`}>Game {j + 1}</Link>
                                                    </li>
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
            </div>
            <div>
                <Link>About</Link>
            </div>
        </header>
    )
}