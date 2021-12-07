var mobileMenu = document.getElementById("navbarSupportedContent");
window.addEventListener('click', function(e) {
        if (!document.getElementById('navbarSupportedContent').contains(e.target) &&
            (!document.getElementById('barButton').contains(e.target))) {
            if (mobileMenu.className.includes('show')) {
                mobileMenu.className = mobileMenu.className.replace('show', '');
            }
        }
    })
    // var mobileMenu = document.getElementById("navbarSupportedContent");
    // window.addEventListener('click', function(e) {
    //     if (!document.getElementById('navbarSupportedContent').contains(e.target) &&
    //         (!document.getElementById('barButton').contains(e.target))) {
    //         if (mobileMenu.className.includes('show')) {
    //             mobileMenu.className = mobileMenu.className.replace('show', '');
    //         }
    //     }
    // })