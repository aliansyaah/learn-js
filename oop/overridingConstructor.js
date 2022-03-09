class Mail {
    constructor(author) {
        this.from = author;
        this._contacts = [];
    }
    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this._contacts.push(to);
    }
    showAllContacts() {
        return this._contacts;
    }
}

class WhatsApp extends Mail{
    constructor() {
      super();
      this.username = 'dicoding';
      this.isBussinessAccount = true;
    }
  }
   
  //pemanggilan
  const wa1 = new WhatsApp(080111000222);