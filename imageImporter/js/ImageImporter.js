function ImageImporter(canvas, ctx){
    this.canvas = canvas;
    this.ctx = ctx;
    this.img;
    this.imgLoaded = false;

    this.onLoadImg = function (){
        console.log("Info: Load image function not set.");
    };
}

ImageImporter.prototype.loadImage = function(path){
    this.img = new Image();
    this.img.src = path;
    
    //var selfObj = this;
    
    var lf = this.onLoadImage;
    
    this.img.onload = function(){
        lf(this);
    }

};
