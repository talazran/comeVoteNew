using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net.Mail;

namespace BLL
{
    public class sendEmails
    {
        public void sendMailTest(string mailAddress)
        {
            try
            {
                MailMessage mail = new MailMessage();
                SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");
                mail.From = new MailAddress("votingpojectemails@gmail.com");
                mail.To.Add(mailAddress);//לשלוח כמה כתובות
                mail.Subject = "מספר המנדטים ";//נושא
                mail.Body = "מספר המנדטים הינו:";//תוכן עם תגיות
                SmtpServer.Port = 587;
                SmtpServer.Credentials = new System.Net.NetworkCredential("votingpojectemails", "vvvv1234");//שם וסיסמסמא
                SmtpServer.EnableSsl = true;

                SmtpServer.Send(mail);//שליחת המייל

            }
            catch (Exception ex)
            {
                // MessageBox.Show(ex.ToString());
            }

        }
        public void sendMailForPassword(string mailAddress, string password)
        {
            try
            {
                MailMessage mail = new MailMessage();
                SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");

                mail.From = new MailAddress("votingpojectemails@gmail.com");
                mail.To.Add(mailAddress);//לשלוח כמה כתובות
                mail.Subject = "סיסמא למערכת ";//נושא
                mail.Body = "סיסמתך למערכת הינה:" + password;//תוכן עם תגיות

                SmtpServer.Port = 587;
                SmtpServer.Credentials = new System.Net.NetworkCredential("votingpojectemails", "vvvv1234");//שם וסיסמא
                SmtpServer.EnableSsl = true;

                SmtpServer.Send(mail);//שליחת המייל

            }
            catch (Exception ex)
            {
                // MessageBox.Show(ex.ToString());
            }
        }
    }
}
