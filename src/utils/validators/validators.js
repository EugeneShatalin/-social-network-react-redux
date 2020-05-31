
//валидатор для отработки пустоты поля
export const required = value => {
    if (value) return undefined;
    return "Field is required";
}

//валидатор для обработки длины вводимых данных
//используем замыкание для передачи параметров дочерней функции
export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;

    return undefined;
}