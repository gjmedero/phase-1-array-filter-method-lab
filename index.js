// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter(function (driver) {
        return driver.toLowerCase() === string.toLowerCase();
    });
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(function (driver) {
        if(string != driver.slice(0,string.length))
            return false;
            
        return driver.includes(string);
    });
}

function matchName(drivers, string) {
    return drivers.filter(function (driver) {
        return driver.name == string;
    });
}