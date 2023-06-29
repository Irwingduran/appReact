import React, {useState} from "react";
import "./galeria.css";


import Img1 from "./pics/20201117_203255000_iOS.jpg";
import Img3 from "./pics/20201117_220110000_iOS.jpg";
import Img4 from "./pics/20201117_220142000_iOS.jpg";
import Img8 from "./pics/20201119_190313538_iOS.jpg";
import Img9 from "./pics/20210108_054108310_iOS.jpg";
import Img10 from "./pics/20210108_054112590_iOS.jpg";
import Img11 from "./pics/20210108_054504560_iOS.jpg";
import Img12 from "./pics/IMG_9599.jpeg";
import Img13 from "./pics/IMG_9618.jpeg";
import Img14 from "./pics/20210506_160421033_iOS.jpg";
import Img15 from "./pics/DSC07381.jpg";
import Img16 from "./pics/20210702_235437721_iOS.jpg";
import Img17 from "./pics/IMG_9550.JPG";
import Img18 from "./pics/20210905_203401703_iOS.jpg";
import Img19 from "./pics/IMG_6272.JPG";
import Img20 from "./pics/IMG_2998.jpeg";
import Img21 from "./pics/20220306_001349000_iOS.jpg";
import Img22 from "./pics/DSC04004.jpeg";
import Img23 from "./pics/IMG_9611.jpeg";
import Img24 from "./pics/DSC04675.jpeg";
import Img25 from "./pics/DSC05128.jpeg";
import Img26 from "./pics/DSC05161.jpeg";
import Img27 from "./pics/DSC07384.jpg";
import Img28 from "./pics/DSC07389.jpg";
import Img29 from "./pics/DSC07400.jpg";
import Img30 from "./pics/IMG_0965.JPG";
import Img31 from "./pics/IMG_7871.JPG";
import Img32 from "./pics/IMG_6369.JPG";
import Img33 from "./pics/IMG_6528.jpeg";
import Img34 from "./pics/20211225_065835675_iOS.jpg";
import Img35 from "./pics/20211031_190011193_iOS.jpg";
import Img36 from "./pics/IMG_6706.jpeg";
import Img37 from "./pics/IMG_6548.jpeg";
import Img38 from "./pics/IMG_6710.jpeg";
import Img39 from "./pics/IMG_8594.jpeg";
import Img40 from "./pics/IMG_8765.JPG";
import Img41 from "./pics/IMG_9564.JPG";
import Img42 from "./pics/20210425_201637821_iOS.jpg";
import Img43 from "./pics/20220919_033314272_iOS.jpg";
import Img44 from "./pics/IMG_6704.jpeg";
import Img45 from "./pics/IMG_6549.jpeg";
import Img46 from "./pics/IMG_9617.jpeg";
import Img47 from "./pics/IMG_9607.jpeg";
import Img48 from "./pics/20210314_020228460_iOS.jpg";
import Img49 from "./pics/DSC04275.jpeg";
import Img50 from "./pics/20220927_040204363_iOS.jpg";
import Img51 from "./pics/IMG_9618.jpeg";


const Galeria = () => {
  let data =[
    {
      id: 1,
      imgSrc: Img1,
    },         
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
  
    {
      id: 8,
      imgSrc: Img8,
    },
    {
      id: 9,
      imgSrc: Img9,
    },
    {
      id: 10,
      imgSrc: Img10,
    },
    {
      id: 11,
      imgSrc: Img11,
    },
    {
      id: 12,
      imgSrc: Img12,
    },
  
    {
      id: 13,
      imgSrc: Img13,
    },
    {
      id: 14,
      imgSrc: Img14,
    },
    {
      id: 15,
      imgSrc: Img15,
    },
    {
      id: 16,
      imgSrc: Img16,
    },
    {
      id: 17,
      imgSrc: Img17,
    },
  
    {
      id: 18,
      imgSrc: Img18,
    },
    {
      id: 19,
      imgSrc: Img19,
    },
    {
      id: 20,
      imgSrc: Img20,
    },
    {
      id: 21,
      imgSrc: Img21,
    },
    {
      id: 22,
      imgSrc: Img22,
    },
  
    {
      id: 23,
      imgSrc: Img23,
    },
    {
      id: 24,
      imgSrc: Img24,
    },
    {
      id: 25,
      imgSrc: Img25,
    },
    {
      id: 26,
      imgSrc: Img26,
    },
    {
      id: 27,
      imgSrc: Img27,
    },
  
    {
      id: 28,
      imgSrc: Img28,
    },
    {
      id: 29,
      imgSrc: Img29,
    },
    {
      id: 30,
      imgSrc: Img30,
    },
    {
      id: 31,
      imgSrc: Img31,
    },
    {
      id: 32,
      imgSrc: Img32,
    },
  
    {
      id: 33,
      imgSrc: Img33,
    },
    {
      id: 34,
      imgSrc: Img34,
    },
    {
      id: 35,
      imgSrc: Img35,
    },
    {
      id: 36,
      imgSrc: Img36,
    },
    {
      id: 37,
      imgSrc: Img37,
    },
  
    {
      id: 38,
      imgSrc: Img38,
    },
    {
      id: 39,
      imgSrc: Img39,
    },
    {
      id: 40,
      imgSrc: Img40,
    },
    {
      id: 41,
      imgSrc: Img41,
    },
    {
      id: 42,
      imgSrc: Img42,
    },
  
    {
      id: 43,
      imgSrc: Img43,
    },
    {
      id: 44,
      imgSrc: Img44,
    },
    {
      id: 45,
      imgSrc: Img45,
    },
    {
      id: 46,
      imgSrc: Img46,
    },
    {
      id: 47,
      imgSrc: Img47,
    },
    {
      id: 48,
      imgSrc: Img48,
    },
  
    {
      id: 49,
      imgSrc: Img49,
    },
    {
      id: 50,
      imgSrc: Img50,
    },
    {
      id: 51,
      imgSrc: Img51,
    }



  ]

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');

  const getImg = (imgSrc) =>{
    setTempImgSrc(imgSrc);
    setModel(true);
  }

  return (
    <>
    <div className={model? "model open" : "model"}>
      <img src={tempimgSrc} />
     
    </div>
    <div className="gallery">
      {data.map((item, index)=>{
        return(
          <div className="pics" key={index} onClick={() => getImg(item.imgSrc)} >
           <img src={item.imgSrc} style={{width: '100'}} />
          </div>
        )
      })}
      </div>
    </>
  )
}

export default Galeria;
