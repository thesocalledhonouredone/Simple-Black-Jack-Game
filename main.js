var a = 0, b = 0, sum = 0
var cardsMsg = ""
var sumMsg = 0
var msg

function Start() {
    document.getElementById("cards").innerText = "Cards: "
    document.getElementById("sum").innerText = "Sum : "


    a = Math.floor((Math.random() * 15))
    b = Math.floor((Math.random() * 15))
    sum = a + b
    cardsMsg = " \nCard One: " + a + " Card Two: " + b
    document.getElementById("cards").innerText += cardsMsg
    sumMsg += sum
    document.getElementById("sum").innerText += sum

    if(sum <= 20) {
        msg = "Close, But No Cigar"
        document.getElementById("result").innerText = msg
    } else if(sum > 21) {
        msg = "BUSTED, try again next time"
        document.getElementById("result").innerText = msg
    } else {
        msg = "YOU WON!!!"
        document.getElementById("result").innerText = msg
    }
}