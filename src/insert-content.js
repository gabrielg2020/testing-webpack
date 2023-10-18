const insertDiv = document.createElement('div');

function insert(btnContent) {
    insertDiv.textContent = `This is tab ${btnContent[btnContent.length]}`;

    return {insertDiv};
}