var answer;
function init()
{
    comp("uin");
}
function comp(id) {
    var el = document.getElementById(id);
    answer = document.getElementById("ans");
    var res = eval(el.value);
    answer.textContent = res;
}