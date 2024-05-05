// Функция сбора данных с сайта
function collectDataFromFields(fieldList) {
    var data = {};
    fieldList.forEach(function(fieldId) {
        var element = document.getElementById(fieldId);
        if (element) {
            // Убираем "k3d_config_" из начала fieldId
            var key = fieldId.replace("k3d_config_", "");
            data[key] = element.value;
        }
    });
    return data;
}

// Функция для обработки выбора радиокнопок по имени
function processRadioButtons(ids) {
    var data = {};
    ids.forEach(function(id) {
        var radios = document.querySelectorAll('input[type="radio"][name="' + id + '"]:checked');
        if (radios.length > 0) {
            var key = id.replace("k3d_config_", "");
            data[key] = radios[0].value;
        }
    });
    return data;
}



// Функция для обработки выбора чекбоксов
function processCheckboxes(fieldIds) {
    var data = {};
    fieldIds.forEach(function(fieldId) {
        var checkboxes = document.querySelectorAll('#' + fieldId + ':checked');
        var value = checkboxes.length > 0; // Если чекбокс выбран, то значение будет true, иначе - false
        var key = fieldId.replace("k3d_config_", "");
        data[key] = value;
    });
    return data;
}

// Функция создания текстового содержимого файла
function createFileContent(data) {
    console.log("Все данные:", data);
    var included = `
################################################################################
# Included configs
################################################################################
[include macros.cfg]        # Основные макросы
[include input_shaper.cfg]  # ADXL Input Shaping
#[include leds.cfg]
[include fans.cfg]          # Вентилятор
[include idex.cfg]          # Смена печатающей головки
[include misc.cfg]          # Разное
[include fast_infill.cfg]   # sqv
[include power_loss.cfg]    # ?
[include shaper/ADXL_SHAPER.cfg] #
`;

    var basic = `
################################################################################
# Basic configurations
################################################################################
[mcu rpi]
serial: /tmp/klipper_host_mcu

[mcu]
serial: ${data.mcu_serial}

[temperature_sensor mcu]
sensor_type: temperature_mcu
sensor_mcu: mcu
min_temp: 0
max_temp: 100

[temperature_sensor host]
sensor_type: temperature_host
sensor_path: /sys/class/thermal/thermal_zone0/temp
min_temp: 0
max_temp: 100
  
[force_move]
enable_force_move: ${data.enable_force_move}

[printer]
kinematics: cartesian
max_velocity: ${data.max_velocity}
max_accel: ${data.max_accel}
max_accel_to_decel: ${data.max_accel_to_decel}
max_z_velocity: ${data.max_z_velocity}
max_z_accel: ${data.max_z_accel}
square_corner_velocity: 10
${data.MCU}`;

    var text = included + basic;
    return text;
}

// Функция скачивания файла
function downloadFile(filename, text) {
    var blob = new Blob([text], { type: 'text/plain' });
    var url = window.URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}

// Обработчик события для кнопки
function processDataAndDownload() {
    var fieldList = [
        `k3d_config_mcu_serial`,
        'k3d_config_max_accel',
        'k3d_config_max_velocity',
        'k3d_config_max_accel_to_decel',
        'k3d_config_max_z_velocity',
        'k3d_config_max_z_accel',
        `k3d_config_MCU`,
        `k3d_config_kinematics`,
        `k3d_config_minimum_cruise_ratio`,
        `k3d_config_square_corner_velocity`,
    ]; // Список идентификаторов обычных полей
    var radioFieldList = [
        'k3d_config_MCU'
    ]; // Список идентификаторов полей радиокнопок
    var checkboxFieldList = [
        'k3d_config_enable_force_move'
    ]; // Список идентификаторов полей чекбоксов

    var formData = collectDataFromFields(fieldList);
    var radioData = processRadioButtons(radioFieldList);
    var checkboxData = processCheckboxes(checkboxFieldList);

    // Объединяем все данные
    var allData = { ...formData, ...radioData, ...checkboxData };

    var fileContent = createFileContent(allData);
    downloadFile('printer.cfg', fileContent);
}

document.getElementById('processButton').addEventListener('click', processDataAndDownload);
