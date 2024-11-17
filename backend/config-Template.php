<?php
// defauts
date_default_timezone_set('Asia/Colombo');

// server config
define("ROOT", "http://localhost:9001/public/");
define("SESSION_VARIABLE_ADMIN", "cey007_admin");
define("SESSION_VARIABLE_USER", "cey007_user");

// database config
define("DB_SERVER", "localhost");
define("DB_USERNAME", "root");
define("DB_PASSWORD", "****");
define("DB_DATABASE", "ceyt02_db");

//constants
global $IS_RESPONSE_TEXT;
$IS_RESPONSE_TEXT = false;

// error messages
define("API_404_MESSAGE", "Invalid API URL");
define("INVALID_REQUEST_METHOD", "Invalid request method");
define("INVALID_ADMIN_ACCESS", "Access Denied!");

// frontend config
require_once(__DIR__ . "/../public/config.php");
