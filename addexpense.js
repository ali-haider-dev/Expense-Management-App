var descreption, category, amount;


var addexpense = () => {

    descreption = document.getElementById("description").value;
    amount = document.getElementById("amount").value;
    category = document.getElementById("select").value




    const catCount = 1;

    var currentuser = localStorage.getItem("currentuser");
    var user = JSON.parse(currentuser);


    data = {
        userID: user.userID,
        createAt: new Date().toLocaleDateString(),
        amount: amount,
        descreption: descreption,
        category: category
    };





    var getdata = localStorage.getItem("Allexpenses")

    if (!getdata || JSON.parse(getdata).length == 0) {
        data.expID = catCount;
        usersdata = [data];
        usersdata = JSON.stringify(usersdata)
        localStorage.setItem("Allexpenses", usersdata)
        swal("Success", "Expenses has been Added", "success");
    } else {

        getdata = JSON.parse(getdata)
        data.expID = getdata[getdata.length - 1].expID + 1;
        getdata.push(data)

        getdata = JSON.stringify(getdata)
        localStorage.setItem("Allexpenses", getdata)
        swal("Success", "Expenses has been added", "success");
    }

}


var createexpensetable = () => {


    var Allexpens = localStorage.getItem("Allexpenses")

    var currentuser = localStorage.getItem("currentuser")
    currentuser = JSON.parse(currentuser).userID;


    if (Allexpens) {
        Allexpens = JSON.parse(Allexpens);
        var table = "";
        var counter = 1;
        for (var i = 0; i < Allexpens.length; i++) {
            if (Allexpens[i].userID == currentuser) {
                table += "<tr>";
                table += "<td>" + (counter) + "</td>";
                table += "<td>" + Allexpens[i].descreption + "</td>";
                table += "<td>" + Allexpens[i].amount + "</td>";
                table += "<td>" + Allexpens[i].category + "</td>";
                table += "<td>" + Allexpens[i].createAt + "</td>";
                table += '<td> <span style="color:green;margin-right:10px;"><i class="fas fa-edit" onclick="edit(' + Allexpens[i].expID + ')"></i></span><span style="color:red;"><i class="fas fa-trash" onclick="deleteexpense(' + Allexpens[i].expID + ')"></i></span></td>'
                table += "</tr>";
                counter++;
            }
            //console.log(Allcategory[i])   
        }
        document.getElementById("dashboardtable").innerHTML = table;
    }

}





var select;
var createoption = () => {
    select = document.getElementById("select")

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