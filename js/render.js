$('#fireworksbtn').click(e => {
    $('#page_one').hide()
    setTimeout(() => {
        fireworks();
        start();
    }, 1600)
    console.log(updateConfig({
        autoLaunch: true
    }));
})

function fireworks() {
    $('.page_one').addClass('hide');
    $('.page_two').removeClass('hide');
}

function hasClass(e, className) {
    var reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
    return reg.test(e.className)
}

function start() {
    let str = $("#text").html(), str_ = ''
    let i = 0
    let content = document.getElementById('contents')
    let timer = setInterval(() => {
        if ($('.type_words').hasClass('abort')) return
        if ($('.type_words').hasClass('pause')) {
            var s = content.innerHTML, pos = s.indexOf('opacity: 1;')
            if (~pos) {
                content.innerHTML = s.substring(0, pos + 9) + '0.15' + s.substring(pos + 10)
            }
            return
        }
        if (!i) {
            str_ = str.substring(0, i = 25)
            return
        }
        var flag = false
        if (str_.length < str.length) {
            if (str.substring(i, i + 2) == '<a') {
                while (str.substring(i - 4, i) != '</a>') {
                    str_ += str[i++]
                }
            }
            else if (str.substring(i, i + 2) == '<d') {
                while (str.substring(i - 6, i) != '</div>') {
                    str_ += str[i++]
                }
            }
            else if (str.substring(i, i + 8) == '<br><br>') {
                while (str.substring(i - 8, i) != '<br><br>') {
                    str_ += str[i++]
                }
            }
            else if (str.substring(i, i + 4) == '<br>') {
                while (str.substring(i - 4, i) != '<br>') {
                    str_ += str[i++]
                }
            }
            else {
                str_ += str[i++]
                flag = true
            }
            if (flag) {
                content.innerHTML = '<p>' + str_ + '<span style="opacity: 1; color: white;">∎</span></p>'
            }
            else {
                content.innerHTML = '<p>' + str_ + '</p>'
            }
        }
        else {
            clearInterval(timer)
            content.innerHTML = '<p>' + str_ + '</p>'
        }
    }, 50)
}