const inArray = (arr, num) => {
    for (let i = 0; i < arr.length; i += 1) {
        if (num == arr[i]) return true;
    };
    return false;
}

const createRand = (randLength, min, max) => {
let randArray = [],
    i = 0;
if (randLength > (max - min + 1)) {
    return null;
}
while (i < randLength) {
    let rand = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!(inArray(randArray,rand))){
        i += 1;
        randArray.unshift(rand);
    }
};
return randArray;
}

const pick = (slot) => {
    
}

const russianRoulette = (numOfBullets) => {
    const magCapacity = 8;

    let magazine = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0
    };
    const ammo = numOfBullets;
    if (ammo <= 0) {
        return 'You both survive. For now.';
    }
    if (ammo >= 8) {
        console.log(`There's no point in playing the game now, roll a dice instead. Whoever gets a value lesser than 2 pulls the trigger. In case both do, reroll.`);
    }
        let randomizeAmmo = createRand(ammo, 1, 8);
        console.log(randomizeAmmo.sort());
        for (const el of randomizeAmmo) {
            for (const elem in magazine) {
                if (el == elem) {
                    magazine[elem] += 1;
                }
            }
        }
        return magazine;
        };


console.log(russianRoulette());


