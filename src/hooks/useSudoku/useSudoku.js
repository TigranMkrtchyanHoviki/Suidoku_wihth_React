

export function useSudoku (arr) {
    let id = 0
    return  arr.map((elem, i) => {
         return elem.map((element, ind) => {
             if(i === 0 && ind === 0) {
                 if(!element.value){
                     return {
                         ...element,
                         index: ind,
                         isSame: false, 
                         value: null,
                         id: 0
                     }
                 }else {
                     return {
                         ...element,
                         index: ind,
                         isSame: false, 
                         id: 0
                     }
                 }
             }else {
                 id += 1
                 if(!element.value) {
                         return {
                             ...element,
                             index: ind,
                             isSame: false, 
                             value: null,
                             id: id
                         }
             
                 }else {
                     return {
                         ...element,
                             index: ind,
                             isSame: false, 
                             id: id
                     }
                 }
             }
         })
      })
}