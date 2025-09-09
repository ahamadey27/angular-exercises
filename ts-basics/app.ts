const title = "helllllo ts";
console.log(title);

const product: string = "keyboard";
const isActive: boolean = true;
const price: number = 100;

const catagories: string[] = ['Computing', 'Multimedia'];

let order: any;
let setOrderNumber = () => {
    order = '001';
}

type Catagories = 'computing' | 'multimedia';

type objectCatagories = {
    computing: string;
    multimedia: string;
};

function getProduct(): string {
    return 'keyboard';
}

function getFullName(firstName: string, lastName: string, age: number): string {
    return `${firstName} ${lastName} is ${age} years old`;
}

console.log(getFullName("alex", "hamadey", 30));