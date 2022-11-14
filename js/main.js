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

    /*-------------------
		Quantity change
	--------------------- */
    /*var proQty = $('.pro-qty');
    proQty.prepend('<span class="dec qtybtn">-</span>');
    proQty.append('<span class="inc qtybtn">+</span>');
    proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });*/
})