describe('sample e2e test',function(){
	browser.get('#/main');

	it('test main page',function(){
		var ele = element(by.id('main'));
		expect(ele.getText()).toBe('main Page');
	});
});