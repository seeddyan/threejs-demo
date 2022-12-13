/**
 * @file 资源过大过渡动画
 * @author zhongziyan
 */

import {Html, useProgress} from '@react-three/drei';

export default function Loader() {
    const {progress} = useProgress();
    return <Html center>加载 {progress} %</Html>;
}
