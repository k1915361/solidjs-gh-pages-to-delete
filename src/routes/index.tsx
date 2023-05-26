import { Title } from "solid-start";
import Counter from "../components/Counter";
import Footer from "~/components/layout/footer/footer";
import ScrollButton from "~/components/button/buttonScroll";
import FaceAPIExpressionDemo from "~/components/faceapi/faceExpressionDemo";
import ImageCompress from "~/components/image/compress/image-compress";
import GettingStartedChart from "~/components/chart/getting-started-chartjs";
import MultiLineChart from "~/components/chart/multiline-chartjs";
import ChartJSStreaming from "~/components/chart/streaming/chartjs-streaming";
import './index.css'
import FaceExpressionRecognitionWebcam from "~/components/faceapi/faceWebcamExpressionRecognition";
import { onMount } from "solid-js";

export default function Home() {
  let main: HTMLElement;

  onMount(() => {
    main = document.getElementById('main') as HTMLElement;
  })

  return (
    <main id='main' >
      <Title>Cyber Data Charts Images</Title>
      <div class='flex-container'>
        <ChartJSStreaming/>
        <MultiLineChart/>
        <GettingStartedChart/>
      </div>
      <FaceAPIExpressionDemo />
      <FaceExpressionRecognitionWebcam />
      <ImageCompress/>
      <ScrollButton text='Scroll to' ref={main} />
      <Counter/>
      <Footer />
    </main>
  );
}
