export const strLen = (str:string) => {
    const len = str.length;
    return len;
}

export const isPalindrom = (str:string) => {
    let start = 0;
    let end = str.length - 1;
    while(start < end){
        if(str[start] !== str[end]) return false
        start ++;
        end --;
    }
    return true;
}

export const acsSortNumArr = (arr:number[]) => {
    const sortedArr = arr.sort((a, b) => a - b);
    return sortedArr;
}

export const sqrt = (num:number) => {
    if(num < 0){
        throw Error('Cannot square root of negative number');
    }
    return num ** 0.5;
}

export const sumArray = (array:number[]) => {
    let sumOfArr = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        sumOfArr += element;
    }
    return sumOfArr;
}

export const fetchUserData = async (id:number) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    if(Object.keys(data).length === 0){
        throw Error('User ID does not exist!');
    }

    return data;
}


export const nextFib = (fibArr:number[]) => {
    let first = 0;
    let second = 1;
    let temp = 0;

    for (let index = 0; index < fibArr.length; index++) {
        const element = fibArr[index];
        
        if(element !== second){
            throw Error("the array is not in fibonacci order")
        }

        temp = first;
        first = second;
        second += temp;
    }

    return second;
}
