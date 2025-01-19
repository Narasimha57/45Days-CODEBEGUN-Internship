
function step1() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            let a = true; 
            if (a) {
                resolve("Step 1 is completed");
            } else {
                reject("Step 1 failed");
            }
        }, 2000);
    });
}


function step2() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            let a = true; 
            if (a) {
                resolve("Step 2 is completed");
            } else {
                reject("Step 2 failed");
            }
        }, 3000);
    });
}


function step3() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            let a = true; 
            if (a) {
                resolve("Step 3 is completed");
            } else {
                reject("Step 3 failed");
            }
        }, 5000);
    });
}


function step4() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            let a = true; 
            if (a) {
                resolve("Step 4 is completed");
            } else {
                reject("Step 4 failed");
            }
        }, 500);
    });
}


function step5() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            let a = true; 
            if (a) {
                resolve("Step 5 is completed");
            } else {
                reject("Step 5 failed");
            }
        }, 800);
    });
}


step1()
    .then((value) => {
        console.log(value);
        return step2();
    })
    .then((value) => {
        console.log(value);
        return step3();
    })
    .then((value) => {
        console.log(value);
        return step4();
    })
    .then((value) => {
        console.log(value);
        return step5();
    })
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.error(error); 
    });
