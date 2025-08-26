<?php

declare(strict_types=1);

namespace App\Controllers;

use Framework\Controller;
use Framework\Response;
use App\Models\User;
use App\Services\MailchimpService;
use App\Models\Page;
use App\Models\PageSection;
use App\Models\Contact;

class Admin extends Controller
{
    public function __construct(private User $model, private Page $pages, private Contact $contact)
    {
    }

    public function index(): Response
    {
        if (!isset($_SESSION["user"])) {
            return $this->view("admin/login.mvc.php");
        } else {
            return $this->view("admin/index.mvc.php", [
                "page" => "home",
            ]);
        }
    }

    public function contactForm(): Response
    {
        $submissions = $this->contact;
        $submissions = $submissions->getSubmissions();
        if (!isset($_SESSION["user"])) {
            return $this->view("admin/login.mvc.php");
        } else {
            return $this->view("admin/index.mvc.php", [
        "page" => "contactForm",
        "submissions" => $submissions
            ]);
        }
    }

    public function changeContent(): Response
    {
        $data = [
            "section_id" => $this->request->post['section_id'],
            "section_title" => $this->request->post['section_title'],
            "section_content" => $this->request->post['section_content'],
            "section_heading" => $this->request->post['section_heading']
        ];

        $page_modal = $this->pages;
        $change_data = $page_modal->changeSection($data['section_id'], $data['section_title'], $data['section_content'], $data['section_heading']);
        if ($change_data) {
            $responseData = ['success' => "Changed!"];
        } else {
            $responseData = ['success' => "Failed!"];
        }
        header("Content-Type: application/json");
        echo json_encode($responseData);
        exit;
    }

    public function page(): Response
    {
        $page_id = $this->request->get["page_id"];
        $sections = $this->pages;
        $page = $sections->getPage($page_id);
        $sections = $sections->getPageSections($page_id);
        if (!isset($_SESSION['user'])) {
            return $this->view("admin/login.mvc.php");
        } else {
            return $this->view("admin/index.mvc.php", [
            "page" => "page",
            "sections" => $sections,
            "page_name" => $page
      ]);
        }
    }
    public function section(): Response
    {
        $section_id = $this->request->get["section_id"];
        $page = $this->pages;
        $section = $page->getSpecificSection($section_id);
        $page_details = $page->getPageFromSectionId($section_id);
        if (!isset($_SESSION['user'])) {
            return $this->view("admin/login.mvc.php");
        } else {
            return $this->view("admin/index.mvc.php", [
            "page" => "section",
            "section" => $section[0],
            "page_details" => $page_details
      ]);
        }
    }
    public function pages(): Response
    {
        $pages = $this->pages;
        $pages = $pages->getPages();
        if (!isset($_SESSION["user"])) {
            return $this->view("admin/login.mvc.php");
        } else {
            return $this->view("admin/index.mvc.php", [
                "page" => "pages",
                "pages" => $pages,
            ]);
        }
    }

    public function login(): Response
    {
        $data = [
            "email" => $this->request->post["user-email"] ?? "",
            "password" => $this->request->post["user-password"] ?? "",
        ];
        $responseData = [];

        if ($data["email"] == "" || $data["password"] == "") {
            $responseData["error"] = "Molimo Vas da popunite sva polja!";
            return $this->view("admin/login.mvc.php", [
                "errors" => $responseData["error"],
            ]);
        }

        $user = $this->model->checkIfUserExists(
            $data["email"],
            $data["password"]
        );

        if (!empty($user)) {
            $_SESSION["user"] = $user;
            return $this->redirect("/admin/index");
        } else {
            $responseData["error"] = "Korisnik nije pronadjen!";
            return $this->view("admin/login.mvc.php", [
                "errors" => $responseData["error"],
            ]);
        }
    }

    public function logout(): Response
    {
        unset($_SESSION["user"]);
        return $this->redirect("/admin/index");
    }
}
