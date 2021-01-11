<?php
  // Initialize the session
  session_start();
  $username = $_SESSION['username'];
  if(!$_SESSION['username']) {
    header("location: login.php");
  }
  
?>

<!DOCTYPE html>
<html>
<head>
<?php include('include/head.php'); ?>

</head>
<body class="hold-transition sidebar-mini layout-fixed">
<div class="wrapper">

  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="index.php" class="nav-link">Home</a>
      </li>
    </ul>

    <!-- SEARCH FORM -->
    <form class="form-inline ml-3">
      <div class="input-group input-group-sm">
        <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
        <div class="input-group-append">
          <button class="btn btn-navbar" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </form>

  
  </nav>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <?php include('include/aside.php'); ?>
  </aside>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">Dashboard</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">

          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->
    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <!-- Small boxes (Stat box) -->
        <div class="row">
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-info">
              <div class="inner">
                <h3>2</h3>

                <p>Total instituciones</p>
              </div>
              <div class="icon">
                <i class="ion ion-stats-bars"></i>
              </div>
              <a href="#" class="small-box-footer"></a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-success">
              <div class="inner">
                <h3>3</h3>

                <p>Total Proyectos</p>
              </div>
              <div class="icon">
                <i class="ion ion-stats-bars"></i>
              </div>
              <a href="#" class="small-box-footer"></a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-blue">
              <div class="inner">
                <h3>14</h3>

                <p>Redes sociales</p>
              </div>
              <div class="icon">
                <i class="ion ion-pie-graph"></i>
              </div>
              <a href="#" class="small-box-footer"> </i></a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-danger">
              <div class="inner">
                <h3>4</h3>

                <p>Portales web</p>
              </div>
              <div class="icon">
                <i class="ion ion-pie-graph"></i>
              </div>
              <a href="#" class="small-box-footer"> </i></a>
            </div>
          </div>
          <!-- ./col -->
        </div>
        <!-- /.row -->

        <!-- INICIO MENU VERTICAL -->


      <!-- Fin de menu verticas -->


      <!-- Main content -->
      <section class="content">
      <div class="container-fluid">
              <div class="row">
                  <div class="col-12">
                <nav class="navbar navbar-expand-lg navbar-light bg-warning">
          <a class="navbar-brand" href="#">Instituciones</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
           <!--<div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
               <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="vicepresidencia.php" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Vicepresidencia
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="vice-facebook.php">Facebook</a>
                  <a class="dropdown-item" href="vice-twitter.php">Twitter</a>
                  <a class="dropdown-item" href="vice-instagram.php">Instagram</a>
                  <a class="dropdown-item" href="vice-youtube.php">YouTube</a>
                  <a class="dropdown-item" href="vice-portal.php#">Portal web</a>
                </div>
              </li>-->

              <!-- <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
               <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Gabinete Social
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="gabsocial-facebook.php">Facebook</a>
                  <a class="dropdown-item" href="gabsocial-twitter.php">Twitter</a>
                  <a class="dropdown-item" href="gabsocial-portal.php">Portal web</a>
                </div>
              </li> -->
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
               <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Prosoli
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="posoli-facebook.php">Facebook</a>
                  <a class="dropdown-item" href="posoli-twitter.php">Twitter</a>
                  <a class="dropdown-item" href="posoli-instagram.php">Instagram</a>
                  <a class="dropdown-item" href="posoli-portal.php">Portal web</a>
                </div>
              </li>

              <!-- <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
               <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Adess
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="adess-facebook.php">Facebook</a>
                  <a class="dropdown-item" href="adess-twitter.php">Twitter</a>
                  <a class="dropdown-item" href="adess-portal.php">Portal web</a>
                </div>
              </li>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
               <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Siuben
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="siuben-facebook.php">Facebook</a>
                  <a class="dropdown-item" href="siuben-twitter.php">Twitter</a>
                  <a class="dropdown-item" href="siuben-portal.php">Portal web</a>
                </div>
              </li> -->

             <!-- <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
               <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  CTC
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="ctc-facebook.php">Facebook</a>
                  <a class="dropdown-item" href="ctc-twitter.php">Twitter</a>
                  <a class="dropdown-item" href="ctc-instagram.php">Instagram</a>
                  <a class="dropdown-item" href="ctc-portal.php">Portal web</a>
                </div>
              </li>-->

              <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
               <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  BIJ
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="bij-facebook.php">Facebook</a>
                  <a class="dropdown-item" href="bij-instagram.php">Instagram</a>
                  <a class="dropdown-item" href="bij-portal.php">Portal web</a>
                </div>
              </li>

            </ul>
            </div>
            </nav>
            </div>
            </div>

        <div class="row">
          <div class="col-12">
            <!-- interactive chart -->
            <div class="card card-primary card-outline">
              <div class="card-header">
                <h3 class="card-title">
                  <i class="far fa-chart-bar"></i>
                  Alcance y Engagement general
                </h3>
                <div class="card-tools">
                  <div class="btn-group" id="realtime" data-toggle="btn-toggle">
                  <a href="\index.html" target="_blank"><button type="button" class="btn btn-default btn-sm active" data-toggle="on"></button></a>
                  <a href="\index.html" target="_blank"><button type="button" class="btn btn-default btn-sm" data-toggle="off"></button>  </a>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div id="alcanceGeneral" style="height: 300px;"></div>
              </div>
              <!-- /.card-body-->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->

        <div class="row">
          <div class="col-12">
            <!-- interactive chart -->
            <div class="card card-primary card-outline">
              <div class="card-header">
                <h3 class="card-title">
                  <i class="far fa-chart-bar"></i>
                 Total Engagement
                </h3>
                <div class="card-tools">
                  <div class="btn-group" id="realtime" data-toggle="btn-toggle">
                  <a href="\index.html" target="_blank"><button type="button" class="btn btn-default btn-sm active" data-toggle="on"></button></a>
                  <a href="\index.html" target="_blank"><button type="button" class="btn btn-default btn-sm" data-toggle="off"></button>  </a>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div id="engagement" style="height: 300px;"></div>
              </div>
              <!-- /.card-body-->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->

      </div><!-- /.container-fluid -->
    </section>
          <!-- right col -->
        </div>
        <!-- /.row (main row) -->
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
  <footer class="main-footer">
  <?php include('include/footer.php'); ?>
  </footer>

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
  <!-- /.control-sidebar -->
</div>
<!-- ./wrapper -->
<?php include('include/script.php'); ?>

<!-- jQuery -->
<script type="text/javascript" src="charts/canvasjs.js"></script>
<script type="text/javascript" src="charts/chartsGeneral.js"></script>

<!------ Include the above in your HEAD tag ---------->

</body>
</html>
