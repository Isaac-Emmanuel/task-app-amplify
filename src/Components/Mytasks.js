import React from 'react'
import './Mytasks.css'
import ImgAsset from '../public'
export default function Mytasks () {
	return (
		<div className='Mytasks_Mytasks'>
			<div className='Group1'>
				<div className='Frame14'>
					<span className='Mytasks_1'>My tasks</span>
					<span className='_6tasksduetoday'>6 tasks due today</span>
				</div>
				<div className='Frame15'>
					<div className='bicheckcirclefill'>
						<img className='Vector' src = {ImgAsset.Mytasks_Vector} />
					</div>
					<span className='Design'>Design</span>
					<div className='bicheckcirclefill_1'>
						<img className='Vector_1' src = {ImgAsset.Mytasks_Vector_1} />
					</div>
					<span className='Development'>Development</span>
					<div className='bicheckcirclefill_2'>
						<img className='Vector_2' src = {ImgAsset.Mytasks_Vector_2} />
					</div>
					<div className='bicheckcirclefill_3'>
						<img className='Vector_3' src = {ImgAsset.Mytasks_Vector_3} />
					</div>
				</div>
			</div>
			<div className='Card'>
				<div className='Frame12'>
					<div className='Rectangle1'/>
					<span className='Navigationissueinthemilestone'>Explore intermediate and advanced user journeys</span>
				</div>
				<div className='Frame13'>
					<div className='Frame9'>
						<div className='Frame1'><div className='Ellipse3' style={{backgroundImage: `url(${ImgAsset.Mytasks_Ellipse3})`}}/><div className='Ellipse4' style={{backgroundImage: `url(${ImgAsset.Mytasks_Ellipse4})`}}/>
						</div>
						<div className='Frame8'>
							<div className='radixiconstimer'>
								<img className='Vector_4' src = {ImgAsset.Mytasks_Vector_4} />
							</div>
							<span className='_1day'>1 day</span>
						</div>
					</div>
				</div>
				<div className='akariconschevrondown'>
					<img className='Vector_5' src = {ImgAsset.Mytasks_Vector_5} />
				</div>
			</div>
			<div className='Card_1'>
				<div className='Frame12_1'>
					<span className='Navigationissueinthemilestone_1'>Review product assets for autolayout video processing</span>
					<div className='Rectangle1_1'/>
				</div>
				<div className='Frame13_1'>
					<div className='Frame9_1'>
						<div className='Frame1_1'><div className='Ellipse2' style={{backgroundImage: `url(${ImgAsset.Mytasks_Ellipse2})`}}/><div className='Ellipse3_1' style={{backgroundImage: `url(${ImgAsset.Mytasks_Ellipse3})`}}/><div className='Ellipse5' style={{backgroundImage: `url(${ImgAsset.Mytasks_Ellipse5})`}}/>
						</div>
						<div className='Frame8_1'>
							<div className='radixiconstimer_1'>
								<img className='Vector_6' src = {ImgAsset.Mytasks_Vector_6} />
							</div>
							<span className='_1day_1'>1 day</span>
						</div>
					</div>
				</div>
				<div className='akariconschevrondown_1'>
					<img className='Vector_7' src = {ImgAsset.Mytasks_Vector_7} />
				</div>
			</div>
			<div className='Card_2'>
				<div className='Frame12_2'>
					<div className='Rectangle1_2'/>
					<span className='Navigationissueinthemilestone_2'>Navigation issue in the milestone.</span>
				</div>
				<div className='Frame13_2'>
					<div className='Frame9_2'>
						<div className='Frame1_2'><div className='Ellipse2_1' style={{backgroundImage: `url(${ImgAsset.Mytasks_Ellipse2})`}}/><div className='Ellipse3_2' style={{backgroundImage: `url(${ImgAsset.Mytasks_Ellipse3})`}}/><div className='Ellipse4_1' style={{backgroundImage: `url(${ImgAsset.Mytasks_Ellipse4})`}}/><div className='Ellipse5_1' style={{backgroundImage: `url(${ImgAsset.Mytasks_Ellipse5})`}}/>
						</div>
						<div className='Frame8_2'>
							<div className='radixiconstimer_2'>
								<img className='Vector_8' src = {ImgAsset.Mytasks_Vector_8} />
							</div>
							<span className='_1day_2'>1 day</span>
						</div>
					</div>
				</div>
				<div className='akariconschevrondown_2'>
					<img className='Vector_9' src = {ImgAsset.Mytasks_Vector_9} />
				</div>
			</div>
			<div className='Card_3'>
				<div className='Frame12_3'>
					<span className='Navigationissueinthemilestone_3'>Navigation issue in the milestone.</span>
					<div className='Rectangle1_3'/>
				</div>
				<div className='Frame13_3'>
					<div className='Frame9_3'>
						<div className='Frame1_3'><div className='Ellipse2_2' style={{backgroundImage: `url(${ImgAsset.Mytasks_Ellipse2})`}}/><div className='Ellipse3_3' style={{backgroundImage: `url(${ImgAsset.Mytasks_Ellipse3})`}}/><div className='Ellipse5_2' style={{backgroundImage: `url(${ImgAsset.Mytasks_Ellipse5})`}}/>
						</div>
						<div className='Frame8_3'>
							<div className='radixiconstimer_3'>
								<img className='Vector_10' src = {ImgAsset.Mytasks_Vector_10} />
							</div>
							<span className='_1day_3'>1 day</span>
						</div>
					</div>
				</div>
				<div className='akariconschevrondown_3'>
					<img className='Vector_11' src = {ImgAsset.Mytasks_Vector_11} />
				</div>
			</div>
			<div className='Frame17'>
				<div className='Frame16'>
					<div className='fa6solidlistul'>
						<img className='Vector_12' src = {ImgAsset.Mytasks_Vector_12} />
					</div>
					<div className='codicongraph'>
						<img className='Vector_13' src = {ImgAsset.Mytasks_Vector_13} />
					</div>
					<div className='cisettings'>
						<img className='Vector_14' src = {ImgAsset.Mytasks_Vector_14} />
					</div>
				</div>
			</div>
		</div>
	)
}