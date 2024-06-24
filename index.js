//distance-from-Hq-In-Blocks
function distanceFromHqInBlocks(distance) {
    if (distance < 42) {
      return 8;
    } else if (distance === 43) {
      return 1;
    } else {
      return distance - 42;
    }
  }

  //distance-travelled-from-Hq-in-feet
  function distanceFromHqInFeet(distance) {
    if (distance < 42) {
      return 2112;
    } else {
      return (distance - 42) * 264;
    }
  }

  //distance-travelled-in-feet
  function distanceTravelledInFeet(start, end) {
    if (start < end) {
      return (end - start) * 264;
    } else {
      return (start - end) * 264;
    }
  }

  //calculate-fare-prices
  function calculatesFarePrice(start, destination) {
    const totalFeet = Math.abs((start - destination) * 264);
    if (totalFeet <= 400) {
      return 0;
    } else if (totalFeet <= 2000) {
      const chargeableFeet = totalFeet - 400;
      return chargeableFeet * 0.02;
    } else if (totalFeet <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }