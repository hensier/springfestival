$('#fireworksbtn').click(e => {
$('#fireworksbtn').hide()
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

function start() {
    let str = $("#text").html(), str_ = ''
    let i = 0
    let content = document.getElementById('contents')
    let timer = setInterval(() => {
        if (str_.length < str.length) {
            if (str[i] == '<' && str[i + 1] == 'i') {
                for (var j = 0; j < 29; j++) {
                    str_ += str[i++]
                }
            }
            str_ += str[i++]
            content.innerHTML = '<p>' + str_ + '<span class="xx" style="opacity: 1; color: white;">∎</span></p>'
        }
        else {
            clearInterval(timer)
            content.innerHTML = '<p>' + str_ + '</p>'
        }
    }, 100)
}