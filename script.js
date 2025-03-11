document.addEventListener('DOMContentLoaded', () => {

    const X_CLASS = 'x';
    const O_CLASS = 'o';
    let currentPlayer = X_CLASS;
    const cellElements = document.querySelectorAll('.cell');

    cellElements.forEach(cell => {
        cell.addEventListener('click', hadleClick, { once: true });
    });


    function hadleClick(e) {
        const cell = e.target;
        if (cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS)) {
            return;
        }
        const currentClass = currentPlayer === X_CLASS ? X_CLASS : O_CLASS;
        placeMark(cell, currentClass);
        if (checkWin(currentClass)) {
            alert(`${currentClass === X_CLASS ? 'X' : 'O' } wins!`);
        } else {
            currentPlayer = currentPlayer === X_CLASS ? O_CLASS : X_CLASS;
        }
    }

    function placeMark(cell, currentClass) {
        cell.classList.add(currentClass);
    }

    const WINNING_COMBINATIONS = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    function checkWin(currentClass) {
        return WINNING_COMBINATIONS.some(combination => {
            return combination.every(index => {
                return cellElements[index].classList.contains(currentClass);
            });
        });
    }

    function isDraw() {

        return [...cellElements].every(cell => {
            return cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS);
            });
    }
});