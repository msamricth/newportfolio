export function AnimationFrame(elFunct, duration = 300) {
    let startTime;
    const callFunct = (currentTime) => {
        if (!startTime) {
            startTime = currentTime;
        }
        const elapsedTime = currentTime - startTime;
        if (elapsedTime >= duration) {
            if(elFunct) elFunct()
        } else {
            requestAnimationFrame(callFunct);
        }
    }
    requestAnimationFrame(callFunct);
}