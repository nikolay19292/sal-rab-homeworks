// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {
    let data = JSON.parse(json);
    let products = data.products;
    return data.products;


    // Аргументом функции является JSON

    // Преобразуйте строку json, переданную как аргумент функции,
    // в объект с помощью функции JSON.parse(json)
    // и запишите в переменную data
    // Верните как результат функции свойство products объекта data
}

function renderProductsCards(json){
    clearProducts();
    let products = parseProducts(json);
    length = products.length;
    for (let i = 0; i < length; i += 1) {
        addProduct(products[i]);}
    // дальнейшие действия требуется выполнять тут
 
// Напишите функцию renderProductsCards(json)
  }