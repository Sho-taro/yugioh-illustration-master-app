import React, {useRef, useEffect} from 'react';
import { motion, animate } from 'framer-motion';
// import './css/ProgressBar.css';

function CircularProgressBar({ value }) {
  const progressTextRef = useRef(null);
  // propsで渡されたvalueの値が変わる度に、useEffectが走る
  // %の数値を、framer-motionを使ってアニメーションで変化させる（useStateで状態管理するより再レンダリング数が格段に減るのでとても良い）
  useEffect(() => {
    if (!progressTextRef.current) return;
    const prevProgressText = progressTextRef.current.textContent;
    // framer-motionのanimate関数
    // animate関数はprevProgressTextから(100-value)まで値が動的に変化しながら、第３引数に渡されたオブジェクトの処理を実行する
    animate(parseInt(prevProgressText), 100 - value, {
      duration: 0.5,  // 単位は秒（ミリ秒じゃないので注意）
      onUpdate: (cv) => {   // cv(current value)はprevProgressTextから(100-value)まで値が変化する)
        progressTextRef.current.textContent = cv.toFixed(0);   // toFixed(0)で小数点は切り捨てる
      }
    })
  }, [value]);
  return (
		<div>
			<motion.div
				className="circular-progressbar"
				// ↓ motion.divコンポーネントはanimateプロパティとtransitionを持つ
				// ↓ それらのプロパティには、スタイルをオブジェクト形式で渡す
				// ↓ 今回の場合、propsからvalueが渡されたら、widthが0.5秒かけて変化するアニメーションが走る
				animate={{
					// width: '75%',
					// width: `${100 - value}%`,
					// background: `conic-gradient(rgb(237, 237, 237) 10deg, rgb(83, 71, 208) 0deg)`,
					background: `conic-gradient(rgb(237, 237, 237) ${(360 * value) / 100}deg, rgb(29, 32, 34) 0deg)`,
				}}
				transition={{
					duration: '0.5',
				}}>
				<p className="circular-progressbar-text text-xs sm:text-base">
					<span ref={progressTextRef} className="text-xs sm:text-base">
						100
					</span>
					%
				</p>
			</motion.div>
		</div>
  );
}

export default CircularProgressBar