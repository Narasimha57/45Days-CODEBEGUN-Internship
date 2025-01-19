

var results;

function getDataFromApi() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            results = JSON.parse(this.responseText);
            createTable();
        }
    };
    xhttp.open("GET", "https://dummyjson.com/products");
    xhttp.send();
}

function createTable() {
    const table = document.createElement("table");
    table.style.width = "80%";
    const columns = ["ID", "Title", "Price", "Discounted Price", "Rating", "Available Stock"];
    const headerRow = document.createElement("tr");
    columns.forEach(column => {
        const th = document.createElement("th");
        th.innerText = column;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    results.products.forEach(product => {
        const row = document.createElement("tr");
        const data = [
            product.id,
            product.title,
            `$${product.price}`,
            `$${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}`,
            product.rating,
            product.stock
        ];
        data.forEach(value => {
            const td = document.createElement("td");
            td.innerText = value;
            td.style.justifyContent= "start"
            td.style.padding = "8px";
            row.appendChild(td);
        });
        table.appendChild(row);
    });

    document.body.appendChild(table);
}

getDataFromApi();
