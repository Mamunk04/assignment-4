/*function signature/sample */
function  calculateSleepTime( times ) {
       if(Array.isArray(times) && times.every(item => typeof item === "number")){
              let sum = 0
              for(let time of times ){
                  sum = sum + time
              }
              if(sum >= 3600){
                  let hour = sum / 3600 ;
                  let minute = hour - Math.floor(hour) ;
                      minute = minute * 60 ;
                  let second = minute - Math.floor(minute);
                      second = second * 60;
                 let thisTime = "Hour : " + Math.floor(hour) +", "+ "Minute : " + Math.floor(minute) +", "+ "Second :" + second;
                 return thisTime
              }
              else if( sum <3600){
                     hour = 0 ;
                     minute = sum / 60;
                     second = minute - Math.floor(minute);
                     second = second*60;
              let thisTime = "Hour : " + Math.floor(hour) +", "+ "Minute : " + Math.floor(minute) +", "+ "Second :" + Math.floor(second);
              return thisTime
              }
              else if(sum < 60){
                     hour = 0 ;
                     minute = 0;
                     second = sum ;
                     let thisTime = "Hour : " + Math.floor(hour) +", "+ "Minute : " + Math.floor(minute) +", "+ "Second : " + Math.floor(second);
              return thisTime
              }
       }
       else{
        return "Invalid"
       }
}


const times = [0, 5, 100 ];
const totalTime = calculateSleepTime(times);