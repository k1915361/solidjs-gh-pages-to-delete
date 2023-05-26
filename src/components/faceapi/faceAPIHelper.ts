import * as faceapi from 'face-api.js';

export const PATH_LIBRARY_MODEL = 'library/model'
export const SSD_MOBILENETV1 = PATH_LIBRARY_MODEL + 'ssd_mobilenetv1'
export const TINY_FACE_DETECTOR = PATH_LIBRARY_MODEL + 'tiny_face_detector'
export const LIBRARY_IMAGE_FACE = 'library/image/face/'
let selectedFaceDetector = SSD_MOBILENETV1
let minConfidence = 0.5

let inputSize = 512
let scoreThreshold = 0.5

export const docElId = (id: string): HTMLElement => document.getElementById(id)

export function getFaceDetectorOptions() {
    return selectedFaceDetector === SSD_MOBILENETV1
        ? new faceapi.SsdMobilenetv1Options({ minConfidence })
        : new faceapi.TinyFaceDetectorOptions({ inputSize, scoreThreshold })
}

export function getCurrentFaceDetectionNet() {
    if (selectedFaceDetector === SSD_MOBILENETV1) {
        return faceapi.nets.ssdMobilenetv1
    }
    if (selectedFaceDetector === TINY_FACE_DETECTOR) {
        return faceapi.nets.tinyFaceDetector
    }
}

export function isFaceDetectionModelLoaded() {
    return !!getCurrentFaceDetectionNet().params
}

export async function changeFaceDetector() {
    if (!isFaceDetectionModelLoaded()) {
      await getCurrentFaceDetectionNet().load('/library/model')
    }
  }