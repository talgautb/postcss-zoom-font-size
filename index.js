var postcss = require('postcss');

module.exports = postcss.plugin('postcss-zoom-font-size', function (opts) {
    opts = opts || {};
    var zoom = opts.zoom || '120';

    // Work with options here
    return function (css) {
        // Transform CSS AST here
        css.walkRules( function (rule) {
            var hasColor = rule.nodes.filter( function (node) {
                var props = ['font-size'];
                return props.indexOf(node.prop) !== -1;
            }).length;

            if (!hasColor) {
                rule.remove();
            }
        });

        css.walkDecls(function (decl) {
            if (decl.prop === 'font-size') {
                var str = decl.value;
                var val = str.match(/px|pt|mm|cm|%/);

                if (val) {
                    decl.value = parseFloat(str) * zoom / 100 + val[0];
                } else {
                    decl.parent.remove();
                }
            } else {
                decl.remove();
            }
        });

        css.walkAtRules( function (rule) {
            if (!rule.nodes.length || rule.name === 'font-face') {
                rule.remove();
            }
        });
    };
});
