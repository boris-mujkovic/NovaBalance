<?php

declare(strict_types=1);

namespace App\Controllers;

use Framework\Controller;
use Framework\Response;
use App\Models\Contact;
use App\Models\Page;
use App\Services\MailchimpService;
use App\Models\Offer;

class Home extends Controller
{
    public function __construct(private Contact $model, private Offer $offer, private Page $page)
    {
    }

    public function index(): Response
    {
        $page = $this->page;
        $content = $page->getPageContent("/home");
        return $this->view("home/index.mvc.php", [
            "content" => $content,
        ]);
    }
    public function contentEndpoint(): Response
    {
        $slug = $this->request->get['slug'];
        $page = $this->page;
        $content = $page->getPageContent($slug);
        if (empty($content)) {
            $content = ["error" => "No Content Found"];
        }
        header("Content-Type: application/json");
        echo json_encode($content);
        exit;
    }
    public function usluge(): Response
    {
        $page = $this->page;
        $content = $page->getPageContent("/usluge");
        return $this->view("usluge/index.mvc.php", [
            "h1Title" => "Usluge",
            "content" => $content,
        ]);
    }

    public function contact(): Response
    {
        $data = [
            "name" => $this->request->post["cntc_name"] ?? "",
            "address" => $this->request->post["cntc_address"] ?? "",
            "phone" => $this->request->post["cntc_phone"] ?? "",
            "email" => $this->request->post["cntc_email"] ?? "",
            "pib" => $this->request->post["cntc_pib"] ?? "",
            "message" => $this->request->post["cntc_message"] ?? "",
        ];

        if ($this->model->insert($data)) {
            // ✅ Send Email
            $mailer = new \App\Services\MailerService();
            $subject = "NovaBalance Website | New Contact Form Submission";
            $body = "
                <h3>New Contact Request</h3>
                <p><strong>Ime:</strong> {$data["name"]}</p>
                <p><strong>Email:</strong> {$data["email"]}</p>
                <p><strong>Telefon:</strong> {$data["phone"]}</p>
                <p><strong>Adresa:</strong> {$data["address"]}</p>
                <p><strong>PIB:</strong> {$data["pib"]}</p>
                <p><strong>Poruka:</strong> {$data["message"]}</p>
            ";

            $emailSent = $mailer->send("office@novabalance.rs", $subject, $body);

            // ✅ Response handling
            $responseData = ["success" => "Email Saved!"];
            if (!$emailSent) {
                error_log("Email sending failed.");
                $responseData["error"] = "Error Sending Mail!";
            }

            header("Content-Type: application/json");
            echo json_encode($responseData);
            exit;
        } else {
            header("Content-Type: application/json");
            echo json_encode(["errors" => $this->model->getErrors()]);
            exit;
        }
    }
    public function ponuda(): Response
    {
        $data = [
          'ime' => $this->request->post['ime'],
          'prezime' => $this->request->post['prezime'],
          'email' => $this->request->post['email'],
          'organizacija' => $this->request->post['organizacija'],
          'telefon' => $this->request->post['telefon'],
          'postanskiBroj' => $this->request->post['postanskiBroj'],
          'grad' => $this->request->post['grad'],
          'drzava' => $this->request->post['drzava'],
          'adresa' => $this->request->post['adresa'],
          'pib' => $this->request->post['pib'],
          'maticniBroj' => $this->request->post['maticniBroj'] ?? 0
    ];
        if (empty($data['maticniBroj'])) {
            $data['maticniBroj'] = 0;
        }
        if ($this->offer->insert($data)) {
            // ✅ Send Email
            $mailer = new \App\Services\MailerService();
            $subject = "NovaBalance Website | New Quote Form Submission";
            $body = "
                <h3>New Contact Request</h3>
                <p><strong>Ime:</strong> {$data["ime"]}</p>
                <p><strong>Prezime:</strong> {$data["prezime"]}</p>
                <p><strong>Email:</strong> {$data["email"]}</p>
                <p><strong>Oragnizacija:</strong> {$data["organizacija"]}</p>
                <p><strong>Telefon:</strong> {$data["telefon"]}</p>
                <p><strong>Postanski Broj:</strong> {$data["postanskiBroj"]}</p>
                <p><strong>Grad:</strong> {$data["grad"]}</p>
                <p><strong>Drzava:</strong> {$data["drzava"]}</p>
                <p><strong>Adresa:</strong> {$data["adresa"]}</p>
                <p><strong>PIB:</strong> {$data["pib"]}</p>
                <p><strong>Maticni Broj:</strong> {$data["maticniBroj"]}</p>
            ";

            $emailSent = $mailer->send("office@novabalance.rs", $subject, $body);

            // ✅ Response handling
            $responseData = ["success" => "Email Saved!"];
            if (!$emailSent) {
                error_log("Email sending failed.");
                $responseData["error"] = "Error Sending Mail!";
            }

            header("Content-Type: application/json");
            echo json_encode($responseData);
            exit;
        } else {
            header("Content-Type: application/json");
            echo json_encode(["errors" => $this->model->getErrors()]);
            exit;
        }
    }

    public function subscribe(): Response
    {
        $data = [
            "email" => $this->request->post["email"],
        ];
        $mailchimp = new MailchimpService();
        $result = $mailchimp->addSubscriber($data);

        if ($result) {
            $mailer = new \App\Services\MailerService();
            $mailer->sendNewsletterConfirmation($data["email"]);
            header("Content-Type: application/json");
            echo json_encode(["success" => "true","message" => "Subscribed!"]);
            exit;
        } else {
            header("Content-Type: application/json");
            echo json_encode(["sucess" => "false","message" => $result['error']]);
            exit;
        }
    }
}
