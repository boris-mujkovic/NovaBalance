<main class="app-main">
        <!--begin::App Content Header-->
        <div class="app-content-header">
          <!--begin::Container-->
          <div class="container-fluid">
            <!--begin::Row-->
            <!-- <div class="row">
              <div class="col-sm-6"><button data-type='section' class="add-button btn btn-primary"><i class="ri-add-large-line"></i> Dodaj</button></div>
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
        <div class="col-sm-6"><h3 class="mb-0">Sekcija: `<?= $section['section_title'] ?>`</h3></div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-end">
                  <li class="breadcrumb-item"><a href="/admin/index">Home</a></li>
                  <li class="breadcrumb-item" aria-current="page"><a href='/admin/pages'>Stranice</a></li>
<li class="breadcrumb-item " aria-current="page"><a href='/admin/page?page_id=<?= $page_details['page_id'] ?>'>Sekcije za "<?= $page_details['title'] ?>"</a></li>
                  <li class="breadcrumb-item active" aria-current="page">Sekcija: "<?= $section['section_title'] ?>"</li>
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
                  <div class="card-header"><h3 class="card-title">Edit:</h3></div>
                  <!-- /.card-header -->
                  <div class="card-body">
                    <!-- EDIT -->
              <form action='/admin/sectionedit' method='post' id='editSectionForm'>
                <input type='hidden' id='section_id' name='section_id' value='<?= $section['id'] ?>'>
                <div class='form-group'>
                  <label for='section_title'>Naziv Sekcije:</label>
                  <input type='text' class='form-control' name='section_title' id='section_title' value='<?= $section['section_title'] ?>'>
                </div>
                <div class='form-group'>
                  <label for='section_title'>Naslov Sekcije (Heading):</label>
                  <input type='text' class='form-control' name='section_heading' id='section_heading' value='<?= $section['heading'] ?>'>
                </div>
                <div class='form-group'>
                  <label for='section_content'>Sadržaj</label>
                  <textarea id='section_content' class='form-control' rows='7' name='section_content'><?= $section['content'] ?></textarea>
                </div>
                <br>
                <div class='form-group'>
                  <button class='btn btn-primary form-btn' data-type='edit' data-id='<?= $section['id'] ?>'>Izmeni</button>
                  <button class='btn btn-danger form-btn' data-type='cancel'>Opozovi</button>
                </div>
              </form>
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
<!-- Modal -->
<div class="modal fade" id="notifModalCenter" tabindex="-1" role="dialog" aria-labelledby="notifModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
       <!-- <h5 class="modal-title" id="exampleModalCenterLongTitle">Uspešno izmenjena sekcija</h5>
       --> 
      </div>
      <div class="modal-body">
        Uspešno ste izmenili sekciju!
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" id='closeModalBtn' data-dismiss="modal">U redu</button>
      </div>
    </div>
  </div>
</div>
