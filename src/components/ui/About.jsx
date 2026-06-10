import Image from "next/image";

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="about-main">
                    <div className="about-img">
                        <Image src="/story-7.jpg" alt="main-story" width={640} height={860} priority />
                    </div>
                    <div className="about-content">
                        <div className="section-title">
                            <div className="title-icon">About Me</div>
                            <div className="about-heading">Crafting Visual Stories in the Skies and Beyond</div>
                        </div>
                        <p>A lifestyle and aviation content creator passionate about creating aesthetic, relatable, and engaging short-form content. As a cabin crew professional, I bring a unique blend of travel, beauty, fashion, and everyday lifestyle experiences into my content. My audience connects with authentic storytelling, calm visuals, relatable emotions, and natural product integrations.</p>
                        <div className="story-slider">
                            <div className="story-img">
                                <Image src="/story-1.jpg" alt="story" width={640} height={860} priority />
                            </div>
                            <div className="story-img">
                                <Image src="/story-2.jpg" alt="story" width={640} height={860} priority />
                            </div>
                            <div className="story-img">
                                <Image src="/story-3.jpg" alt="story" width={640} height={860} priority />
                            </div>
                            <div className="story-img">
                                <Image src="/story-4.jpg" alt="story" width={640} height={860} priority />
                            </div>
                            <div className="story-img">
                                <Image src="/story-5.jpg" alt="story" width={640} height={860} priority />
                            </div>
                            <div className="story-img">
                                <Image src="/story-6.jpg" alt="story" width={640} height={860} priority />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;