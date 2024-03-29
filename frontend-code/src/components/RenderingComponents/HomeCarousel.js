import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

import '../../css/carousel.css';
import { baseUrl } from '../../constants';
import { Link } from 'react-router-dom';

class HomeCarousel extends React.Component {
	state = {};
	componentDidMount() {
		if (!this.props.photosList || !this.props.photosList.length) return;
		let elems = document.querySelectorAll('.carousel');
		M.Carousel.init(elems, {
			fullWidth: true,
			indicators: true,
			duration: 300,
			numVisible: 3,
		});
		let instance = M.Carousel.getInstance(
			document.getElementById('desktop-carousel')
		);
		setInterval(function () {
			instance.next();
		}, 3500);
	}
	render() {
		let carouselSortedList = this.props.photosList.sort((a, b) => a.id - b.id);
		let carouselContent = carouselSortedList.map((item) => {
			return (
				<a key={item.name} className="carousel-item" href="/">
					<img
						className="carousel_images"
						alt={item.name}
						src={`${baseUrl}${item.image}`}
					></img>
				</a>
			);
		});
		return (
			<>
				<div className="carousel carousel-slider slides" id="desktop-carousel">
					{/* <div className="carousel-fixed-item center">
						<Link to="/transcend" className="btn white-text dark">
							REGISTER FOR TRANSCEND!
						</Link>
					</div> */}
					{carouselContent}
				</div>
				<div className="carousel carousel-slider slides" id="mobile-carousel">
					{/* <div className="carousel-fixed-item center">
						<Link to="/transcend" className="btn white-text dark">
							REGISTER FOR TRANSCEND!
						</Link>
					</div> */}
					{carouselContent}
				</div>
			</>
		);
	}
}

export default HomeCarousel;
