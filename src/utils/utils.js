export const colorsArray = ["olive", "crimson", "orchid", "#b2f930"];

export const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;

export const populateBubbles = () => {
    const bubblesArray = [];
    for (let i = 0; i < 50; i++) {
        const randomNumber = getRandomNumber();
        const index = Math.floor(Math.random() * colorsArray.length);
        bubblesArray.push({
            number: randomNumber,
            color: colorsArray[index],
        });
    }
    return bubblesArray;
};
