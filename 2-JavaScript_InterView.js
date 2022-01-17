// 1 : Swaping Values 

    let array =[1,2,3,4,5];

        //A:  Temp Variable

        let temp = array[0];
        array[0] = array[4];
        array[4]= temp;

        console.log(array)

        //B:  Array Destructring

        [array[0], array[4]]=  [[array[4], array[0]]];

        console.log(array);

        //C: Math 

        let a = 1; let b = 2;

        b = a +(a = b) - b;

        console.log(a, b);


// 2 : Destructuring aliases
    // aliases means: the destructured variable to have a different name than the property name / Property Rename

    let info = {
        name: "JavaScript",
        founded: 1995,
        founder: "Brendan Eich"
    }

        let {name: userName, founder: createrName} = info;

// 3 : get value as data type

    //  input field valu get as stirng. which value is basically Number Type then

    let value  = document.querySelector("#number").valueAsNumber;

    console.log(value);

// 4: remove duplicate value from array

     let array = [1,2,3,4,5,6,6,6,6,6,];

     let newArray = [...new Set(array)];

     console.log(newArray);

// 5: Compare tow arrays by value, Length and index

    const hasSameElements = (a,b)=>{
        a.length === b.length && a.every((v, i) => v === b[i]);
    }

    console.log(hasSameElements([1,2], [1, 2]));

//6:  Shuffling array
    // Shuffling:  randomly reorders elements of the array

    let numbers = [1,2,3,4,5,6,7];

    console.log(numbers.sort(()=> Math.random() -0.5 ));

// 7 : Comma Operator
    // The comma operator ( , ) evaluates each of its operands (from left to right) and returns the value of the last operand.

    let x = 1;
    x = (x++, x);

    console.log(x);

    let y = (2, 3);
    console.log(y) // 3




