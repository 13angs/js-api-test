import axios from 'axios';
import { NotificationService } from './api/api';
import arrayFilter from './api/arrayFilter';

const service = new NotificationService();

async function fetchData() {
  const res = await service.put();
  console.log(res.data);
}

const arrF = arrayFilter();
arrF.slice(0, 3).map((f) => {
  console.log(f.name);
  return f;
});
