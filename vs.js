const newvalue = {
    lakshmi: {
        age: 27,
        DOB: '18.07.1996'
    }, maha: {
        age: 25,
        DOB: '11.09.1999'
    }, suki: {
        age: 25,
        DOB: '10.04.2001'
    }
}
const finalInput = []

const getData = (data) => {
    console.log("check dataaaaaaa", data);
    Object.keys(newvalue).map((value) => {

        console.log('2222222222', value.split('').some((arr) => arr === data))

        if (value.split('').some((arr) => arr === data)) {

            const output = { ...newvalue[value], name: value }
            finalInput.push(output)
        }
        // value.split('').filter((arr) => {
        //     if (arr === data) {
        //         const output = { ...newvalue[value], name: value }
        //         // if (!(finalInput.includes(output))) {
        //             finalInput.push(output)
        //         // }
        //     }

        // }
        // )
    })

}
getData('a')
console.log("rtuen", finalInput);


const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
    { id: 4, name: 'David', age: 40 },
    { id: 5, name: 'Eve', age: 45 }
];

// Step 1: Filter users whose names contain the letter 'i'
const usersWithI = users.filter(user => user.name.includes('i'));
console.log(usersWithI, "l;kljkhgjthd"); // Output: ['Alice', 'Charlie', 'David']

// Step 2: Map to get an array of names
const namesWithI = usersWithI.map(user => ({ name: user.name } || ({ age: user.age })));

console.log(namesWithI); // Output: ['Alice', 'Charlie', 'David']


const numbers = [65, 44, 12, 4];


const arraFunction = (numbers) => {
    let sum = 0;


    numbers.forEach(ele => sum += ele)
    return sum;

}
const ss = arraFunction(numbers)
console.log("8456789", ss);


const numberss = [65, 44, 12, 4];

const sums = numberss.reduce((acc, num) => acc + num, 0);

console.log("The sum of the numbers iss:", sums)


const a = [65, 44, 12, 4];

const aFunction = (a) => {
    let sum = 0;
    a.forEach(ele => sum += ele)
    return sum;

}
const finaly = aFunction(a)
console.log("pop;lhgjg", finaly);


const blow = [65, 44, 12, 4]

const handleSubmit = (blow) => {
    const sum = blow.reduce((acc, bl) => acc + bl, 0)
    const indexvalue = blow.map((index) => `${index}`);
    const mainValue = blow.filter(bl => bl > 12)
    return ({ sum, indexvalue, mainValue })

}
const sum = handleSubmit(blow);
console.log("accccnjhgcc", sum);



const employees = [
    { name: 'a', age: 20, salary: 1000 },
    { name: 'b', age: 18, salary: 500 },
    { name: 'c', age: 20, salary: 8000 }]

const employeToltal = (employees) => {

    const filterEmployes = employees.filter(employee => employee.age === 20)
    const total = filterEmployes.reduce((acc, employee) => acc + employee.salary, 0);
    const final = filterEmployes.length ? total / filterEmployes.length : 0;
    return final;

}
const output = employeToltal(employees)
console.log("lkljjghfduio", output);



const employee = [
    { name: 'a', age: 20, salary: 1000 },
    { name: 'b', age: 18, salary: 500 },
    { name: 'c', age: 20, salary: 8000 }
];

const employeeToltal = (employee) => {
    const { total, count } = employee.reduce((acc, employe) => {
        if (employe.age === 20) {
            acc.total += employe.salary;
            acc.count++;
        }
        return acc;
    }, { total: 0, count: 0 });

    return count ? total / count : 0;
};

const outputs = employeeToltal(employees);
console.log("Average salary for employees aged 20:", outputs);


const fruitss = ["apple", "orange", "cherry"];
let text = "";

const indexhandles = (fruitss) => {
    fruitss.forEach((item, index) => text += index + ": " + item + "<br>");
    return text;
}

const finalOutputs = indexhandles(fruitss);
console.log("1qwie00000000urfhvb", finalOutputs);



const fruits = ["apple", "orange", "cherry"];

const indexhandle = (fruits) => {
    const values = fruits.map((value, index) => index + ": " + value);
    return values;
}

const finalOutput = indexhandle(fruits);
console.log("1qwieurfhvb", finalOutput);

const names = [
    { name: "Antony", Des: "Developer" },
    { name: "Guptha", Des: "Tester" },
    { name: "Ajith", Des: "Developer" },
    { name: "BhrathJeeva", Des: "productOwner" }
]
// o/p {Developer: [Antony, Ajith], Tester: [Guptha], productOwner: [Bharath Jeeva]}



const handlenames = (names) => {
    const categoryNames = {};
    names.forEach(person => {
        const { name, des } = person
        if (categoryNames[des]) {
            categoryNames[des].push(name)
        } else {
            categoryNames[des] = [name]
        }

    });
    return categoryNames;
};

const nameofObject = handlenames(names)
console.log("namessletehshjx", nameofObject);



const employeNames = [
    { name: "Antony", Des: "Developer" },
    { name: "Guptha", Des: "Tester" },
    { name: "Ajith", Des: "Developer" },
    { name: "BhrathJeeva", Des: "productOwner" },
    { name: "Sundar", Des: "Devops" }
]

const handleEmployes = (employeNames) => {
    const splitCategory = {};

    employeNames.map(person => {
        const { name, Des } = person
        if (splitCategory[Des]) {
            splitCategory[Des].push(name)
        } else {
            splitCategory[Des] = [name]
        }

    })
    return splitCategory;
}

const categoryOutput = handleEmployes(employeNames)
console.log("employesSplitss", categoryOutput);


const products = [
    { id: 1, name: 'Laptop', price: 800, category: 'Electronics' },
    { id: 2, name: 'Headphones', price: 100, category: 'Electronics' },
    { id: 3, name: 'Shirt', price: 25, category: 'Clothing' },
    { id: 4, name: 'Shoes', price: 50, category: 'Clothing' },
];


const handlefilter = (products, category) => {
    const filteredProducts = products.filter(product => product.category.toLowerCase() === category.toLowerCase()); // Case-insensitive filtering
    return filteredProducts;
}
const filteredElectronics = handlefilter(products, 'Electronics');
const filteredClothing = handlefilter(products, 'Clothing');
console.log("Electronics:", filteredElectronics);
console.log("Clothing:", filteredClothing);
// const outputss = handlefilter(products)
// console.log("l;kjjhgh",outputss);



const newmericeName = [
    { name: 'sunder', des: 'developer' },
    { name: 'kavi', des: 'tester' },
    { name: 'guriya', des: 'manager' },
    { name: 'laks', des: 'developer' }]

const handleNewmeric = (newmericeName) => {
    const categoryNames = {}

    newmericeName.map(person => {
        const { name, des } = person

        if (categoryNames[des]) {

            categoryNames[des].push(name)
        } else {
            categoryNames[des] = [name]

        }


    })
    return categoryNames
}


const Outputs = handleNewmeric(newmericeName)
console.log("categoryy:", Outputs);



const myAwesomeArray = [
    { id: 1, name: "john" },
    { id: 2, name: "Alli" },
    { id: 3, name: "Mass" },
]

myAwesomeArray.forEach(element =>
    console.log(element.name));

const array = [1, 2, 3, 4, 5]
const value = array.map(x => x * x).reduce((total, value) => total + value)
console.log("098765446", value);

const persons = [
    { name: "John", age: 50 },
    { name: "Dev", age: 40 },
    { name: "pavaa", age: 40 }
];


const handlePersons = (persons) => {

    const arrayAge = {};
    persons.map(person => {
        const { name, age } = person;
        if (age) {
            if (arrayAge[age]) {
                arrayAge[age].push(name);
            } else {
                arrayAge[age] = [name];
            }
        }
    })
    return arrayAge;

}
const personOutput = handlePersons(persons)
console.log("name age ", personOutput);


const employesNames = [
    { name: "John", age: 50, des: 'Developer' },
    { name: "Dev", age: 40, des: 'Tester' },
    { name: "pavaa", age: 40, des: 'Developer' }
];

const filterEmployes = (employesNames) => {
    const arrayAge = {};
    employesNames.map(person => {
        const { name, age, des } = person;
        if (!arrayAge[age]) {
            arrayAge[age] = {};
        }
        if (!arrayAge[age][des]) {
            arrayAge[age][des] = [];
        }
        arrayAge[age][des].push(name);
    });
    return arrayAge;
};

const finalyOutput = filterEmployes(employesNames);
console.log("name age ", finalyOutput);


const productss = [
    { name: "Shirt", price: 20 },
    { name: "Shoes", price: 50 },
    { name: "Hat", price: 15 }
];

// Initialize totalPrice to 0
let totalPrice = 0;

// Loop through each product and add its price to totalPrice
//   for (const product of productss) {
//     totalPrice += product.price;
//   }
const totalProductss = productss.reduce((sum, product) => sum += product.price, 0)
console.log("Total price (reduce):", totalProductss);

// productss.forEach(product=>{totalPrice+=product.price,0})
// console.log("Total price (reduce):", totalPrice);

//   console.log("Total price (loop):", totalPrice); // Output: Total price (loop): 85

// nums = [1, 2, 3, 4]
// const initial = 100;
// const totalNums = nums.reduce((acc, num) => acc + num * num, initial)
// console.log("Numssssss:", totalNums);

// nums = [1, 2, 3, 4]

// // const initial = 100;

// const handleNums = (nums) => {
//     return nums.reduce((acc, num) => acc + num * num, initial)
// }

// const totalNums = handleNums(nums)
// console.log("sssssssssss", totalNums);

// x = [1, 2, 3, 4]
// initial = 100;

// for (const num of x) {
//     initial = num + num;
//     console.log(initial);
// }
// console.log("Total initial (loop):", initial);

const nums = [1, 2, 3, 4]
const sumg = (accum, curr) => { return accum + curr * curr; }
const init = 100

const reducer = (nums, fn, init) => {
    let startvalue = init;
    for (const number of nums) {
        startvalue = fn(startvalue, number);
    }
    return startvalue
};
console.log(reducer(nums, sumg, init), "shjsjhshh");