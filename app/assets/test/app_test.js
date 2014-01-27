var should = require('should');

module.exports = function(index, view) {

    describe('app.js', function() {

        describe('#index', function() {

            it('exists', function() {
                should.exist(index);
                index.id.should.equal('index');
            });

            it('has Ti.UI.Window functions', function() {
                should(index.open).be.a.Function;
                should(index.close).be.a.Function;

                if (Ti.Platform.name === 'iPhone OS') {
                    should(index.hideTabBar).be.a.Function;
                }
            });

            it('has dimensions equal to the device', function() {
                index.size.height.should.equal(Ti.Platform.displayCaps.platformHeight);
                index.size.width.should.equal(Ti.Platform.displayCaps.platformWidth);
            });

        });
		
		describe('#helloworld', function(){
		
			it('should read hello world', function(){
				index.children[0].text.should.equal('Hello, World');
			});
		});
		
        describe('#myView', function() {

            it('exists', function(){
                should.exist(view);
                view.id.should.equal('myView');
            });

            it('has Ti.UI.View functions', function() {
                should(view.add).be.a.Function;
            });

            it('is a child of window', function() {
				// this is because we have a single label defined in xml. xml is apparently processed before ui elements in a controller. 
                index.children[1].id.should.equal('myView');
            });

			it(' should have two children elements', function(){
				index.children.length.should.equal(2);
               
			});

            it('view has same dimensions as window', function(){
                view.size.height.should.equal(index.size.height);
                view.size.width.should.equal(index.size.width);
            });

        });


		describe('a useless suite', function() {

			it('passing test 1', function(){});

			it('passing test 2 + 2 is four', function(){ 
				var four = 2 + 2;
				four.should.equal(4);
			 });

		});

    });

	  

    // run the tests
    mocha.run();
};