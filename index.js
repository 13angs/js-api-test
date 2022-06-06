import axios from 'axios';
import { NotificationService } from './api/api';
import randomItems from './api/randomItems';

const service = new NotificationService();

async function fetchData() {
  const res = await service.put();
  console.log(res.data);
}

console.log(randomItems());
