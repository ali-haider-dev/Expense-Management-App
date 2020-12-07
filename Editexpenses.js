var updateexpense = () => {

    console.log("khalid")

    descreption = document.getElementById("editdescription").value;
    amount = document.getElementById("editamount").value;
    category = document.getElementById("editselect").value;



    const catCount = 1;
    var getexpense = localStorage.getItem("currentexpense")
    getexpense = JSON.parse(getexpense)




    data = {
        amount: amount,
        expID: getexpense.expID,
        category: category,
        createAt: getexpense.createAt,
        descreption: descreption,
        userID: getexpense.userID
    };




    var getdata = localStorage.getItem("Allexpenses")
    getdata = JSON.parse(getdata)

    getdata.splice(getexpense.index, 1, data)

    getdata = JSON.stringify(getdata)
    localStorage.setItem("Allexpenses", getdata)

    swal("Success", "EXpense has been Updated", "success");


}




var select;
var createoption = () => {
    select = document.getElementById("editselect")

    console.log(select)
    var currentuser = localStorage.getItem("currentuser")
    currentuser = JSON.parse(currentuser)
    var category = localStorage.getItem("AllCategories")
    category = JSON.parse(category);

    var categoryobj = category.filter(obj => obj.userID == currentuser.userID)


    categoryobj.forEach((obj) => {
        var opt = document.createElement("option");
        var text = document.createTextNode(obj.name);
        opt.appendChild(text)


        select.insertBefore(opt, select.childNodes[0])





    })
}

var putdata = () => {

    createoption()
    var getexpense = localStorage.getItem("currentexpense");
    getexpense = JSON.parse(getexpense);
    document.getElementById("editdescription").value = getexpense.descreption;
    document.getElementById("editamount").value = getexpense.amount;
    document.getElementById("editselect").value = getexpense.category;


}


var objindex, ceobj;
var edit = (expid) => {

    var expense = localStorage.getItem("Allexpenses")

    expense = JSON.parse(expense);

    ceobj = expense.find(obj => obj.expID == expid);


    objindex = expense.findIndex(obj => obj.expID == expid);
    ceobj.index = objindex
    ceobj = JSON.stringify(ceobj);
    localStorage.setItem("currentexpense", ceobj)
    window.location = "Editexpenses.html"



    // document.getElementById("editdescription").value=ceobj.descreption;


}