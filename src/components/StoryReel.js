import React from 'react';
import Story from './Story';
import me from './me.jpg'
import bg1 from './bg1.jpeg'
import me2 from './me2.jpg'
import bg2 from './bg2.jpeg'
import me3 from './me3.jpg'
import bg3 from './bg3.jpeg'
import './StoryReel.css'

const StoryReel = () => {

    return (
        <div className="storyReel">
            <Story 
                image={bg1}
                profileSrc={me}
                title="Team Work"
            /> 

            <Story 
                image={bg2}
                profileSrc={me2}
                title="Web Developper"
            /> 

            <Story 
                 image={bg3}
                 profileSrc={me3}
                title="Mobile Dev"
            /> 
        </div>
    )
}

export default StoryReel 