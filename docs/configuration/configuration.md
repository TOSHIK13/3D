# Настройка конфига

!!! note

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.


<script src="https://cdn.jsdelivr.net/npm/streamsaver@2.0.3/StreamSaver.min.js"></script>


<table style="width: 100%; font-size: 0.8rem;">
    <tbody>
        <tr>
            <td colspan="3" style="text-align:center">Настройки из BOM</td>
        </tr>
        <tr>
            <th class="lang" id="table.serial.title">Адрес MCU</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_serial" name="k3d_config_serial" value="/dev/serial/by-id/usb-Klipper_stm32f429xx_3F0039000950314B33323220-if00"></td>
            <td class="lang" id="table.serial.description" style="text-align: justify;">Адрес можно узнать в консоле Линукса ls /dev/serial/by-id</td>
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
            <td style="text-align:center"><input type="checkbox" id="k3d_config_idex" name="k3d_config_idex"></td>
            <td class="lang" id="table.idex.description" style="text-align: justify;">Выключено - обычный одиночный экструдер <br>Включено - IDEX (две независимые печатающие головы)</td>
        </tr>
        <tr>
            <th class="lang" id="k3d_config_MCU">Материнская плата</td>
            <td align="center">
                <form style="text-align:left; width:fit-content;"><input type="radio" id="k3d_config_MCU_0" name="k3d_config_MCU" value="Fysetc spider" checked><label for="k3d_la_firmwareMarlin"> Fysetc spider</label><br>
                <input type="radio" id="k3d_config_MCU_1" name="k3d_config_MCU" value="BTT Octopus"><label for="k3d_la_firmwareKlipper"> BTT Octopus</label><br>
                <input type="radio" id="k3d_config_MCU_2" name="k3d_config_MCU" value="BTT Octopus pro"><label for="k3d_la_firmwareRRF"> BTT Octopus pro</label><br>
				<input type="radio" id="k3d_config_MCU_2" name="k3d_config_MCU" value="BTT SKR 1.4"><label for="k3d_la_firmwareRRF"> BTT SKR 1.4</label>
                </form>
            </td>
            <td class="lang" id="table.firmware.description" style="text-align: justify;">Выберите подходящую материнскую плату</td>
        </tr>
        <tr>
            <th class="lang" id="table.nozzle_diameter.title">Диаметр сопла</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_nozzle_diameter" name="k3d_config_nozzle_diameter" value="0.4"></td>
            <td class="lang" id="table.nozzle_diameter.description" style="text-align: justify;">[мм] </td>
        </tr>
        <tr>
            <td colspan="3" style="text-align:center">Дополнительные настройки</td>
        </tr>
        <tr>
            <th class="lang" id="table.kinematics.title">Кинематика</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_kinematics" name="k3d_config_kinematics" value="cartesian"></td>
            <td class="lang" id="table.kinematics.description" style="text-align: justify;">Для Востока основная кинематика <i>cartesian</i></td>
        </tr>
        <tr>
            <th class="lang" id="table.max_velocity.title">Скорость</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_max_velocity" name="k3d_config_max_velocity" value="250"></td>
            <td class="lang" id="table.max_velocity.description" style="text-align: justify;">[мм/с] Максимальная скорость по осям х,у</td>
        </tr>
        <tr>
            <th class="lang" id="table.max_accel.title">Ускорение</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_max_accel" name="k3d_config_max_accel" value="10000"></td>
            <td class="lang" id="table.max_accel.description" style="text-align: justify;">[мм/с2] Максимальное ускорение по осям х,у</td>
        </tr>
        <tr>
            <th class="lang" id="table.minimum_cruise_ratio.title">Коэф. достижения скорости</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_minimum_cruise_ratio" name="k3d_config_minimum_cruise_ratio" value="0.5"></td>
            <td class="lang" id="table.minimum_cruise_ratio.description" style="text-align: justify;">Снижение вибраций при малых расстояния перемещения за счет снижения максимальной скорости</td>
        </tr>
        <tr>
            <th class="lang" id="table.square_corner_velocity.title">Скорость прохождения угла</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_square_corner_velocity" name="k3d_config_square_corner_velocity" value="5"></td>
            <td class="lang" id="table.square_corner_velocity.description" style="text-align: justify;">[мм/с] Максимальная скорость при прохождении угла в 90°</td>
        </tr>        
        <tr>
            <th class="lang" id="table.x_position_min.title">X минимум</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_x_position_min" name="k3d_config_x_position_min" value="-0.01"></td>
            <td class="lang" id="table.x_position_min.description" style="text-align: justify;">[мм] Минимальное положение по оси х</td>
        </tr>
        <tr>
            <th class="lang" id="table.x_position_endstop.title">Концевик Х</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_x_position_endstop" name="k3d_config_x_position_endstop" value="0"></td>
            <td class="lang" id="table.x_position_endstop.description" style="text-align: justify;">[мм] Положения концевика оси Х</td>
        </tr>

		
		
        <tr>
            <td colspan="3" style="text-align:center">Настройки раздела [MCU] и [printer]</td>
        </tr>
		<tr>
            <th class="lang" id="table.bed_size_x.title">устарел</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_max_accel_to_decel" name="k3d_config_max_accel_to_decel" value="5000"></td>
            <td class="lang" id="table.bed_size_x.description" style="text-align: justify;">[мм/с2] max_accel_to_decel</td>
        </tr>
		<tr>
            <th class="lang" id="table.bed_size_x.title">Максимальная скорость Z</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_max_z_velocity" name="k3d_config_max_z_velocity" value="5"></td>
            <td class="lang" id="table.bed_size_x.description" style="text-align: justify;">[мм/с] max_z_velocity</td>
        </tr>
		<tr>
            <th class="lang" id="table.bed_size_x.title">Максимальное ускорение Z</td>
            <td style="text-align:center"><input class="calibratorInput" type="text" id="k3d_config_max_z_accel" name="k3d_config_max_z_accel" value="100"></td>
            <td class="lang" id="table.bed_size_x.description" style="text-align: justify;">[мм/с2] max_z_accel</td>
        </tr>
        <tr>
            <th class="lang" id="table.delta.title">Ручное перемещение</td>
            <td style="text-align:center"><input type="checkbox" id="k3d_config_enable_force_move" name="k3d_config_enable_force_move"></td>
            <td class="lang" id="table.delta.description" style="text-align: justify;">enable_force_move Режим ручного перемещения шаговых двигателей в целях диагностики</td>
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

