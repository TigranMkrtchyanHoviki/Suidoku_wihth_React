import styled, { keyframes, css } from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";

export const show_result = keyframes`
       0% {
           transform: rotate(-90deg);
       }
   
       70% {
           transform: rotate(10deg);
       }
   
       90% {
           transform: rotate(-10deg);
       }
   
       100% {
           transform: rotate(0deg)
       }
`

export const Main_Container = styled.section`
//    padding-top: 50px;
`

export const Container = styled.div`
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
`

export const Container_Result_Btn = styled.div`
   position: absolute;
   left: 20%;
   > button {
          padding: 15px 25px;
          background: rgb(34,193,195);
          background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(184,93,214,1) 0%, rgba(128,125,222,1) 0%, rgba(77,162,207,1) 0%, rgba(237,45,253,1) 100%);
          border-radius: 5px;  
          border: none;
          color: #fff;
          font-size: 18px;
          letter-spacing: 2px;
          box-shadow: 0px 0px 10px #000;
    }
`

export const Container_Reset_Btn = styled.div`
   position: absolute;
   top: 57%;
   left: 20%;
   > button {
          background: rgb(34,193,195);
          background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(184,93,214,1) 0%, rgba(125,222,154,1) 0%, rgba(30,40,145,1) 100%);
          padding: 15px 30px;
          border-radius: 5px;  
          border: none;
          color: #fff;
          font-size: 18px;
          letter-spacing: 2px;
          box-shadow: 0px 0px 10px #000;
   }
`

export const Result_Text = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   bottom: 0;
   right: 0;
   width: 100%;
   height: 100vh;
   background: #cccbcb8d;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 10px;
   z-index: 9;

   > p {
       width: 500px;
       height: 300px;
       background: rgb(34,193,195);
       background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(184,93,214,1) 0%, rgba(128,125,222,1) 0%, rgba(77,162,207,1) 0%, rgba(237,45,253,1) 100%);
       border-radius: 30px;
       text-align: center;
       line-height: 300px;
       font-size: 30px;
       position: relative;
       transform-origin: 50% 10%;
       animation: ${show_result} 0.5s ease-out forwards;
       ${props => console.log(props)}
       ${props => props.resultText === "You have the empty field!" ? css`color: #fff` :
        props.resultText === "You have the same value!" ? css`color: #a80606` :
            props.resultText === "You won!" ? css`color: #0000ff` : null}
   }
`

export const Boxes_Container = styled.div`
   display: flex;
   flex-wrap: wrap;
   width: 559px;
   height: 559px;
   padding: 5px;
   background: #c5bbbba7;
   border-radius: 5px;
   box-shadow: 0px 0px 20px #000;
`