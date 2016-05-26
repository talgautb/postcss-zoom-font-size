import postcss from 'postcss';
import test    from 'ava';

import plugin from './';

function run(t, input, output, opts = { }) {
    return postcss([ plugin(opts) ]).process(input)
        .then( result => {
            t.deepEqual(result.css, output);
            t.deepEqual(result.warnings().length, 0);
        });
}

test('font-size without zoom', t => {
    return run(t,
        'a{ font-size: 10px; }',
        'a{ font-size: 12px; }',
        { });
});

test('font-size with zoom in 150% and rem', t => {
    return run(t,
        'a{ font-size: 1rem; }',
        '',
        { zoom: 150 });
});

test('test with zoom in 200%', t => {
    return run(t,
        'a{ font-size: 100%; }',
        'a{ font-size: 200%; }',
        { zoom: 200 });
});

test('test for fractional values', t => {
    return run(t,
        'a{ font-size: .5em; }',
        '',
        { });
});

test('test for string/text value', t => {
    return run(t,
        'p.class { font-size: inherit; }',
        '',
        { });
});

test('test for @font-face', t => {
    return run(t,
        '@font-face { font-family: Arial, sans-serif; }',
        '',
        { });
});
