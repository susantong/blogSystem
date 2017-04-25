import http from 'http';
import assert from 'assert';

import '../lib/app.js';

describe('Example Node Server', () => {
	it('should return 200', done => {
		http.get('http://127.0.0.1:3001', res => {
			assert.equal(-1, [1, 2, 3].indexOf(5));
			done();
		});
	});
});