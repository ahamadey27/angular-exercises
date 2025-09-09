var title = "helllllo ts";
console.log(title);
var product = "keyboard";
var isActive = true;
var price = 100;
var catagories = ['Computing', 'Multimedia'];
var order;
var setOrderNumber = function () {
    order = '001';
};
function getProduct() {
    return 'keyboard';
}
function getFullName(firstName, lastName, age) {
    return "".concat(firstName, " ").concat(lastName, " is ").concat(age, " years old");
}
console.log(getFullName("alex", "hamadey", 30));
