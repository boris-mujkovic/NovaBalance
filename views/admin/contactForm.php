<!--begin::App Main-->
<main class="app-main">
        <!--begin::App Content Header-->
        <div class="app-content-header">
          <!--begin::Container-->
          <div class="container-fluid">
            <!--begin::Row-->
            <!-- <div class="row">
              <div class="col-sm-6"><button id='add_page' data-toggle="modal" data-target="#exampleModalCenter"class="btn btn-primary"><i class="ri-add-large-line"></i> Dodaj</button></div>
              </div> -->
            <!--end::Row-->
          </div>
          <!--end::Container-->
        </div>
        <!--end::App Content Header-->
        <!--begin::App Content-->
        <div class="app-content">
          <!--begin::Container-->
          <div class="container-fluid">
            <!--begin::Row-->
            <div class="row">
              <div class="col-sm-6"><h3 class="mb-0">Stranice</h3></div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-end">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active" aria-current="page">Sa kontakt forme</li>
                </ol>
              </div>
            </div>
            <!--end::Row-->
          </div>
          <!--end::Container-->
        </div>
        <!--end::App Content Header-->
        <!--begin::App Content-->
        <div class="app-content">
          <!--begin::Container-->
          <div class="container-fluid">
            <!--begin::Row-->
            <div class="row">
              <div class="col-md-0">
                <div class="card mb-4">
                  <div class="card-header"><h3 class="card-title">Kontakt forma</h3></div>
                  <!-- /.card-header -->
                  <div class="card-body">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th style="width: 10px">#</th>
                          <th>Ime</th>
                          <th>Adresa</th>
                          <th >E-Mail</th>
                          <th >PIB</th>
                          <th >Poruka</th>
                          <th >Datum</th>
                        </tr>
                      </thead>
                      <tbody>
                        <?php foreach ($submissions as $index => $sumbission): ?>
                        <tr class="align-middle">
                          <td><?= $index ?>.</td>
                          <td><?= $sumbission['name'] ?> </td>
                          <td><?= $sumbission['address'] ?></td>
                          <td><?= $sumbission['email'] ?> </td>
                          <td><?= $sumbission['pib'] ?></td>
                          <td><?= $sumbission['message'] ?></td>
                          <td><?= $sumbission['submitted_at'] ?></td>
                        </tr>
                        <?php endforeach; ?>
                      </tbody>
                    </table>
                  </div>
                  <!-- /.card-body -->
                  <div class="card-footer clearfix">
                    <!-- <ul class="pagination pagination-sm m-0 float-end">
                      <li class="page-item"><a class="page-link" href="#">&laquo;</a></li>
                      <li class="page-item"><a class="page-link" href="#">1</a></li>
                      <li class="page-item"><a class="page-link" href="#">2</a></li>
                      <li class="page-item"><a class="page-link" href="#">3</a></li>
                      <li class="page-item"><a class="page-link" href="#">&raquo;</a></li>
                    </ul> -->
                  </div>
                </div>
                <!-- /.card -->
                </div>
              <!-- /.col -->
            <!--end::Row-->
          <!--end::Container-->
        <!--end::App Content-->

            </div>
            <!-- /.row (main row) -->
          </div>
          <!--end::Container-->
        </div>
        <!--end::App Content-->
      </main>
      <!--end::App Main-->
