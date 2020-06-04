// Code your solution here
function findMatching(drivers, s) {
    return drivers.filter(driver =>
        driver.toLowerCase() == s.toLowerCase())
  }
  
  function fuzzyMatch(drivers, s) {
    return drivers.filter(driver => 
        driver.toLowerCase().startsWith(s.toLowerCase()))
  }
  
  function matchName(drivers, s) {
    return drivers.filter(driver => 
        driver.name == s)
  } 