/**
 * @file 载入3D模型
 * @author zhongziyan@baidu.com
 */
import React, {Suspense} from 'react';
import {Canvas, useLoader} from '@react-three/fiber';
import {OrbitControls, Sky} from '@react-three/drei';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader';
import {MTLLoader} from 'three/examples/jsm/loaders/MTLLoader';
import {Model} from './Matilda';
import Loader from './Loader';

function Scene() {
    // glTF（gl传输格式）是一种开放格式的规范， 用于更高效地传输、加载3D内容。
    // 该类文件以JSON（.gltf）格式或二进制（.glb）格式提供。
    const gltf = useLoader(GLTFLoader, '/assets/matilda.glb');
    return <primitive object={gltf.scene} scale={0.02} />;
}

function Scene2() {
    // 材质模版库（MTL）或 .MTL 文件格式是 .OBJ 的配套文件格式， 用于描述一个或多个 .OBJ 文件中物体表面着色（材质）属性。
    const materials = useLoader(MTLLoader, '/assets/minion.mtl');
    // OBJ 文件格式是一种简单的数据格式， 这种格式以人类可读的形式来表示3D几何体，
    // 即每个顶点的位置、每个纹理坐标顶点的UV位置、顶点法线、 将使每个多边形定义为顶点列表的面以及纹理顶点。
    const obj = useLoader(OBJLoader, '/assets/minion.obj', loader => {
        materials.preload();
        loader.setMaterials(materials);
    });
    return <primitive object={obj} />;
}

const Demo = () => {
    return (
        <Canvas>
            <ambientLight />
            <Suspense fallback={<Loader />}>
                <Scene />
                {/* <Scene2 /> */}
                {/* <Model /> */}
                <OrbitControls />
                <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
            </Suspense>
        </Canvas>
    );
};

export default Demo;
