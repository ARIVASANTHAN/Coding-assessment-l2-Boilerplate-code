function showImages(category) {
    var columns = document.querySelectorAll('.image-column');
    columns.forEach(function(column) {
        if (column.classList.contains(category)) {
            column.style.display = 'block';
        } else {
            column.style.display = 'none';
        }
    });
}
