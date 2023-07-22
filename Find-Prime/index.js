/// پیدا کردن اعداد اول در یک آرایه
//برای اینکار، نیاز به دو فانکشن داریم که یکی عملیات کلی را انجام دهد یکی هم بررسی اول بودن یا نبودن یکی عدد را


//بررسی اول بودن عدد
const isPrime = num => {
    if (num <= 1) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        } 
    }
    return true
}

const findPrimes = (start, end) => {
    const primeNumbers = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primeNumbers.push(i);
        }
        else {
            console.log(i);
        }
        
    }
    return primeNumbers
}

const num1 = Number(prompt('Please insert first number:'));
const num2 = Number(prompt('Please insert second number:'));


console.log(findPrimes(num1 , num2));


