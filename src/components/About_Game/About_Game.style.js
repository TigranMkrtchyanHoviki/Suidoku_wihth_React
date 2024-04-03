import styled, { keyframes } from "styled-components";

import cover_about_img from "./../../imgs/cover_imgs/cover_3.jpg"

export const show_about = keyframes`
   0% {
      top: 30%
   }
   
   100% {
      top: 10%
   }
`

export const go_down = keyframes`
   0% {
      transform: translate(-50%, -50%);
   }
   
   100% {
      transform: translate(-50%, -40%);
   }
`

export const About_Section = styled.section`
   height: 100vh;
   display: flex;
   justify-content: center;
   z-index: 100;
   position: relative;
   background: url(${cover_about_img});
   background-repeat: no-repeat;
   background-size: cover;
`

export const About_Game_Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   animation: ${go_down} 1.5s linear 1 forwards;
`

export const About_Game_inner_container = styled.div`
   width: 1000px;
   height: 450px;
   background: #e0dbdb;
   border-radius: 15px;
   box-shadow: 0px 0px 10px #ffffff;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 30px 50px;
`

export const About_Game_rules_text = styled.p`
   width: 400px;
   font-size: 23px;
   color: #777171;
   letter-spacing: 1px;
   line-height: 32px;

   &:first-letter {
      font-size: 50px;
      color:#02650b;
   }
`

export const About_Game_title = styled.div`
   display: flex;
   position: absolute;
   top: 30%;
   z-index: -1;
   animation: ${show_about} 1.5s linear 1 forwards;
   justify-content: center;
      span {
         display: inline-block;
         background: #cdc8c8;
         padding: 10px 20px;
         border-radius: 10px;
         font-size: 50px;
         font-weight: 700;
         letter-spacing: 3px;
         color: #02650b;
         text-align: center;
         box-shadow: 0px 0px 20px #fff;
      }
`

export const About_Game_start_game_container = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 50px;
     > button {
         text-decoration: none;
         padding: 10px 20px;
         color: #fff;
         border-radius: 10px;
         background: linear-gradient(#ed3535, #02650b, #3ba5f6);
         letter-spacing: 1px;
         font-size: 23px;
         border: none;
         transition-duration: 0.3s;
      }

      a:hover {
         padding: 10px 50px;
         opacity: 0.9;
      }
`

const rotate_img_sudoku_1 = keyframes`
   0% {
      transform: rotateX(0deg);
   }
   
   100% {
      transform: rotateX(360deg);
   }
`

const rotate_img_sudoku_2 = keyframes`
   0% {
      transform: rotateX(0deg);
   }
   
   100% {
      transform: rotateX(360deg);
   }
`

const rotate_img_sudoku_3 = keyframes`
   0% {
      transform: rotateX(0deg);
   }
   
   100% {
      transform: rotateX(360deg);
   }
`

const rotate_img_sudoku_4 = keyframes`
   0% {
      transform: rotateX(0deg);
   }
   
   100% {
      transform: rotateX(360deg);
   }
`

const rotate_img_sudoku_5 = keyframes`
   0% {
      transform: rotateX(0deg);
   }
   
   100% {
      transform: rotateX(360deg);
   }
`

const rotate_img_sudoku_6 = keyframes`
   0% {
      transform: rotateX(0deg);
   }
   
   100% {
      transform: rotateX(360deg);
   }
`

const rotate_img_sudoku_7 = keyframes`
   0% {
      transform: rotateX(0deg);
   }
   
   100% {
      transform: rotateX(360deg);
   }
`

const rotate_img_sudoku_8 = keyframes`
   0% {
      transform: rotateX(0deg);
   }
   
   100% {
      transform: rotateX(360deg);
   }
`

const rotate_img_sudoku_9 = keyframes`
   0% {
      transform: rotateX(0deg);
   }
   
   100% {
      transform: rotateX(360deg);
   }
`

const rotate_img_sudoku_10 = keyframes`
   0% {
      transform: rotateX(0deg);
   }
   
   100% {
      transform: rotateX(360deg);
   }
`

export const About_Game_img_container = styled.div`
   width: 400px;
   height: 400px;
   border-radius: 0px 10px 10px 0px;
   border: 1px solid #02650a9f;
   border-left: none;
       img {
              width: 100%;
              animation: ${rotate_img_sudoku_1} 3s ease-in 6s 1, 
                         ${rotate_img_sudoku_3} 3s ease-in 18s 1,
                         ${rotate_img_sudoku_2} 3s ease-in 12s 1,
                         ${rotate_img_sudoku_4} 3s ease-in 24s 1,
                         ${rotate_img_sudoku_5} 3s ease-in 30s 1,
                         ${rotate_img_sudoku_6} 3s ease-in 36s 1,
                         ${rotate_img_sudoku_7} 3s ease-in 42s 1,
                         ${rotate_img_sudoku_8} 3s ease-in 48s 1,
                         ${rotate_img_sudoku_9} 3s ease-in 54s 1,
                         ${rotate_img_sudoku_10} 3s ease-in 60s 1;
    }
`