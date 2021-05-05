const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

const runPreview = () => {
    const text = editor.value;
    preview.innerHTML = marked(text);  
}

document.addEventListener('DOMContentLoaded', runPreview);

editor.addEventListener('keyup', runPreview)



