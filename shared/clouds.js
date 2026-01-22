(function() {
    var root = document.documentElement;
    var baseDurations = [75, 55, 90];

    baseDurations.forEach(function(base, i) {
        var n = i + 1;
        var delay = -Math.random() * base;
        var duration = base + (Math.random() - 0.5) * base * 0.3;
        root.style.setProperty('--delay-' + n, delay + 's');
        root.style.setProperty('--duration-' + n, duration + 's');
    });
})();
