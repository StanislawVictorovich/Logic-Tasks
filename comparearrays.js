// есть баг, попробуй пофиксить

let mas1 = [1, 4, 6, 7, 3];
let mas2 = [1, 4, 6, 7, 2];

const compare = (array1, array2) => {
   if (array1.length !== array2.length)
        return false;
    for (var i = array1.length; i--;) {
        if (array1[i] !== array2[i])
            return false;
    }
    return true;
}


compare(mas1, mas2) ? console.log('массивы идентичные') : console.log('массивы не идентичные');
