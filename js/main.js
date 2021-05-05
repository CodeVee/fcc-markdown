const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

const runPreview = () => {
    const text = editor.value;
    preview.innerHTML = marked(text);  
}

editor.addEventListener('keyup', runPreview)



