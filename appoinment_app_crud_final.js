let url = `https://crudcrud.com/api/1c12146ed90f419faddcde6faea3ff01/appointmentData`;
const form = document.getElementById("form");
let editUserId = null;
form.addEventListener("submit", gettingdata);

function gettingdata(e) {
  e.preventDefault();

  const name = e.target.username.value;
  const email = e.target.useremail.value;
  const phone = e.target.userphone.value;
  const date = e.target.userdate.value;
  const time = e.target.usertime.value;

  const obj = {
    name,
    email,
    phone,
    date,
    time
  }

  if (editUserId === null) {
    axios.post(url, obj)
    .then((res) => {
      showuseronscreen(res.data);
      console.log(res.data);
    })
    .catch((err) => {
      document.getElementById("ullist").innerHTML += `<h4 style="color:red">something went wrong</h4>`;
    })
  } else {
    axios.put(`${url}/${editUserId}`,{
    username : document.getElementById("username").value,
    useremail : document.getElementById("useremail").value,
    phone1 : document.getElementById("userphone").value
    }
    )
    .then((res)=> {
      console.log(res.data);
    });
    
    editUserId = null;
  }
  document.getElementById("form").reset();
}


window.addEventListener("DOMContentLoaded", () => {

  axios.get(url)
    .then((res) => {

      for (var i = 0; i < res.data.length; i++) {
        showuseronscreen(res.data[i]);
      }

    })
    .catch((err) => {
      document.getElementById("ullist").innerHTML += `<h4 style="color:red">something went wrong</h4>`;
    })

})

function showuseronscreen(obj) {

  const li = `<li class="list-group-item border-success mt-3" id="${obj._id}">${obj.name} <button class="btn btn-danger" onClick="deleteing('${obj._id}')">delete</button>
<button class="btn btn-warning" onClick="edit('${obj._id}','${obj.name}','${obj.email}','${obj.phone}')">edit</button></li>`

  var target = document.getElementById("ullist");
  target.innerHTML += li;

}

function deleteing(userid) {
  axios.delete(`${url}/${userid}`)
    .then((res) => {
      deletefromscreen(userid);
    })
    .catch((err) => {
      document.getElementById("ullist").innerHTML += `<h4 style="color:red">something went wrong</h4>`;
    })
}

function deletefromscreen(userid) {
  var parent = document.getElementById("ullist");

  var child = document.getElementById(userid);

  parent.removeChild(child);
}

function edit(userid,username,useremail,phone1) {
  
    document.getElementById("username").value = username;
    document.getElementById("useremail").value = useremail
    document.getElementById("userphone").value = phone1

    editUserId = userid;
}