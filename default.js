function add(num1, num2 = 20){
    // 1st way..................
    // if( num2 ==undefined )
    // {
    //     num2 = 0;
    // }\
    // 2sd way.................
    // num2 =num2||10;
    return num1 + num2;
}
const total= add( 15, 10);
console.log(total);