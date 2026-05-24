// 보드 생성
export function createBoard() {

    const board = document.getElementById('board');

    board.innerHTML = '';

    for (let row = 0; row < 6; row++) {

        const rowDiv = document.createElement('div');

        rowDiv.classList.add('board-row');

        for (let col = 0; col < 5; col++) {

            const tile = document.createElement('div');

            tile.classList.add('tile');

            tile.id = `tile-${row}-${col}`;

            rowDiv.appendChild(tile);
        }

        board.appendChild(rowDiv);
    }
}

// 글자 입력
export function updateTile(row, col, letter) {

    const tile =
        document.getElementById(`tile-${row}-${col}`);

    tile.textContent = letter;
}

// 결과 표시
export function renderGuess(result, row) {

    result.forEach((item, col) => {

        const tile =
            document.getElementById(`tile-${row}-${col}`);

        tile.classList.add(item.status);
    });
}

// 메시지
export function showMessage(text) {

    document.getElementById('message').textContent = text;
}

// 키보드 생성
export function createKeyboard(handleKeyPress) {

    const keyboard =
        document.getElementById('keyboard');

    keyboard.innerHTML = '';

    const rows = [
        'QWERTYUIOP',
        'ASDFGHJKL',
        'ENTERZXCVBNM←'
    ];

    rows.forEach(rowText => {

        const row =
            document.createElement('div');

        row.classList.add('keyboard-row');

        if (rowText.includes('ENTER')) {

            const enterKey =
                createKey('ENTER');

            row.appendChild(enterKey);

            'ZXCVBNM'.split('').forEach(letter => {

                const key =
                    createKey(letter);

                row.appendChild(key);
            });

            const backspace =
                createKey('←');

            row.appendChild(backspace);

        } else {

            rowText.split('').forEach(letter => {

                const key =
                    createKey(letter);

                row.appendChild(key);
            });
        }

        keyboard.appendChild(row);
    });

    function createKey(text) {

        const button =
            document.createElement('button');

        button.textContent = text;

        button.classList.add('key');

        if (text === 'ENTER' || text === '←') {
            button.classList.add('large-key');
        }

        button.addEventListener('click', () => {
            handleKeyPress(text);
        });

        return button;
    }
}