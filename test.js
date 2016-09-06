import test from 'ava';
import m from './';

test(async t => {
	const name = await m();
	t.truthy(name);
});
