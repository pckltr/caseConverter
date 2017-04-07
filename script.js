(function() {
    var init = function() {
        var inputArea = document.getElementById('input-area');
        var buttonList = document.getElementsByClassName('button');
        var originalInput = inputArea.value;
        var copyToClipboard = function() {
            if (document.getElementById('input-area').value !== " ") {
                inputArea.select();
                document.execCommand('copy');
                if (window.getSelection) {
                    if (window.getSelection().empty) {
                        window.getSelection().empty();
                    } else if (window.getSelection().removeAllRanges) {
                        window.getSelection().removeAllRanges();
                    }
                } else if (document.selection) {
                    document.selection.empty();
                }
            }
            return;
        }
        var findCharacterAndChange = function(character) {
            var valueArray = inputArea.value.toLowerCase().split("");
            for (var i = 0; i < valueArray.length; i++) {
                if (i === 0) {
                    valueArray[i] = valueArray[i].toUpperCase();
                }
                if (i < valueArray.length - 1 && valueArray[i] === character) {
                    valueArray[i + 1] = valueArray[i + 1].toUpperCase();
                }
                if (i < valueArray.length - 2 && valueArray[i] === character && character === ".") {
                    valueArray[i + 2] = valueArray[i + 2].toUpperCase();
                }
            }
            inputArea.value = valueArray.join("");
            return;
        }
        var reverseCase = function() {
            var valueArray = inputArea.value.split("");
            for (var i = 0; i < valueArray.length; i++) {
                if (valueArray[i] === valueArray[i].toUpperCase()) {
                    valueArray[i] = valueArray[i].toLowerCase();
                } else {
                    valueArray[i] = valueArray[i].toUpperCase();
                }
            }
            inputArea.value = valueArray.join("");
            return;
        }
        var changeCase = function(event) {
            switch (event.target.dataset.caseType) {
                case "upper":
                    inputArea.value = inputArea.value.toUpperCase();
                    break;
                case "lower":
                    inputArea.value = inputArea.value.toLowerCase();
                    break;
                case "title":
                    findCharacterAndChange(" ");
                    break;
                case "reverse":
                    reverseCase();
                    break;
                case "sentence":
                    findCharacterAndChange(".");
                    break;
                case "clear":
                    inputArea.value = "";
                    break;
                case "copy":
                    copyToClipboard();
                    break;
                default:
                    break;
            }
            return;
        };
        for (var i = 0; i < buttonList.length; i++) {
            buttonList[i].addEventListener("click", changeCase);
        }
    };
    document.addEventListener("DOMContentLoaded", function() {
        init();
    });
})();
