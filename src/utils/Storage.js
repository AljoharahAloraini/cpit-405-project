
const STORAGE_KEY = "muqaddim_projects";


export function saveProject(project) {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  saved.push(project);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
}

export function getAllProjects() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function getProjectById(id) {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  return saved.find((p) => p.id === id);
}

export function deleteProject(id) {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  const filtered = saved.filter((p) => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
}
