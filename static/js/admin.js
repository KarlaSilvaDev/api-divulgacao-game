window.onload() = function () {
    autoResize();
}

function autoResize() {
    const textarea = document.getElementById('auto-resize-textarea');
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}