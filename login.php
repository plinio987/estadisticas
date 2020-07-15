<?php 
    session_start();
    if (isset($_SESSION['username'])) {
        header("location: dashboard.php");
    }
    echo $array;
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Login</title>
    <?php include('include/head.php'); ?>
</head>

<body class="hold-transition login-page">
    <div class="login-box">
        <div class="login-logo">
          <b>Login</b> <br> Gabinete Digital
        </div>
        <!-- /.login-logo -->
        <div class="card">
            <div class="card-body login-card-body">
                <form action="index.php" method="POST">
                    <?php echo $errorMessage; ?>
                    <div class="input-group mb-3">
                    <input type="text" name="username" class="form-control pl-15" placeholder="Usuario">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-user"></span>
                            </div>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input type="password" name="password" class="form-control" placeholder="Contraseña">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary btn-block">Iniciar Sesión</button>
                        </div>
                        <!-- /.col -->
                    </div>
                </form>
            </div>
            <!-- /.login-card-body -->
        </div>
    </div>
    <!-- /.login-box -->

    <!-- jQuery -->
    <?php include('include/script.php'); ?>

</body>

</html>