import React from 'react'
import "./Home7.css"

const Home7 = () => {
  return (
    <section className='home7'>
        <div className='platform_title'>
        <h2>Software for modern platforms</h2>
        </div>
        <div className='platform_text'>
        <p>We develop applications for mobile, web, wearables, and TV.</p>
        </div>
        <div className='platforms_list'>
            <div className='group'>
                <div className='list_item'>
                    <div className='img'>
                        <img src='https://geeksinvention.com/assets/software-platforms/web-45bb148b27e8f57f2af5936654ab0d96.svg' alt='image'/>
                    </div>
                    <span class="title">Web</span>
                </div>
            </div>
            <div className='group'>
                <div className='list_item'>
                    <div className='img'>
                        <img src='https://geeksinvention.com/assets/software-platforms/ios-00fc94480a85413ba6276b2392cbaa0a.svg' alt='image'/>
                    </div>
                    <span class="title">ios</span>
                </div>
            </div>
            <div className='group'>
                <div className='list_item'>
                    <div className='img'>
                        <img src='https://geeksinvention.com/assets/software-platforms/android-163d4b8d487bb2c3ade6e7aad7dda588.svg' alt='image'/>
                    </div>
                    <span class="title">Android</span>
                </div>
            </div>
            <div className='group'>
                <div className='list_item'>
                    <div className='img'>
                        <img src='https://geeksinvention.com/assets/software-platforms/hybrid-b835b200edfc426c9f5a6ef76412aff6.svg' alt='image'/>
                    </div>
                    <span class="title">Hybrid</span>
                </div>
            </div>
            <div className='group'>
                <div className='list_item'>
                    <div className='img'>
                        <img src='https://geeksinvention.com/assets/software-platforms/wear-6f1886d1d03002e8fe1d04e499125d00.svg' alt='image'/>
                    </div>
                    <span class="title">Wearables</span>
                </div>
            </div>
            <div className='group'>
                <div className='list_item'>
                    <div className='img'>
                        <img src='https://geeksinvention.com/assets/software-platforms/tv-f6c551eb20333d6604e9fff685c392d1.svg' alt='image'/>
                    </div>
                    <span class="title">TV</span>
                </div>
            </div>
        </div>
        <button className="capsule__button">
  See Our Tech Stack
  <span className="arrow-icon">➡</span>
</button>
    </section>
  )
}

export default Home7
