/**
 * @file 旋转动画
 * @author zhongziyan@baidu.com
 */
import React, {useRef, useState} from 'react';
import {Canvas, useFrame} from '@react-three/fiber';

function Box(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef();
    // 设置hovered 和 active state
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    // Subscribe this component to the render-loop, rotate the mesh every frame
    // You receive the state (same as useThree) and a clock delta. Your callback function will be invoked just before a frame is rendered.
    // useFrame((state, delta) => mesh.current.rotation.x += 0.01);
    // getElapsedTime获取自时钟启动后的秒数
    useFrame(({clock}) => mesh.current.rotation.x = clock.getElapsedTime());
    // Return view, these are regular three.js elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? 1.5 : 1}
            onClick={event => setActive(!active)}
            onPointerOver={event => setHover(true)}
            onPointerOut={event => setHover(false)}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    );
}

const Demo = () => {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[1, 0, 0]} />
        </Canvas>
    );
};

export default Demo;
