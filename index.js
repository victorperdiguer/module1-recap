/// Iteration 2: getMaxNum

/* Your code goes here */

function getMaxNum(list) {
    return Math.max(...list.filter(elem => typeof elem === 'number'));
}
console.log(getMaxNum([45, 67, 12, 34])) // Should return 67
console.log(getMaxNum(['hello', [0, 1, 2], 34, 45, 12, 0])) // Should return 45



/// Iteration 3: changeItem

/* Your code goes here */

// Iteration 3 tests:
function changeItem(list, firstNum, secondNum) {
    for (let i = 0; i<list.length; i++) {
        if (list[i] === firstNum) {
            list[i] = secondNum;
        }
    }
    return list;
}
console.log(changeItem([3, 5, 7], 3, 4)) // Should return [4,5,7]
console.log(changeItem([17, 18, 6, 18, 3], 18, 2)) // Should return [17, 2, 6, 2, 3];
console.log(changeItem([1, 1, 3, 2, 4, 1, 1], 1, 8)) // Should return [8, 8, 3, 2, 4, 8, 8]



/// Iteration 4: orderByDate
function orderByDate (birthdays) {
    return birthdays.sort((a, b) => a.year - b.year);
}
console.log(orderByDate(birthdays)) // Should return them ordered 1979, 1988, 1989, 1990
console.log(orderByDate(importantDates)) // Should return them ordered 2013, 2014, 2019



/// Iteration 5: new machine gun

/* Your code goes here */
class Weapon {
    constructor(type, power, ammo = 10) {
        this.type = type,
        this.power = power,
        this.ammo = ammo,
        this.shootingInterval = undefined
    }

    shoot() {
        this.shootingInterval = setInterval(() => {
            this.ammo--;
            console.log("pewpew!", "ammo left:", this.ammo);
        }, 30)
    }

    stopShooting(){
        clearInterval(this.shootingInterval);
        console.log("HOLD YOUR FIRE!");
    }

    reload(bullets){
        setTimeout(() => {
            this.ammo += bullets;
            console.log("Reload!", "Total ammo:", this.ammo);
        }, 2000);
    }
}
// Iteration 5 tests
const machineGun = new Weapon('Machine gun', 90, 50);
console.log('Begin:')
machineGun.shoot();
setTimeout(() => machineGun.stopShooting(), 1000);
setTimeout(() => machineGun.reload(35), 1500);


