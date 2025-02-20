
function  willSuccess( marks ) {
   if(Array.isArray(marks) && marks.every(item => typeof item === "number")){
    let markArray = [];
    let fail = [];
    let pass = [];
 for(let mark of marks){
        markArray.push(mark)
       
    }
    for(let i = 0 ; i < markArray.length ; i++){
        let markArrayREsult = markArray[i];
        if(markArrayREsult < 50){
            fail.push(markArrayREsult)
        }
        if(markArrayREsult > 50){
            pass.push(markArrayREsult)
        }
    }
    if(pass.length > fail.length  ){
        return true
    }
    
    if(pass.length < fail.length ){
        return false
    }
    else{
        return false
    }
   }
   else{
     return "Invalid"
   }

}


let marks = [60, 40, 40, 40, 30];
const result = willSuccess(marks);