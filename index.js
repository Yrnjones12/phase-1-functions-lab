function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;  
    return Math.abs(pickupLocation - hqLocation);}

    function distanceFromHqInFeet(pickupLocation) {
        const feetPerBlock = 264; 
        const blocks = distanceFromHqInBlocks(pickupLocation);
        return blocks * feetPerBlock;
      }

      function distanceTravelledInFeet(startingBlock, endingBlock) {
        const feetPerBlock = 264;
        const blocksTravelled = Math.abs(endingBlock - startingBlock);
        return blocksTravelled * feetPerBlock;
      }

      function calculatesFarePrice(start, destination) {
        const distance = distanceTravelledInFeet(start, destination);
        let fare;
      
        if (distance <= 400) {
          fare = 0;
        } else if (distance > 400 && distance <= 2000) {
          fare = (distance - 400) * 0.02;
        } else if (distance > 2000 && distance <= 2500) {
          fare = 25;
        } else {
          fare = 'cannot travel that far';
        }
      
        return fare;
      }