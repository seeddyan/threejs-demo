/**
 * @file 加载纹理
 * @author zhongziyan@baidu.com
 */
import {Suspense} from 'react';
import {Canvas, useLoader} from '@react-three/fiber';
import {OrbitControls, useTexture} from '@react-three/drei';
import {TextureLoader} from 'three/src/loaders/TextureLoader';

function Scene() {
    // 颜色贴图、置换贴图、法线贴图、粗糙度贴图、环境光遮蔽贴图
    const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, [
        '/assets/PavingStones121_1K_Color.jpg',
        '/assets/PavingStones121_1K_Displacement.jpg',
        '/assets/PavingStones121_1K_NormalDX.jpg',
        '/assets/PavingStones121_1K_Roughness.jpg',
        '/assets/PavingStones121_1K_AmbientOcclusion.jpg',
    ]);
    // const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useTexture([
    //     '/assets/PavingStones121_1K_Color.jpg',
    //     '/assets/PavingStones121_1K_Displacement.jpg',
    //     '/assets/PavingStones121_1K_NormalDX.jpg',
    //     '/assets/PavingStones121_1K_Roughness.jpg',
    //     '/assets/PavingStones121_1K_AmbientOcclusion.jpg',
    // ]);

    return (
        <>
            <ambientLight intensity={0.2} />
            <directionalLight />
            <mesh>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial
                    map={colorMap}
                    displacementScale={0.2}
                    displacementMap={displacementMap}
                    normalMap={normalMap}
                    roughnessMap={roughnessMap}
                    aoMap={aoMap}
                />
            </mesh>
        </>
    );
}

export default function App() {
    return (
        <Canvas>
            <Suspense fallback={null}>
                <Scene />
                <OrbitControls autoRotate />
            </Suspense>
        </Canvas>
    );
}
