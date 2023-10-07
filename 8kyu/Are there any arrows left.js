// function anyArrows(arrows){
//     // arrow it
//     return arrows.some(elem => !elem.damaged);
//   }

let anyArrows = (arrows) => arrows.some(e => e.damaged ? false : true);