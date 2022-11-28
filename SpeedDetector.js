// Code Challenge 2: Speed Detector (Toy Problem)

function speedDetector(carSpeed) {
    const speedLimit = 70
    const speedRate = 5

    if(carSpeed <= speedLimit) {            //conditional statement to return 'OK if the speed of a vehicle is less than or equal to the speed limit//
        return "OK";
    }

    const excessSpeed = carSpeed - speedLimit;          //excessSpeed is used to represent the degree at which a driver has exceeded the speed limit//

    let  demeritPoints = 0;
    for(let i = 0; i < excessSpeed; i+= speedRate) {   //for loop to define the point system for awarding demerit points based on the degree of overspeeding//

        demeritPoints += 1
    
    // demeritPoints = points accumulated after every speedRate (5km/h) above the speedLimit
    if(demeritPoints > 12) {
        return "License Suspended";
    }
}
return `Points: ${demeritPoints}`;

}
console.log(speedDetector(100));
