function add(x ,y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

// Complex calculation (10 + 20) * (22 - 11)

function complexCalculation(x, y, w, z) {
    let result = add(x, y) * sub(w, z); // 30 * 11
    return result;
}
complexCalculation(10, 20, 22, 11);


