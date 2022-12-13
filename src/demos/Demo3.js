/**
 * @file 使用Spring动画
 * @author zhongziyan@baidu.com
 */
import React, {useState} from 'react';
import {Canvas, useFrame} from '@react-three/fiber';
import {useSpring, animated} from '@react-spring/three';

function MyRotatingBox() {
    const myMesh = React.useRef();
    const [active, setActive] = useState(false);

    const {scale} = useSpring({
        scale: active ? 1.5 : 1
    });

    useFrame(({clock}) => {
        const a = clock.getElapsedTime();
        myMesh.current.rotation.x = a;
    });

    return (
        // <mesh scale={active ? 1.5 : 1} onClick={() => setActive(!active)} ref={myMesh}>
        //     <boxGeometry />
        //     <meshPhongMaterial color="royalblue" />
        // </mesh>
        //  it doesn't just jump from one value to the other but instead it animates smoothly between the two values
        <animated.mesh scale={scale} onClick={() => setActive(!active)} ref={myMesh}>
            <boxBufferGeometry />
            <meshPhongMaterial color="royalblue" />
        </animated.mesh>
    );
}

export default function Demo() {
    return (
        <Canvas>
            <MyRotatingBox />
            <ambientLight intensity={0.1} />
            <directionalLight />
        </Canvas>
    );
}
