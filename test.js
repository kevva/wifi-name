import test from 'ava';
import fn from './';

test(async t => {
	t.plan(1);

	if (process.env.CI) {
		t.assert(true);
		return;
	}

	const name = await fn();
	t.ok(name);
});
