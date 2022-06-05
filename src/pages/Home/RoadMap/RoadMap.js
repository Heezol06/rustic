import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const RoadMap = () => {
    return (
        <div className='bg-black'>
            {/* heading  */}
            <div style={{ color: "white" }} >
                <h3>Road Map</h3>
                <h1>The Journey of
                    Monteno NFT</h1>
            </div>
            <div>

                {/* timeline  */}
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2011 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h5 className="vertical-timeline-element-title ">February 01, 2022</h5>
                        <h1 className="vertical-timeline-element-subtitle">Idea Generation</h1>
                        <p>
                            Oficia dese runt mollit anim id est labo met conse ctetur adipi smod tempor inc ididunt ut labore et dolore quis
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2010 - 2011"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h5 className="vertical-timeline-element-title ">March 30, 2022</h5>
                        <h1 className="vertical-timeline-element-subtitle">Design & Development</h1>
                        <p>
                            Oficia dese runt mollit anim id est labo met conse ctetur adipi smod tempor inc ididunt ut labore et dolore quis
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2008 - 2010"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h5 className="vertical-timeline-element-title ">April 20, 2022</h5>
                        <h1 className="vertical-timeline-element-subtitle">Initial Release</h1>
                        <p>
                            Oficia dese runt mollit anim id est labo met conse ctetur adipi smod tempor inc ididunt ut labore et dolore quis
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2006 - 2008"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h5 className="vertical-timeline-element-title ">May 30, 2022</h5>
                        <h1 className="vertical-timeline-element-subtitle">Result & Final Report</h1>
                        <p>
                            Oficia dese runt mollit anim id est labo met conse ctetur adipi smod tempor inc ididunt ut labore et dolore quis
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    />
                </VerticalTimeline>
            </div>
            {/* subscribe  */}
            <div className="container p-7 rounded-md grid grid-cols-2 gap-4" style={{ color: "black", background: "white" }}>
                {/* text  */}
                <div className=''>
                    <h1 className=''>Get NewsLatter</h1>
                    <p>Get udpated with news, tips & tricks</p>
                </div>
                {/* inputs  */}
                <div>
                    <input type="Your Email" />
                </div>
            </div>
        </div>
    );
};

export default RoadMap;