import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

// Loaders

const textureLoader = new THREE.TextureLoader()
const cubeTextureLoader = new THREE.CubeTextureLoader()
const gltfLoader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
gltfLoader.setDRACOLoader(dracoLoader);

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// 3D TEXT

// Texture to the text

const matcapTexture = textureLoader.load('/textures/8.png')
scene.add(matcapTexture)

 // Font

const fontLoader = new FontLoader();

// Part 1

fontLoader.load(
    '/fonts/helvetiker_regular.typeface.json',
    (font) =>
            {
            const textGeometry = new TextGeometry( 'AlphaFold provides high quality predictions for \n 3D structures of proteins based solely on amino \n acid sequences. The algorithm, based on deep \n learning methods, has excellent agreement with \n experimental data. The software is public and can \nbe used by any user to predict structures.', {
                font: font,
                size: 2.5,
                height: 0.6,
                curveSegments: 4,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.0,
                bevelOffset: 0,
                bevelSegments: 3
            })

// Part 2       

        fontLoader.load(
            '/fonts/helvetiker_regular.typeface.json',
            (font1) =>
                    {
                    const textGeometry1 = new TextGeometry( 'Proteins are large molecules essential to all \n organisms. The sequence of amino acids that \n form a protein determines its three-dimensional \n structure. Each protein has a unique shape that \n determines its function. Being able to predict the \n spatial structure of a protein from its amino acid \n sequence has been a long-standing challenge. \n This task is even more challenging for proteins with \n a non-trivial topologies.', {
                        font: font1,
                        size: 2.5,
                        height: 0.6,
                        curveSegments: 4,
                        bevelEnabled: true,
                        bevelThickness: 0.03,
                        bevelSize: 0.02,
                        bevelOffset: 0,
                        bevelSegments: 3
                    })

// Part 3

fontLoader.load(
    '/fonts/helvetiker_regular.typeface.json',
    (font1) =>
            {
            const textGeometry2 = new TextGeometry( 'Figure 1. Example of protein with a knot (left) and with a slipknot (right).', {
                font: font1,
                size: 2.5,
                height: 0.6,
                curveSegments: 4,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 3
            })

// Part 4

fontLoader.load(
    '/fonts/helvetiker_regular.typeface.json',
    (font1) =>
            {
            const textGeometry3 = new TextGeometry( 'Around 2% of proteins with known experimentally-solved \n structures contain knots, slipknots, or links. Examples of \n these structures are shown in Fig. 1. Our analysis of \n predicted structures, predicted based from the human \n proteome, has recently shown that the AlphaFold (AF2) \n model predicts the structure of knots in proteins with low \n homological models very well. Moreover, in these results \n we have also found new types of protein knots (Fig. 2) \n and families which posses proteins with knotted and \n unknotted protein backbone (Fig 3.). Thus, AF2 can \n identify patterns of amino acids and network of \n contacts responsible for the knotting.', {
                font: font1,
                size: 2.5,
                height: 0.6,
                curveSegments: 4,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 3
            })

// Part 5

fontLoader.load(
    '/fonts/helvetiker_regular.typeface.json',
    (font1) =>
            {
            const textGeometry4 = new TextGeometry( 'Figure 2. Protein with a 63 knot predicted by AlphaFold [3].', {
                font: font1,
                size: 2.5,
                height: 0.6,
                curveSegments: 4,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 3
            })

        const material = new THREE.MeshMatcapMaterial( { matcap: matcapTexture } )
        const text = new THREE.Mesh(textGeometry, material)
        const text1 = new THREE.Mesh(textGeometry1, material)
        const text2 = new THREE.Mesh(textGeometry2, material)
        const text3 = new THREE.Mesh(textGeometry3, material)
        const text4 = new THREE.Mesh(textGeometry4, material)

        // Text 1
        text.position.x = 35
        text.position.y = 50
        text.position.z = 15
        text.rotation.y = -9.5

        // Text 2
        text1.position.x = 35
        text1.position.y = 20
        text1.position.z = 15
        text1.rotation.y = -9.5      

        // Text 3
        text2.position.x = 35
        text2.position.y = -55
        text2.position.z = 15
        text2.rotation.y = -9.5

        // Text 4
        text3.position.x = 35
        text3.position.y = -65
        text3.position.z = 15
        text3.rotation.y = -9.5  

        // Text 5
        text4.position.x = 35
        text4.position.y = -180
        text4.position.z = 15
        text4.rotation.y = -9.5  

        // Text add    
        scene.add(text, text1, text2, text3, text4)
        }) // 1
    }) // 2
    }) // 3
}) // 4
}) // 5

// Environment map // better lighting and other..

const environmentMap = cubeTextureLoader.load([
    '/textures/environmentMap/px.jpg',
    '/textures/environmentMap/nx.jpg',
    '/textures/environmentMap/py.jpg',
    '/textures/environmentMap/ny.jpg',
    '/textures/environmentMap/pz.jpg',
    '/textures/environmentMap/nz.jpg'
])

environmentMap.encoding = THREE.sRGBEncoding
scene.environment = environmentMap

// Protein models

// knot

gltfLoader.load(
    '/models/Learnmore/glTF/knotD.gltf',
    (gltf) =>
    {
        // Model
        gltf.scene.scale.set(0.7, 0.7, 0.7)
        gltf.scene.position.set(15, -40, 20)
        gltf.scene.rotation.y = 4.5
        scene.add(gltf.scene)
});

// slipknot

gltfLoader.load(
    '/models/Learnmore/glTF/slipknotD.gltf',
    (gltf) =>
    {
        // Model
        gltf.scene.scale.set(0.7, 0.7, 0.7)
        gltf.scene.position.set(7 , -53, 10)
        gltf.scene.rotation.y = 7
        scene.add(gltf.scene)
});

// protein 63

gltfLoader.load(
    '/models/Learnmore/glTF/protein63D.gltf',
    (gltf) =>
    {
        // Model
        gltf.scene.scale.set(0.6, 0.6, 0.6)
        gltf.scene.position.set(-5, -170, 15)
        gltf.scene.rotation.y = 16
        scene.add(gltf.scene)
});

// Podkladka 1

gltfLoader.load(
    '/models/Learnmore/glTF/podkladka.glb',
    (gltf) =>
    {
        // Model
        gltf.scene.scale.set(2, 1.5, 2)
        gltf.scene.position.set(17, -43, 10)
        gltf.scene.rotation.y = 9.3
        scene.add(gltf.scene)
});

// Podkladka 2

gltfLoader.load(
    '/models/Learnmore/glTF/podkladka.glb',
    (gltf) =>
    {
        // Model
        gltf.scene.scale.set(2, 1.5, 2)
        gltf.scene.position.set(-20 , -43, 8)
        gltf.scene.rotation.y = 9.3
        scene.add(gltf.scene)
});

// Podkladka 3

gltfLoader.load(
    '/models/Learnmore/glTF/podkladka.glb',
    (gltf) =>
    {
        // Model
        gltf.scene.scale.set(2, 1.5, 2)
        gltf.scene.position.set(-7 , -172, 8)
        gltf.scene.rotation.y = 9.3
        scene.add(gltf.scene)
});

// Lights

const directionalLight = new THREE.DirectionalLight('#ffffff', 4)
directionalLight.castShadow = true
directionalLight.shadow.camera.far = 15
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.normalBias = 0.05
directionalLight.position.set(3.5, 2, - 1.25)
scene.add(directionalLight)

// Sizes

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

// Camera

// Base camera

const camera = new THREE.PerspectiveCamera(40, sizes.width / sizes.height, 0.1, 1000)
camera.position.set(5, 30, -150)

const minHeight = -200;
const maxWidth = 200;
const maxZ = 200;

function updateCamera() {
    // Get the current camera position
    const { x, y, z } = camera.position;
  
    // Enforce the minimum height
    camera.position.y = Math.max(y, minHeight);
    camera.position.x = Math.min(x, maxWidth);
    camera.position.z = Math.min(z, maxZ);
} 

scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// Renderer

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})
renderer.physicallyCorrectLights = true
renderer.outputEncoding = THREE.sRGBEncoding
renderer.toneMapping = THREE.CineonToneMapping
renderer.toneMappingExposure = 1.75
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setClearColor('#759CCC')
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Animate

const clock = new THREE.Clock()
let previousTime = 0

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    previousTime = elapsedTime

    // Update controls
    controls.update()

    // Render

    renderer.render(scene, camera)

    // Update camera (dla granicy poruszania)

    updateCamera();

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()