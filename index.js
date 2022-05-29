import { NotificationService } from './api/api';

const service = new NotificationService();

async function fetchData() {
  const res = await service.put();
  console.log(res.data);
}

// fetchData();
