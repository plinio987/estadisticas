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
        <a href="dashboard.php" class="nav-link">Home</a>
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
            <h1 class="m-0 text-dark">Dashboard Facebook Gabinete Social</h1>
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
        <?php include('include/gabsocial-header-facebook.php'); ?>
       
      <!-- Main content -->
      <section class="content">
      <div class="container-fluid">

      <div class="row">
          <div class="col-12">
            <!-- interactive chart -->
            <div class="card card-primary card-outline">
              <div class="card-header">
                <h3 class="card-title">
                  <i class="far fa-chart-bar"></i>
                  Engagement y Engagement rate
                </h3>

                <div class="card-tools">
             
                  <div class="btn-group" id="realtime" data-toggle="btn-toggle">
                    <a href="2019\vicepresidencia-facebook.html" target="blank"><button type="button" class="btn btn-default btn-sm active" data-toggle="on">2019</button></a>
                    <a href="2018\vicepresidencia-facebook.html" target="blank"><button type="button" class="btn btn-default btn-sm" data-toggle="off">2018</button></a>
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

        <div class="row">
          <div class="col-12">
            <!-- interactive chart -->
            <div class="card card-primary card-outline">
              <div class="card-header">
                <h3 class="card-title">
                  <i class="far fa-chart-bar"></i>
                 Alcance y Engagent users
                </h3>

                <div class="card-tools">
             
                  <div class="btn-group" id="realtime" data-toggle="btn-toggle">
                    <a href="2019\vicepresidencia-facebook.html" target="blank"><button type="button" class="btn btn-default btn-sm active" data-toggle="on">2019</button></a>
                    <a href="2018\vicepresidencia-facebook.html" target="blank"><button type="button" class="btn btn-default btn-sm" data-toggle="off">2018</button></a>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div id="alcancePublicaciones" style="height: 300px;"></div>
              </div>
              <!-- /.card-body-->
            </div>
            <!-- /.card -->

          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->

              <div class="row">
                <div class="col-6">
                  <!-- interactive chart -->
                  <div class="card card-primary card-outline">
                    <div class="card-header">
                      <h3 class="card-title">
                        <i class="far fa-chart-bar"></i>
                        Total post por tipo
                      </h3>

                      <div class="card-tools">
                  
                        <div class="btn-group" id="realtime" data-toggle="btn-toggle">
                          <a href="2019\vicepresidencia-facebook.html" target="blank"><button type="button" class="btn btn-default btn-sm active" data-toggle="on"></button></a>
                          <a href="2018\vicepresidencia-facebook.html" target="blank"><button type="button" class="btn btn-default btn-sm" data-toggle="off"></button></a>
                        </div>
                      </div>
                    </div>
                    <div class="card-body">
                      <div id="tipoPost" style="height: 300px;"></div>
                    </div>
                    <!-- /.card-body-->
                  </div>
                  <!-- /.card -->

                </div>
                <!-- /.col -->
                <div class="col-6">
                  <!-- interactive chart -->
                  <div class="card card-primary card-outline">
                    <div class="card-header">
                      <h3 class="card-title">
                        <i class="far fa-chart-bar"></i>
                        Total de interacciones por tipo de post
                      </h3>

                      <div class="card-tools">
                  
                        <div class="btn-group" id="realtime" data-toggle="btn-toggle">
                          <a href="2019\vicepresidencia-facebook.html" target="blank"><button type="button" class="btn btn-default btn-sm active" data-toggle="on"></button></a>
                          <a href="2018\vicepresidencia-facebook.html" target="blank"><button type="button" class="btn btn-default btn-sm" data-toggle="off"></button></a>
                        </div>
                      </div>
                    </div>
                    <div class="card-body">
                      <div id="interaccionesPost" style="height: 300px;"></div>
                    </div>
                    <!-- /.card-body-->
                  </div>
                  <!-- /.card -->

                </div>
                <!-- /.col -->
              </div>
              <!-- /.row -->

       
              </div>
              <!-- /.row -->

        <div class="row">
          <div class="col-md-6">
            <!-- Line chart -->
            <div class="card card-primary card-outline">
              <div class="card-header">
                <h3 class="card-title">
                  <i class="far fa-chart-bar"></i>
                Nuevos y total de seguidores
                </h3>

                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <div class="card-body">
                <div id="seguidores" style="height: 300px;"></div>
              </div>
              <!-- /.card-body-->
            </div>
            <!-- /.card -->

            <!-- Area chart -->
            <div class="card card-primary card-outline">
              <div class="card-header">
                <h3 class="card-title">
                  <i class="far fa-chart-bar"></i>
                  Publicaciones nuevas y compartidas
                </h3>

                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <div class="card-body">
                <div id="publicaciones" style="height: 338px;" class="full-width-chart"></div>
              </div>
              <!-- /.card-body-->
            </div>
            <!-- /.card -->

            <!-- Area chart -->
            <div class="card card-primary card-outline">
              <div class="card-header">
                <h3 class="card-title">
                  <i class="far fa-chart-bar"></i>
                  Porcentaje de participación
                </h3>

                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <div class="card-body">
                <div id="facebookPorcentajeParticipacion" style="height: 338px;" class="full-width-chart"></div>
              </div>
              <!-- /.card-body-->
            </div>
            <!-- /.card -->

          </div>
          <!-- /.col -->

          <div class="col-md-6">
            <!-- Bar chart -->
            <div class="card card-primary card-outline">
              <div class="card-header">
                <h3 class="card-title">
                  <i class="far fa-chart-bar"></i>
                  Me gusta y no me gusta
                </h3>

                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-card-widget="collapse">
                    <i class="fas fa-minus"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-card-widget="remove">
                    <i class="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <div class="card-body">
                <div id="meGusta" style="height: 300px;"></div>
              </div>
              <!-- /.card-body-->
            </div>
            <!-- /.card -->

            <!-- Donut chart -->
            <div class="card card-primary card-outline">
              <div class="card-header">
                <h3 class="card-title">
                  <i class="far fa-chart-bar"></i>
                  Genéro usuarios
                </h3>

                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <div class="card-body">
                <div id="generoFans" style="height: 300px;"></div>
              </div>
              <!-- /.card-body-->
            </div>
            <!-- /.card -->

          <div class="row">
          <div class="col-12">
            <!-- interactive chart -->
            <div class="card card-primary card-outline">
              <div class="card-header">
                <h3 class="card-title">
                  <i class="far fa-chart-bar"></i>
                  Mensajes publicaciones
                </h3>

                <div class="card-tools">
             
                  <div class="btn-group" id="realtime" data-toggle="btn-toggle">
                    <a href="2019\vicepresidencia-facebook.html" target="blank"><button type="button" class="btn btn-default btn-sm active" data-toggle="on">2019</button></a>
                    <a href="2018\vicepresidencia-facebook.html" target="blank"><button type="button" class="btn btn-default btn-sm" data-toggle="off">2018</button></a>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div id="mensajesPublicaciones" style="height: 300px;"></div>
              </div>
              <!-- /.card-body-->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
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
    <script type="text/javascript" src="charts\gabSocial\chartsFacebook.js"></script>

</body>
</html>
