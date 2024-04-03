import styled, {keyframes, css} from "styled-components";

export const lavel_1_game1_move = keyframes`

     0% {
         right: 15px;
         top: 5px;
     }
     
     5.1% {
         top: 60px;
         right: 15px;
     }
     
     74.8% {
         top: 60px;
         right: -806px;
     }
     
     100% {
         top: 125px;
         right: -806px;
     }
`

export const lavel_1_game2_move = keyframes`

     0% {
         right: 15px;
         top: 5px;
     }
     
     5.1% {
         top: 60px;
         right: 15px;
     }
     
     74.8% {
         top: 60px;
         right: -806px;
     }
     
     100% {
         top: 180px;
         right: -806px;
     }
`

export const lavel_1_game3_move = keyframes`

     0% {
         right: 15px;
         top: 5px;
     }
     
     5.1% {
         top: 60px;
         right: 15px;
     }
     
     74.8% {
         top: 60px;
         right: -806px;
     }
     
     100% {
         top: 235px;
         right: -806px;
     }
`

export const lavel_1_game4_move = keyframes`

     0% {
         right: 15px;
         top: 5px;
     }
     
     5.1% {
         top: 60px;
         right: 15px;
     }
     
     74.8% {
         top: 60px;
         right: -806px;
     }
     
     100% {
         top: 290px;
         right: -806px;
     }
`

export const Li = styled.li`
   background: #c44848 !important;
   position: absolute;
   right: 7px;
   top: 0px;
   animation: ${lavel_1_game1_move} 1s ease forwards;
   z-index: -1;
`

export const Header_Container_Logo = styled.div`
   width: 85px;
   height: 85px;
   border-radius: 42.5px;
   overflow-y: hidden;
   box-shadow: 0px 0px 15px #013f01;

   > img {
      width: 100%;
   }
`

export const Header_Container = styled.header`
   position: fixed;
   width: 100%;
   height: 100px;
   background: #140167;
   display: flex;
   justify-content: space-between;
   align-items: center;
   z-index: 10;
   padding: 0px 100px;
` 

export const Levels = styled.div`
width: 400px;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;

> ul {
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;

   > li {
       width: 120px;
       height: 60px;
       background: #013f01;
       color: #ffffff;
       position: relative;
       list-style-type: none;
       text-align: center;
       line-height: 60px;
       font-size: 23px;
       letter-spacing: 2px;
       transition-duration: 0.3s;

       &:hover {
        cursor: pointer;
        height: 50px;
        line-height: 50px;
        background: #37d837;
       }

       &:nth-child(1) {
        border-radius: 10px 0px 0px 10px;
       }

       &:nth-child(3) {
        border-radius: 0px 10px 10px 0px;
       }

       > ul {
        width: 150px;
        list-style-type: none;
        z-index: 5;
         
        > li {
            height: 50px;
            border-radius: 10px;
            list-style-type: none;
            transition-duration: 0.3s;      
            &:nth-child(1) {
                background: #c44848 !important;
                position: absolute;
                right: 7px;
                top: 0px
            }
            &:nth-child(2) {
                background: #5dc448 !important;
                position: absolute;
                right: 7px;
                top: 0px;
            }

            &:nth-child(3) {
                background: #485fc4 !important;
                position: absolute;
                right: 7px;
                top: 0px;
            }

            &:nth-child(4) {
                background: #c4488c !important;
                position: absolute;
                right: 15px;
                top: 0px;
            }

            &:hover {
                opacity: 0.7;
                border-radius: 10px;
                transform: scaleX(1.2)
            }
            > a {
                display: block;
                width: 100%;
                height: 100%;
                text-decoration: none;
                color: #ffffff;
                z-index: 30;
                line-height: 50px;
                font-size: 18px;
                padding: 0px 15px;
            }
         }
       }
   }
   
}
`

export const About_game_btn = styled.div`
   > a {
        text-decoration: none;
        font-size: 30px;
        background: #9c22b7;
        padding: 10px 20px;
        border-radius: 10px;
        color: #fff;
        box-shadow: 0px 0px 20px #fff;
        transition-duration: 0.3s;

        &:hover {
            opacity: 0.7;
        }
   }
`