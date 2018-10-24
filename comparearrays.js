let mas1 = [1,4,6,7,3]; 
let mas2 = [1,4,6,7,2]; 

const compare = (array1,array2) => {
    if(mas1.length==mas2.length) {
        for(i=0;i<array1;i++){
            if (array1[i] != array2[i]) return false;
        }
    } else {
        return false;
    }
}
