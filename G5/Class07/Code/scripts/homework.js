// 1. Select all the elements that i need to work with
// 2. Add click event on the button
// 3. Get the values from the input fields
// 4. Validate if the input values are numbers => optional
// 5. Generate a table in the HTML file

let tbody = document.getElementById('tbody');
let generateBtn = document.getElementById('generateBtn');


generateBtn.addEventListener('click', function () {
    let rowInput = document.getElementById('row').value;
    let columnInput = document.getElementById('column').value;

    if (rowInput === "" || columnInput === "") {
        alert("Please enter number in the inputs!");
    }
    else {
        tbody.innerHTML = "";
            for(let i = 1; i < rowInput; i++) {
                let tr = document.createElement('tr');
                for(let j = 1; j < columnInput; j++) {
                    let td = document.createElement('td');
                    tr.appendChild(td);
                    td.innerText = `${i}, ${j}`;
                }
                tbody.appendChild(tr);
            }
        }
});
