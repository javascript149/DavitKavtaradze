const searchInput = document.getElementById("search");
        const productBoxes = document.querySelectorAll(".box");

        searchInput.addEventListener("input", function () {
            const searchValue = searchInput.value.toLowerCase();

            productBoxes.forEach(function (box) {
                const productTitle = box.querySelector(".text1").textContent.toLowerCase();

                if (productTitle.includes(searchValue)) {
                    box.style.display = "block";
                } else {
                    box.style.display = "none";
                }
            });
        });