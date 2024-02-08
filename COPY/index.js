const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");

btn.addEventListener("click", (e) => {
    coupon.select(); // Use select() method instead of Select()
    coupon.setSelectionRange(0, 999999);
    navigator.clipboard.writeText(coupon.value);
    btn.textContent = "finish";
});