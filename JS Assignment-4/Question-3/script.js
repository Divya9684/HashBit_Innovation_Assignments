function toggleVisibility() {
    var paragraph = document.getElementById('useless-paragraph');

    var style = window.getComputedStyle(paragraph);

    if (style.display === 'none') {
        paragraph.style.display = 'block';
    } else {
        paragraph.style.display = 'none';
    }
}
