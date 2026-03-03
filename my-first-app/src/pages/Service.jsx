import capuccino from '../assets/capuccino.jpg'
import croissantImg from '../assets/croissant.jpg'
import latteImg from '../assets/latte.jpg'
import yoghurtImg from '../assets/yoghurt.jpg'
import greenImg from '../assets/tea.jpg'

function Service(){
    return(
        <div className='hero-service'>
            <h2>Our <span>Services</span></h2>
            <p>We Offer This Services:</p>
            <div className='service-card'>
                <div className='card-content'>
                    <img src={capuccino} width={200} height={200} alt='Capuccino' />
                    <p>Capuccino</p>
                </div>
        
                <div className='card-content'>
                    <img src={latteImg} width={200} height={200} />
                    <p>Latte</p>
                </div>
        
                <div className='card-content'>
                    <img src={greenImg} width={200} height={200} />
                    <p>Green Tea</p>
                </div>
        
                <div className='card-content'>
                    <img src={croissantImg} width={200} height={200} alt='croissant' />
                    <p>Croissant</p>
                </div>
        
                <div className='card-content'>
                    <img src={yoghurtImg} width={200} height={200} />
                    <p>Yoghurt</p>
                </div>
            </div>
        </div>
    )
}

export default Service