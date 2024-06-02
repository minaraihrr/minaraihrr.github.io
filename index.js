//// 計算ボタン ////
function calculation(){
    const total = Number(document.getElementById("total").value);
    const number = Number(document.getElementById("number").value);
    const unit = Number(document.getElementById("unit").value);

    let paymentPerPerson = calcPerPerson(unit, total, number);
    let change = (paymentPerPerson * number) - total;
    let changeGetter = selectGetter();

    document.getElementById("paymentPerPerson").innerText = paymentPerPerson;
    document.getElementById("change").innerText = change;
    document.getElementById("changeGetter").innerText = changeGetter;

}

//// 一人あたり金額計算(単位, 合計金額, 人数) ////
function calcPerPerson(unit, total, number){
    return Math.ceil((total / number) / unit) * unit;
}

//// おつりゲッター選定 ////
function selectGetter(){
    const getter = [];
    getter.push('じゃんけんに勝った人');
    getter.push('誕生日が一番近い人');
    getter.push('一番年下の人');
    getter.push('一番年上の人');

    let num = Math.floor(Math.random() * getter.length);
    return getter[num];
}