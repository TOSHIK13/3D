var config_mcu = {
  'btt_octopus_pro': {
    motor0: {
      id: '0',
      step_pin: '!PF13',
      dir_pin: 'PF12',
      enable_pin: '!PF14',
      endstop_pin: '!PG6',
      uart_pin: 'PC4'
    },
    motor1: {
      id: '1',
      step_pin: '',
      dir_pin: '',
      enable_pin: '',
      endstop_pin: '',
      uart_pin: ''
    },
    motor2: {
      id: '2',
      step_pin: '',
      dir_pin: '',
      enable_pin: '',
      endstop_pin: '',
      uart_pin: ''
    },
    motor3: {
      id: '3',
      step_pin: '',
      dir_pin: '',
      enable_pin: '',
      endstop_pin: '',
      uart_pin: ''
    },
    motor4: {
      id: '4',
      step_pin: '',
      dir_pin: '',
      enable_pin: '',
      endstop_pin: '',
      uart_pin: ''
    },
    motor5: {
      id: '5',
      step_pin: '',
      dir_pin: '',
      enable_pin: '',
      endstop_pin: '',
      uart_pin: ''
    },
    motor6: {
      id: '6',
      step_pin: '',
      dir_pin: '',
      enable_pin: '',
      endstop_pin: '',
      uart_pin: ''
    },
    motor7: {
      id: '7',
      step_pin: '',
      dir_pin: '',
      enable_pin: '',
      endstop_pin: '',
      uart_pin: ''
    }
  }
};


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
function creatSteppers(data, motor, axis, main = true) {
    //сли ость не основаня взять rotation_distance основной
    var general_parameters = {
        full_steps_per_rotation: '200',
        microsteps: '128',
        homing_speed: '20',
        second_homing_speed: '5'

    };
    var individual_parameters = {
        dir: (data[`${axis}_dir`]) ? '!' : '',
        position_min: data[`${axis}_position_min`],
        position_max: data[`size_${axis}`],
        position_endstop: data[`${axis}_position_endstop`],
        rotation_distance: (main) ? data[`${axis}_rotation_distance`] : data[`${axis.slice(0, -1)}_rotation_distance`],
        run_current: (main) ? data[`${axis}_run_current`] : data[`${axis.slice(0, -1)}_run_current`],
        hold_current: (main) ? data[`${axis}_hold_current`] : data[`${axis.slice(0, -1)}_hold_current`]
    };
    var step = { ...motor, ...general_parameters, ...individual_parameters};
    step['axis'] = axis;

    var text_step1 = `
#Motor${step.id}
[stepper_${step.axis}]
step_pin: ${step.step_pin}
dir_pin: ${step.dir}${step.dir_pin} # напрвление вращения
enable_pin: ${step.enable_pin}
rotation_distance: ${step.rotation_distance}
microsteps: ${step.microsteps}
full_steps_per_rotation: ${step.full_steps_per_rotation} # кол-во шагов на оборот. 1.8 градуса - 200, 0.9 градуса - 400
endstop_pin: ${step.endstop_pin}`;
    if (main) {
        var text_step2 = `position_min: ${step.position_min}
position_endstop: ${step.position_endstop}
position_max: ${step.position_max}
homing_speed: ${step.homing_speed}
second_homing_speed: ${step.second_homing_speed}`;
        // Ваш код для основного двигателя здесь
    } else {
        var text_step2 = '';
        // Ваш код для неосновного двигателя здесь
    }
    var text_drive = `

[tmc2209 stepper_${step.axis}]
uart_pin: ${step.uart_pin}
run_current: ${step.run_current}
hold_current: ${step.hold_current}
interpolate : True
stealthchop_threshold: 999999`;

    return text_step1 + text_step2 + text_drive
}


// Функция создания текстового содержимого файла
function createFileContent(data) {
    console.log("Все данные:", data);
    var included = `
################################################################################
#   Included configs
################################################################################
[include macros.cfg]        # Основные макросы
[include input_shaper.cfg]  # ADXL Input Shaping
#[include leds.cfg]
[include fans.cfg]          # Вентилятор
[include idex.cfg]          # Смена печатающей головки
[include misc.cfg]          # Разное
[include fast_infill.cfg]   # sqv
[include shaper/ADXL_SHAPER.cfg] #
`;

    var basic = `
################################################################################
#   Basic configurations
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
kinematics: ${data.kinematics}
max_velocity: ${data.max_velocity}
max_accel: ${data.max_accel}
max_accel_to_decel: ${data.max_accel_to_decel}
max_z_velocity: ${data.max_z_velocity}
max_z_accel: ${data.max_z_accel}
square_corner_velocity: 10
`;
    var stepper = `
################################################################################
#   X/Y Stepper Settings
################################################################################
${creatSteppers(data, config_mcu[data.MCU].motor0, 'x')}
${creatSteppers(data, config_mcu[data.MCU].motor1, 'y')}
${creatSteppers(data, config_mcu[data.MCU].motor2, 'y1', false)}

################################################################################
#   Z Stepper Settings
################################################################################
${creatSteppers(data, config_mcu['btt_octopus_pro'].motor3, 'z')}
${creatSteppers(data, config_mcu['btt_octopus_pro'].motor4, 'z1', false)}

################################################################################
#   Extruder
################################################################################


`;
    var bed = `
################################################################################
#   Bed Heater
################################################################################

`;

    var text = included + basic + stepper + bed;
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
        'k3d_config_mcu_serial',
        'k3d_config_max_accel',
        'k3d_config_max_velocity',
        'k3d_config_max_accel_to_decel',
        'k3d_config_max_z_velocity',
        'k3d_config_max_z_accel',
        'k3d_config_MCU',
        'k3d_config_kinematics',
        'k3d_config_minimum_cruise_ratio',
        'k3d_config_square_corner_velocity',
        'k3d_config_x_position_min',
        'k3d_config_x_position_endstop',
        'k3d_config_y_position_min',
        'k3d_config_y_position_endstop',
        'k3d_config_z_position_min',
        'k3d_config_z_position_endstop',
        'k3d_config_size_x',
        'k3d_config_size_y',
        'k3d_config_size_z',
        'k3d_config_x_rotation_distance',
        'k3d_config_y_rotation_distance',
        'k3d_config_z_rotation_distance',
        'k3d_config_x_run_current',
        'k3d_config_x_hold_current',
        'k3d_config_y_run_current',
        'k3d_config_y_hold_current',
        'k3d_config_z_run_current',
        'k3d_config_z_hold_current',
    ]; // Список идентификаторов обычных полей
    var radioFieldList = [
        'k3d_config_MCU'
    ]; // Список идентификаторов полей радиокнопок
    var checkboxFieldList = [
        'k3d_config_enable_force_move',
        'k3d_config_x_dir',
        'k3d_config_y_dir',
        'k3d_config_z_dir',
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
