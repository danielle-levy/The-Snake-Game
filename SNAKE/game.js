let lastRenderTime = 0
const SNAKE_SPEED = 2 // times per second

function main(currentTime) {
    window.requestAnimationFrame(main)

    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

    lastRenderTime = currentTime
    console.log(secondsSinceLastRender)

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {

}

function draw() {
    
}