<!DOCTYPE html>
<html lang="en">

<head>
    <title>JS Samples</title>
    <meta charset="utf-8">
    <meta name="keywords" content="sample,html,file">
    <meta name="description" content="This is a sample html file">
    <style>
        table thead tr th {
            background-color: #ccc;
            padding: 5px;
        }
        table tbody tr td {
            border-bottom: 1px solid black;
            padding: 5px;
        }
        .totals {
            margin-top: 15px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            width: 345px;
            font-size: 1.2rem;
        }
        .totals .label {
            font-weight: bold;
            text-align: right;
            padding-right: 10px;
        }
        .price::before {
            content: '$ ';
        }
    </style>
</head>

<body>
    <h1>Shopping Cart</h1>
    <table id="products-list">
        <thead>
            <tr>
                <th>
                    Product
                </th>
                <th>
                    Unit. Price
                </th>
                <th>
                    Quantity
                </th>
                <th>
                    Subtotal
                </th>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>

    <div class="totals">
        <div class="label">Subtotal</div>
        <div class="price subtotal"></div>
        <div class="label">Discount</div>
        <div class="price discount"></div>
        <div class="label">Taxes</div>
        <div class="price taxes"></div>
        <div class="label">Total</div>
        <div class="price total"></div>
    </div>

    <script>
        const products = [
            {
                name: "Tomato",
                price: 19,
                quantity: 2
            },
            {
                name: "Potato",
                price: 16,
                quantity: 4
            },
            {
                name: "Milk",
                price: 32,
                quantity: 2
            },
            {
                name: "Cookies",
                price: 46,
                quantity: 3
            }
        ];
        const TAXES = 0.24;
        const createCellWithText = (text) => {
            var cell = document.createElement("td");
            var cellText = document.createTextNode(text);
            cell.appendChild(cellText);
            return cell;
        }
        const drawTable = () => {
            // Gets products-list tbody element reference and store it on a variable.
            const tableBody = document.querySelector('#products-list tbody');
            products.forEach(product => {
                var row = document.createElement("tr");
                const nameCell = createCellWithText(product.name);
                row.appendChild(nameCell);
                const priceCell = createCellWithText(product.price);
                row.appendChild(priceCell);
                const quantityCell = createCellWithText(product.quantity);
                row.appendChild(quantityCell);
                const subtotalCell = createCellWithText(0);
                row.appendChild(subtotalCell);
                tableBody.appendChild(row);
            });
        }
        const calculateSubTotal = () => {
            // not implemented yet.
            return 0;
        }
        const calculateDiscount = (subtotal) => {
            /*
            Discount Rules:
            ---------------
            If buying more than 5 products, discount is 15% of subtotal.
            If subTotal is equal or greater than 100
            Discount is 10% of subtotal.
            Any other case, discount is 5% of subtotal.
            Always use maximum discount possible.
            */
           return 0;
        }
        const drawTotals = () => {
            const subTotal = calculateSubTotal();
            const discount = calculateDiscount(subTotal);
            const taxes = 0;
            document.querySelector('.totals .subtotal').textContent = subTotal;
            document.querySelector('.totals .discount').textContent = discount;
            document.querySelector('.totals .taxes').textContent = taxes;
            // and finally draw total.
        }
        const start = () => {
            drawTable();
            drawTotals();
        }
        start();
    </script>
</body>

</html>
