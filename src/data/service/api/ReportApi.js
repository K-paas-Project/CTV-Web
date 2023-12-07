import {httpClient} from "../HttpClient";

export function report(category, title, content, location, image) {
  return httpClient.post('/api/v1/report', {
    category,
    title,
    content,
    location,
    image
  },
    );
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
