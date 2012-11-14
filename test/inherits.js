describe('inherits', function () {
  it('should provide a provide prototype for a constructor', function () {
    function Top () {}
    Top.prototype.noop = function () {};

    function Bottom () {}
    inherits(Bottom, Top);
    Bottom.prototype.noop2 = function () {};

    var bottom = new Bottom();
    bottom.should.be.instanceof(Top);
    bottom.should.be.instanceof(Bottom);
    bottom.should.respondTo('noop');
    bottom.should.respondTo('noop2');
  });
});
