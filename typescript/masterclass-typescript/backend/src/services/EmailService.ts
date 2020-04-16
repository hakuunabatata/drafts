interface MailTo {
  name: string;
  email: string;
}
interface MailMsg {
  subject: string;
  body: string;
  anx?: string[];
}

interface MsgDTO {
  to: MailTo;
  msg: MailMsg;
}

interface MailService {
  sendMail(request: MsgDTO): void;
}

class EmailService implements MailService{
  sendMail({ to, msg }: MsgDTO) {
    console.log(`Email enviado para ${to.name}: ${msg.subject}`);
  }
}

export default EmailService;
