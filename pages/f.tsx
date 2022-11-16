import React, {useState} from "react";

export default function ShowImageHover() {
    const [style, setStyle] = useState({display: 'none'});
    const logos = new Array();
    logos[0] = "\img\nyu.png";
    logos[1] = "\img\columbia.png";

    function randLogo(){
      const randomNum = Math.floor(Math.random() * logos.length);
        return logos[randomNum];
      
    }

    return (
        
            <div className="App">
                
                <div style={{border: '1px solid gray', width: 300, height: 300, padding: 10, margin: 100}}

                    onMouseEnter={e => {
                        setStyle({display: 'block'});
                    }}
                    onMouseLeave={e => {
                        setStyle({display: 'none'})
                    }}
                >
                    
                    <img src="\img\nyu.png" alt="" style={style} />
                </div>
            </div>
    );
}