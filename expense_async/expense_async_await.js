const form = document.getElementById("form");
const url = `https://crudcrud.com/api/1e9c400054494ec1b8a7dfb88260ac5d/expense`;
form.addEventListener("submit",async function (e){
    e.preventDefault();
    const amt = e.target.amount.value;
    const desc = e.target.description.value;
    const ctg = e.target.catagory.value;

    const obj = {
        amt,
        desc,
        ctg
    }
    try{
        const response = await axios.post(url, obj);
        update(response.data);
        console.log(response.data);
    }
    catch(err){
    console.log(err)}
})

function update(obj) {
    const li = `<li class="list-group-item border-success mt-3" id="${obj._id}">${obj.amt}, ${obj.desc}, ${obj.ctg}<button class="btn btn-danger btn-sm" onClick="deleted('${obj._id}')">delete</button>
    <button class="btn btn-warning btn-sm" onClick="edit('${obj._id}','${obj.amt}','${obj.desc}','${obj.ctg}')">edit</button></li>`
    var target = document.getElementById("ullist");
    target.innerHTML += li;
}

function deleteFromScreen(userid) {
    var parent = document.getElementById("ullist")
    var child = document.getElementById(userid);
    parent.removeChild(child);
}

async function deleted(userid) {
    try{
        const response = await axios.delete(`${url}/${userid}`)
        deleteFromScreen(userid)
    }catch(err){
        console.log(err)
        }
}

async function edit(userid, amount, description, catagory) {
    try{
        document.getElementById('amount').value = amount;
        document.getElementById('description').value = description;
        document.getElementById('catagory').value = catagory;
        deleted(userid)
        const response = await axios.put(`${url}`/userid, {
            a: document.getElementById("amount").value,
            d: document.getElementById("description").value,
            c: document.getElementById("catagory").value
        })
        
        console.log(response.data);
    }catch(err){
        // console.log(err)
    }
}

window.addEventListener("DOMContentLoaded", async() => {
    try{
        const response = await axios.get(url)
            for (var i = 0; i < response.data.length; i++) {
                update(response.data[i]);
            }
    }catch(err){
        console.log(err)
        }

})