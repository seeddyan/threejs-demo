/**
 * @file 创建文字
 * @author zhongziyan@baidu.com
 */
import React, {useEffect} from 'react';
import {Canvas, extend, useThree} from '@react-three/fiber';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader';
import {TextGeometry} from 'three/examples/jsm/geometries/TextGeometry';
import fontJSON from 'three/examples/fonts/helvetiker_regular.typeface.json';
import roboto from './Roboto_Bold';
import {Text3D} from '@react-three/drei';

const CameraController = () => {
    const {camera, gl} = useThree();
    useEffect(() => {
        const controls = new OrbitControls(camera, gl.domElement);
        // 将相机向内移动多少, 其默认值为0
        controls.minDistance = 3;
        // 将相机向外移动多少, 其默认值为Infinity
        controls.maxDistance = 20;
        return () => {
            controls.dispose();
        };
    }, [camera, gl]);
    return null;
};

// Extend so the reconciler will learn about it
extend({TextGeometry});

export default function Demo() {
    const font = new FontLoader().parse(fontJSON);

    return (
        <Canvas>
            <CameraController/>
            <ambientLight />
            <mesh position={[-1, 2, 0]}>
                <textGeometry args={['Happy Birthday!', {font, size: 1, height: 1}]} />
                <meshStandardMaterial attach="material" color="gold" />
            </mesh>
            {/* <Text3D font={roboto}>{`hello\nworld`}</Text3D> */}
        </Canvas>
    );
}
