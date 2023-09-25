import React from 'react';
import {useState} from 'react';
import './style.css';



export default function App() {
  const title = "팀 이름";
  const member = ["202204088 윤호성", "202104200 박성원", "202204094 이민영"];
  const mainImg = 'allph.png';
  const imgs = ['hoseong.jpg', 'seongone.jpg','minyoung.jpg'];
  const zoomin = "확대";
  const zoomout = "축소";
  const [zoomExplan, setzoomExplan]= useState("더 크게 보고 싶다면 사진에 마우스를, 상세한 크기 조절은 확대/축소 버튼을 이용하세요.");
  const peopleExplan = ['팀장 상세 설명', '조원 상세 설명', '조원 상세 설명'];



  const [currentScale, setCurrentScale] = useState(1.0);
  const maxScale = 1.1;
  const minScale = 0.9;
  const scaleIncrement = 0.1;

  const zoomIn = () => {
    if (currentScale < maxScale) {
      setCurrentScale(currentScale + scaleIncrement);
    }
  };

  const zoomOut = () => {
    if (currentScale > minScale) {
      setCurrentScale(currentScale - scaleIncrement);
    }
  };

  

  const peopleExplanClick = (index) => {
    if (index === 0) {
      setzoomExplan('항목 1에 대한 설명');
    } else if (index === 1) {
      setzoomExplan('항목 2에 대한 설명');
    } else if (index === 2) {
      setzoomExplan('항목 3에 대한 설명');
    }
  };


  
  return (
    <div class="center">
      <h1>{title}</h1>
      <table>
        <tr>
          <td>
            <div class="image-container">
              <img
                src={mainImg}
                width={500}
                height={400}
                style={{ transform: `scale(${currentScale})` }}
              />
              <div class="zoom-buttons">
                <button onClick={zoomIn}>
                  {zoomin}
                </button>
                <button onClick={zoomOut}>
                  {zoomout}
                </button>
              </div>
            </div>        
          </td>
          <td>
          <table id="grid">
        <tr>
          <td></td>
          <td>
            <tr><td><a><img src={imgs[0]} width="80"/></a><span>{member[0]}</span></td></tr>
            <tr><td><a><img src={imgs[1]} width="80"/></a><span>{member[1]}</span></td></tr>
            <tr><td><a><img src={imgs[2]} width="80"/></a><span>{member[2]}</span></td></tr>
          </td>
        </tr>
      </table>
          </td>
        </tr>
      </table>
      <p>{zoomExplan}</p>
      <ul>
          {peopleExplan.map((explan, index) => (
            <li class="list-item"
              key={index}
              onClick={() => peopleExplanClick(index)}
            >
              {explan}
            </li>
          ))}
        </ul>
      
      팀장: 202204088 윤호성 <br/>
      조원: 202104200 박성원, 202204094 이민영
    </div>
  );
}
