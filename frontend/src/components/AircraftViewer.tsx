'use client';
import { Canvas } from '@react-three/fiber';
import { Environment, Float, OrbitControls, Html } from '@react-three/drei';
import type { Aircraft } from '@/lib/aircraft';

function AircraftShape({ category }: { category:string }) {
  const isHeli = category === 'Helicopter';
  const isTransport = category === 'Military Transport';
  const isFighter = category === 'Fighter';
  return (
    <group rotation={[0.08,0.25,0]}>
      <mesh rotation={[0,0,Math.PI/2]}><capsuleGeometry args={[isHeli?0.42:0.55,isHeli?2.4:isTransport?4.2:isFighter?3.2:4.8,16,12]}/><meshStandardMaterial metalness={0.7} roughness={0.28} /></mesh>
      {!isHeli && <>
        <mesh position={[0,0,0]}><boxGeometry args={[isFighter?2.8:4.2,0.16,isFighter?0.8:1.25]}/><meshStandardMaterial metalness={0.6} roughness={0.32} /></mesh>
        <mesh position={[0,0.52,-1.45]} rotation={[0,0,0.04]}><boxGeometry args={[0.72,0.12,0.9]}/><meshStandardMaterial metalness={0.6} roughness={0.32} /></mesh>
        <mesh position={[0,0.38,1.65]} rotation={[0,0,0.0]}><boxGeometry args={[0.12,0.65,0.55]}/><meshStandardMaterial metalness={0.6} roughness={0.32} /></mesh>
      </>}
      {isHeli && <>
        <mesh position={[0,0.66,0]}><boxGeometry args={[0.13,0.05,4.2]}/><meshStandardMaterial metalness={0.55} roughness={0.35}/></mesh>
        <mesh position={[0,0.66,0]} rotation={[0,Math.PI/2,0]}><boxGeometry args={[4.2,0.05,0.13]}/><meshStandardMaterial metalness={0.55} roughness={0.35}/></mesh>
        <mesh position={[0,0,-1.9]} rotation={[0,0,Math.PI/2]}><boxGeometry args={[0.12,0.75,0.12]}/><meshStandardMaterial metalness={0.55} roughness={0.35}/></mesh>
      </>}
      {(!isFighter && !isHeli) && <>
        <mesh position={[-1.25,-0.28,0.72]}><cylinderGeometry args={[0.18,0.18,0.7,24]}/><meshStandardMaterial color="#1d2731" /></mesh>
        <mesh position={[1.25,-0.28,0.72]}><cylinderGeometry args={[0.18,0.18,0.7,24]}/><meshStandardMaterial color="#1d2731" /></mesh>
      </>}
      {isFighter && <mesh position={[0,-0.05,1.1]}><boxGeometry args={[1.25,0.2,1.0]}/><meshStandardMaterial metalness={0.7} roughness={0.25}/></mesh>}
    </group>
  );
}

export default function AircraftViewer({ aircraft }: { aircraft: Aircraft }) {
  return <div className="relative h-[430px] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#081525]">
    <Canvas camera={{position:[7,4,8],fov:43}} dpr={[1,1.75]}>
      <ambientLight intensity={1.0}/><directionalLight position={[5,8,5]} intensity={2.4}/><pointLight position={[-4,3,2]} intensity={1.2}/>
      <Environment preset="city"/><Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.55}><AircraftShape category={aircraft.category}/></Float>
      <OrbitControls enablePan={false} minDistance={4.5} maxDistance={13} autoRotate autoRotateSpeed={0.65}/>
      <Html position={[-3,-2.25,0]}><div className="pointer-events-none rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[.16em] text-slate-400 backdrop-blur">Drag · zoom · auto-rotate</div></Html>
    </Canvas>
    <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4"><div><div className="text-[10px] font-bold uppercase tracking-[.18em] text-cyan-300">Interactive model</div><div className="mt-1 text-sm font-medium text-white">{aircraft.name}</div></div><div className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-wider text-slate-400 backdrop-blur">{aircraft.category}</div></div>
  </div>;
}
