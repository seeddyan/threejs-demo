/**
 * @file 第一个三维🌰
 * @author zhongziyan@baidu.com
 */

import React from 'react';
import {Canvas} from '@react-three/fiber';

const Demo = () => {
    return (
        <Canvas>
            {/* Next, we will add some lights to our scene, by putting these components into our canvas. */}
            {/* 环境光会均匀的照亮场景中的所有物体。 */}
            {/* <ambientLight intensity={0.1} /> */}
            {/* 平行光是沿着特定方向发射的光。这种光的表现像是无限远,从它发出的光线都是平行的。常常用平行光来模拟太阳光 的效果; 太阳足够远，因此我们可以认为太阳的位置是无限远，所以我们认为从太阳发出的光线也都是平行的。 */}
            {/* <directionalLight color="red" position={[0, 0, 5]} /> */}
            {/* Mesh（网格）。 网格包含一个几何体以及作用在此几何体上的材质，我们可以直接将网格对象放入到我们的场景中，并让它在场景中自由移动 */}
            <mesh>
                {/* 要创建一个立方体，我们需要一个BoxGeometry（立方体）对象. 这个对象包含了一个立方体中所有的顶点（vertices）和面（faces */}
                <boxGeometry />
                {/* 接下来，对于这个立方体，我们需要给它一个材质。 */}
                <meshStandardMaterial />
            </mesh>
        </Canvas>
    );
};

export default Demo;
