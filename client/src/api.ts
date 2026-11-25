import type { ProjectItem } from './types';

export async function loadItems(): Promise<ProjectItem[]> {
  const response = await fetch('/data.json');
  if (!response.ok) {
    throw new Error(`Unable to load data: ${response.status}`);
  }
  return response.json() as Promise<ProjectItem[]>;
}
