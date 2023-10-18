const insertDiv = document.createElement('div');

export default function insert(btnContent) {
    insertDiv.textContent = `This is tab ${btnContent[btnContent.length]}`;

    return {insertDiv};
}