import domtoimage from 'dom-to-image';
import './index.css';
const messageNode = document.querySelector('#message')
const camera = document.querySelector('#camera');



const captureDom = () => {
    domtoimage.toSvg(messageNode)
    .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);

        
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
}


camera.addEventListener('click', captureDom)
