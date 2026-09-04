console.log("Frontend JS ishga tushdi");


function itemTemplate(item) {
    return ` <li
             class="list-group-item list-group-item-info d-flex align-items-center justify-content-between" 
            >
            <span class="item-text">${item.reja}</span>
            <div>
                <button data-id="${item._id}" 
                    class="edit-me btn btn-secondary btn-sm mr-1"
                    > 
                    Ozgartirish
                </button>
                <button 
                data-id="${item._id}" class="delete-me btn btn-danger btn-sm">
                Ochirish
                </button>
            </div>
          </li>`;
}

let createField = document.getElementById ("create-field");  


document.getElementById("create-form").addEventListener("submit", function (e) {
    e.preventDefault();


    axios.post("/create-item", {reja: createField.value})
    .then((responce) => {
        document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(responce.data))
        createField.value = "";
        createField.focus();
    })

    .catch((err) => {
        console.log("Iltomos qaytadan harakat qilng");
    });
});

document.addEventListener("click", function (e) {
    // delete oper
    console.log(e.target)
   if(e.target.classList.contains("delete-me")) {
    if(confirm ("Aniq ochirmoqchimisiz?")) {
       axios
       .post("/delete-item", {id: e.target.getAttribute("data-id")})
       .then(responce => {
        console.log(responce.data);
        e.target.parentElement.parentElement.remove();
       })
       .catch(err => {
        console.log("Iltimos qaytadan harakt qiling!")
       })
    } 
   }

    // edit oper
   if(e.target.classList.contains("edit-me")) {
    alert ("siz edits tugmasini bosdingiz");
   }
})