# Создание таблицы

<div>
    <div id="textContainer"></div>
</div>
<h2>Добавить поле в таблицу</h2>
<table border="1">
    <tr>
        <th><label for="name">Имя переменной:</label></th>
        <th><input  type="text" id="name" size="100"></th>
    </tr>
    <tr>
        <th><label for="value">Значение:</label></th>
        <th><input  type="text" id="value" size="100"></th>
    </tr>
    <tr>
        <td><label for="title">Название в таблице:</label></td>
        <td><input  type="text" id="title" size="100"></td>
    </tr>
    <tr>
        <td><label for="description">Описание:</label></td>
        <td><input  type="text" id="description" size="100"></td>
    </tr>
</table>
<div>
    <button class="caliButton" onclick="saveData()">Добавить</button>
    <button class="caliButton" onclick="downloadData()">Скачать</button>
</div>

<script>
    let data = [];
    let myList = [];
    let text = "";
    let text1 = `<table style="width: 100%; font-size: 0.8rem;">
<tbody>
`;
    let text2 = `    </tbody>
</table>

`;
    let textname = "";
    function saveData() {
        const name = document.getElementById("name").value;
        const value = document.getElementById("value").value;
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        textname += `\`k3d_config_${name}\`,
`;

        // Add new entry to data array
        data[name]={value: value, title:title, description: description};
        text +=`        <tr>
        <th class="lang" id="table.${name}.title">${data[name].title}</td>
        <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_${name}" name="k3d_config_${name}" value="${data[name].value}"></td>
        <td class="lang" id="table.${name}.description" style="text-align: justify;">${data[name].description}</td>
    </tr>
`;


        displayText()

        // Clear input fields
        document.getElementById("name").value = "";
        document.getElementById("value").value = "";
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
    }



    function displayText() {
        // Найдите элемент, в который хотите вывести текст
        var textContainer = document.getElementById("textContainer");

        // Выведите текст в этот элемент
        textContainer.innerHTML = text1 + text + text2;
    }

    function downloadData() {
        const filename = "data.txt";
        download(filename, text1 + text + text2 + textname);
    }

    function download(filename, text) {
        const element = document.createElement("a");
        element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
        element.setAttribute("download", filename);

        element.style.display = "none";
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }
</script>
