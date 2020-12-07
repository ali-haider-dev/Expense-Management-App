var searchtext, rows;
var search = () => {

    searchtext = document.getElementById("dashboardsearch").value;

    searchtext = searchtext.toUpperCase()
    dashboartable = document.getElementById("dashboardtable");

    rows = dashboartable.getElementsByTagName("tr")




    for (let a = 0; rows.length; a++) {

        var row = rows[a]
        var colum = row.getElementsByTagName("td");

        if (colum) {
            let textvalue = colum[3].textContent;

            if (textvalue.toUpperCase().indexOf(searchtext) > -1) {
                rows[a].style.display = ""
            } else {
                rows[a].style.display = "none"
            }
        }
    }

}



var deleteexpense = (expID) => {
    var Allexpens = localStorage.getItem("Allexpenses")
    Allexpens = JSON.parse(Allexpens);
    console.log(Allexpens[0])

    var index = Allexpens.findIndex((item) => {
        return item.expID == expID;
    })

    swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {

                Allexpens.splice(index, 1);

                Allexpens = JSON.stringify(Allexpens)

                localStorage.setItem("Allexpenses", Allexpens);
                createexpensetable()
                swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                });
            } else {
                swal("Your imaginary file is safe!");
            }
        });




}

var logout = () => {

    localStorage.removeItem("currentuser")
    window.location = "login.html"
}


var veiwpage = () => {
    var user = localStorage.getItem("currentuser")
    if (!user) { window.location = "login.html"; }



}