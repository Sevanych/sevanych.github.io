const $like = document.querySelector("#like");
if ($like instanceof HTMLElement) {
    $like.addEventListener("click", () => ($like.style.color = "red"));
}
