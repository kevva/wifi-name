import test from 'ava';
import fn from './';

test(async t => {
	t.plan(1);
	const name = await fn();
	t.ok(name);
});
