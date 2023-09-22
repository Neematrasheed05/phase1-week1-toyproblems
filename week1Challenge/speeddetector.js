function calcDemeritPoints(speed){
    //calculate Demerit points function passes speed as a parameter
    const speedlimit =70;
// declaring a const speed limit which is 70km/s
    const kmPerDemeritPoint = 5;
//this is the demerit points one is going to be given incase they go above limit
    if (speed < speedlimit + kmPerDemeritPoint){
        return "points:0";
        //this if statement states that if the speed limit is less 
        //than 70km/s then they should give 0points of Demerit
    }
    const dempoints = Math.floor((speed-speedlimit)/ kmPerDemeritPoint);
    //this calculates the no. of demerit points one should be given
    //if they go above limit
    //if its 80km/s it will minus 80km/s with the speed limit
    //which is 70km/s which results to 10km/s over limit speed
    //to get demerit point we thenm divide 10 with 5 points and will result to 2
    if (dempoints > 12){
        return "License suspended";
    }
    return "points:" + dempoints;
    //if demerit points exceeds 12 it returns "license suspended"
    //else returns total no. of demerit points
}