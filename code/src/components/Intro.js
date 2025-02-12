import React from 'react'

const Intro = ({onStepChange}) => {

return (
    <section id='intro' className='section'>
        <div className='intro-text'>
            <h1>Hey! We'de love to learn more about you and how you feel about planet Earth.</h1>
            <h4>Can you spare a minute?</h4>
        </div>
        <div>
            <button type='submit' onClick={onStepChange} className='btn'><a href="#one">Yep</a></button>
        </div>

    </section>
)
}

export default Intro