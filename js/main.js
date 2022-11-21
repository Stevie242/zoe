
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

    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background', 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(' + bg + ') no-repeat center center /cover');
    });
    

    $('#menu-toggle').click(function(){
        $('.nav-mobile').toggleClass('active');
    })

    $('#close-btn').click(function(){
        $('.nav-mobile').toggleClass('active');
    })
    /*------------------
        DataTable
    --------------------*/
    
    $('#user-dashboard').DataTable();
    
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

const boxes = document.querySelectorAll(['.col-content','.box-tarif','.about-text'])
window.addEventListener('scroll', checkBoxes)
checkBoxes()
function checkBoxes (){
    const triggerBottom = window.innerHeight /5 * 4
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if(boxTop< triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}
