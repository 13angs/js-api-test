import { Axios } from './Axios';
class API {
  version = 'v1';
  get() {
    return;
  }
  post() {
    return;
  }
  put() {
    return;
  }
  delete() {
    return;
  }
}

export class WeatherforecastService extends API {
  url = `${this.version}`;
  get(url = this.url) {
    return Axios.get(url);
  }
}

export class NotificationService extends API {
  url = `${this.version}/notifications`;

  // the example code
  async put() {
    // "{"message": "{Payment: 'truemoney', Invoice: 'WN0031934', Date: '', Address: '', PhoneNo: '', Email: '', Messenger: '', Line: '', Status: 'Cancel'}"}"

    const msgData = `{
      "message": 
        "{
          Payment: 'truemoney', 
          Invoice: 'WN0031934', 
          Date: '', Address: '', 
          PhoneNo: '', Email: '', 
          Messenger: '', 
          Line: '', 
          Status: 'Cancel'
        }"
      }`;

    const data = {
      Data: msgData.replace(/\s/g, ''), //remove spaces
      Status: 'read',
      RefName: 'order',
      RefId: 'RefId',
      Type: 'LineNotify',
      Name: 'New Order',
      IsRead: true,
      Message: 'You just buy our product',
      UserId: 'user id',
      ImageUrl: 'url',
    };
    const id = 12;
    return await Axios.put(`${this.url}/${id}`, data);
  }

  async post() {
    // "{"message": "{Payment: 'truemoney', Invoice: 'WN0031934', Date: '', Address: '', PhoneNo: '', Email: '', Messenger: '', Line: '', Status: 'Cancel'}"}"

    const msgData = `{
      "message":
        "{
          Invoice: 'WN0000017',
          Status: 'unread',
          Shipping: 'thailandpost',
          Receipt: '2022-05-29T01:09:52.4890395+07:00',
          Payment: 'truemoney',
          Date: '2022-05-29T01:09:52.4890395+07:00',
          Address: '',
          PhoneNo: '',
          Email: '',
          Messenger: '',
          Line: ''
        }", 
        imageThumbnail: '', 
        imageFullsize: ''
      }`;

    const data = {
      Data: msgData.replace(/\s/g, ''), //remove spaces
      Status: 'read',
      RefName: 'order',
      RefId: 'RefId',
      Type: 'LineNotify',
      Name: 'New Order',
      IsRead: true,
      Message: 'You just buy our product',
      UserId: 'user id',
      ImageUrl: 'url',
    };
    return await Axios.post(`${this.url}`, data);
  }
}
