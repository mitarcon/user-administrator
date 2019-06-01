/*
	Limpiar BD
*/
DROP TABLE IF EXISTS `user-admin`.`client`;
DROP TABLE IF EXISTS `user-admin`.`employee`;
DROP TABLE IF EXISTS `user-admin`.`store`;

/*
	CLIENT
*/
CREATE TABLE `user-admin`.`client` (
  `id` INT NOT NULL,
  `name` VARCHAR(255) NULL,
  `email` VARCHAR(255) NULL,
  `phone` VARCHAR(45) NULL,
  `localization` VARCHAR(255) NULL,
  `created_on` datetime NULL,
  `update_on` datetime NULL,
  PRIMARY KEY (`id`));

ALTER TABLE `user-admin`.`client`
CHANGE COLUMN `id` `id` INT(11) NOT NULL AUTO_INCREMENT ,
ADD UNIQUE INDEX `id_UNIQUE` (`id` ASC);

/*
	Employee
*/
CREATE TABLE `user-admin`.`employee` (
  `id` INT NOT NULL,
  `name` VARCHAR(255) NULL,
  `email` VARCHAR(255) NULL,
  `phone` VARCHAR(45) NULL,
  `rol` VARCHAR(255) NULL,
  `pass` VARCHAR(255) NULL,
  `created_on` datetime NULL,
  `update_on` datetime NULL,
  PRIMARY KEY (`id`));

ALTER TABLE `user-admin`.`employee`
CHANGE COLUMN `id` `id` INT(11) NOT NULL AUTO_INCREMENT ,
ADD UNIQUE INDEX `id_UNIQUE` (`id` ASC);

/*
	Store
*/
CREATE TABLE `user-admin`.`store` (
  `id` INT NOT NULL,
  `name` VARCHAR(255) NULL,
  PRIMARY KEY (`id`));

ALTER TABLE `user-admin`.`store`
CHANGE COLUMN `id` `id` INT(11) NOT NULL AUTO_INCREMENT ,
ADD UNIQUE INDEX `id_UNIQUE` (`id` ASC);