/**
 * @file 画线
 * @author zhongziyan@baidu.com
 */
import * as THREE from 'three';
import React, {useLayoutEffect, useRef} from 'react';
import {Canvas} from '@react-three/fiber';

function Line({start, end}) {
    const ref = useRef();

    useLayoutEffect(() => {
        // 设置顶点
        ref.current.geometry.setFromPoints([start, end].map(point => new THREE.Vector3(...point)));
    }, [start, end]);

    return (
        <line ref={ref}>
            {/* 几何体 */}
            <bufferGeometry />
            {/* 定义一个材质 */}
            <lineBasicMaterial color="hotpink" />
        </line>
    );
}

export default function App() {
    return (
        <Canvas>
            <Line start={[-1, 0, 0]} end={[0, 1, 0]} />
            <Line start={[0, 1, 0]} end={[1, 0, 0]} />
        </Canvas>
    );
}
