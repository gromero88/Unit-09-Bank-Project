let names = [];
let ammounts = [];

$(".newDeposit").click(function() {
    let total = 0;
    let deposit = $(".accountDeposit").val();
    let name = $(".accountName").val();
    names.push(name);
    ammounts.push(Number(deposit));
    $(".records").append(`<p> ${name}</p><p class='recordsBorder'>$ ${deposit}</p>`);
    $(".Trans").text(" " + names.length);
    for (let element of ammounts) {
        total = total + element;
    }
    $(".totalAmounts").text(" $" + total);
    console.log(total);

});
$(".latestUpdate").click(function() {
    alert("The last Depositor was: " + names[names.length - 1] + " with $" + ammounts[ammounts.length - 1]);
});