const url = `https://crudcrud.com/api/ce25a05b2cbb4c948819e44a0067322a/expense`;
let editUserId = null;
const form = document.getElementById("form");
form.addEventListener("submit", addItem);

function addItem(e) {
    e.preventDefault();
    const amt = e.target.amount.value;
    const desc = e.target.description.value;
    const ctg = e.target.catagory.value;

    const obj = {
        amt,
        desc,
        ctg
    }
    // if (editUserId == null) {
    axios.post(url, obj).then((res) => {
        update(res.data);
        console.log(res.data);
    })
        .catch((err) => {
            document.getElementById('tablebody').innerHTML += `<h4 style="color:red">something went wrong</h4>`;
        })

    document.getElementById("form").reset();
}
window.addEventListener("DOMContentLoaded", () => {

    axios.get(url)
        .then((res) => {

            for (var i = 0; i < res.data.length; i++) {
                update(res.data[i]);
            }
        })
        .catch((err) => {
            document.getElementById("tablebody").innerHTML += `<h4 style="color:red">something went wrong</h4>`;
        })

})
function update(obj) {
    document.getElementById("amount").value = "";
    document.getElementById("description").value = "";
    document.getElementById("catagory").value = "";


    const li = `<li class="list-group-item border-success mt-3" id="${obj._id}">${obj.amt}, ${obj.desc}, ${obj.ctg}<button class="btn btn-danger btn-sm" onClick="deleted('${obj._id}')">delete</button>
    <button class="btn btn-warning btn-sm" onClick="edit('${obj._id}','${obj.amt}','${obj.desc}','${obj.ctg}')">edit</button></li>`
    var target = document.getElementById("ullist");
    target.innerHTML += li;
}
function deleted(userid) {
    axios.delete(`${url}/${userid}`).then((res) => {
        deleteFromScreen(userid)
    })
        .catch((err) => {
            document.getElementById("tablebody").innerHTML += `<h4 style="color:red">something went wrong</h4>`;
        })
}
function deleteFromScreen(userid) {
    var parent = document.getElementById("ullist")
    var child = document.getElementById(userid);
    parent.removeChild(child);
}
function edit(userid, amount, description, catagory) {
    document.getElementById('amount').value = amount;
    document.getElementById('description').value = description;
    document.getElementById('catagory').value = catagory;
    deleteFromScreen(userid);

    axios.put(`${url}/${editUserId}`, {
        a: document.getElementById("amount").value,
        b: document.getElementById("description").value,
        c: document.getElementById("catagory").value
    })
        .then((res) => {
            console.log(res.data)
        });
}