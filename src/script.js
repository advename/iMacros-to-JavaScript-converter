    let convertButton = document.querySelector("#top-container-209 #convertButton");
    let myVariable = document.querySelector("#top-container-209 #myVariable");
    let imacros = document.querySelector("#top-container-209 #imacros-script");
    let javaScript = document.querySelector("#top-container-209 #java-script");
    console.log("reaction-start");

    convertButton.addEventListener('click', startConversion);
    console.log(imacros.value);
    console.log(javaScript.value);


    function startConversion() {
        console.log("reaction");
        javaScript.value = null;

        javaScript.value = "var " + myVariable.value + "; \n" + myVariable.value + " = \"CODE:\"; "


        var lines = imacros.value.split('\n');
        for (var line = 0; line < lines.length; line++) {

            console.log(lines[line]);
            let temp = lines[line].replace("\\", "\\\\");
            temp = temp.replace("\"", "\\\"");

            javaScript.value = javaScript.value + "\n" + myVariable.value + " += \"" + temp + "\" + \"\\n\";  ";

        };
        javaScript.value = javaScript.value + "\niimPlay(" + myVariable.value + ");"

    };
