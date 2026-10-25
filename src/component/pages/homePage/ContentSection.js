import React from 'react'

const ContentSection = () => {
    return (
        <div class="binge-content">
            <div class="row justify-content-between">
                <div class="col-lg-5">
                    <div>
                        <h1 className='text-white mt-5'>Rising Stars</h1>
                        <p class="text-white mb-4">In the glittering yet ruthless world of Hollywood, the journey to stardom is not just about talent and ambition, but also about navigating the complex web of relationships, sacrifices, and personal integrity</p>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div>
                        <img src="https://www.usmagazine.com/wp-content/uploads/2021/06/Jennifer-Aniston-A-Friends-Guest-Star-Felt-They-Were-Too-Above-The-Show-Promo.jpg?quality=70&strip=all" class="img-fluid" alt=""/>
                        <img src='https://media.vogue.co.uk/photos/5d545010df3584000807c76e/2:3/w_2560%2Cc_limit/original' class="img-fluid" alt="" />
                        <img src="https://assets.vogue.com/photos/5ce46980941faea81d63b3e7/master/w_2560%2Cc_limit/00-story-lisa-kudrow.jpg" class="img-fluid" alt="" />
                        <img src="https://assets.vogue.com/photos/630f657b8e0c1404123ba66d/master/pass/VO1022_Cover_Logo.jpg" class="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentSection
