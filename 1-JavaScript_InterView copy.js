// 1 : Remove False values from any array 
    // A: JavaScript have 6 falsy value => false, "",  NuN, null, undefined, 0 ;

    let array =[1,2, "", false, NuN, null, undefined, 0];

    //B: Passing Boolean to array.filter() will remove falsy values from array

    let newArr2 = array.filter(Boolean);
    console.log(newArr2);


