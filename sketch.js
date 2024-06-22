const searchBar = document.getElementById("HeaderSearch");
const navBar = document.getElementById("MainNavBar");

function SearchButtonClick() {
    // console.log(searchBar.dataset.status);
    if(searchBar.dataset.status == "inactive") searchBar.dataset.status = "active"
    else searchBar.dataset.status = "inactive"
}

function NavButtonClick() {
    if(navBar.dataset.status == "inactive") navBar.dataset.status = "active"
    else navBar.dataset.status = "inactive"
}