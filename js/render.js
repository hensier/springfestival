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
        var flag = false
        if (str_.length < str.length) {
            if (str.substring(i, i + 2) == '<a') {
                while (str.substring(i - 4, i) != '</a>') {
                    str_ += str[i++]
                }
                flag = true
            }
            else if (str.substring(i, i + 2) == '<d') {
                while (str.substring(i - 6, i) != '</div>') {
                    str_ += str[i++]
                }
                flag = true
            }
            else {
                str_ += str[i++]
            }
            if (flag) {
                content.innerHTML = '<p>' + str_ + '</p>'
            }
            else {
                content.innerHTML = '<p>' + str_ + '<span class="xx" style="opacity: 1; color: white;">∎</span></p>'
            }
        }
        else {
            clearInterval(timer)
            content.innerHTML = '<p>' + str_ + '</p>'
        }
    }, 75)
}