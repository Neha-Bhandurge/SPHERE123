const textureLoader = new THREE.TextureLoader()

const normalTextureEarth = textureLoader.load('./earth.jpeg')

const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene, 64)
const Neptunegeometry = new THREE.SphereBufferGeometry(.4, 64, 64)
const Uranusgeometry = new Earthmaterial)

const Sunmaterial = new THREE.MeshStandardMaterial()
const Sunmaterial = new THREE.MeshStandardMaterial()


const THREE.MeshStandardMaterial()
Neptunematerial.roughness = 0.4
Neptunematerial.opacity = 0.9
Neptunematerial.map = normaltextureNeptune;
const sphereNeptune = new THREE.Mesh(Neptunegeometry,Neptunematerial)


const SaturnMaterial = new THREE.MeshStandardMaterial()
SaturnMaterial.opacity = 0.9
SaturnMaterial.roughness = 0.4
SaturnMaterial.map = normaltextureSaturn;
const sphereSaturn = new THREE.Mesh(Saturngeometry,SaturnMaterial)

const SaturnringMaterial = new THREE.MeshBasicMaterial()
SaturnringMaterial.map = normaltextureSaturnring;
const sphereSaturnring = new THREE.Mesh(Saturnringgeometry,SaturnringMaterial)


// Mesh
const sphere = new THREE.Mesh(Sungeometry,Sunmaterial)
scene.add(sphere)
scene.add(sphereEarth)
scene.add(sphereSaturn)
sphereSaturn.add(sphereSaturnring)
scene.add(sphereMercury)
scene.add(sphereVenus)
scene.add(sphereMars)
scene.add(sphereJupiter)
scene.add(sphereUranus)
scene.add(sphereNeptune)


const pointLight = new THREE.PointLight(0xffffff, 2)
pointLight.position.x = 0
pointLight.position.y = 0
pointLight.position.z = 0
scene.add(pointLight)

const ambientLight = new THREE.AmbientLight(0xffffff, 1)
scene.add(ambientLight)



const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.(sizes.width, sizes.height)
tPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */

document.addEventListener('mousemove', onDocumentMouseMove)

let mouseX = 0
let mouseY = 0

let targetX = 0
let targetY = 0

const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;

function onDocumentMouseMove(event) {

    mouseX = (event.clientX - windowHalfX)
    mouseY = (event.clientY - windowHalfY)
}

const updateSphere = (event) => {
    sphereMercury.position.y = window.scrollY * .001
    sphereVenus.position.y = window.scrollY * .001
    sphereEarth.position.y = window.scrollY * .001
    sphereMars.position.y = window.scrollY * .001
    sphereJupiter.position.y = window.scrollY * .001
    sphereSaturn.position.y = window.scrollY * .001
    sphereUranus.position.y = window.scrollY * .001
    sphereNeptune.position.y = window.scrollY * .001
}

window.addEventListener('scroll', updateSphere);


const clock = new THREE.Clock()

const tick = () =>
{
    targetX = mouseX * .001
    targetY = mouseY * .001


    const elapsedTime = clock.getElapsedTime()

    // Update objects
    sphere.rotation.z = 0.5 * elapsedTime

    sphere.rotation.y += .5 * (targetX - sphere.rotation.y)
    sphere.rotation.x += .05 * (targetY - sphere.rotation.x)
    sphere.position.z += -.05 * (targetY - sphere.rotation.x)
            
    
