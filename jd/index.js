$('#shortcut').load('./shortcut/index.html')
$('#header').load('./header/index.html')
$('#fs').load('./fs/index.html')
$('#seckill').load('./seckill/index.html')


window.onresize = function () {
    if ($(window).width() < 1080) {
        $('.focus-brand').hide()
        $('.w').width(980)
        $('.four').hide()
    } else {
        $('.focus-brand').show()
        $('.w').width(1190)
        $('.four').show()
    }
}