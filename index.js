
function distanceFromHqInBlocks(blocks){
    return Math.abs (blocks - 42)
}




 function distanceFromHqInFeet (blocks){
     return Math.abs (blocks - 42) * 264
 }




 function distanceTravelledInFeet(a ,b){
    return Math.abs (a - b) * 264
 }

 function calculatesFarePrice (a , b){
  let distance = Math.abs (a - b) * 264
    if (distance < 400){
        return 0
    }else if (distance < 2000){
        return (distance - 400 ) * .02
    
    }else if(distance < 2500){ 
        return 25
    }else {
        return 'cannot travel that far'
    }
 }