function addProduct() {
    const table = document.getElementById("productTable");
    const row = table.insertRow();

    row.innerHTML = `
        <td>Cooking Oil</td>
        <td>Groceries</td>
        <td>$12</td>
        <td>In Stock</td>
    `;
}
