# Установка перифирии
## Настройка Raspberry

Для использования GPIO портов и шин i2c, spi Управляющей платы необходимо ее дополнительно настроить.

Устанавливаем скрипт
```
cd ~/klipper/
sudo cp ./scripts/klipper-mcu.service /etc/systemd/system/
sudo systemctl enable klipper-mcu.service
```
Запускаем меню конфигурации для Управляющей платы
```
cd ~/klipper/
make menuconfig
```

В появившемся меню для параметра `Microcontroller Architecture` устанавливаем `Linux process` 
![Screenshot](img/Klipper_config_MCU.png)
Выходим и сохраняем `Q`

Затем устанавливаем скомпилированный код
```
sudo service klipper stop
make flash
sudo service klipper start
```


### Активируем интерфейс SPI
Шина SPI используется для подключения акселерометра
* Запускаем конфигуратор управляющей платы
```
sudo raspi-config
```
* Переходим в раздел `Interface Options`
![Screenshot](img/RPi_Configurator_SPI_1.png)
* Выбираем интерфейс `SPI`
![Screenshot](img/RPi_Configurator_SPI_2.png)
* Соглашаемся с активацией
![Screenshot](img/RPi_Configurator_SPI_3.png)
* Выходим


## Подключение акселерометра по SPI


Устанавливаем необходимые библиотеки
```
~/klippy-env/bin/pip install -v numpy
```
Устанавливаем дополнительные зависимости
```
sudo apt update
sudo apt install python3-numpy python3-matplotlib libatlas-base-dev libopenblas-dev
```

Добавляем в `print.cfg`

```printer.cfg
[mcu rpi]
serial: /tmp/klipper_host_mcu

[adxl345]
cs_pin: rpi:None
axes_map: x,y,-z #Порядок осей для красивого графика

[resonance_tester]
accel_chip: adxl345
probe_points:
    200, 125, 50  # Точка для тестирования резонансов (центр стола)

```

Схемы подключения некоторых плат ADXL345:

![Screenshot](img/adxl345_fritzing.png)

Рекомендуемая схема подключения:

| ADXL345 пин   | RasbberryPi пин | название пина RasbberryPi    |
|:--------------|:----------------|:-----------------------------|
| 3V3 (or VCC)	 | 01	             | 3V3                          |
| GND           | 06              | GND                          |
| CS	           | 24              | GPIO08 (SPI0_CE0_N)          |
| SDO	          | 21	             | GPIO09 (SPI0_MISO) |
| SDA	          | 19	             | GPIO10 (SPI0_MOSI)           |                |
| SCL	          | 23	             | GPIO11 (SPI0_SCLK)           |

test https://klipper.wiki/ru/home/tuning/shaper