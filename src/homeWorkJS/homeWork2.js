/* 
2-) Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.
*/
console.log("---- Arkadaş Sayı Bulma ----")
function friendNumber(number1, number2) {
    let num1sum = 0
    let num2sum = 0
    for (let i = 1; i < number1; i++) {
        if (number1 %i == 0) {
            num1sum += i
        }
    }
    for (let j = 1; j < number2; j++) {
        if (number2 %j == 0) {
            num2sum += j
        }
    }
    console.log(number1 + " Sayının Kendisi Hariç Bölenleri Toplamı: " + num1sum +" olur.")
    console.log(number2 + " Sayının Kendisi Hariç Bölenleri Toplamı: " + num2sum +" olur.")

    if(num1sum == number2 && num2sum == number1) {
        console.log(number1 + " ve " + number2 + " Birer Arkadaş Sayıdır.")
    } else {
        console.log(number1 + " ve " + number2 + " Arkadaş Sayı Değildir.")
    }
}
friendNumber(220, 284)