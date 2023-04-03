let card_number_input = document.getElementById("card-number")
let card_cvv_input = document.getElementById("card-cvv")
let card_valid_input = document.getElementById("card-valid")
const card_number = {
  mask: "0000 0000 0000 0000",
}
const card_cvv = {
  mask: "000",
}
const card_valid = {
  mask: "00/00",
}
var mask = IMask(card_number_input, card_number)
var mask = IMask(card_cvv_input, card_cvv)
var mask = IMask(card_valid_input, card_valid)
