// partial-correlation.js

function calculatePartialCorrelation() {
    clearResults();  // Clear previous results
    const input = document.getElementById('dataInput').value;
    const data = parseCSV(input);
    
    if (data.length < 2 || data[0].length < 2) {
        displayError('Please provide at least 2 observations of 2 or more variables.');
        return;
    }

    try {
        console.log("Input data:", data);

        const covarianceMatrix = calculateCovarianceMatrix(data);
        console.log("Covariance Matrix:", matrixToString(covarianceMatrix));
        displayMatrix("Covariance Matrix", covarianceMatrix);

        const correlationMatrix = calculateCorrelationMatrix(covarianceMatrix);
        console.log("Correlation Matrix:", matrixToString(correlationMatrix));
        displayMatrix("Correlation Matrix", correlationMatrix);

        const inverseCorrelationMatrix = inverseMatrix(correlationMatrix);
        console.log("Inverse Correlation Matrix:", matrixToString(inverseCorrelationMatrix));
        displayMatrix("Inverse Correlation Matrix", inverseCorrelationMatrix);

        const partialCorrelationMatrix = calculatePartialCorrelationMatrix(inverseCorrelationMatrix);
        console.log("Partial Correlation Matrix:", matrixToString(partialCorrelationMatrix));
        displayMatrix("Partial Correlation Matrix", partialCorrelationMatrix);

    } catch (error) {
        console.error("Error in calculation:", error);
        displayError(error.message);
    }
}


function clearResults() {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = '';  // Clear the content of the result div
}
function parseCSV(input) {
    const rows = input.trim().split('\n');
    return rows.map(row => row.split(',').map(Number));
}

function calculateCovarianceMatrix(data) {
    const n = data.length;
    const m = data[0].length;
    const means = Array(m).fill(0);
    const covMatrix = Array(m).fill().map(() => Array(m).fill(0));

    // Calculate means
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            means[j] += data[i][j];
        }
    }
    for (let j = 0; j < m; j++) {
        means[j] /= n;
    }

    // Calculate covariances
    for (let i = 0; i < m; i++) {
        for (let j = i; j < m; j++) {
            let sum = 0;
            for (let k = 0; k < n; k++) {
                sum += (data[k][i] - means[i]) * (data[k][j] - means[j]);
            }
            covMatrix[i][j] = covMatrix[j][i] = sum / (n - 1);
        }
    }

    return covMatrix;
}

function calculateCorrelationMatrix(covMatrix) {
    const m = covMatrix.length;
    const corrMatrix = Array(m).fill().map(() => Array(m).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < m; j++) {
            corrMatrix[i][j] = covMatrix[i][j] / Math.sqrt(covMatrix[i][i] * covMatrix[j][j]);
        }
    }

    return corrMatrix;
}

function inverseMatrix(matrix) {
    const n = matrix.length;
    const identity = Array(n).fill().map((_, i) => Array(n).fill().map((_, j) => i === j ? 1 : 0));
    const augmented = matrix.map((row, i) => [...row, ...identity[i]]);

    for (let i = 0; i < n; i++) {
        let maxElement = Math.abs(augmented[i][i]);
        let maxRow = i;
        for (let k = i + 1; k < n; k++) {
            if (Math.abs(augmented[k][i]) > maxElement) {
                maxElement = Math.abs(augmented[k][i]);
                maxRow = k;
            }
        }

        [augmented[i], augmented[maxRow]] = [augmented[maxRow], augmented[i]];

        for (let k = i + 1; k < n; k++) {
            const factor = augmented[k][i] / augmented[i][i];
            for (let j = i; j < 2 * n; j++) {
                augmented[k][j] -= factor * augmented[i][j];
            }
        }
    }

    for (let i = n - 1; i >= 0; i--) {
        for (let k = i - 1; k >= 0; k--) {
            const factor = augmented[k][i] / augmented[i][i];
            for (let j = 2 * n - 1; j >= i; j--) {
                augmented[k][j] -= factor * augmented[i][j];
            }
        }
        const divisor = augmented[i][i];
        for (let j = 2 * n - 1; j >= i; j--) {
            augmented[i][j] /= divisor;
        }
    }

    return augmented.map(row => row.slice(n));
}

function calculatePartialCorrelationMatrix(invCorrMatrix) {
    const n = invCorrMatrix.length;
    const partialCorrMatrix = Array(n).fill().map(() => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) {
                partialCorrMatrix[i][j] = 1;
            } else {
                const denominator = Math.sqrt(invCorrMatrix[i][i] * invCorrMatrix[j][j]);
                partialCorrMatrix[i][j] = -invCorrMatrix[i][j] / denominator;
            }
        }
    }

    return partialCorrMatrix;
}

function matrixToString(matrix) {
    return '[' + matrix.map(row => '[' + row.join(', ') + ']').join(',\n ') + ']';
}

function clearResults() {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = '';  // Clear the content of the result div
}

function displayMatrix(title, matrix) {
    const resultDiv = document.getElementById('result');
    let output = `${title}:\n\n`;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            output += matrix[i][j].toFixed(4).padStart(10) + ' ';
        }
        output += '\n';
    }

    output += '\n';
    resultDiv.textContent += output;  // Append to existing content
    console.log(title + ":", output);
}

function displayError(message) {
    clearResults();  // Clear any previous results
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = "Error: " + message;
    console.error("Displayed error:", message);
}

function runTest() {
    console.log("Running test...");
    // Your test data
    const testData = `65,70,75
90,85,80
75,60,85
60,65,70`;

    document.getElementById('dataInput').value = testData.trim();
    calculatePartialCorrelation();
    console.log("Test completed. Check the result above and in the webpage.");
}

// Run the test automatically when the script loads
document.addEventListener('DOMContentLoaded', runTest);