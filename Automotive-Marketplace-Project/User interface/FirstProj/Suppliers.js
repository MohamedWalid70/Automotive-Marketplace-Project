document.addEventListener("DOMContentLoaded", () => {
    const supplierTable = document.querySelector("#supplier-list tbody");
    const supplierForm = document.querySelector("#supplier-form");

    // Sample Supplier Data
    const suppliers = [
        { name: "Supplier A", phone: "123-456-7890", email: "a@supplier.com", city: "Cairo" },
        { name: "Supplier B", phone: "987-654-3210", email: "b@supplier.com", city: "Alexandria" },
    ];

    // Function to Render Table Rows
    function renderTable() {
        supplierTable.innerHTML = "";
        suppliers.forEach((supplier, index) => {
            const row = `
                <tr>
                    <td>${supplier.name}</td>
                    <td>${supplier.phone}</td>
                    <td>${supplier.email}</td>
                    <td>${supplier.city}</td>
                    <td>
                        <button onclick="editSupplier(${index})">Edit</button>
                        <button onclick="deleteSupplier(${index})">Delete</button>
                    </td>
                </tr>
            `;
            supplierTable.innerHTML += row;
        });
    }

    // Add Supplier
    supplierForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const newSupplier = {
            name: document.querySelector("#name").value,
            phone: document.querySelector("#phone").value,
            email: document.querySelector("#email").value,
            city: document.querySelector("#city").value,
        };
        suppliers.push(newSupplier);
        renderTable();
        supplierForm.reset();
    });

    // Delete Supplier
    window.deleteSupplier = (index) => {
        suppliers.splice(index, 1);
        renderTable();
    };

    // Edit Supplier (Placeholder Functionality)
    window.editSupplier = (index) => {
        alert(`Edit functionality for Supplier ${suppliers[index].name} goes here.`);
    };

    renderTable();
});
