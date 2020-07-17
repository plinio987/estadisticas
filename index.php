<?php

    include_once 'includes/db.php';
    session_start();

    $username = $_POST['username'];
    $pass = $_POST['password'];
    $password = md5($pass);

    $query = "SELECT COUNT(*) AS count FROM users WHERE username = '$username' AND password = '$password'";
    $consult = mysqli_query($connect, $query);

    $array = mysqli_fetch_array($consult);
    echo 
    mysqli_close();

    if ($array['count'] > 0) {
        $_SESSION['username'] = $username;
        header("location: dashboard.php");
    } else {
        header("location: login.php");
    }

    /*
    class User extends DB {

        private $name;
        private $username;

        public function userExists($user, $pass) {
            $md5pass = md5($pass);

            $query = $this->connect()->prepare('SELECT * FROM users WHERE username = :user AND password = :pass');
            $query->execute(['user' => $user, 'pass' => $md5pass]);

            if ($query->rowCount()) {
                return true; 
            } else {
                return false;
            }
        }

        public function setUser($user) {
            $query = $this->connect()->prepare('SELECT * FROM users WHERE username = :user');
            $query->execute(['user' => $user]);

            foreach ($query as $currentUser) {
                $this->name = $currentUser['name'];
                $this->username = $currentUser['username'];
            }
        }

        public function getName() {
            return $this->name;
        }

    }
    */

?>
