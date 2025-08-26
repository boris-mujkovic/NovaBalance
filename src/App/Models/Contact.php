<?php

declare(strict_types=1);

namespace App\Models;

use Framework\Model;
use PDO;

class Contact extends Model
{
    protected $table = "submissions";

    public function getSubmissions(): array
    {
        $sql = "SELECT * FROM submissions ORDER BY submitted_at DESC;";
        $conn = $this->database->getConnection();
        $stmt = $conn->prepare($sql);
        if ($stmt->execute()) {
            $submissions = $stmt->fetchAll(PDO::FETCH_ASSOC);
            if (!empty($submissions)) {
                return $submissions;
            } else {
                return [];
            }
        } else {
            return [];
        }

    }

}

