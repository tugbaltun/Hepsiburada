<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" >
jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
  
    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
    
    $('#slider').css({ width: slideWidth, height: slideHeight });/*gelen resmin boyutuna göre #slider idli divi konuşlandır*/
    
    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });/*sliderın satır genişliğini resim sayısı ve yüksekliklerine  göre belirle ve nesnelere göre alacağı soldan uzaklığı resmin genişliği ile aynı yap*/
    
    $('#slider ul li:last-child').prependTo('#slider ul');/*görüntüenen son çocuğun değerlerini listeninkiyle aynı yap*/

    function moveLeft() {
        $('#slider ul').animate({/*listedeki elemanları kullan*/
            left: + slideWidth/*sola resimlerin genişliği kadar kay*/
        }, 200, function () {/*200 ms boyunca*/
            $('#slider ul li:last-child').prependTo('#slider ul');/*son çocuğun değerini u an görüntülenen resimle değiştir*/
            $('#slider ul').css('left', '');/*şu an görüntülenen resmi sola kaydır*/
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth/*resim sağa kayarken bulunduğu yerden negatif yöne doğru gelmelidir*/
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');/*ilk çocuğun değerini şu an görüntülenen resimle değiştir*/
            $('#slider ul').css('left', '');/*şu an görüntülenen resmi sağa kaydır*/
        });
    };

    $('a.control_prev').click(function () {/*önceki butonuna tıklanınca sola kaydır*/
        moveLeft();
    });

    $('a.control_next').click(function () {/*önceki butonuna tıklanınca sağa kaydır*/
        moveRight();
    });

});
    </script>

<script type="text/javascript">
    [].slice.call(document.querySelectorAll('.dropdown .nav-link')).forEach(function(el){
    el.addEventListener('click', onClick, false);
});

function onClick(e){
    e.preventDefault();
    var el = this.parentNode;
    el.classList.contains('show-submenu') ? hideSubMenu(el) : showSubMenu(el);
}

function showSubMenu(el){
    el.classList.add('show-submenu');
    document.addEventListener('click', function onDocClick(e){
        e.preventDefault();
        if(el.contains(e.target)){
            return;
        }
        document.removeEventListener('click', onDocClick);
        hideSubMenu(el);
    });
}

function hideSubMenu(el){
    el.classList.remove('show-submenu');
}
</script>