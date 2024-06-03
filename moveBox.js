function moveBox(startRow, startCol, endRow, endCol) {
    let shiftValues = [];

    if (startRow === endRow) {
        let increment = startCol < endCol ? 1 : -1;
        for (let i = startCol + increment; i !== endCol + increment; i += increment) {
            shiftValues.push(boxes[startRow][i].value);
        }
    } else if (startCol === endCol) {
        let increment = startRow < endRow ? 1 : -1;
        for (let i = startRow + increment; i !== endRow + increment; i += increment) {
            shiftValues.push(boxes[i][startCol].value);
        }
    }

    boxes[endRow][endCol].value = boxes[startRow][startCol].value;

    let index = 0;
    if (startRow === endRow) {
        let increment = startCol < endCol ? 1 : -1;
        for (let i = startCol + increment; i !== endCol + increment; i += increment) {
            boxes[startRow][i].value = shiftValues[index++];
        }
    } else if (startCol === endCol) {
        let increment = startRow < endRow ? 1 : -1;
        for (let i = startRow + increment; i !== endRow + increment; i += increment) {
            boxes[i][startCol].value = shiftValues[index++];
        }
    }

    boxes[startRow][startCol].value = '';
}
