
const form = document.getElementById("form");

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
        const response = await axios.post(`https://crudcrud.com/api/797bf733ce8e4824956412a0a60724e9/expense`, obj);
        update(response.data);
        console.log(response.data);
    }
    catch(err){
    console.log(err)}
})

function update(obj){
    document.getElementById("amount").value = "";
    document.getElementById("description").value = "";
    document.getElementById("catagory").value = "";

    const li = `<li class="list-group-item border-success mt-3" id="${obj._id}">${obj.amt}, ${obj.desc}, ${obj.ctg}<button class="btn btn-danger btn-sm" onClick="deleted('${obj._id}')">Delete</button>
    <button class="btn btn-warning btn-sm" onClick="edit('${obj._id}','${obj.amt}','${obj.desc}','${obj.ctg}')">edit</button></li>`

    var target = document.getElementById("ulList");
    target.innerHTML +=li;
}
