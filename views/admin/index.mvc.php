{% extends "admin-base.mvc.php" %}

{% block title %} AdminPanel | NovaBalance  {% endblock %}

{% block body %}

<body class="layout-fixed sidebar-expand-lg bg-body-tertiary">
     <!--begin::App Wrapper-->
     <div class="app-wrapper">
        <!--begin::Footer-->
        {% include "admin/nav.php" %}
        {% include "admin/aside.php" %}
        {% if ($page == "home"): %}
            {% include "admin/app-main.mvc.php" %}
        {% elseif ($page == "pages"): %}
            {% include "admin/pages.mvc.php" %}
        {% elseif ($page == "page"): %}
          {% include "admin/page.mvc.php" %}
        {% elseif ($page == "section"): %}
          {% include "admin/section.php" %}
        {% elseif ($page == "contactForm"): %}
          {% include "admin/contactForm.php" %}
        {% endif; %}

       {% include "admin/add-page-modal.php" %}
       {% include "admin/footer.php" %}
     </div>
     <!--end::App Wrapper-->

     {% include "admin/scripts.php" %}
</body>

{% endblock %}
