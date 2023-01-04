const regdays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const springfest = [22, 41, 29, 48, 37, 26, 44, 34, 23, 42, 31] // 保存截至 2033 年的春节对应的公历日期
const stems = '癸甲乙丙丁戊己庚辛壬', branches = '亥子丑寅卯辰巳午未申酉戌'

function isleap(y) {
    if (y % 400 == 0) {
        return true
    }
    else if (y % 100 == 0) {
        return false
    }
    return y % 4 == 0
}

function cntdays(y, m) {
    if (isleap(y) && m == 2) {
        return 29
    }
    return regdays[m]
}

function dist(y1, m1, d1, y2, m2, d2) {
    if (y1 == y2) {
        if (m1 == m2) {
            return d2 - d1
        }
        var s = cntdays(y1, m1) - d1 + d2
        for (var i = m1 + 1; i < m2; i++) {
            s += cntdays(y1, i)
        }
        return s
    }
    if (m1 == 1 && d1 == 1) {
        var s = 0
        for (var i = y1; i < y2; i++) {
            s += 365 + isleap(i)
        }
        return s + dist(y2, 1, 1, y2, m2, d2)
    }
    return dist(y1, m1, d1, y1, 12, 31) + dist(y1 + 1, 1, 1, y2, m2, d2) + 1
}

function tochn(d) {
    const chnnum = ' 一二三四五六七八九十'
    if (d <= 10) {
        return '初' + chnnum[d]
    }
    else if (d < 20) {
        return '十' + chnnum[d - 10]
    }
    else if (d == 20) {
        return '二十'
    }
    else if (d < 30) {
        return '廿' + chnnum[d - 20]
    }
    else {
        return '三十'
    }
}

window.onload = function() {
    function countdown() {
        var now = new Date()
        var y = now.getFullYear(), m = now.getMonth() + 1, d = now.getDate(), hr = now.getHours(), min = now.getMinutes(), sec = now.getSeconds()
        var dif = 86400 - hr * 3600 - min * 60 - sec
        var dh = Math.floor(dif / 3600), dm = Math.floor(dif / 60) % 60, ds = dif % 60
        var ord = dist(y - 1, 12, 31, y, m, d)
        var newy = y + (springfest[y - 2023] <= ord)
        var newm = Math.floor(springfest[newy - 2023] / 32) + 1
        var newd = springfest[newy - 2023] - 31 * (newm - 1)
        var minor = Boolean((newy >= 2025 && newy <= 2029) || newy == 2031 || newy == 2032) // 2025 ~ 2029 和 2031 ~ 2032 年春节的前一天为腊月廿九
        var output = '现在是 ' + y + ' 年 ' + m + ' 月 ' + d + ' 日'
        if (ord >= springfest[y - 2023] - 30 + minor) {
            output += '（' + stems[(newy - 4) % 10] + branches[(newy - 4) % 12] + '年腊月' + tochn(ord - springfest[y - 2023] + 31 - minor) + '）'
        }
        output += hr + ' 时 ' + min + ' 分 ' + sec +  ' 秒<br><br>'
        if (y == newy && m == newm && d == newd) {
            output += '祝你 ' + y + ' ' + stems[(y - 3) % 10] + branches[(y - 3) % 12] + '年新春快乐！'
        }
        else {
            output += '距离 ' + newy + ' ' + stems[(newy - 3) % 10] + branches[(newy - 3) % 12] + '年春节（' + newy + ' 年 ' + newm + ' 月 ' + newd + ' 日）<br>还剩 ' + (dist(y, m, d, newy, newm, newd) - Boolean(hr || min || sec)) + ' 天'
            if (dh) {
                output += ' ' + dh + ' 小时'
            }
            if (dm) {
                output += ' ' + dm + ' 分钟'
            }
            if (ds) {
                output += ' ' + ds + ' 秒'
            }
        }
        document.getElementById('countdown').innerHTML = output
    }
    countdown()
    setInterval(countdown, 1000)
}