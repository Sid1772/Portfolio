import { Component, OnInit } from '@angular/core';
import { Config } from '../app.config';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  isSendingMail = false;
  isCopied = false;
  isMailSent = false;
  isLoading = false;
  config = Config;
  constructor() {}

  ngOnInit(): void {}
  copyEmail() {
    var copyText = Config.Email;
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText);
    this.isCopied = true;

    setTimeout(() => {
      this.isCopied = false;
    }, 200);
    /* Alert the copied text */
  }
  showMail() {
    this.isSendingMail = true;
  }
  sendMail(form: any) {
    console.log(form);
    var data = { from_name: form.email, message: form.comments };
    emailjs
      .send('default_service', 'template_ogmcwkn', data, this.config.userId)
      .then(
        (result: EmailJSResponseStatus) => {
          alert('Mail Sent');
          this.isMailSent = true;
          this.isLoading = false;
        },
        (error) => {
          alert('Some error Occured');
        }
      );
  }
}
