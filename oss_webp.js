function check_webp_feature(feature, callback) {
var kTestImages = {
    lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
    lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
    alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
    animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
};
var img = new Image();
img.onload = function () {
    var result = (img.width > 0) && (img.height > 0);
    callback(false);
};
img.onerror = function () {
    callback(true);
};
img.src = "data:image/webp;base64," + kTestImages[feature];
}
function change_image_src(){$("img").each(
   function(){
       var dataSrc; 
       dataSrc = String($(this).attr("data-original"));
       $(this).attr("src",dataSrc+'_notwebp');
   }
);}
check_webp_feature('lossy',change_image_src());