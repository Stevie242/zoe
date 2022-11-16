/*var loader = document.querySelector(".loader")
window.addEventListener('load',vanish);
function vanish(){
    loader.classList.add ('disppear')
}
*/

$(document).ready(function(){
    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background', 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(' + bg + ') no-repeat center center /cover');
    });
    $('.banniere').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background', 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(' + bg + ') no-repeat center center /cover');
    });

    /*------------------
        DataTable
    --------------------*/
    $('#user-historique').DataTable({
        "bFilter": false,
    });


    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('#content').toggleClass('active');
    });

    $('.more-button,.body-overlay').on('click', function () {
        $('#sidebar,.body-overlay').toggleClass('show-nav');
    });

    $('#menu-btn').click(function(){
        $('#menu').toggleClass("active")
    })

})