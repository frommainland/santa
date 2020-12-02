import logo from './logo.svg';
import './App.css';
import { motion } from "framer-motion"
import flower from './flower.png'

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let snows = []

for (let index = 0; index < 40; index++) {
    snows.push(Snow(index))
}

console.log(snows);
function Snow(i) {
    let size = getRandomInt(10)
    let xPos = getRandomInt(370)
    let time = getRandomInt(6)
    let z = getRandomInt(2)
    let delay = getRandomInt(5)
    return (
        <motion.div style={{
            width: size + 2,
            height: size + 2,
            borderRadius: size + 2,
            backgroundColor: 'white',
            zIndex: z,
            opacity: 1
        }}
            initial={{
                position: 'absolute',
                y: -20,
                x: xPos,
            }}
            animate={{
                y: 370,
                opacity: 0
            }}
            transition={{
                duration: time + 15,
                repeat: Infinity,
                delay: delay
            }}
            key={i}
        />
    )
}

function App() {
    return (
        <div style={{
            background: '#0E182A',
            height: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            flexDirection: 'column',
            textAlign: 'center',
        }}>
            {/* circle */}
            <div style={{
                width: 370,
                height: 370,
                background: '#398F68',
                borderRadius: 370 / 2,
                overflow: 'hidden',
                position: 'relative'
            }}>
                {snows}
                {/* flower */}
                <div style={{
                    width: '109%',
                    height: '109%',
                    background: `url(${flower})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                    top: 40
                }}>
                </div>
            </div>

            <div style={{
                fontFamily: 'black',
                fontSize: 85,
                letterSpacing: -0.65,
                textShadow: '6px 6px 0 #E83B33'
            }}>Marcus</div>
            <div style={{
                fontFamily: 'light',
                fontSize: 50,
                letterSpacing: -.38,
                textShadow: '2px 3px 0 #56AB84'

            }}>Happy Holiday! </div>
        </div>
    );
}

export default App;
