import React, { useState } from 'react'
import Upload from '../upload/Upload'
import Publications from '../publications/Publications'
import ShowResult from '../showResult/ShowResult'
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './container.css'

const Container = ({showChildB, setShowChildB}) => {

    const [data, setData]=useState(null);
    // const [showChildB, setShowChildB] = useState(false);

    const onDataFetch=(d)=>{
        setData(d);
        setShowChildB(true)
    }

    const handleBack = () => {
      setShowChildB(false); // Hide ShowResult and show Upload
      setData(null); // Optionally reset data if needed
  };
  return (
    <div className='containerWrapper'>
      {/* {!showChildB && <Upload onDataFetch={onDataFetch}></Upload>}
      {showChildB && <ShowResult data={data}></ShowResult>} */}
      <SwitchTransition mode="out-in">
                <CSSTransition
                    key={showChildB ? "ShowResult" : "Upload"}
                    addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                    classNames="slide"
                >
                    
                        {!showChildB ? <Upload onDataFetch={onDataFetch} /> : <ShowResult data={data} onBack={handleBack} />}
                  
                </CSSTransition>
            </SwitchTransition>
    </div>
  )
}

export default Container
