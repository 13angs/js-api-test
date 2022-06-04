import axios from 'axios';
import { NotificationService } from './api/api';

const service = new NotificationService();

async function fetchData() {
  const res = await service.put();
  console.log(res.data);
}

async function fetchWeather() {
  try {
    const api1 = axios.get('https://api.testing.winonahappyv.net');
    const api2 = axios.get('https://api.testing.winonahappyv.net');

    const res = await Promise.all([api1, api2]);
    console.log(res);
    // console.log(res[0].data);
    // console.log(res[1].data);

    if (res[0].status === 200 && res[1].status === 200) {
      console.log('Both pass');
    }
  } catch (err) {
    console.log(err);
  }
}

fetchWeather();

// fetchData();
