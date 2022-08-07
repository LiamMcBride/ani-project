import { useEffect, useRef } from "react";
import { purple } from "../Colors";

const testDivStyle = {
    "marginLeft": "0px",
    "float": "left",
    // "backgroundColor": "red",
    "height": "auto",
    "width": "60px",
}


export function RatingCanvas(props){
    const canvasRef = useRef(null);
    

    useEffect(() => {
        console.log(props.value)
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = "copy"
        console.log(canvasRef)
        ctx.strokeStyle = purple;
        ctx.lineWidth = 20;
        ctx.beginPath();
        const angle = -0.5;
        ctx.arc(125, 75, 60, angle * Math.PI, (props.value + angle) * Math.PI);
        ctx.stroke();
        console.log(ctx)
        ctx.restore();
    }, [props.value]);

    return (<canvas ref={canvasRef} style={testDivStyle}></canvas>);
}