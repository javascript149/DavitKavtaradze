const showMoreButton = document.getElementById("showMoreButton");
const hiddenContent = document.getElementById("Hidden");

showMoreButton.addEventListener("click", function () {
    if (hiddenContent.style.display === "none" || hiddenContent.style.display === "") {
        hiddenContent.style.display = "block";
        showMoreButton.textContent = "Show Less";
    } else {
        hiddenContent.style.display = "none";
        showMoreButton.textContent = "Show More";
    }
});