const buttons = document.querySelectorAll(".filter-buttons button");
const products = document.querySelectorAll(".product-card");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const category = button.getAttribute("data-category");

        products.forEach(product => {
            if (category === "all" || product.classList.contains(category)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
});
