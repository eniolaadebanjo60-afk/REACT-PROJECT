import './Home.css'
import { useState, useEffect } from 'react'
import {Link} from "react-router-dom"

function Home(){
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBestSellers = async () => {
            try{
               setLoading(true);

               const response = await fetch('https://real-time-amazon-data.p.rapidapi.com/best-sellers?category=software&type=BEST_SELLERS&page=1&country=US', {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '0d8fd50626msh7f11e436ecf81b1p1f943fjsn0f5921a08099',
		            'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
                }
               });
               if (!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
               }
               const data = await response.json();

               const firstFourProducts = data.data.best_sellers.slice(0, 4);
               setFeaturedProducts(firstFourProducts);
            } catch(error){
                setError(error.message);
            } finally{
                setLoading(false);
            }
        };
        fetchBestSellers();
    }, []);
    return(
        <div className='home'>
            <div className='hero'>
                <div className='hero-content'>
                    <h2>New Summer <span>Collections</span></h2>
                    <h1>Shop The Best Products From Around The World</h1>
                    <p>Discover thousands of products at the best prices.
                    From electronics to fashion, we have everything you need delivered to your doorstep.</p>
                    <Link to='/shop'>Shop Now</Link>              
                </div>
            </div>

            <div className='about'>
                <div className='about-container'>
                    <div className='about-header'>
                        <h1>About <span>Us</span></h1>
                        <div className='about-divider'></div>
                    </div>
                    
                    <div className='about-content'>
                        <div className='about-text'>
                            <h3>Your Global Shopping Destination</h3>
                            <p>We're passionate about bringing you the best products from around the world. Whether you're looking for the latest tech, fashion essentials, or everyday must-haves, we've got you covered.</p>
                            
                            <div className='about-features'>
                                <div className='feature'>
                                    <span className='feature-icon'>🌍</span>
                                    <div>
                                        <h4>Worldwide Selection</h4>
                                        <p>Curated products from trusted sellers globally</p>
                                    </div>
                                </div>
                                <div className='feature'>
                                    <span className='feature-icon'>⚡</span>
                                    <div>
                                        <h4>Fast & Reliable</h4>
                                        <p>Quick shipping and secure delivery worldwide</p>
                                    </div>
                                </div>
                                <div className='feature'>
                                    <span className='feature-icon'>💎</span>
                                    <div>
                                        <h4>Quality Guaranteed</h4>
                                        <p>Every product vetted for quality and authenticity</p>
                                    </div>
                                </div>
                                <div className='feature'>
                                    <span className='feature-icon'>🛡️</span>
                                    <div>
                                        <h4>Secure Shopping</h4>
                                        <p>Safe payments and buyer protection</p>
                                    </div>
                                </div>
                            </div>
                            
                            <Link to='/shop' className='about-btn'>Explore Our Collection →</Link>
                        </div>
                        
                        <div className='about-stats'>
                            <div className='stat-card'>
                                <h3>10K+</h3>
                                <p>Products</p>
                            </div>
                            <div className='stat-card'>
                                <h3>500+</h3>
                                <p>Brands</p>
                            </div>
                            <div className='stat-card'>
                                <h3>50+</h3>
                                <p>Countries</p>
                            </div>
                            <div className='stat-card'>
                                <h3>24/7</h3>
                                <p>Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='featured-products'>
                <h1>Featured <span>Products</span></h1>
                
                {loading && (
                    <div className='loading'>
                        <p>Loading amazing products...</p>
                    </div>
                )}
                
                {error && (
                    <div className='error'>
                        <p>Oops! {error}</p>
                    </div>
                )}
                
                {!loading && !error && (
                    <>
                        <div className='products-grid'>
                            {featuredProducts.map((product) => (
                                <div key={product.asin} className='product-card'>
                                    <img 
                                        src={product.product_photo} 
                                        alt={product.product_title}
                                        className='product-image'
                                    />
                                    <div className='product-info'>
                                        <h3>{product.product_title}</h3>
                                        <p className='price'>{product.product_price}</p>
                                        <div className='rating'>
                                            ⭐{product.product_star_rating} ({product.product_num_ratings} reviews)
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className='see-more-container'>
                            <Link to='/shop' className='see-more-btn'>
                                See More Products →
                            </Link>
                        </div>
                    </>
                )}
            </div>

            <div className='contact-teaser'>
                <div className='teaser-content'>
                    <h2>Need Help?</h2>
                    <p>Have questions about our products? We're here to help you find exactly what you need.</p>
                    <Link to='/contact' className='contact-btn'>
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home