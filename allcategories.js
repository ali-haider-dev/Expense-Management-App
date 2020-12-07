var categoryname;
var tab;
const catCount = 1;

function addCategories() {
  var currentuser = localStorage.getItem("currentuser");
  var user = JSON.parse(currentuser);
  categoryname = document.getElementById("name").value;
  tab = document.getElementById("cattable");

  data = {
    userID: user.userID,
    createAt: new Date().toLocaleDateString(),
    name: categoryname,
  };
  var getdata = localStorage.getItem("AllCategories");

  if (!getdata || JSON.parse(getdata).length == 0) {
    data.catID = catCount;
    usersdata = [data];
    usersdata = JSON.stringify(usersdata);
    localStorage.setItem("AllCategories", usersdata);
    categoryname = "";
    swal("Success", "Category has been created", "success");
  } else {
    getdata = JSON.parse(getdata);
    data.catID = getdata[getdata.length - 1].catID + 1;
    getdata.push(data);
    getdata = JSON.stringify(getdata);
    localStorage.setItem("AllCategories", getdata);
    categoryname = "";
    swal("Success", "Category has been created", "success");
  }
}

/*    row = document.createElement("row")
       var coloum_1=document.createElement("td")
       var text_1=document.createTextNode(data.catID)
       coloum_1.appendChild(text_1)
       row.appendChild(coloum_1)
   
       var coloum_2=document.createElement("td")
       var text_2=document.createTextNode(data.name)
       coloum_2.appendChild(text_2)
       row.appendChild(coloum_2)
   
       var coloum_3=document.createElement("td")
       var text_3=document.createTextNode(data.createAt)
       coloum_3.appendChild(text_3)
       row.appendChild(coloum_3)
      console.log(tab)
       tab.appendChild(row)*/

var createtable = () => {
  var Allcategory = localStorage.getItem("AllCategories");

  var currentuser = localStorage.getItem("currentuser");
  currentuser = JSON.parse(currentuser).userID;

  Allcategory = JSON.parse(Allcategory);
  if (Allcategory) {
    var table = "";
    var counter = 1;
    for (var i = 0; i < Allcategory.length; i++) {
      if (Allcategory[i].userID == currentuser) {
        table += "<tr>";
        table += "<td>" + counter + "</td>";
        table += "<td>" + Allcategory[i].name + "</td>";
        table += "<td>" + Allcategory[i].createAt + "</td>";
        table +=
          '<td> <span style="color:green;margin-right:10px;"><i class="fas fa-edit"  onclick="editcategory(' +
          Allcategory[i].catID +
          ')"></i></span><span style="color:red;"><i class="fas fa-trash" onclick="deletecategory(' +
          Allcategory[i].catID +
          ')"></i></span></td>';
        table += "</tr>";
        counter++;
      }
      //console.log(Allcategory[i])
    }
    document.getElementById("allcategories").innerHTML = table;
  }
};

var deletecategory = (catID) => {
  var Allcategory = localStorage.getItem("AllCategories");
  Allcategory = JSON.parse(Allcategory);

  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this imaginary file!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      var index = Allcategory.findIndex((obj) => obj.catID == catID);
      Allcategory.splice(index, 1);
      Allcategory = JSON.stringify(Allcategory);
      localStorage.setItem("AllCategories", Allcategory);
      createtable();
      swal("Poof! Your imaginary file has been deleted!", {
        icon: "success",
      });
    } else {
      swal("Your imaginary file is safe!");
    }
  });
};
