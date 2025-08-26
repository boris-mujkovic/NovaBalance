$(document).ready(function () {
  $("#pages-dataTable").dataTable();

  let editorInstance;

  ClassicEditor.create(document.querySelector("#section_content"))
    .then((editor) => {
      editorInstance = editor; // save reference to use later
    })
    .catch((error) => {
      console.error(error);
    });

  function sanityCheck(message) {
    alert(message);
  }
  $("body").on("click", ".close", function (e) {
    $(".modal").hide();
  });
  $("body").on("click", "#closeModalBtn", function (e) {
    $("#notifModalCenter").modal("toggle");
  });
  $("body").on("click", ".form-btn", function (e) {
    e.preventDefault();
    var dataId = $(this).data("id");
    var type = $(this).data("type");
    var form = $("#editSectionForm");
    var content = editorInstance.getData();
    console.log(content);
    var formData = new FormData(form[0]);
    formData.append("section_content", content);
    if (type == "edit") {
      $.ajax({
        url: "/admin/changeContent",
        method: "post",
        data: formData,
        processData: false,
        contentType: false,
        success: function (data) {
          console.log(data);
          $("#notifModalCenter").modal("toggle");
          //window.location.reload();
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.error("AJAX Error:", textStatus, errorThrown);
          console.error("Response Text:", jqXHR.responseText);
        },
      });
    } else if (type == "cancel") {
      window.history.back();
    }
  });

  $("body").on("click", ".edit-section", function (e) {
    var section_id = $(this).data("id");
    var actionType = $(this).data("type");

    switch (actionType) {
      case "edit":
        window.location.href = "/admin/section?section_id=" + section_id;
        break;
      case "delete":
        let potvrda = confirm(
          "Da li ste sigurni da želite da obrišete stranicu?",
        );
        if (potvrda) {
          alert("Obrisano");
        }
        break;
      default:
        sanityCheck("edit");
        break;
    }
  });
  $("body").on("click", ".action-button", function (e) {
    var actionType = $(this).data("type");
    var page_id = $(this).data("id");
    switch (actionType) {
      case "edit":
        window.location.href = "/admin/page?page_id=" + page_id;
        break;
      case "delete":
        let potvrda = confirm(
          "Da li ste sigurni da želite da obrišete stranicu?",
        );
        if (potvrda) {
          alert("Obrisano");
        }
        break;
      default:
        sanityCheck("edit");
        break;
    }
  });
});
