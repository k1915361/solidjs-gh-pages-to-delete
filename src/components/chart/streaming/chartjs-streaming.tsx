import {Chart} from 'chart.js';
import 'chartjs-adapter-luxon';
import ChartStreaming from 'chartjs-plugin-streaming';
import { onMount } from 'solid-js';

Chart.register(ChartStreaming);

Chart.defaults.set('plugins.streaming', {
  duration: 20000
});

const options = {
  type: 'line',             // 'line', 'bar', 'bubble' and 'scatter' types are supported
  data: {
    datasets: [{
      data: [{
        x: Date.now(),
        y: Math.random()
      }]              
    }]
  },
  options: {
    plugins: {
      streaming: {
        duration: 20000
      }
    },
    scales: {
      x: {
        type: 'realtime',
        realtime: {
          duration: 20000,
          refresh: 1000,    
          delay: 1000,      
          pause: false,     
          ttl: undefined,   
          frameRate: 1,
          onRefresh: chart => {
            chart.data.datasets.forEach((dataset) => {
              dataset.data.push({
                x: Date.now(),
                y: Math.random()
              })
            });
          }
        }
      }
    }
  }
}

export default function ChartJSStreaming(props) {
  let canvas: HTMLCanvasElement;

  onMount(() => {
    const ctx = canvas.getContext('2d');    
    const chart = new Chart(ctx, options);
  })

  return (
    <canvas ref={canvas} id='chart' {...props}></canvas>
  )
}