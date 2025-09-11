interface Product
{
    name: string;
    price: number;
    getCategories: () => string[];
    description?: string;

}

class Keyboard implements Product {
    name: string = 'Keyboard';
    price: number = 120;

    getCategories(): string[] {
        return ['Computing', 'Peripherals']
    }
}