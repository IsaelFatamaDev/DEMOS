CREATE TABLE `base_calendarioweb`.`eventos` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(255) NULL,
    `descripcion` TEXT NULL,
    `inicio` DATETIME NULL,
    `fin` DATETIME NULL,
    `colortexto` VARCHAR(7) NULL,
    `colorfondo` VARCHAR(7) NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB;