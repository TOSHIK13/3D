# Настройка конфига

!!! note

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.


<script src="https://cdn.jsdelivr.net/npm/streamsaver@2.0.3/StreamSaver.min.js"></script>

<label for="toggle">Расширенный режим:</label><input type="checkbox" id="toggleTablePro">


<table style="width: 100%; font-size: 0.8rem;">
    <tbody>
        <tr>
            <td colspan="3" style="text-align:center">Основные настройки</td>
        </tr>
        <tr>
            <th class="lang" id="table.serial.title">Адрес MCU</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_mcu_serial" name="k3d_config_mcu_serial" value="/dev/serial/by-id/usb-Klipper_stm32f429xx_3F0039000950314B33323220-if00"></td>
            <td class="lang" id="table.serial.description" style="text-align: justify;">Адрес можно узнать в консоле Линукса <code>ls /dev/serial/by-id</code></td>
        </tr>
        </tr>
            <tr>
            <th class="lang" id="table.size_x.title">Область печати по X</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_size_x" name="k3d_config_size_x" value="400"></td>
            <td class="lang" id="table.size_x.description" style="text-align: justify;">[мм] Область печати по оси X </td>
        </tr>
        <tr>
            <th class="lang" id="table.size_y.title">Область печати по Y</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_size_y" name="k3d_config_size_y" value="250"></td>
            <td class="lang" id="table.size_y.description" style="text-align: justify;">[мм] Область печати по оси Y</td>
        </tr>
        <tr>
            <th class="lang" id="table.size_z.title">Область печати по Z</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_size_z" name="k3d_config_size_z" value="300"></td>
            <td class="lang" id="table.size_z.description" style="text-align: justify;">[мм] Область печати по оси Z</td>
        </tr>
        <tr>
            <th class="lang" id="table.idex.title">Количество экструдеров</td>
            <td style="text-align:center"><input type="checkbox" id="k3d_config_idex" name="k3d_config_idex" checked></td>
            <td class="lang" id="table.idex.description" style="text-align: justify;">Выключено - обычный одиночный экструдер <br>Включено - IDEX (две независимые печатающие головы)</td>
        </tr>
        <tr>
            <th class="lang" id="k3d_config_MCU">Материнская плата</td>
            <td align="center">
                <form style="text-align:left; width:fit-content;"><input type="radio" id="k3d_config_MCU_0" name="k3d_config_MCU" value="fysetc_spider"><label for="k3d_la_firmwareMarlin"> Fysetc spider</label><br>
                <input type="radio" id="k3d_config_MCU_1" name="k3d_config_MCU" value="btt_octopus"><label for="k3d_la_firmwareKlipper"> BTT Octopus</label><br>
                <input type="radio" id="k3d_config_MCU_2" name="k3d_config_MCU" value="btt_octopus_pro_v1.0" checked><label for="k3d_la_firmwareRRF"> BTT Octopus pro v1.0</label><br>
                <input type="radio" id="k3d_config_MCU_3" name="k3d_config_MCU" value="btt_octopus_pro_v1.1"><label for="k3d_la_firmwareRRF"> BTT Octopus pro v1.1</label><br>
				<input type="radio" id="k3d_config_MCU_4" name="k3d_config_MCU" value="btt_skr_1.4"><label for="k3d_la_firmwareRRF"> BTT SKR 1.4</label>
                </form>
            </td>
            <td class="lang" id="table.firmware.description" style="text-align: justify;">Выберите подходящую материнскую плату</td>
        </tr>
    </tbody>
    <tbody id="tablePro" style="display: none;">
        <tr>
            <td colspan="3" style="text-align:center">Настройки направления и положения осей</td>
        </tr>
        <tr>
            <th class="lang" id="table.x_dir.title">Инвертировать X</td>
            <td style="text-align:center"><input type="checkbox" id="k3d_config_x_dir" name="k3d_config_x_dir" checked></td>
            <td class="lang" id="table.x_dir.description" style="text-align: justify;"></td>
        </tr>
        <tr>
            <th class="lang" id="table.y_dir.title">Инвертировать Y</td>
            <td style="text-align:center"><input type="checkbox" id="k3d_config_y_dir" name="k3d_config_y_dir" checked></td>
            <td class="lang" id="table.y_dir.description" style="text-align: justify;"></td>
        </tr>
        <tr>
            <th class="lang" id="table.z_dir.title">Инвертировать Z</td>
            <td style="text-align:center"><input type="checkbox" id="k3d_config_z_dir" name="k3d_config_z_dir" checked></td>
            <td class="lang" id="table.z_dir.description" style="text-align: justify;"></td>
        </tr>
        <tr>
            <th class="lang" id="table.extruder_dir.title">Инвертировать E</td>
            <td style="text-align:center"><input type="checkbox" id="k3d_config_extruder_dir" name="k3d_config_extruder_dir"></td>
            <td class="lang" id="table.extruder_dir.description" style="text-align: justify;"></td>
        </tr>
        <tr>
            <th class="lang" id="table.x_position_min.title">X position_min</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_x_position_min" name="k3d_config_x_position_min" value="-0.01"></td>
            <td class="lang" id="table.x_position_min.description" style="text-align: justify;">[мм] Минимальное положение по оси X</td>
        </tr>
        <tr>
            <th class="lang" id="table.x_position_endstop.title">Х position_endstop</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_x_position_endstop" name="k3d_config_x_position_endstop" value="0"></td>
            <td class="lang" id="table.x_position_endstop.description" style="text-align: justify;">[мм] Положения концевика оси Х</td>
        </tr>
        <tr>
            <th class="lang" id="table.y_position_min.title">Y position_min</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_y_position_min" name="k3d_config_y_position_min" value="-0.01"></td>
            <td class="lang" id="table.y_position_min.description" style="text-align: justify;">[мм] Минимальное положение по оси Y</td>
        </tr>
        <tr>
            <th class="lang" id="table.y_position_endstop.title">Y position_endstop</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_y_position_endstop" name="k3d_config_y_position_endstop" value="0"></td>
            <td class="lang" id="table.y_position_endstop.description" style="text-align: justify;">[мм] Положения концевика оси Y</td>
        </tr>
        <tr>
            <th class="lang" id="table.z_position_min.title">Z position_min</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_z_position_min" name="k3d_config_z_position_min" value="-0.01"></td>
            <td class="lang" id="table.z_position_min.description" style="text-align: justify;">[мм] Минимальное положение по оси Z</td>
        </tr>
        <tr>
            <th class="lang" id="table.z_position_endstop.title">Z position_endstop</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_z_position_endstop" name="k3d_config_z_position_endstop" value="0"></td>
            <td class="lang" id="table.z_position_endstop.description" style="text-align: justify;">[мм] Положения концевика оси Z</td>
        </tr>
        <tr>
            <th class="lang" id="table.dual_carriage_position_max.title">U position_max</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_dual_carriage_position_max" name="k3d_config_dual_carriage_position_max" value="400.01"></td>
            <td class="lang" id="table.dual_carriage_position_max.description" style="text-align: justify;">[мм] Максимальное положение по оси dual_carriage</td>
        </tr>
        <tr>
            <th class="lang" id="table.dual_carriage_position_endstop.title">U position_endstop</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_dual_carriage_position_endstop" name="k3d_config_dual_carriage_position_endstop" value="400"></td>
            <td class="lang" id="table.dual_carriage_position_endstop.description" style="text-align: justify;">[мм] Положения концевика оси dual_carriage</td>
        </tr>
        <tr>
            <td colspan="3" style="text-align:center">Настройки скорости и ускорения</td>
        </tr>
        <tr>
            <th class="lang" id="table.max_velocity.title">max_velocity</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_max_velocity" name="k3d_config_max_velocity" value="250"></td>
            <td class="lang" id="table.max_velocity.description" style="text-align: justify;">[мм/с] Максимальная скорость по осям X и Y</td>
        </tr>
        <tr>
            <th class="lang" id="table.max_accel.title">max_accel</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_max_accel" name="k3d_config_max_accel" value="10000"></td>
            <td class="lang" id="table.max_accel.description" style="text-align: justify;">[мм/с<sup>2</sup>] Максимальное ускорение по осям X и Y</td>
        </tr>
		<tr>
            <th class="lang" id="table.max_z_velocity.title">max_z_velocity</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_max_z_velocity" name="k3d_config_max_z_velocity" value="5"></td>
            <td class="lang" id="table.max_z_velocity.description" style="text-align: justify;">[мм/с] Максимальная скорость Z</td>
        </tr>
		<tr>
            <th class="lang" id="table.max_z_accel.title">max_z_accel</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_max_z_accel" name="k3d_config_max_z_accel" value="100"></td>
            <td class="lang" id="table.max_z_accel.description" style="text-align: justify;">[мм/с<sup>2</sup>] Максимальное ускорение Z</td>
        </tr>
        <tr>
            <td colspan="3" style="text-align:center">Настройки двигателей</td>
        </tr>
        <tr>
            <th class="lang" id="table.x_run_current.title">Ток двигателя X</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_x_run_current" name="k3d_config_x_run_current" value="0.7"></td>
            <td class="lang" id="table.x_run_current.description" style="text-align: justify;">[А]</td>
        </tr>
            <tr>
            <th class="lang" id="table.x_hold_current.title">Ток удержания X</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_x_hold_current" name="k3d_config_x_hold_current" value="0.5"></td>
            <td class="lang" id="table.x_hold_current.description" style="text-align: justify;">[А]</td>
        </tr>
        <tr>
            <th class="lang" id="table.y_run_current.title">Ток двигателя Y</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_y_run_current" name="k3d_config_y_run_current" value="0.7"></td>
            <td class="lang" id="table.y_run_current.description" style="text-align: justify;">[А]</td>
        </tr>
            <tr>
            <th class="lang" id="table.y_hold_current.title">Ток удержания Y</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_y_hold_current" name="k3d_config_y_hold_current" value="0.5"></td>
            <td class="lang" id="table.y_hold_current.description" style="text-align: justify;">[А]</td>
        </tr>
        <tr>
            <th class="lang" id="table.z_run_current.title">Ток двигателя Z</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_z_run_current" name="k3d_config_z_run_current" value="0.7"></td>
            <td class="lang" id="table.z_run_current.description" style="text-align: justify;">[А]</td>
        </tr>
            <tr>
            <th class="lang" id="table.z_hold_current.title">Ток удержания Z</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_z_hold_current" name="k3d_config_z_hold_current" value="0.5"></td>
            <td class="lang" id="table.z_hold_current.description" style="text-align: justify;">[А]</td>
        </tr>
        <tr>
            <th class="lang" id="table.extruder_run_current.title">Ток двигателя extruder</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_extruder_run_current" name="k3d_config_extruder_run_current" value="0.7"></td>
            <td class="lang" id="table.extruder_run_current.description" style="text-align: justify;">[А]</td>
        </tr>
            <tr>
            <th class="lang" id="table.extruder_hold_current.title">Ток удержания extruder</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_extruder_hold_current" name="k3d_config_extruder_hold_current" value="0.5"></td>
            <td class="lang" id="table.extruder_hold_current.description" style="text-align: justify;">[А]</td>
        </tr>
        <tr>
            <td colspan="3" style="text-align:center">Настройки кинематика</td>
        </tr>
        <tr>
            <th class="lang" id="table.kinematics.title">kinematics</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_kinematics" name="k3d_config_kinematics" value="cartesian"></td>
            <td class="lang" id="table.kinematics.description" style="text-align: justify;">Для Востока основная кинематика <i>cartesian</i></td>
        </tr>
        <tr>
            <th class="lang" id="table.x_rotation_distance.title">rotation_distance x</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_x_rotation_distance" name="k3d_config_x_rotation_distance" value="20"></td>
            <td class="lang" id="table.x_rotation_distance.description" style="text-align: justify;">[мм/об] Расстояние на которое перемещается ось X за один оборот. Для 20 зубого шкива = 20, для 40 зубого = </td>
        </tr>
        <tr>
            <th class="lang" id="table.y_rotation_distance.title">rotation_distance y</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_y_rotation_distance" name="k3d_config_y_rotation_distance" value="40"></td>
            <td class="lang" id="table.y_rotation_distance.description" style="text-align: justify;">[мм/об] Расстояние на которое перемещается ось Y за один оборот.</td>
        </tr>
        <tr>
            <th class="lang" id="table.z_rotation_distance.title">rotation_distance z</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_z_rotation_distance" name="k3d_config_z_rotation_distance" value="2"></td>
            <td class="lang" id="table.z_rotation_distance.description" style="text-align: justify;">[мм/об] Расстояние на которое перемещается ось Z за один оборот. Однозаходный = 2, двухзаходный = 4, четырехзаходный = 8</td>
        </tr>
        <tr>
            <th class="lang" id="table.extruder_rotation_distance.title">rotation_distance e</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_extruder_rotation_distance" name="k3d_config_extruder_rotation_distance" value="4.575"></td>
            <td class="lang" id="table.extruder_rotation_distance.description" style="text-align: justify;">[мм/об] Расстояние на которое перемещается пруток за один оборот</td>
        </tr>
        <tr>
            <td colspan="3" style="text-align:center">Прочее настройки</td>
        </tr>
        <tr>
            <th class="lang" id="table.minimum_cruise_ratio.title">minimum_cruise_ratio</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_minimum_cruise_ratio" name="k3d_config_minimum_cruise_ratio" value="0.5"></td>
            <td class="lang" id="table.minimum_cruise_ratio.description" style="text-align: justify;">Коэф. достижения скорости. Снижение вибраций при малых расстояния перемещения за счет снижения максимальной скорости</td>
        </tr>
        <tr>
            <th class="lang" id="table.square_corner_velocity.title">square_corner_velocity</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_square_corner_velocity" name="k3d_config_square_corner_velocity" value="5"></td>
            <td class="lang" id="table.square_corner_velocity.description" style="text-align: justify;">[мм/с] Максимальная скорость при прохождении угла в 90°</td>
        </tr>
        <tr>
            <th class="lang" id="table.delta.title">force_move</td>
            <td style="text-align:center"><input type="checkbox" id="k3d_config_enable_force_move" name="k3d_config_enable_force_move" checked></td>
            <td class="lang" id="table.delta.description" style="text-align: justify;">Перемещение без парковки. Необходимо для макросов и диагностики</td>
        </tr>
        <tr>
            <th class="lang" id="table.nozzle_diameter.title">nozzle_diameter</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_nozzle_diameter" name="k3d_config_nozzle_diameter" value="0.4"></td>
            <td class="lang" id="table.nozzle_diameter.description" style="text-align: justify;">[мм] Диаметр сопла</td>
        </tr>
        <tr>
            <th class="lang" id="k3d_config_bed_title">Термистор стола</td>
            <td align="center">
                <form style="text-align:left; width:fit-content;">
				<input type="radio" id="k3d_config_thermistor_bed_0" name="k3d_config_thermistor_bed" value="EPCOS 100K B57560G104F"><label for="k3d_thermistor_bed_0"> EPCOS 100K B57560G104F</label><br>
                <input type="radio" id="k3d_config_thermistor_bed_1" name="k3d_config_thermistor_bed" value="ATC Semitec 104GT-2" checked><label for="k3d_thermistor_bed_1"> ATC Semitec 104GT-2</label><br>
                <input type="radio" id="k3d_config_thermistor_bed_2" name="k3d_config_thermistor_bed" value="ATC Semitec 104NT-4-R025H42G"><label for="k3d_thermistor_bed_2">ATC Semitec 104NT-4-R025H42G</label><br>
				<input type="radio" id="k3d_config_thermistor_bed_3" name="k3d_config_thermistor_bed" value="Generic 3950"><label for="k3d_thermistor_bed_3"> Generic 3950</label><br>
				<input type="radio" id="k3d_config_thermistor_bed_4" name="k3d_config_thermistor_bed" value="Honeywell 100K 135-104LAG-J01"><label for="k3d_thermistor_bed_4"> Honeywell 100K 135-104LAG-J01</label><br>
				<input type="radio" id="k3d_config_thermistor_bed_5" name="k3d_config_thermistor_bed" value="NTC 100K MGB18-104F39050L32"><label for="k3d_thermistor_bed_5"> NTC 100K MGB18-104F39050L32</label><br>
				<input type="radio" id="k3d_config_thermistor_bed_6" name="k3d_config_thermistor_bed" value="SliceEngineering 450"><label for="k3d_thermistor_bed_6"> SliceEngineering 450</label><br>
				<input type="radio" id="k3d_config_thermistor_bed_7" name="k3d_config_thermistor_bed" value="ATC Semitec 104NT-4-R025H42G"><label for="k3d_thermistor_bed_7"> TDK NTCG104LH104JT1</label><br>
				</form>
            </td>
            <td class="lang" id="table.firmware.description" style="text-align: justify;">Выберите датчик температуры стола</td>
        </tr>
		<tr>
            <th class="lang" id="k3d_config_extruder_title">Термистор сопла</td>
            <td align="center">
                <form style="text-align:left; width:fit-content;">
				<input type="radio" id="k3d_config_thermistor_extruder_0" name="k3d_config_thermistor_extruder" value="EPCOS 100K B57560G104F"><label for="k3d_thermistor_extruder_0"> EPCOS 100K B57560G104F</label><br>
                <input type="radio" id="k3d_config_thermistor_extruder_1" name="k3d_config_thermistor_extruder" value="ATC Semitec 104GT-2"><label for="k3d_thermistor_extruder_1"> ATC Semitec 104GT-2</label><br>
                <input type="radio" id="k3d_config_thermistor_extruder_2" name="k3d_config_thermistor_extruder" value="ATC Semitec 104NT-4-R025H42G" checked><label for="k3d_thermistor_extruder_2">ATC Semitec 104NT-4-R025H42G</label><br>
				<input type="radio" id="k3d_config_thermistor_extruder_3" name="k3d_config_thermistor_extruder" value="Generic 3950"><label for="k3d_thermistor_extruder_3"> Generic 3950</label><br>
				<input type="radio" id="k3d_config_thermistor_extruder_4" name="k3d_config_thermistor_extruder" value="Honeywell 100K 135-104LAG-J01"><label for="k3d_thermistor_extruder_4"> Honeywell 100K 135-104LAG-J01</label><br>
				<input type="radio" id="k3d_config_thermistor_extruder_5" name="k3d_config_thermistor_extruder" value="NTC 100K MGB18-104F39050L32"><label for="k3d_thermistor_extruder_5"> NTC 100K MGB18-104F39050L32</label><br>
				<input type="radio" id="k3d_config_thermistor_extruder_6" name="k3d_config_thermistor_extruder" value="SliceEngineering 450"><label for="k3d_thermistor_extruder_6"> SliceEngineering 450</label><br>
				<input type="radio" id="k3d_config_thermistor_extruder_7" name="k3d_config_thermistor_extruder" value="ATC Semitec 104NT-4-R025H42G"><label for="k3d_thermistor_extruder_7"> TDK NTCG104LH104JT1</label><br>
				</form>
            </td>
            <td class="lang" id="table.firmware.description" style="text-align: justify;">Выберите датчик температуры сопла</td>
        </tr>
		<tr>
            <th class="lang" id="table.bed_size_x.title">устарел</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_max_accel_to_decel" name="k3d_config_max_accel_to_decel" value="5000"></td>
            <td class="lang" id="table.bed_size_x.description" style="text-align: justify;">[мм/с<sup>2</sup>] max_accel_to_decel</td>
        </tr>
    </tbody>
</table>



<table class="caliButtonTable">
    <tbody>
        <tr>
            <td align="right" width="50%">
                <button class="caliButton" type="button" id="processButton">Скачать </button>
            </td>
            <td align="left" width="50%">
                <button class="caliButton" onclick="reset();" id="resetButton"> Сбросить настройки</button>
            </td>
        </tr>
        <tr>
            <td align="center" colspan="2">
                <br><div id="resultContainer"></div>
            </td>
        </tr>
    </tbody>
</table>
<script src="../assets/js/generation_config.js"></script>

