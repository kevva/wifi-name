import test from 'ava';
import m from '.';

test('async', async t => {
	t.truthy(await m());
});

test('sync', t => {
	t.truthy(m.sync());
});
