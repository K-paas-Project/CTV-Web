import {httpClient} from "../HttpClient";
import FormData from 'form-data';

export function report(category, title, content, location, image) {

  const formData = new FormData();

  const imgStr = `image${new Date().getMilliseconds()}.jpg`

  console.log(category, title, content, location, image);
  const json = JSON.stringify({
    category,
    title,
    content,
    location
  })

  formData.append('image', image, imgStr);
  formData.append('data', new Blob([json], {
    type: 'application/json'
  }));

  return httpClient.post('/api/v1/report', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  });
}

export function fixReport(id, reportOrganization, status) {
  return httpClient.patch('/api/v1/report/fix', {
    id,
    reportOrganization,
    status
  });
}

export function getReportById(id) {
  return httpClient.get(`/api/v1/report/${id}`);
}

export function getMyReport() {
  return httpClient.get('/api/v1/report/my')
}

export function getReportAll() {
  return httpClient.get('/api/v1/report/all');
}
