import Chart from 'chart.js/auto'
import { onMount, onCleanup } from 'solid-js';

const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
];

const config = {
    type: 'bar',
    data: {
        labels: data.map(row => row.year),
        datasets: [
            {
                label: 'Acquisitions by year',
                data: data.map(row => row.count)
            }
        ]
    }
}

export default function GettingStartedChart(props) {
    let canvas;

    onMount(() => {
        const canvas_approach1_ref = canvas;
        const canvas_approach2_dom = document.getElementById('acquisitions');
        const canvas_approach3_id = 'acquisitions';
        new Chart(canvas_approach3_id, config);
    });

    return <canvas ref={canvas} id="acquisitions" {...props}></canvas>   
}