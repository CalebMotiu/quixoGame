const length = 5;
computerCount = 0;
var change = "o";
var selectedR = 6,
    selectedC = 6;
var check = 6;
var canvasWidth = window.innerWidth - 30;
var canvasHeight = window.innerHeight - 20;
var cubeSize = canvasHeight / 8;
var tableHeightSide = (canvasHeight - cubeSize * 5) / 2;
var tableWidthSide = (canvasWidth - cubeSize * 5) / 2;
var humanOrComputer = "null";

class Patrat {
    initializare(patrat = null) {

        this.patrat = [];
        for (let r = 0; r < length; r++) {
            this.patrat[r] = [];
            for (let c = 0; c < length; c++) {
                let valueObj = {
                    value: "0",

                };
                this.patrat[r][c] = valueObj;
            }
        }

    }

    afisare(xInit, y) {
        let x = xInit;
        for (var r = 0; r < length; r++) {
            x = xInit;
            for (var c = 0; c < length; c++) {
                stroke("black");
                strokeWeight(2)
                if (this.patrat[r][c].color == "red") fill("rgb(43, 255, 255)");
                else fill("rgb(194,178,128)");

                rect(x, y, cubeSize, cubeSize,10);


                if (this.patrat[r][c].value == "o") {
                    strokeWeight(1);
                    fill("black");
                    circle(x + cubeSize / 2, y + cubeSize / 2, cubeSize / 1.4);
                    fill("rgb(194,178,128)");
                    circle(x + cubeSize / 2, y + cubeSize / 2, cubeSize / 2);

                }

                if (this.patrat[r][c].value == "x") {
                    strokeWeight(7);
                    line(
                        x + cubeSize / 6,
                        y + cubeSize / 6,
                        x + cubeSize / 1.15,
                        y + cubeSize / 1.2
                    );
                    line(
                        x + cubeSize / 15,
                        y + cubeSize / 1.2,
                        x + cubeSize / 1.15,
                        y + cubeSize / 6
                    );
                }

                x += cubeSize;
            }
            y += cubeSize;
        }
    }

    clicked() {
        if (humanOrComputer == "computer" && change == "x") this.computer();
        else {
            for (let r = 0; r < length; r++)
                for (let c = 0; c < length; c++)
                    if (
                        mouseY >= tableHeightSide + cubeSize * r &&
                        mouseY <= tableHeightSide + cubeSize + cubeSize * r &&
                        mouseX >= tableWidthSide + cubeSize * c &&
                        mouseX <= tableWidthSide + cubeSize + cubeSize * c &&
                        (c < 1 || c > length - 2 || r == 0 || r == length - 1)
                    ) {
                        if (this.patrat[r][c].color != "red") {
                            if (check != 6) this.patrat[selectedR][selectedC].value = change;
                            for (let i = 0; i < length; i++)
                                for (let j = 0; j < length; j++)
                                    if (this.patrat[i][j].color == "red")
                                        this.patrat[i][j].color = "";
                        }

                        if (this.patrat[r][c].color == "red") {
                            for (let i = 0; i < length; i++)
                                for (let j = 0; j < length; j++)
                                    if (this.patrat[i][j].color == "red")
                                        this.patrat[i][j].color = "";

                            if (r == 0 && c != 0 && c != 4) {
                                this.patrat[4][c].value = this.patrat[3][c].value;
                                this.patrat[3][c].value = this.patrat[2][c].value;
                                this.patrat[2][c].value = this.patrat[1][c].value;
                                this.patrat[1][c].value = this.patrat[0][c].value;
                            }

                            if (r == 4 && c != 0 && c != 4) {
                                this.patrat[0][c].value = this.patrat[1][c].value;
                                this.patrat[1][c].value = this.patrat[2][c].value;
                                this.patrat[2][c].value = this.patrat[3][c].value;
                                this.patrat[3][c].value = this.patrat[4][c].value;
                            }

                            if (c == 0 && r != 0 && r != 4) {
                                this.patrat[r][4].value = this.patrat[r][3].value;
                                this.patrat[r][3].value = this.patrat[r][2].value;
                                this.patrat[r][2].value = this.patrat[r][1].value;
                                this.patrat[r][1].value = this.patrat[r][0].value;
                            }

                            if (c == 4 && r != 0 && r != 4) {
                                this.patrat[r][0].value = this.patrat[r][1].value;
                                this.patrat[r][1].value = this.patrat[r][2].value;
                                this.patrat[r][2].value = this.patrat[r][3].value;
                                this.patrat[r][3].value = this.patrat[r][4].value;
                            }

                            if (r == 0 && c == 0) {
                                if (selectedR == r) {
                                    for (let i = selectedC; i > 0; i--)
                                        this.patrat[0][i].value = this.patrat[0][i - 1].value;
                                }
                                if (selectedC == c) {
                                    for (let i = selectedR; i > 0; i--)
                                        this.patrat[i][0].value = this.patrat[i - 1][0].value;
                                }
                            }

                            if (r == 0 && c == 4) {
                                if (selectedR == r) {
                                    for (let i = selectedC; i < 4; i++)
                                        this.patrat[0][i].value = this.patrat[0][i + 1].value;
                                }
                                if (selectedC == c) {
                                    for (let i = selectedR; i > 0; i--)
                                        this.patrat[i][4].value = this.patrat[i - 1][4].value;
                                }
                            }

                            if (r == 4 && c == 4) {
                                if (selectedR == r) {
                                    for (let i = selectedC; i < 4; i++)
                                        this.patrat[4][i].value = this.patrat[4][i + 1].value;
                                }
                                if (selectedC == c) {
                                    for (let i = selectedR; i < 4; i++)
                                        this.patrat[i][4].value = this.patrat[i + 1][4].value;
                                }
                            }
                            if (r == 4 && c == 0) {
                                if (selectedR == r) {
                                    for (let i = selectedC; i > 0; i--)
                                        this.patrat[4][i].value = this.patrat[4][i - 1].value;
                                }
                                if (selectedC == c) {
                                    for (let i = selectedR; i < 4; i++)
                                        this.patrat[i][0].value = this.patrat[i + 1][0].value;
                                }
                            }
                            this.patrat[r][c].value = change;
                            check = 6;
                            if (change == "o") change = "x";
                            else change = "o";
                        } else if (
                            r == 0 &&
                            (this.patrat[r][c].value == "0" ||
                                this.patrat[r][c].value == change)
                        ) {
                            if (this.patrat[r][c].value == change) {
                                this.patrat[r][c].value = "0";
                                check = 1;
                            }
                            selectedC = c;
                            selectedR = r;
                            if (c != 4) this.patrat[r][length - 1].color = "red";
                            this.patrat[length - 1][c].color = "red";
                            if (c != 0) this.patrat[0][0].color = "red";
                        } else if (
                            r == 4 &&
                            (this.patrat[r][c].value == "0" ||
                                this.patrat[r][c].value == change)
                        ) {
                            if (this.patrat[r][c].value == change) {
                                this.patrat[r][c].value = "0";
                                check = 1;
                            }
                            selectedC = c;
                            selectedR = r;
                            if (c != 4) this.patrat[4][4].color = "red";
                            this.patrat[0][c].color = "red";
                            if (c != 0) this.patrat[4][0].color = "red";
                        } else if (
                            c == 0 &&
                            (this.patrat[r][c].value == "0" ||
                                this.patrat[r][c].value == change)
                        ) {
                            if (this.patrat[r][c].value == change) {
                                this.patrat[r][c].value = "0";
                                check = 1;
                            }
                            selectedC = c;
                            selectedR = r;
                            if (r != 0) this.patrat[0][0].color = "red";
                            this.patrat[r][4].color = "red";
                            if (r != 4) this.patrat[4][0].color = "red";
                        } else if (
                            c == 4 &&
                            (this.patrat[r][c].value == "0" ||
                                this.patrat[r][c].value == change)
                        ) {
                            if (this.patrat[r][c].value == change) {
                                this.patrat[r][c].value = "0";
                                check = 1;
                            }
                            selectedC = c;
                            selectedR = r;
                            if (r != 0) this.patrat[0][4].color = "red";
                            this.patrat[r][0].color = "red";
                            if (r != 4) this.patrat[4][4].color = "red";
                        }
                    }
        }
    }
    winner() {
        let count;
        let name;

        for (let r = 0; r < length; r++) {
            count = 0;
            for (let c = 1; c < length; c++) {
                if (
                    this.patrat[r][c].value != this.patrat[r][c - 1].value ||
                    this.patrat[r][c].value == "0"
                )
                    count++;
                name = this.patrat[r][c].value;
            }

            if (count == 0) {
                if (name == "o") win = player1 + " won the game ";
                else win = player2 + " won the game ";
                r = length;
            }
        }
        if (this.patrat[0][0].value != 0)
            if (
                this.patrat[0][0].value == this.patrat[1][1].value &&
                this.patrat[1][1].value == this.patrat[2][2].value &&
                this.patrat[2][2].value == this.patrat[3][3].value &&
                this.patrat[3][3].value == this.patrat[4][4].value
            ) {
                if (name == "o") win = player1 + " won the game ";
                else win = player2 + " won the game ";
            }
        if (
            this.patrat[0][4].value == this.patrat[1][3].value &&
            this.patrat[1][3].value == this.patrat[2][2].value &&
            this.patrat[0][4].value != "0" &&
            this.patrat[2][2].value == this.patrat[3][1].value &&
            this.patrat[3][1].value == this.patrat[4][0].value
        ) {
            if (name == "o") win = player1 + " won the game ";
            else win = player2 + " won the game ";
        }


        for (let c = 0; c < length; c++) {
            count = 0;
            for (let r = 1; r < length; r++) {
                if (
                    this.patrat[r - 1][c].value != this.patrat[r][c].value ||
                    this.patrat[r][c].value == "0"
                )
                    count++;
                name = this.patrat[r][c].value;
            }

            if (count == 0) {
                if (name == "o") win = player1 + " won the game  ";
                else win = player2 + " won the game ";
                c = length;
            }
        }
    }
}