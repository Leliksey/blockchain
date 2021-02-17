function hideMenuDropDown() { 
    var menuDropdownShowArray = document.querySelectorAll(".menu__dropdown_show");
    menuDropdownShowArray.forEach(function(menuDropdownShow) {
         menuDropdownShow.classList.remove("menu__dropdown_show");
    })
}

document.getElementById("burger").addEventListener('click', () => {
    document.body.classList.toggle('body_menu-open');
    hideMenuDropDown();
});

document.body.addEventListener('click', e => {
    if( document.body.classList.contains('body_menu-open') ) {  
        if( e.target.classList.contains('burger') === false &&
            e.target.classList.contains('menu') === false &&
            e.target.classList.contains('menu__item') === false &&
            e.target.classList.contains('menu__link')  === false 
            ) {
            document.body.classList.remove('body_menu-open');
            hideMenuDropDown();
        }
    }
});

var menuLinkArray =  document.querySelectorAll(".menu__link");
menuLinkArray.forEach(function(menuLink) {
    menuLink.addEventListener('click', e => {
        e.preventDefault();
        var menuItem = menuLink.parentNode;
        var menuDropdown = menuItem.querySelector(".menu__dropdown");
        menuDropdown.classList.toggle('menu__dropdown_show')

        var menuDropdownShowArray = document.querySelectorAll(".menu__dropdown_show");
        menuDropdownShowArray.forEach(function(menuDropdownShow) {
            if (menuDropdownShow != menuDropdown) {
                menuDropdownShow.classList.remove("menu__dropdown_show");
            }
        })
    });
})

