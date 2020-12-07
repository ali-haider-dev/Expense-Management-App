var objindex, ceobj;
var editcategory = (catID) => {
  var category = localStorage.getItem("AllCategories");
  console.log(category);

  category = JSON.parse(category);

  ceobj = category.find((obj) => obj.catID == catID);

  objindex = category.findIndex((obj) => obj.catID == catID);
  ceobj.index = objindex;
  ceobj = JSON.stringify(ceobj);
  localStorage.setItem("currentcategory", ceobj);
  window.location = "Editcategory.html";

  // document.getElementById("editdescription").value=ceobj.descreption;
};

var putcategorydata = () => {
  var getcategory = localStorage.getItem("currentcategory");
  getcategory = JSON.parse(getcategory);

  document.getElementById("editname").value = getcategory.name;
};

var updatecategory = () => {
  name = document.getElementById("editname").value;
  console.log(name);

  const catCount = 1;
  var getcategory = localStorage.getItem("currentcategory");
  getcategory = JSON.parse(getcategory);

  data = {
    catID: getcategory.catID,
    name: name,
    createAt: getcategory.createAt,

    userID: getcategory.userID,
  };

  var getdata = localStorage.getItem("AllCategories");
  getdata = JSON.parse(getdata);

  getdata.splice(getcategory.index, 1, data);

  getdata = JSON.stringify(getdata);
  localStorage.setItem("AllCategories", getdata);

  swal("Good job!", "Category has been updated", "success");
};
