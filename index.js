const findMatching = (driverArray, name) => {
    return driverArray.filter(driver => {
        return driver.toLowerCase() === name.toLowerCase()
    })
};

const fuzzyMatch = (driverArray, letters) => {
    return driverArray.filter(driver => driver.startsWith(letters))
};

const matchName = (driverArray, name) => {
    return driverArray.filter(driver => driver.name === name)
};