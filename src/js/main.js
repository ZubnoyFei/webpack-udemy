function extracted() {
    (() => {
        var o = {
            693: o => {
                o.exports = function () {
                    this.hello = function () {
                        console.log("Hello")
                    }, this.goodbye = function () {
                        console.log("Goodbye")
                    }
                }
            }
        }, e = {};

        function n(t) {
            var r = e[t];
            if (void 0 !== r) return r.exports;
            var l = e[t] = {exports: {}};
            return o[t](l, l.exports, n), l.exports
        }

        (() => {
            const o = new (n(693));
            o.hello(), o.goodbye()
        })()
    })();
}

