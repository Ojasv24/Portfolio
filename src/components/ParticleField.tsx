import { useRef, useMemo, useCallback, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* ── Floating Particles ─────────────────────────────────────────── */
const PARTICLE_COUNT = 1800;

function Particles() {
    const mesh = useRef<THREE.Points>(null);
    const mouse = useRef({ x: 0, y: 0 });
    const { viewport } = useThree();

    const [positions, velocities, colors, sizes] = useMemo(() => {
        const pos = new Float32Array(PARTICLE_COUNT * 3);
        const vel = new Float32Array(PARTICLE_COUNT * 3);
        const col = new Float32Array(PARTICLE_COUNT * 3);
        const siz = new Float32Array(PARTICLE_COUNT);

        const palette = [
            new THREE.Color("#9C12DC"),
            new THREE.Color("#B41992"),
            new THREE.Color("#DD94FF"),
            new THREE.Color("#E17E08"),
            new THREE.Color("#6B21A8"),
            new THREE.Color("#7C3AED"),
        ];

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const i3 = i * 3;
            pos[i3] = (Math.random() - 0.5) * 30;
            pos[i3 + 1] = (Math.random() - 0.5) * 20;
            pos[i3 + 2] = (Math.random() - 0.5) * 15 - 2;

            vel[i3] = (Math.random() - 0.5) * 0.008;
            vel[i3 + 1] = (Math.random() - 0.5) * 0.008;
            vel[i3 + 2] = (Math.random() - 0.5) * 0.004;

            const c = palette[Math.floor(Math.random() * palette.length)];
            col[i3] = c.r;
            col[i3 + 1] = c.g;
            col[i3 + 2] = c.b;

            siz[i] = Math.random() * 3 + 0.5;
        }
        return [pos, vel, col, siz];
    }, []);

    const handlePointerMove = useCallback(
        (e: { clientX: number; clientY: number }) => {
            mouse.current.x =
                ((e.clientX / window.innerWidth) * 2 - 1) * (viewport.width / 2);
            mouse.current.y =
                (-(e.clientY / window.innerHeight) * 2 + 1) * (viewport.height / 2);
        },
        [viewport]
    );

    // Attach window-level listener once
    useEffect(() => {
        window.addEventListener("mousemove", handlePointerMove);
        return () => window.removeEventListener("mousemove", handlePointerMove);
    }, [handlePointerMove]);

    useFrame((_, delta) => {
        if (!mesh.current) return;
        const geo = mesh.current.geometry;
        const posAttr = geo.getAttribute("position") as THREE.BufferAttribute;
        const arr = posAttr.array as Float32Array;
        const t = delta * 60; // normalise to ~60fps

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const i3 = i * 3;

            // drift
            arr[i3] += velocities[i3] * t;
            arr[i3 + 1] += velocities[i3 + 1] * t;
            arr[i3 + 2] += velocities[i3 + 2] * t;

            // gentle pull toward mouse
            const dx = mouse.current.x - arr[i3];
            const dy = mouse.current.y - arr[i3 + 1];
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 6) {
                const force = (6 - dist) * 0.0003 * t;
                arr[i3] += dx * force;
                arr[i3 + 1] += dy * force;
            }

            // wrap around
            if (arr[i3] > 15) arr[i3] = -15;
            if (arr[i3] < -15) arr[i3] = 15;
            if (arr[i3 + 1] > 10) arr[i3 + 1] = -10;
            if (arr[i3 + 1] < -10) arr[i3 + 1] = 10;
        }
        posAttr.needsUpdate = true;

        mesh.current.rotation.y += 0.0002 * t;
        mesh.current.rotation.x += 0.0001 * t;
    });

    const particleTexture = useMemo(() => {
        const canvas = document.createElement("canvas");
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext("2d")!;
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, "rgba(255,255,255,1)");
        gradient.addColorStop(0.3, "rgba(255,255,255,0.6)");
        gradient.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
        return new THREE.CanvasTexture(canvas);
    }, []);

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
                <bufferAttribute
                    attach="attributes-color"
                    args={[colors, 3]}
                />
                <bufferAttribute
                    attach="attributes-size"
                    args={[sizes, 1]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.06}
                vertexColors
                transparent
                opacity={0.8}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
                map={particleTexture}
                sizeAttenuation
            />
        </points>
    );
}

/* ── Glowing Orbs ───────────────────────────────────────────────── */
function GlowOrbs() {
    const group = useRef<THREE.Group>(null);

    const orbs = useMemo(
        () =>
            Array.from({ length: 5 }, (_, i) => ({
                position: [
                    (Math.random() - 0.5) * 12,
                    (Math.random() - 0.5) * 8,
                    -3 - Math.random() * 4,
                ] as [number, number, number],
                color: ["#9C12DC", "#B41992", "#E17E08", "#6B21A8", "#DD94FF"][i],
                scale: 0.8 + Math.random() * 1.5,
                speed: 0.3 + Math.random() * 0.5,
                offset: Math.random() * Math.PI * 2,
            })),
        []
    );

    useFrame(({ clock }) => {
        if (!group.current) return;
        const t = clock.getElapsedTime();
        group.current.children.forEach((child, i) => {
            const orb = orbs[i];
            child.position.x =
                orb.position[0] + Math.sin(t * orb.speed + orb.offset) * 1.5;
            child.position.y =
                orb.position[1] + Math.cos(t * orb.speed * 0.7 + orb.offset) * 1;
        });
    });

    return (
        <group ref={group}>
            {orbs.map((orb, i) => (
                <mesh key={i} position={orb.position}>
                    <sphereGeometry args={[orb.scale, 32, 32]} />
                    <meshBasicMaterial
                        color={orb.color}
                        transparent
                        opacity={0.06}
                    />
                </mesh>
            ))}
        </group>
    );
}

/* ── Connection Lines ───────────────────────────────────────────── */
function ConnectionLines() {
    const lineRef = useRef<THREE.LineSegments>(null);

    const nodes = useMemo(() => {
        const pts: THREE.Vector3[] = [];
        for (let i = 0; i < 40; i++) {
            pts.push(
                new THREE.Vector3(
                    (Math.random() - 0.5) * 20,
                    (Math.random() - 0.5) * 14,
                    (Math.random() - 0.5) * 8 - 3
                )
            );
        }
        return pts;
    }, []);

    useFrame(({ clock }) => {
        if (!lineRef.current) return;
        const t = clock.getElapsedTime();

        // Move nodes gently
        nodes.forEach((n, i) => {
            n.x += Math.sin(t * 0.2 + i) * 0.003;
            n.y += Math.cos(t * 0.15 + i * 0.5) * 0.003;
        });

        const positions: number[] = [];
        const THRESHOLD = 4.5;

        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const d = nodes[i].distanceTo(nodes[j]);
                if (d < THRESHOLD) {
                    positions.push(
                        nodes[i].x, nodes[i].y, nodes[i].z,
                        nodes[j].x, nodes[j].y, nodes[j].z
                    );
                }
            }
        }

        const geo = lineRef.current.geometry;
        geo.setAttribute(
            "position",
            new THREE.Float32BufferAttribute(positions, 3)
        );
        geo.attributes.position.needsUpdate = true;
    });

    return (
        <lineSegments ref={lineRef}>
            <bufferGeometry />
            <lineBasicMaterial
                color="#9C12DC"
                transparent
                opacity={0.08}
                blending={THREE.AdditiveBlending}
            />
        </lineSegments>
    );
}

/* ── Main Canvas Export ─────────────────────────────────────────── */
export default function ParticleField() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 60 }}
                dpr={[1, 1.5]}
                gl={{ antialias: false, alpha: true }}
                style={{ background: "transparent" }}
            >
                <Particles />
                <GlowOrbs />
                <ConnectionLines />
            </Canvas>
        </div>
    );
}
