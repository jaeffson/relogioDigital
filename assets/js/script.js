

let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let secunds = document.getElementById('secunds')
let ampm = document.getElementById('ampm')


let hh = document.getElementById('hh')
let mm = document.getElementById('mm')
let ss = document.getElementById('ss')

let point_hr = document.querySelector('.point-hr')
let point_min = document.querySelector('.point-min')
let point_sec = document.querySelector('.point-sec')
let date = document.querySelector('.date')


setInterval(() => {
    
let h = new Date().getHours()
let m = new Date().getMinutes()
let s = new Date().getSeconds()
let dateAtual = new Date()


let amOrpm = h >= 12 ? 'PM' : 'AM'

h = (h < 10) ? '0' + h : h
m = (m < 10) ? '0' + m : m
s = (s < 10) ? '0' + s : s



hours.innerHTML = h + '<br> <span>HORAS</>'
minutes.innerHTML = m + '<br> <span>MINUTOS</>'
secunds.innerHTML = s + '<br> <span>SEGUNDOS</>'


hh.style.strokeDashoffset = 440 - (440 * h) / 12
mm.style.strokeDashoffset = 440 - (440 * m) / 60
ss.style.strokeDashoffset = 440 - (440 * s) / 60

point_hr.style.transform = `rotate(${h * 30}deg)`
point_min.style.transform = `rotate(${m * 6}deg)`
point_sec.style.transform = `rotate(${s * 6}deg)`

let dia = dateAtual.getDate();
let mes = dateAtual.getUTCMonth() + 1 ; 
let ano = dateAtual.getFullYear();
date.innerText = `${dia}/${mes}/${ano}`;


}, 1000);

