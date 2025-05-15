
import gsap from 'gsap'

export function shuffleIcons(icons) {
    const slotCount = icons.length
    let currentOrders = icons.map((_, i) => i)
    const swapCount = Math.floor(gsap.utils.random(2, 6))
    if (slotCount < swapCount) return

    const indices = gsap.utils.shuffle([...Array(slotCount).keys()]).slice(0, swapCount)
    const iconsToAnimate = indices.map(i => icons[i]).filter(Boolean)
    if (iconsToAnimate.length !== swapCount) return

    const ordersToSwap = indices.map(i => currentOrders[i])
    const newOrders = gsap.utils.shuffle(ordersToSwap.slice())

    const tl = gsap.timeline()
    tl.to(iconsToAnimate, {
        scale: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: 'power1.in'
    })
        .add(() => {
            indices.forEach((iconIndex, j) => {
                const order = newOrders[j]
                icons[iconIndex].style.order = order
                currentOrders[iconIndex] = order
            })
        })
        .to(iconsToAnimate, {
            scale: 1,
            duration: 0.3,
            stagger: 0.05,
            ease: 'back.out(1.7)'
        })
}