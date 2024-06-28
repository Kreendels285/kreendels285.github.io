function PageLoaded() {
    console.log("Страница загружена | Page loaded");
}

function SetImg(sel_url) {
    var item = document.getElementById('preview');
    item.src=sel_url;
}