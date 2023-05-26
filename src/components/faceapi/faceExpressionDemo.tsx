import * as faceapi from 'face-api.js';
import { onMount } from 'solid-js';
import { LIBRARY_IMAGE_FACE, changeFaceDetector, docElId, getFaceDetectorOptions, isFaceDetectionModelLoaded } from './faceAPIHelper';
import './faceApi.css'
import SelectOptions from '../input/selectOptions';

export default function FaceAPIExpressionDemo() {
  let inputImg: HTMLImageElement
  let outputCanvas: HTMLCanvasElement

  async function updateResults() {
    if (!isFaceDetectionModelLoaded())
      console.log('Model not loaded')
    await faceapi.loadFaceLandmarkModel('library/model/')
    await faceapi.loadFaceExpressionModel('library/model/')
    const inputImgEl = docElId('inputImg')
    const options = getFaceDetectorOptions()

    const results = await faceapi.detectAllFaces(inputImgEl, options)
      .withFaceLandmarks()
      .withFaceExpressions()

    const canvas = docElId('overlay')
    faceapi.matchDimensions(canvas, inputImgEl)

    const resizedResults = faceapi.resizeResults(results, inputImgEl)
    const minConfidence = 0.05
    faceapi.draw.drawDetections(canvas, resizedResults)
    faceapi.draw.drawFaceExpressions(canvas, resizedResults, minConfidence)
  }

  async function run() {
    await changeFaceDetector()
    await updateResults()
  }

  onMount(() => {
    run()
  })

  return (
    <div class="center-content page-container">
      <div class="progress" id="loader">
        <div class="indeterminate"></div>
      </div>
      <div class="positionRelative margin" >
        <img
          ref={inputImg}
          id="inputImg"
          src={LIBRARY_IMAGE_FACE + "happy.jfif"}
          class=""
          loading='lazy'
        />
        <canvas
          ref={outputCanvas}
          id='overlay'
        />
      </div>
      <SelectOptions
        options={['1.jpg', '2.jfif', '3.jfif', '5.jfif', '6.jpg', 'happy.jfif']}
        onChange={e => {
          inputImg.src = LIBRARY_IMAGE_FACE + e.target.value
          updateResults()
        }}
      />

      {false &&
        <>
          <div class="row side-by-side">
            <div id="selectList"></div>
            <div class="row">
              <label for="imgUrlInput">Get image from URL:</label>
              <input id="imgUrlInput" type="text" class="bold" />
            </div>
            <button
              class="waves-effect waves-light btn"
              onclick="loadImageFromUrl()"
            >
              Ok
            </button>
            <input id="queryImgUploadInput" type="file" class="waves-effect btn bold" onchange="loadImageFromUpload()" accept=".jpg, .jpeg, .png" />
          </div>

          <div class="row side-by-side">
            <div id="face_detector_selection_control" class="row input-field" style="margin-right: 20px;">
              <select id="selectFaceDetector">
                <option value="ssd_mobilenetv1">SSD Mobilenet V1</option>
                <option value="tiny_face_detector">Tiny Face Detector</option>
              </select>
              <label>Select Face Detector</label>
            </div>

          </div>

          <span id="ssd_mobilenetv1_controls">
            <div class="row side-by-side">
              <div class="row">
                <label for="minConfidence">Min Confidence:</label>
                <input disabled value="0.5" id="minConfidence" type="text" class="bold" />
              </div>
              <button
                class="waves-effect waves-light btn"
                onclick="onDecreaseMinConfidence()"
              >
                <i class="material-icons left">-</i>
              </button>
              <button
                class="waves-effect waves-light btn"
                onclick="onIncreaseMinConfidence()"
              >
                <i class="material-icons left">+</i>
              </button>
            </div>
          </span>

          <span id="tiny_face_detector_controls">
            <div class="row side-by-side">
              <div class="row input-field" style="margin-right: 20px;">
                <select id="inputSize">
                  <option value="" disabled selected>Input Size:</option>
                  <option value="160">160 x 160</option>
                  <option value="224">224 x 224</option>
                  <option value="320">320 x 320</option>
                  <option value="416">416 x 416</option>
                  <option value="512">512 x 512</option>
                  <option value="608">608 x 608</option>
                </select>
                <label>Input Size</label>
              </div>
              <div class="row">
                <label for="scoreThreshold">Score Threshold:</label>
                <input disabled value="0.5" id="scoreThreshold" type="text" class="bold" />
              </div>
              <button
                class="waves-effect waves-light btn"
                onclick="onDecreaseScoreThreshold()"
              >
                <i class="material-icons left">-</i>
              </button>
              <button
                class="waves-effect waves-light btn"
                onclick="onIncreaseScoreThreshold()"
              >
                <i class="material-icons left">+</i>
              </button>
            </div>
          </span>
        </>}
    </div>
  )
}