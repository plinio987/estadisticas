<?php
    /*
    class DB {
        private $host;
        private $db;
        private $user;
        private $password;
        private $charset;

        public function __construct() {
            $this->host         = 'localhost';
            $this->db           = 'estadisticasgd';
            $this->user         = 'jbeltre';
            $this->password     = '@Lunbel1203';
            $this->charset      = 'utf8mb4';
        }

        function connect() {
            try {
                $connection = "mysql:host=" . $this->host . ";dbname=" . $this->db . ";charset=" . $this->charset;

                $options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                            PDO::ATTR_EMULATE_PREPARES => false]; 

                $pdo = new PDO($connection, $this->user, $this->password, $options);
            }catch(PDOException $e) {
                print_r("Error de conexion: " . $e->getMessage());
            }
        }

    }*/

    $host = "localhost";
    $user = "jbeltre";
    $pass = "@Lunbel1203";
    $db = "estadisticasgd";
    $charset = "utf8mb4";

    $connect = mysqli_connect($host, $user, $pass, $db);

    if ($connect) {
        echo "Estamos conectados";
    } else {
        echo "La conexion ha fallado";
    }

?>