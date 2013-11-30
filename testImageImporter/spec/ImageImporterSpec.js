describe("ImageImporter", function() {
    var canvas;
    var ctx;
    var imageImporter;
    var path;

    beforeEach(function() {
        canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");
        imageImporter = new ImageImporter(canvas, ctx);
        path = "img/bender_160.jpg";
        imageImporter.loadImage(path);
    
    });

    describe("Load an Image", function() {
    
        it("should create an image object", function() {
            expect(imageImporter.img).not.toBe(null);
            expect(imageImporter.img.src).toMatch(path);
        });
    
        it("should draw the image into the canvas", function() {
            expect(imageImporter.imgLoaded).not.toBe(true);
        });
    
    });
});