import {getAircraft} from '@/lib/api';
import Explorer from '@/components/Explorer';
export default async function Home({searchParams}:{searchParams:Promise<{category?:string}>}){const [aircraft,params]=await Promise.all([getAircraft(),searchParams]);const initialCategory=params.category??'All';return <Explorer aircraft={aircraft} initialCategory={initialCategory}/> }
