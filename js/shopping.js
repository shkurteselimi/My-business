function addProduct() {
    const dropdown = document.querySelector(".dropdown");
    const table = document.getElementById("productTable");
    const row = table.insertRow();

    row.innerHTML = `
        <td>Cooking Oil</td>
        <td>Groceries</td>
        <td>$12</td>
        <td>In Stock</td>
    `;
}
// Toggle dropdown on mobile
dropdown.addEventListener("click", (e) => {
  if (window.innerWidth <= 768) {
    e.preventDefault();
    dropdown.classList.toggle("active");
  }
});
