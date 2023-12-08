import {httpClient} from "../HttpClient";

export function report(category, title, content, location, image) {

  const formData = new FormData();

  const imgStr = `image${new Date().getMilliseconds()}.jpg`

  console.log(category, title, content, location, image);

  console.log(imgStr);
  formData.append('image', image, imgStr);
  formData.append('data', JSON.stringify({
    category,
    title,
    content,
    location
  }));

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data' // Important: Set the content type to 'multipart/form-data'
    }
  };

  return httpClient.post('/api/v1/report', formData);
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
