const getRandomThrow = () => {
    const randomNumber = Math.floor((Math.randomNumber() * 2) + 1);
    if (randomNumber === 1){
        return 'rock';
    } else if (randomNumber === 2){
        return 'paper';
    } else if (randomNumber === 3){
        return 'scissors';
    }
};

export default getRandomThrow;