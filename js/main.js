const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

editor.addEventListener('keyup', () => {
    const text = editor.value;
    preview.innerHTML = marked(text);  
})

