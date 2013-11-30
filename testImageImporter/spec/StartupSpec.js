describe("A spy on handleFileSelect", function() {
    var foo = null;

  beforeEach(function() {
    foo = spyOn(startup, 'handleFileSelect');
  });

  it("tracks that the spy was called", function() {
    waits(5000);
    expect(foo).toHaveBeenCalled();
  });

});

describe("A spy on handleFileSelectDnD", function() {
    var foo = null;

  beforeEach(function() {
    foo = spyOn(startup, 'handleFileSelectDnD');
  });

  it("tracks that the spy was called", function() {
    waits(5000);
    expect(foo).toHaveBeenCalled();
  });

});

