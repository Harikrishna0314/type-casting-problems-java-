import { aircraftData, type Aircraft } from './aircraft';
export type { Aircraft } from './aircraft';
const API = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8080/api';
async function safeJson<T>(url: string, fallback: T): Promise<T> {
  try { const r = await fetch(url, { cache:'no-store' }); if (!r.ok) return fallback; return await r.json(); }
  catch { return fallback; }
}
export async function getAircraft(query = ''): Promise<Aircraft[]> {
  const data = await safeJson<Aircraft[]>(`${API}/aircraft${query ? `?q=${encodeURIComponent(query)}` : ''}`, aircraftData);
  return Array.isArray(data) && data.length ? data : aircraftData;
}
export async function getAircraftBySlug(slug:string): Promise<Aircraft> {
  return safeJson<Aircraft>(`${API}/aircraft/${encodeURIComponent(slug)}`, aircraftData.find(a=>a.slug===slug) ?? aircraftData[0]);
}
export function getLocalAircraftBySlug(slug:string) { return aircraftData.find(a=>a.slug===slug); }
