import styled from "styled-components";

export const Number_Container = styled.div`
   display: flex;
   flex-wrap: wrap;
   width: 250px;
   height: 250px;
   padding: 5px;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(200%, -25%);
   background: #d4d0d0b9;
   border-radius: 5px;
`

export const Number = styled.div`
   width: 70px;
   height: 70px;
   margin: 5px;
   text-align: center;
   line-height: 70px;
   background: #4164d6;
   font-size: 30px;
   color: #fff;
   border-radius: 5px;

   &:hover {
      background: #fff200;
      cursor: pointer;
      border-radius: 35px;
      /* border: none; */
      color: #ff0000;
      text-shadow: 0px 0px 3px #616060;
      font-size: 40px;
   }
`