//n is the number of queens
//counter is the number of solutions
var n, counter = 0;
var x = new Array(50);

function verif(k) {
    var i;
    for (i = 1; i <= k - 1; i++) {
        if (x[k] == x[i] || Math.abs(x[i] - x[k]) == Math.abs(k - i))
            return 0;
    }
    return 1;
}

function showSolution() {
    var i, j, t = 1;
    counter++;
    document.write(counter);
    document.write('<br>');

    for (i = 1; i <= n; i++) {
        for (j = 1; j <= n; j++) {
            if (x[i] == j) {
                if (t % 2 == 1) document.write('<img src="images/lightQueen.jpg">');
                else document.write('<img src="images/darkQueen.jpg">');

            }
            else {
                if (t % 2 == 1) document.write('<img src="images/light.jpg">');
                else document.write('<img src="images/dark.jpg">');
            }

            t++;
        }

        document.write('<br>');
        if (n % 2 == 0) t--;
    }
    document.write('<br><br><br>');
}
function Back() {
    var k = 1;
    x[1] = 0;
    while (k >= 1) {
        while (x[k] < n) {
            x[k]++;

            //Verify if we've found a solution
            if (verif(k))
                if (k == n) showSolution();
                else {
                    k++;
                    x[k] = 0;
                }
        }
        k--;
    }
}

function again() {
    location.reload();
}

function main() {

    //Read the number of queens inserted by the user
    n = document.getElementById("inputNumber").value;
    if (n <= 50) {
        //Using backtraking algorithm to solve the Queens Problem
        Back();

        //Show the number of solutions
        if (counter == 0) {
            alert("No solution");
        }
        else {
            alert(" There are " + counter + " solutions");
        }

    }
    else {
        alert("Overflow");
    }
    //Press the button to insert another number of queens
    document.write('<button onclick="again()">Again</button>');
}
