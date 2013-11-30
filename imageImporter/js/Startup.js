startup=function(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    
    var nodeFileName = document.getElementById('fileName');
    var fileNameText = document.createTextNode('...');
    nodeFileName.appendChild(fileNameText);

    
    var imageImporter = new ImageImporter(canvas, ctx);

    imageImporter.onLoadImage = function(img) {
        //canvas.width=canvas.width;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
        this.imgLoaded = true;
    };
    
    function handleFileSelect(evt) {
        var files = evt.target.files;
        
        if(files.length === 0)
        {
            return;
        }
        
        var fileImg = files[0];
        
        if(fileImg.type !== '' && !fileImg.type.match('image.*'))
        {
            return;
        }

        window.URL = window.URL || window.webkitURL;

        var imageURL = window.URL.createObjectURL(fileImg);

        imageImporter.loadImage(imageURL);
        nodeFileName.removeChild(fileNameText);
        fileNameText = document.createTextNode(fileImg.name);
        nodeFileName.appendChild(fileNameText);
    };
        
    function handleFileSelectDnD(evt) {
        evt.stopPropagation();
        evt.preventDefault();

        var files = evt.dataTransfer.files;
        
        if(files.length === 0)
        {
            return;
        }
        
        var fileImg = files[0];
        
        if(fileImg.type !== '' && !fileImg.type.match('image.*'))
        {
            return;
        }

        window.URL = window.URL || window.webkitURL;

        var imageURL = window.URL.createObjectURL(fileImg);

        imageImporter.loadImage(imageURL);
        document.getElementById('files').value = "";
        //document.getElementById('fileName').value = "...";
        nodeFileName.removeChild(fileNameText);
        fileNameText = document.createTextNode(fileImg.name);
        nodeFileName.appendChild(fileNameText);
    };
        
    function handleDragOver(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'copy';
    };

    document.getElementById('files').addEventListener('change', handleFileSelect, false);
    canvas.addEventListener('dragover', handleDragOver, false);
    canvas.addEventListener('drop', handleFileSelectDnD, false);

};

