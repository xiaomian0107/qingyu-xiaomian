document.addEventListener("DOMContentLoaded", function() {
    console.log("屿岛的梦境航线 - 启航！");
});
// 计时功能
let seconds = 0;
setInterval(() => {
    document.getElementById("timer").innerText = `已用时：${seconds++} 秒`;
}, 1000);

// 点击特效
document.addEventListener("click", function (e) {
    let effect = document.createElement("div");
    effect.className = "click-effect";
    effect.style.top = `${e.pageY}px`;
    effect.style.left = `${e.pageX}px`;
    document.body.appendChild(effect);
    setTimeout(() => effect.remove(), 1000);
});
