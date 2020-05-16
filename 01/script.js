const canvas = document.getElementById("image");
// geting canvas rendring context
const ctx = canvas.getContext('2d');

// create the image
const img = new Image();

img.onload = function () {
    ctx.drawImage(img, 0, 0);
    //accesing to image imagedata using getImageData
    const pixel = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = pixel.data;
    // reading the pixel data
    for (let i = 0; i < data.length; i += 4) {
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = avg;
        data[i + 1] = avg;
        data[i + 2] = avg;
    }
    ctx.putImageData(pixel, 0, 0);
};
img.src = "Lenna_(test_image).png";
