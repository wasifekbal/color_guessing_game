var p1_score = document.querySelector(".p1_score");
var p2_score = document.querySelector(".p2_score");
var p1_btn = document.querySelector("#p1");
var p2_btn = document.querySelector("#p2");
var limit = document.getElementById("limit");
var reset = document.getElementById("reset");
var limit_keeper = document.getElementById("limit_keeper");
var limit_num = 5
var p1=0,p2=0;

limit.addEventListener("click", () => {
    if ((Number(p1) == 0) && (Number(p2) == 0)) {
        limit_num = Number(limit.value);
        limit_keeper.textContent = String(limit.value);
    }
});


p1_btn.addEventListener("click", () => {
    if (Number(p2) < limit_num) {
        if (Number(p1) < limit_num) {
            p1 = Number(p1) + 1;
            p1_score.textContent = String(p1);
            if (Number(p1) == limit_num) {
                p1_score.classList.add("won");
            }
        }
    }
});

p2_btn.addEventListener("click", () => {
    if (Number(p1) < limit_num) {
        if (Number(p2) < limit_num) {
            p2 = Number(p2) + 1;
            p2_score.textContent = String(p2);
            if (Number(p2) == limit_num) {
                p2_score.classList.add("won");
            }
        }
    }
});

reset.addEventListener("click", () => {
    p1_score.textContent = "0";
    p1_score.classList.remove("won");
    p2_score.textContent = "0";
    p2_score.classList.remove("won");
    limit_num = Number(limit.value);
    limit_keeper.textContent = String(limit.value);
    p1 = 0;
    p2 = 0;
});