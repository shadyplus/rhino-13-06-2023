var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight, mousePos = {x: 400, y: 300},
    canvas = document.createElement("canvas"), context = canvas.getContext("2d"), particles = [], rockets = [],
    MAX_PARTICLES = 400, colorCode = 0;

function launch() {
    launchFrom(mousePos.x)
}

function launchFrom(t) {
    if (rockets.length < 10) {
        var e = new Rocket(t);
        e.explosionColor = 10 * Math.floor(360 * Math.random() / 10), e.vel.y = -3 * Math.random() - 4, e.vel.x = 6 * Math.random() - 3, e.size = 8, e.shrink = .999, e.gravity = .01, rockets.push(e)
    }
}

function loop() {
    SCREEN_WIDTH != window.innerWidth && (canvas.width = SCREEN_WIDTH = window.innerWidth), SCREEN_HEIGHT != window.innerHeight && (canvas.height = SCREEN_HEIGHT = window.innerHeight), context.fillStyle = "rgba(0, 0, 0, 0.05)", context.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    for (var t = [], e = 0; e < rockets.length; e++) {
        rockets[e].update(), rockets[e].render(context);
        var o = Math.sqrt(Math.pow(mousePos.x - rockets[e].pos.x, 2) + Math.pow(mousePos.y - rockets[e].pos.y, 2)),
            s = rockets[e].pos.y < 2 * SCREEN_HEIGHT / 3 && 100 * Math.random() <= 1;
        rockets[e].pos.y < SCREEN_HEIGHT / 5 || rockets[e].vel.y >= 0 || o < 50 || s ? rockets[e].explode() : t.push(rockets[e])
    }
    rockets = t;
    var r = [];
    for (e = 0; e < particles.length; e++) particles[e].update(), particles[e].exists() && (particles[e].render(context), r.push(particles[e]));
    for (particles = r; particles.length > MAX_PARTICLES;) particles.shift()
}

function Particle(t) {
    this.pos = {x: t ? t.x : 0, y: t ? t.y : 0}, this.vel = {
        x: 0,
        y: 0
    }, this.shrink = .97, this.size = 2, this.resistance = 1, this.gravity = 0, this.flick = !1, this.alpha = 1, this.fade = 0, this.color = 0
}

function Rocket(t) {
    Particle.apply(this, [{x: t, y: SCREEN_HEIGHT}]), this.explosionColor = 0
}

jQuery(document).ready((function () {
    jQuery(".trigger_fworks").click((function () {
        jQuery(".fireworks").toggle(), jQuery(".fireworks").append(canvas), canvas.width = SCREEN_WIDTH, canvas.height = SCREEN_HEIGHT, setInterval(launch, 800), setInterval(loop, 20)
    }))
})), jQuery(document).mousemove((function (t) {
    t.preventDefault(), mousePos = {x: t.clientX, y: t.clientY}
})), jQuery(document).mousedown((function (t) {
    for (var e = 0; e < 5; e++) launchFrom(Math.random() * SCREEN_WIDTH * 2 / 3 + SCREEN_WIDTH / 6)
})), Particle.prototype.update = function () {
    this.vel.x *= this.resistance, this.vel.y *= this.resistance, this.vel.y += this.gravity, this.pos.x += this.vel.x, this.pos.y += this.vel.y, this.size *= this.shrink, this.alpha -= this.fade
}, Particle.prototype.render = function (t) {
    if (this.exists()) {
        t.save(), t.globalCompositeOperation = "lighter";
        var e = this.pos.x, o = this.pos.y, s = this.size / 2, r = t.createRadialGradient(e, o, .1, e, o, s);
        r.addColorStop(.1, "rgba(255,255,255," + this.alpha + ")"), r.addColorStop(.8, "hsla(" + this.color + ", 100%, 50%, " + this.alpha + ")"), r.addColorStop(1, "hsla(" + this.color + ", 100%, 50%, 0.1)"), t.fillStyle = r, t.beginPath(), t.arc(this.pos.x, this.pos.y, this.flick ? Math.random() * this.size : this.size, 0, 2 * Math.PI, !0), t.closePath(), t.fill(), t.restore()
    }
}, Particle.prototype.exists = function () {
    return this.alpha >= .1 && this.size >= 1
}, Rocket.prototype = new Particle, Rocket.prototype.constructor = Rocket, Rocket.prototype.explode = function () {
    for (var t = 10 * Math.random() + 80, e = 0; e < t; e++) {
        var o = new Particle(this.pos), s = Math.random() * Math.PI * 2, r = 15 * Math.cos(Math.random() * Math.PI / 2);
        o.vel.x = Math.cos(s) * r, o.vel.y = Math.sin(s) * r, o.size = 10, o.gravity = .2, o.resistance = .92, o.shrink = .05 * Math.random() + .93, o.flick = !0, o.color = this.explosionColor, particles.push(o)
    }
}, Rocket.prototype.render = function (t) {
    if (this.exists()) {
        t.save(), t.globalCompositeOperation = "lighter";
        var e = this.pos.x, o = this.pos.y, s = this.size / 2, r = t.createRadialGradient(e, o, .1, e, o, s);
        r.addColorStop(.1, "rgba(255, 255, 255 ," + this.alpha + ")"), r.addColorStop(1, "rgba(0, 0, 0, " + this.alpha + ")"), t.fillStyle = r, t.beginPath(), t.arc(this.pos.x, this.pos.y, this.flick ? Math.random() * this.size / 2 + this.size / 2 : this.size, 0, 2 * Math.PI, !0), t.closePath(), t.fill(), t.restore()
    }
};
var resultWrapper = document.querySelector(".spin-result-wrapper"), wheel = document.querySelector(".wheel-img");

function spin() {
    wheel.classList.contains("rotated") || (wheel.classList.add("super-rotation"), setTimeout((function () {
        resultWrapper.style.display = "block", jQuery(".fireworks").toggle(), jQuery(".fireworks").append(canvas), canvas.width = SCREEN_WIDTH, canvas.height = SCREEN_HEIGHT, setInterval(launch, 400), setInterval(loop, 10)
    }), 8e3), setTimeout((function () {
        $(".spin-wrapper").slideUp(), $(".order_block").slideDown(), start_timer()
    }), 1e4), wheel.classList.add("rotated"))
}

var closePopup = document.querySelector(".close-popup");
$(".close-popup, .pop-up-button").click((function (t) {
    t.preventDefault(), $(".spin-result-wrapper").fadeOut(), $(".wrapper_2").css({display: "flex"})
})), $(".pop-up-button, .spin-result-wrapper, .close-popup").click((function () {
    $(".fireworks, .wrapper_F").hide(), $(".wrapper_2").slideDown(0, (function () {
        $("html, body").animate({scrollTop: $("#wrp2").offset().top}, 0)
    }))
}));
var time = 600;

function start_timer() {
    intr = setInterval(tick, 1e3)
}

function tick() {
    time -= 1;
    var t = Math.floor(time / 60), e = time - 60 * t;
    0 == t && 0 == e && clearInterval(intr), e = e >= 10 ? e : "0" + e, $("#min").html("0" + t), $("#sec").html(e)
}

resultWrapper = document.querySelector(".spin-result-wrapper"), wheel = document.querySelector(".wheel-img");

function spin() {
    wheel.classList.contains("rotated") || (wheel.classList.add("super-rotation"), setTimeout((function () {
        resultWrapper.style.display = "block", jQuery(".fireworks").toggle(), jQuery(".fireworks").append(canvas), canvas.width = SCREEN_WIDTH, canvas.height = SCREEN_HEIGHT, setInterval(launch, 400), setInterval(loop, 10)
    }), 8e3), setTimeout((function () {
        $(".spin-wrapper").slideUp(), $(".order_block").slideDown(), start_timer()
    }), 1e4), wheel.classList.add("rotated"))
}

closePopup = document.querySelector(".close-popup");
$(".close-popup, .pop-up-button").click((function (t) {
    t.preventDefault(), $(".spin-result-wrapper").fadeOut(), $(".wrapper_2").css({display: "flex"})
})), $(".pop-up-button, .spin-result-wrapper, .close-popup").click((function () {
    $(".fireworks, .wrapper_F").hide(), $(".wrapper_2").slideDown(0, (function () {
        $("html, body").animate({scrollTop: $("#wrp2").offset().top}, 0)
    }))
})), $(".pop-up-button").on("touchend, click");
var intr;
time = 600;

function start_timer() {
    intr = setInterval(tick, 1e3)
}

function tick() {
    time -= 1;
    var t = Math.floor(time / 60), e = time - 60 * t;
    0 == t && 0 == e && clearInterval(intr), e = e >= 10 ? e : "0" + e, $("#min").html("0" + t), $("#sec").html(e)
}