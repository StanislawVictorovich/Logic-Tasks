const summRecurs = (number) => {
    if (!number) return 0;
    if (number <= 0) return number + summRecurs(++number);
    return number + summRecurs(--number);
}

console.log(summRecurs(-90));