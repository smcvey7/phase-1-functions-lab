function distanceFromHqInBlocks(pickup) {
 return Math.abs(42 - pickup);
}

function distanceFromHqInFeet(pickup) {
    return distanceFromHqInBlocks(pickup) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination-start)*264
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)

    if (distance <= 400){
        return 0
    } else if (distance <=2000){
        return (distance-400)*0.02
    } else if (distance <=2500){
        return 25
    } else {
        return 'cannot travel that far'
    }
}