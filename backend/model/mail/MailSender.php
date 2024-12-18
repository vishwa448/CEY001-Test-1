<?php
# developer : janith nirmal
# algowrite software solution
## date : 30-08-2023 
## version : 1.0.0

require_once "SMTP.php";
require_once "PHPMailer.php";
require_once "Exception.php";

use PHPMailer\PHPMailer\PHPMailer;

final class MailSender
{

    private $mail;
    private $senderMail;
    private $toAddress;
    private $password;

    public function __construct($toAddress)
    {
        $this->senderMail = 'sldarkdragon195@gmail.com';
        $this->password = 'otbhkbjzqdrmlwdb';
        $this->toAddress = $toAddress;
    }

    public function mailInitiate($subject, $title, $bodyContent)
    {

        try {
            // email code
            $this->mail = new PHPMailer(true);
            $this->mail->IsSMTP();
            $this->mail->Host = 'smtp.gmail.com';
            $this->mail->SMTPAuth = true;
            $this->mail->Username = $this->senderMail;
            $this->mail->Password = $this->password;
            $this->mail->SMTPSecure = 'ssl';
            $this->mail->Port = 465;
            $this->mail->setFrom($this->senderMail, $title);
            $this->mail->addReplyTo($this->senderMail, $title);
            $this->mail->addAddress($this->toAddress);
            $this->mail->isHTML(true);
            $this->mail->Subject = $subject;

            $this->mail->Body    = $bodyContent;
        } catch (Exception $e) {
            return $e->getMessage(); //Boring error messages from anything else!
        }

        return true;
    }

    public function sendMail()
    {
        if (!$this->mail->send()) {
            return false;
        } else {
            return true;
        }
    }
}
