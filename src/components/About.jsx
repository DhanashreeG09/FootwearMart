import React from 'react'

export default function About() {
  return (
    <div>
      <div class="colorlib-about">
	<div class="container">
		<div class="row row-pb-lg">
			<div class="col-sm-6 mb-3">
				<div class="video colorlib-video" style={{backgroundImage:" url(/about.jpg)"}}>
					{/* <a href="https://vimeo.com/channels/staffpicks/93951774" class="popup-vimeo"><i class="icon-play3"></i></a> */}
					<img src={require('../Assets/images/men_running_shoes_iwp_Copy_2_cd360fc6a3.jpg')} alt="" />
					<div class="overlay"></div>
				</div>
			</div>
			<div class="col-sm-6">
				<div class="about-wrap">
					<h2>Footwear the leading eCommerce Store around the Globe</h2>
					<p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
					<p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
				</div>
			</div>
		</div>
	</div>
</div>
    </div>
  )
}
