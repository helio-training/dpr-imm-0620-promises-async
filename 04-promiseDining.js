// Building a "Full Stack" system using TimeOuts to represent network/process delays
// The numbers at the end of the logs are desires order
// Simulated Backend
const kitchen = () => {
    const iou = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('prepare food', 3);
            console.log('cook food', 4);
            resolve();
        }, 3000);
    });
    return iou;
}

// Simulated Frontend
const dining = () => {
    console.log('take order', 2);
    const iou = new Promise((resolve, reject) => {
        kitchen().then(() => {
            console.log('receive food', 5);
            setTimeout(() => {
                console.log('eat food', 6);
                console.log('pay bill', 7);
                resolve();
            }, 5000);
        });
    });
    return iou;
}

// Simulated Users
const customers = () => {
    console.log('enter eatery', 1);
    dining().then(() => {
        console.log('leave eatery', 8);
    });
}

customers();