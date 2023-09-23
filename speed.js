//the code calculates the speed
function speedDetector() {
      // Prompt the user to input the car's speed
    const input = prompt("Enter the car's speed:");
    const speed = parseFloat(input);

    const kmPerPoint = 5;
    
    if (speed <= 70) {
      return "Ok";
    } else {
      const points = Math.floor((speed - 70) / kmPerPoint);
      
      if (points >= 12) {
        return "License suspended";
      } else {
        return`Points are: ${points}`;
      }
    }
  }
    speedDetector();
  
  