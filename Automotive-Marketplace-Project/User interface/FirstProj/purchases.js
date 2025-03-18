document.addEventListener("DOMContentLoaded", () => {
    const purchaseTable = document.querySelector("#purchase-list tbody");
    const subtotalEl = document.querySelector("#subtotal");
    const taxEl = document.querySelector("#tax");
    const totalEl = document.querySelector("#total");

    // Sample Data
    const purchases = [
        { name: "Product 1", quantity: 2, price: 50 },
        { name: "Product 2", quantity: 1, price: 30 },
    ];

    // Render Table Rows
    function renderTable() {
        purchaseTable.innerHTML = "";
        let subtotal = 0;

        purchases.forEach((item, index) => {
            const total = item.quantity * item.price;
            subtotal += total;

            const row = `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.quantity}</td>
                    <td>$${item.price.toFixed(2)}</td>
                    <td>$${total.toFixed(2)}</td>
                    <td>
                        <button onclick="removeItem(${index})">Remove</button>
                    </td>
                </tr>
            `;
            purchaseTable.innerHTML += row;
        });

        // Update Summary
        const tax = subtotal * 0.1; // 10% tax
        const total = subtotal + tax;

        subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
        taxEl.textContent = `$${tax.toFixed(2)}`;
        totalEl.textContent = `$${total.toFixed(2)}`;
    }

    // Remove Item
    window.removeItem = (index) => {
        purchases.splice(index, 1);
        renderTable();
    };

    renderTable();
});
