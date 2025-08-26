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
                  <li class="breadcrumb-item active" aria-current="page">Stranice</li>
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
                  <div class="card-header"><h3 class="card-title">Stranice:</h3></div>
                  <!-- /.card-header -->
                  <div class="card-body">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th style="width: 10px">#</th>
                          <th>Title</th>
                          <th>URL</th>
                          <th >Datum Kreiranja</th>
                          <th style="width: 40px">?</th>
                        </tr>
                      </thead>
                      <tbody>
                        <?php foreach ($pages as $index => $page): ?>
                        <tr class="align-middle">
                          <td><?= $index ?>.</td>
                          <td><?= $page['title'] ?> </td>
                          <td><?= $page['slug'] ?></td>
                          <td><?= $page['created_at'] ?> </td>
                          <td><button class="btn btn-primary action-button" data-type='edit' data-id='<?= $page['id'] ?>'><i class="ri-edit-line"></i></button><button data-type='delete' class='action-button btn btn-danger'data-id='<?= $page['id'] ?>'><i class="ri-close-large-line"></i></button></td>
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
