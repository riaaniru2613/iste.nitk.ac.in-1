export const constant = {
	//Format for a project
	// {
	//     id: 2,
	//		 oneline:'', // Oneline to display in the expo site
	//     logo: '', // Find the project logo in the current up site and copy paste logo from there (Go to SIGS -> project and find the logo)
	//     name: '',
	//     imgUrl: ['', '', '', '', ''], //Alls the images
	//     members: ['', '', '', '', ''], // Members
	//     description: {
	//         aim: (<div></div>), // Aim
	//         meth: (<div></div>), // Methodology
	//         res: (<div></div>), // Results
	//         con: (<div></div>), // Conclusion and Future Scope
	//     },
	//     meetLink: 'This is the meet link',
	// },
	catalyst: [
		{
			id: 1,
			logo:
				'https://images-na.ssl-images-amazon.com/images/I/51D-9qGCi1L._SL1000_.jpg',
			name:
				'Simulation Model for Biodiesel Production Embedded with MPC using PFR',
			oneline:
				'The aim of this project was to model and simulate for Biodiesel Production embedded with Model Predictive Control(MPC) operating in a Plug Flow Reactor(PFR) using MATLAB-Simulink.',
			imgUrl: [
				'https://drive.google.com/file/d/1Eef3s9OksThOX-sPtZv1-K64Wj6AZfXE/preview',
				'https://drive.google.com/file/d/1Eef3s9OksThOX-sPtZv1-K64Wj6AZfXE/preview',
			],
			members: [
				'Abhijeet Singh',
				'Aditya Reddy',
				'Rohan Suratkal',
				'Rohaan Sunil',
				'Rugved Pande',
				'Mohona Mukherjee',
			],
			description: {
				aim: (
					<div>
						The aim of this project was to model and simulate for Biodiesel
						Production embedded with Model Predictive Control(MPC) operating in
						a Plug Flow Reactor(PFR) using MATLAB-Simulink.
						<br />
						<br /> {'     '} In industrial processes, the demand for better
						control of process conditions has led to more significant
						complications in control mechanisms. Controllers are required to
						make a non-offset or tiny offset between signal outputs and
						references by tuning to compensate for frequently changing operating
						conditions. Model predictive control (MPC) is an advanced control
						technique that relies on system identification and usually applies
						with linear processes. MPC is used to steer a process to operate at
						the values given from the optimization calculation step.
					</div>
				),
				meth: (
					<div>
						Reactions
						<br />
						<br />
						Raw Materials: Triglyceride (TG) and Methanol (MeOH) <br />
						Product: Methyl Ester (ME) <br />
						By-Product: Glycerol (GL) <br />
						Intermediates: Diglyceride(DG) and Monoglyceride (MG)
						<br />
						<br />
						•TG + 3 MeOH {'<=>'} GL + 3 ME
						<br />
						•TG + MeOH {'<=>'} DG + ME <br />
						•DG + MeOH {'<=>'} MG + ME <br />
						•MG + MeOH {'<=>'} GL + ME <br />
						<br />
						Operating Parameters <br />
						<br />
						•Pressure P = 1 atm, T = 60°C (Higher temperatures avoided to
						prevent Saponiﬁcation). <br />
						•Catalyst used: 0.5% Sodium Methoxide.•100% excess MeOH used to
						avoid reverse reactions. <br />
						•Basis: Molar Flow rate F = 100 mol/s of total inlet ﬂow.
						<br />
						•Volume of reactor V = 10 L<br />
						•Volumetric flow rate ν = 360 m3/s
						<br />
						•Area A = 10 m2
						<br />
						•Residence time τ = 3600 s <br />
						•Initial concentration of reactants: CTG =1.8, CMeOH =10.5
						<br />
						•Rate Constants: k1 =0.049, k2 =0.102, k3 = 0.218, k4 =1.28, k5
						=0.239, k6 =0.007
						<br />
						<br />
						Component Balanaces <br />
						<br />
						dxTG/dL=FτA/Vv(-k1 . xTG . xMeOH + k2 . xDG . xME) <br />
						dxDG/dL=FτA/Vv(k1 . xTG . xMeOH – k2 . xDG . xME -k3 . xDG . xMeOH
						+k4 . xMG . xME ) <br />
						dxMG/dL=FτA/Vv(k3 . xDG . xMeOH -k4 . xMG . xME -k5 . xMG . xMeOH
						+k6 . xGl . xME ) <br />
						dxME/dL=FτA/Vv(k1 . xTG . xMeOH – k2 . xDG . xME +k3 . xDG . xMeOH
						-k4 . xMG . xME +k5 . xMG . xMeOH -k6 . xGl . xME) <br />
						dxGL/dL=FτA/Vv(k5 . xMG . xMeOH -k6 . xGl . xME) <br />
						dxMeOH/dL=FτA/Vv(-k1 . xTG . xMeOH +k2 . xDG . xME -k3 . xDG . xMeOH
						+k4 . xMG . xME -k5 . xMG . xMeOH +k6 . xGl . xME)
						<br />
						<br />
						Implementation of the Controller <br />
						<br />
						Control system design is necessary to achieve a production level of
						consistency, purity, economy, and safety which cannot be achieved
						purely by human manual control. It can be seen from the dynamic
						model equations of biodiesel that all equations are highly nonlinear
						in nature which cannot be used directly to achieve the speciﬁed
						objectives. <br /> Hence, these models need to be approximated to
						the FOPDT model so that an eﬃcient controller can be designed. Then
						we tune the PI controller based on the FOPDT model and along with
						that, we tune the MPC controller based on the FOPDT model and
						finally then analyze the controller settings that best control our
						system. The control system has been implemented for all six
						components. <br />
						The FOPDT model parameters are enlisted in Table 1, the PI
						controller parameters are enlisted in Table 2, and the error values
						for comparing both the controllers (PI and MPC) are enlisted in
						Table 3. Figure 1 depicts the Response curves for comparing both the
						controllers (PI and MPC). Refer the images section for the tables
						<br />
					</div>
				),
				res: (
					<div>
						Refer the images section for the results in the form of graphs
						having the Response Curve for comparing both the Controllers (PI and
						MPC)
					</div>
				),
				con: (
					<div>
						An identification of the Biodiesel model has been done in this
						study. The PI and MPC settings are designed based on the identified
						FOPDT model and compared. The set of two settings is implemented on
						the nonlinear Biodiesel plant and evaluated the controller's
						efficiency. From the simulation studies, it is observed that the MPC
						settings produce a superior closed-loop response in terms of time
						integral errors such as ITAE, IAE, ISE, etc than that of the PI
						settings. <br /> {'   '}Future scope includes taking the outcomes
						and results of the current project as a basis, the plant will be
						simulated in Aspen plus- an industry standard software, for the
						purification of the product from the reactor.
					</div>
				),
			},
			meetLink: 'https://www.google.com/',
		},
		{
			id: 2,
			logo:
			  "https://www.tpomag.com/uploads/inline/xcockrell_4.jpg.pagespeed.ic.NOVnhtHlC-.webp",
			name: "Modelling Of Waste Water Treatment Using ASM",
			oneline: "The objective of the project is to explore how industrial-scale water purification is executed through a widely implemented process known as Activated Sludge Model (ASM).",
			imgUrl: [
			  "https://drive.google.com/file/d/1jgdQan0UQV9QBw3A2wtkizotPFuAN6SX/preview",
			  "https://drive.google.com/file/d/1k3sc13lEOX82ABI3leaEX0hkz6w9BN-v/preview",
			  "https://drive.google.com/file/d/19qapAft4gS8M9Z2J3IcToTANdf_tdbxY/preview",
			  "https://drive.google.com/file/d/1iyXMrELdGTal9f0_L9dWiSqyseLyiWdU/preview",
			  "https://drive.google.com/file/d/1wgKJrkucaHeQqAcPyRBjOFA6DKgnsBZG/preview",
			  "https://drive.google.com/file/d/18TMIzSKL1RKQcAZXfmvDPOdOle0li_wa/preview",
			  "https://drive.google.com/file/d/1Y5Rx0F8aZl0bZ-zZ-W2AKfoApAlefUPf/preview",
			  "https://drive.google.com/file/d/1GSsEtd76N4qLZCiyhxPMs3KkGR9cNW2Z/preview",
			],
			members: [
			  "Devendra Gayari",
			  "Amogha V Somayaji",
			  "Ankit Stephen Thomas",
			  "Dhruv Banerjee",
			  "R Raghavendra",
			  "Rahul Maheshwari",
			],
			description: {
			  aim: (
				<div>
				  The objective of the project is to explore how industrial-scale water purification
				  is executed through a widely implemented process known as Activated Sludge Model (ASM). <br />
				  <br /> {"     "}
				  This setup is performed on MATLAB-Simulink, an engineering software
				  primarily used for replicating simulations and various industrial processes.
				  The obtained process conditions obtained are then studied by appending a
				  controller to regulate the concentration of dissolved oxygen.
				  <br /> {" "}
				  ASM is a mathematical-modelling of a wastewater treatment process for treating
				  sewage or industrial wastewaters using aeration and a biological composition
				  consisting of bacteria and protozoa. Industrialists, MNCs and several establishments
				  have resorted to adopt ASM as the primary method to treat wastewater generated
				  from their facilities. {" "}
				</div>
			  ),
			  meth: (
				<div>
				  Methodlogy <br />
				  <ol>
					<li>Initially, to build a firm foundation with the fundamentals and pre-requisites of
					ASM and its functioning, we referred to several literatures and journals to
					obtain adequate data. Features pertaining to the optimum Chemical Oxygen
					Demand (COD) and Biological Oxygen Demand (BOD), flow rate values were
				  derived from a diversified portfolio of resources.</li>
					<li>The acquired mathematical-equations for modelling the process were then
					inserted in MATLAB-Simulink, with appropriate constant values set as a
				  desired input.</li>
					<li>A controller had to be appended to the system, to bring about this installation,
					a mathematical function (transfer function) has to be established that would
				  determine the functioning of the controller.</li>
					<li>An appropriate transfer function was adopted that would seamlessly suit our
				  reaction setup.</li>
					<li>Tunings models were studied so that we maximize the performance of the
				  entire setup without producing excessive overshoot values or variances.</li>
					<li>Varied tuner models were established and necessary error analysis was
				  conducted to determine the accuracy of our entire framework.</li>
				  </ol>
	  
				  <br />
	  
				  Prcocedure <br />
				  <ol>
					<li>A skeletal layout was initiated, where a total of 8 control parameters and their
				  corresponding equations were determined.</li>
					<li>The underlying mathematical equations depict the various processes that
				  occur on an industrial scale whilst treating the wastewater generated:- <br />
					  <ol>
						<li>ρ1= μH (SS/(KS+ SS)) (SO/(KOH+ SO)) XBH </li>
						<li>ρ2= μH (SS/(KS+ SS))(SO/(KOH+ SO)) (SNO/(KNO+ SNO)) ηgXBH </li>
						<li>ρ3= (SNH/(KNH+ SNH)) (SO/(KOA+ SO)) XBA </li>
						<li>ρ4= bHXBH </li>
						<li>ρ5= bAXBA </li>
						<li>ρ6= kaSNDXBH </li>
						<li>ρ7=kh(XS/XBH)/(KX+ (XS/XBH))[(SO/(KOH+ SO))+ηh(KOH/(KOH+ SO))(SNO/(KNO+ SNO))]XBH </li>
						<li>ρ8=kh(XS/XBH)/(KX+(XS/XBH))[(SO/(KOH+ SO))+ηh(KOH/(KOH+ SO))(SNO/(KNO+ SNO))]XBH(XND/XS) </li>
					  </ol>
					</li>
					<li>The previously displayed equations were then employed in developing the
				  Simulink model to design differential equations to simulate the ASM process.</li>
					<li>The above-derived equations are then inserted into the following equations to
				  obtain desirable results:- <br />
					  <ol>
						<li>dXBH/dt= ρ1+ ρ2− ρ4</li>
						<li>dXBA/dt= ρ3− ρ5</li>
						<li>dSS/dt= ρ7− (ρ1+ ρ2)</li>
						<li>dXS/dt= (1−fP)(ρ4+ ρ5)− ρ7</li>
						<li>dXP/dt= fP(ρ4+ ρ5)</li>
						<li>dXND/dt= (iXB− fPiXP)(ρ4+ ρ5)− ρ7</li>
						<li>dSND/dt= ρ7− ρ6</li>
						<li>dSNH/dt= −iXB (ρ1+ ρ2) +ρ6− (iXB+1/YA) ρ3</li>
						<li>dSNO/dt= (1/YA)ρ3−((1−YH)/2.86YH) ρ2</li>
						<li>dSO/dt= − ((1−YH)/YH)ρ1−((4.57−YA)/YA) ρ3</li>
						<li>dSALK/dt=−(iXB/14)ρ1+((1−YH)/14.286YH−(iXB/14))ρ2−((2/14)YA+iXB/14)ρ3+(1/14)</li>
					  </ol></li>
					<li>Essentially, on developing the rudiments of the ASM process, a reactor mass
					balance equation can be formulated for oxygen. This is because in this
					scenario, regulation of oxygen levels is of utmost importance to us.
					The fundamental equation for determining a mass balance around a reactor
					is:-Accumulation within the System + Consumption within the System = Input
					into the system - Output to the System + Generation within the System
					Implementing the above elementary equation to our reactor model for determining
					the concentration of Oxygen levels is as follows:-
					Reactor Mass Balance: For Oxygen
				  (dS0,as,k/dt)=(1/Vas,k)(Qk-1S0,as,k-1+rZ,kVas,k+(KLa)kVas,k(S0*-S0,as,k)-QkS0,as,k)</li>
					<li>As discussed earlier, the derived equations were modelled in Simulink to
				  obtain desired results.</li>
					<li>The entirety of the reactor setup was based on an open-loop condition (the
				  output has no influence of effect on the input).</li>
					<li>The steady state values that were achieved through this process were
				  reported and recorded.</li>
					<li>A controller was then installed to regulate the dissolved oxygen concentration level.</li>
					<li>Primarily, the PID constants were achieved by using the inbuilt PID controller in Simulink.</li>
					<li>Additionally, the FOPDT model was implemented using its derivative methods,
					including Zeigler Nichols (P, PI, PID), Internal Model Control (IMC)
					method, Equating Coefficients Method (ECM). These models were operated under servo
				  and regulatory conditions.</li>
					<li>To perform an error analysis, we calculated fundamentally three types of
				  errors:- ISE,IAE,ITAE</li>
				  </ol>
				</div>
			  ),
			  res: (
				<div>
				  <figure>
				  <iframe src="https://drive.google.com/file/d/19qapAft4gS8M9Z2J3IcToTANdf_tdbxY/preview" width="640" height="480"></iframe>
				  <figcaption>The ASM process developed on Simulink</figcaption>
				  </figure> <br />
				  <br />
				  <figure>
				  <iframe src="https://drive.google.com/file/d/1_rXr0z-z_1LQ8_PR2QSO-oqmZxzYUvDO/preview" width="640" height="480"></iframe>
				  <figcaption> The Steady State Values on executing the ASM process</figcaption>
				  </figure> <br />
				  The open loop transfer function adopted to be implemented for the functioning of the controller is:-
				  G(s) = 55.34s3 + 9071s2 + 4.956e05s + 9.022e06 / s4 + 478.4s3 + 6.056 e04 s2 + 2.985e06 s+5.142e07
				  <iframe src="https://drive.google.com/file/d/1iyXMrELdGTal9f0_L9dWiSqyseLyiWdU/preview" width="640" height="480"></iframe>
				  <br />Graph: Variation of Oxygen Concentration in open loop. <br />
				  Inference: Dissolved oxygen concentration is almost constant after 0.0251 d. <br />
				  For tuning the FOPDT approximations, the following estimated transfer function was used:- <br />
				  G(s) = 0.17546e − 0.012s / 3.1447s+1 <br />
	  
				  On tuning the P and PI controllers by Zeigler Nichols method, the following parameters were obtained:-
				  <table style={{width:'100%',border:'1'}}>
					<tr>
					  <th>Parameters</th>
					  <th>P</th>
					  <th>I</th>
					</tr>
					<tr>
					  <td>P Controller</td>
					  <td>1493.55029</td>
					  <td>NA</td>
					</tr>
					<tr>
					  <td>PI Controller</td>
					  <td>1344.19526</td>
					  <td>37338.76</td>
					</tr>
				  </table>
	  
				  <br />
				The parameters corresponding to the inbuilt PID controller by various tuning methods are as follows:- <br />
				  <table style={{width:'100%',border:'1'}}>
					<tr>
					  <th>Method of Tuning</th>
					  <th>P</th>
					  <th>I</th>
					  <th>D</th>
					</tr>
					<tr>
					  <td>Ziegler-Nichols</td>
					  <td>1792.26034</td>
					  <td>74677.51</td>
					  <td>10.75356</td>
					</tr>
					<tr>
					  <td>IMC</td>
					  <td>1135.36</td>
					  <td>360.601744</td>
					  <td>6.798536</td>
					</tr>
					<tr>
					  <td>ECM</td>
					  <td>1496.3999</td>
					  <td>474.942045</td>
					  <td>8.963435</td>
					</tr>
					<tr>
					  <td>Inbuilt PID tuning algorithm in Simulink</td>
					  <td>10.2153</td>
					  <td>4009.5722</td>
					  <td>0.00228</td>
					</tr>
				  </table>
	  
				  The error analysis for each of the tuner methods were performed under 2 conditions,
				  namely:- Regulatory Control base setup and Servo Control base setup. <br />
	  
				<iframe src="https://drive.google.com/file/d/1mZtN97fwNzfaLDiOI_waAC89yNWe4y9l/preview" width="640" height="480"></iframe>
				</div>
			  ),
			  con: (
				<div>
				  Through this project we can draw practical conclusions on the essence of
				  ASM wastewater treatment process. <br />
				  Additionally we can comprehend the functionality and efficiency of this
				  process, as a result we understand why the ASM process has been widely
				  implemented and studied by a number of organizations. <br />
				  Consequently, on installing a feedback controller to the system and
				  performing an error analysis, we realize that the inbuilt controller tuning
				  algorithm in Simulink is best suited for controlling the dissolved oxygen
				  concentration in this process. <br />
				  Primarily, as it provides the least error (ISE, IAE and ITAE) in comparison to
				  the other tuning methods. {" "}
				</div>
			  )
			},
			meetLink: "This is the meet link",
		  },
		  {
			id: 3,
			name: "Photocatalytic Degradation of Aniline",
			oneline: "The objective of the project is to model a reactor for the degradation of organic pollutants, particularly methane using photocatalytic reactions on DWSIM, a chemical process simulator. Thus, obtaining suitable graphs with appropriate parameters for determining apt relations between the control variables.",
			logo: "",
			imgUrl: [
			  "https://drive.google.com/file/d/1j0MfIPVYH4nyaytgMNrx6FESYopET-qE/preview",
			  "https://drive.google.com/file/d/1QKVrTsaEPw35Z2YRT8R9vadWvgVS4y-P/preview",
			  "https://drive.google.com/file/d/1XrCRmAnFgK45ncp437XNoKwM-jD9cG1X/preview",
			  "https://drive.google.com/file/d/1ViAwMcur4G6WxgBsJF01mMrlKfA8GAF6/preview",
			  "https://drive.google.com/file/d/1DOiwXmVhEeP7o6Muu_eS4Pb3g_Y5ZrRo/preview",
			  "https://drive.google.com/file/d/1stOQ_PbjiXLrAhbY7KSA_bflm_D7raW9/preview",
			  "https://drive.google.com/file/d/1GfoU2X5Q_2d7Hk0dK--QzVk6C8oPN2tb/preview",
			  "https://drive.google.com/file/d/1HUHBDuo0pOv6IrwF7j7nCko7Vvliunab/preview",
			  "https://drive.google.com/file/d/1XGm7JxTbLwGNtZuryEnEOkAzRC5dGSYi/preview"
			],
			members: [
			  "Rishu Kumar",
			  "Manash Akash",
			  "R Raghavendra",
			  "Ankit Stephen Thomas"
			],
			description: {
			  aim: (
				<div>
				  The objective of the project is to model a reactor for the degradation of organic pollutants,
				  particularly methane using photocatalytic reactions on DWSIM, a chemical process
				  simulator. Thus, obtaining suitable graphs with appropriate parameters for determining apt
				  relations between the control variables. <br />
	  
				  Several scientists, MNC’s and groups of researchers across the globe have faced hurdles in
				  humanizing the treatment of organic pollutants. Until the late 1970s, there was no effective
				  method known to man that can satisfy all the above-mentioned criteria required for the
				  smooth operation of the establishment. Photocatalysis, an extraordinary invention by
				  Fujishima and Honda paved way to a brand new avenue in the field of chemical engineering.
				  Essentially, the production of hydrogen using photocatalysis by a process known as steam
				  reforming of methane has proven to be one of the greatest assets to engineers and
				  industrialists globally. Hence, studying methods and models that would provide a safer and
				  a greener option for individuals to adopt is the next biggest challenge and encyclopaedic
				  journey to witness. {" "}
				</div>
			  ),
			  meth: (
				<div>
				  <ol>
					<li>The initial stride of utmost importance was to comprehend the fundamentals of 
					  concepts like photocatalysis, kinetics behind the reaction, reactor models and 
					  nanoparticles as a catalyst.</li>
					<li>To understand such theories, we examined several literatures and materials 
					  corresponding to topics that were closely aligned in the direction of the project.
					</li>
					<li> On successfully learning the foundations, we then proceeded to establish a sample 
					  reactor replica with Aniline as the organic pollutant using TiO2 nanoparticles as the 
					  essential catalyst. This was crucial in recognizing the workspace and familiarize 
					  ourselves with the DWSIM software.</li>
					<li>On developing the pre-requisites required to achieve our objective, we began to 
					  initiate the modelling on DWSIM.</li>
					<li>Qualitatively, the reaction that is occurring in the reactor is, Methane is reacted with 
					  Water at high temperatures under the influence of nanoparticle catalysts to produce 
					  Carbon dioxide and Hydrogen as the products. Chemically, the reaction can be 
					  denoted as:- CH4 + 2H2O CO2 + 4H2 </li>
					<li>The material, energy stream and the reaction kinetics are fed. </li>
					<li>In our project, the reactor model that is being implemented is a Plug Flow Reactor 
					  (PFR). To operate the reactor and carry out the reaction, an energy stream 
					  (556.34973 kW) is appended along with the reactor. This ensures that the modelled 
					  reactor along with the reaction, functions efficiently.</li>
					<li>PFR parameters are fed.</li>
					<li>On doing so, the base model of the reactor has been successfully established and can 
					  be executed to obtain conversions by visualizing it from the PFR’s point of view. </li>
					<li> next step is to obtain graphs and plots with different parameters as each 
					  variable is intertwined with another, based on a certain relationship and 
					  proportionality. </li>
					<li>To vary the results the following parameters:-
					  <ol>
					  <li>Temperature</li>
					  <li>Pressure</li>
					  <li> Mole Fractions/ Concentrations of species</li>
					  <li> Energy Stream</li>
					  <li>Reactor Volume and Length</li>
					  <li>Catalyst Loading, Catalyst Void Fraction, Catalyst Particle Diameter</li>
					  </ol>
					  were made to differ in fixed multiples, to obtain varied results which are then 
					  utilized to plot graphs on an appropriate data visualization software, like Microsoft 
					  Excel and determine relationships and dependence of various parameters. </li>
				  </ol>
				</div>
			  ),
			  res: (
				<div>
				  Refer the images section for the results having the Flowsheet of the Methane reforming (DWSIM MODEL), Input Parameters to the PFR, Results related to the different parameters with Conversion{" "}
				</div>
			  ),
			  con: (
				<div>
				  On investigating the results obtained from the above graphs, there are a number of 
				  inferences we can draw:- <br />
				  <ol>
				  <li>Conversion vs Catalyst Particle Diameter: The plot undoubtedly depicts how the 
				  formation of products, in this case Hydrogen, is fairly independent of the catalyst particle 
				  diameter.</li>
				  <li>Conversion vs Hydrogen Concentration: The shaping of products is inversely proportional 
				  to Hydrogen Concentration as a linear ratio. This is an accurate observation that has been 
				  devised as according to Le Chatlier’s principle, if a system experiences a disturbance, the 
				  system by default adopts a direction where the effects of this disturbance are nullified.</li>
				  <li>Conversion vs Water and Methane Concentration: Applying a similar reasoning from the 
				  above observation, Le Chatlier’s principle can be implemented. We can observe that 
				  favourable conversions are linearly proportional to Water-Methane concentrations.</li>
				  <li>Conversion vs Temperature: An endothermic reaction, with increase in temperature will 
				  favour the forward direction of the reaction. Le Chatlier’s principle can be be utilized in this 
				  scenario to obtain similar results. Additionally, the increase in temperature facilitates the
				  reaction rate by enhancing the performance of the catalyst. </li>
				  </ol> <br />
				  From the graphs, it is evident that there are distinct relationships among 
				  variables like conversion, temperature, concentrations and so on. Using this DWSIM 
				  modelling for the photocatalytic degradation of methane, engineers can adopt this method 
				  or its derivatives to estimate the conditions for maximum production of hydrogen,
				  maximum degradation of methane and so on. 
				</div>
			  )
			},
			meetLink: "This is the meet link",
		  },
		],
		charge: [
		  {
			id: 1,
			oneline: "This project aims to design and implement a hardware accelerator to accelerate the inference of convolutional neural networks on FPGA.",
			name: "Implemention of CNNs on FPGA",
			logo: "https://cdn.nanalyze.com/uploads/2017/05/FPGAs-AI-Chip-Teaser.jpg",
			imgUrl: ["https://drive.google.com/file/d/1JLSypedzzRMLKSLiKPhvZ_s_g5oql0w7/preview",
					"https://drive.google.com/file/d/12q1rlRxJcDNjtbQWVCLsd0EyGDhbaOw3/preview",
					"https://drive.google.com/file/d/150XAozifeE-vOHN_JnyWe1pyQ7TT8jvb/preview",
					"https://drive.google.com/file/d/1WGlhyB4a-rssMQmE1SPDDvDeXv1N0Ft-/preview",
					"https://drive.google.com/file/d/1A6z_lMYcm4svDTd_QDLSVqa93DVk-qme/preview"],
			members: ["Aaron Sequeira",
					  "Aditya Manjunath",
					  "Pranav Srinath",
					  "Surya Prakash Reddy",
					  "Lakshmisha SN",
					  "Divesh Sakhuja",
					  "BalajiNaidu V",
					  "Roopam Dhaneria",
					  "Ayush Agarwal"],
			description: {
			  aim: (
				<div>
				  This project aims to design and implement a hardware accelerator to accelerate the inference of convolutional neural networks on FPGA.
				</div>
			  ),
			  meth: (
				<div>
				  Designing a good architecture for the hardware accelerator is one of the main parts of the project. Systolic array is the heart of our architecture.
				  Systolic arrays are hardware structures built for fast and efficient operation of regular algorithms that perform the same task with different 
				  data at different time instants. In our model systolic array is used to perform matrix multiplications. Since memory can be operated at higher 
				  speeds a fifo is designed to store the elements in the buffer to overcome cross domain clocking problems. Many small BRAM blocks are used to 
				  reduce waiting time in the buffer before writing the processed data into memory. <br />
				  
				  The designed architecture is implemented in verilog HDL using Xilinx Vivado design suite. All the required modules in the datapath are 
				  implemented in verilog. The datapath elements are then connected together in a top module. Control modules are developed to control the 
				  flow of data between the datapath modules. Master control module is designed to send control signals to all the control modules and the 
				  datapath modules based on the current instruction and previous instructions executed. <br />
				  
				  Datapath Diagram :-
				  <iframe src="https://drive.google.com/file/d/12q1rlRxJcDNjtbQWVCLsd0EyGDhbaOw3/preview" width="640" height="480"></iframe> <br />
				  Control path :-
				  <iframe src="https://drive.google.com/file/d/1JLSypedzzRMLKSLiKPhvZ_s_g5oql0w7/preview" width="640" height="480"></iframe>
				  <br />
				  There is currently support for these seven high level instructions in our architecture:- <br />
				  <ol>
				  	<li>Weight fill</li>
				  	<li>Fifo clear</li>
				 	<li>Fifo fill</li>
				  	<li>Fifo refill</li>
				 	<li>Conv</li>
				 	<li>Maxpool</li>
				  	<li>Add matrices</li>
				  </ol>
	  
				  We are using fixed point calculations in our architecture. Tensorflow has a good post training quantisation technique which quantises 
				  the 64 bit floating point weights into 8 bit integers. We can extract those weights and biases and computation graph from the model. 
				  The extracted weights and biases can be used for our accelerator. The extracted model can be converted into a set of instructions 
				  which can be used to run on our accelerator.
				</div>
			  ),
			  res: (
				<div>
				  <em>Synthesis results</em>

				  <iframe src="https://drive.google.com/file/d/1WGlhyB4a-rssMQmE1SPDDvDeXv1N0Ft-/preview" width="640" height="480"></iframe>
				  Simulation results:- <br />
				  Instructions Executed:- <br />
				  Weight_fill 0 3 9 <br />
				  Fifo_clear <br />
				  Fifo_fill 0 5 5 0 <br />
				  Conv 1 9 0 <br />
				  Maxpool_fill 0 4 0 <br />
				  weight _fill 0 3 9 <br />
				  Fifo_clear <br />
				  Fifo_refill 0 2 2 1 9 <br />
				  Conv 1 9 0 <br />
	  
				  <iframe src="https://drive.google.com/file/d/1A6z_lMYcm4svDTd_QDLSVqa93DVk-qme/preview" width="640" height="480"></iframe>
				  <br />
				  Sample extracted and quantised weights and biases:-
				  <iframe src="https://drive.google.com/file/d/150XAozifeE-vOHN_JnyWe1pyQ7TT8jvb/preview" width="640" height="480"></iframe>
				  </div>
			  ),
			  con: (
				<div>
				  The designed hardware accelerator is implemented in Verilog HDL. The simulation results of the verilog model are verified. 
				  Synthesis of the verilog model shows decent utilisation of resources. Post synthesis and post implementation functional simulation is done and verified.
				  Github repo:- <a href="https://github.com/putlurusurya/CNNOnFPGA" target="_blank">https://github.com/putlurusurya/CNNOnFPGA</a>
				  <br />
				  Future scope of this project:-
				  <ol>
				  <li>Improve the architecture with software optimisations in consideration</li>
				  <li>Add DDR3 memory or other external memory support</li>
				  <li>SD card support for live camera detection</li>
				  <li>Improve the matrix multiplication model with a better architecture </li>
				  <li>Improve timing constraints</li>
				  </ol>
				</div>
			  )
			},
			meetLink: "This is the meet link",
		  },
		  {
			id: 2,
			name: "Eye Tracking Wheelchair",
			oneline: "To design an eye-tracking software that acquires a video stream of eye movements using a camera and then, based on the eye movement, analyse the user's intent. It is aimed to design and simulate the wheelchair model on ROS and Gazebo.",
			logo: "https://b7.pngbarn.com/png/395/903/disability-wheelchair-shopping-cartoon-png-clip-art-thumbnail.png",
			imgUrl: ["https://drive.google.com/file/d/1c6Rau3hygJMGJEB2ywS9cqwn428KjdRH/preview",
					"https://drive.google.com/file/d/1awh6ZowTHToM6hNTm4TWbVEXT5HJIJCw/preview",
					"https://drive.google.com/file/d/1p7AAyc4bjaQoVB1cH7CSjsZ11ZlfSJxs/preview"],
			members: ["Anmol Verma",
					  "Aaron Sequira",
					  "Fatwir Sheikh Mohammed",
					  "Nihal V Palankar",
					  "Anuja Goyal",
					  "Fouzan Tinwala",
					  "Harshavardhan D",
					  "Kumar Vitthal",
					  "Sahana Praveen Bhandari"],
			description: {
			  aim: (
				<div>
				To design an eye-tracking software that acquires a video stream of eye movements using a camera and then,
				based on the eye movement, analyse the user's intent. It is aimed to design and simulate the wheelchair model on ROS and Gazebo.
				</div>
			  ),
			  meth: (
				<div>
				The project consists of two aspects: - <br />
				<ol>
					<li>Design of an appropriate algorithm that outputs instructions to the wheelchair based on eye movements of the user</li>
					<li>ROS and Gazebo simulation of the wheelchair</li>
				</ol>
				<br />
				<em>Eye-tracking using the DLib Library</em>
				<ol>
					<li>Get the facial landmarks using DLib Library</li>
					<li>Extract the eye locations using these facial landmarks</li>
					<li>Perform blink detection
						<ol>
							<li> Detected by calculating the average of the ratios of vertical line length to horizontal line length for each eye</li>
							<li> Time.time() function to measure the time between successive blinks</li>
						</ol>
					</li>
					<li>Perform gaze detection
						<ol>
							<li> Create a mask</li>
							<li> Convert to grayscale and threshold</li>
						</ol>
					</li>
					<li>Make the decision
						<ol>
							<li> Start (operating) or stop (idle) the system if blinking is detected twice within a span of 750 ms</li>
							<li> Signal to move forward/turn right/turn left depending on the eye gaze of the user</li>
						</ol>
					</li>	
				</ol>
				<figure>
				<iframe src="https://drive.google.com/file/d/1awh6ZowTHToM6hNTm4TWbVEXT5HJIJCw/preview" width="640" height="480"></iframe>
				<figcaption>System Process Diagram</figcaption>
				</figure>
				<figure>
				<iframe src="https://drive.google.com/file/d/1c6Rau3hygJMGJEB2ywS9cqwn428KjdRH/preview" width="640" height="480"></iframe>
				<figcaption>Algorithm Flowchart</figcaption>
				</figure>

				<em>ROS and Gazebo implementation of the model</em>
				<ol>
					<li>The ROS middleware facilities used : 
						<ol>
							<li> Publish/subscribe anonymous message passing</li>
							<li> Recording and playback of messages</li>
							<li>; Request/response remote procedure calls</li>
						</ol>
					</li>
					<li>The key ROS nodes used for monitoring, interpretation and communication are : 
						<ol>
							<li><em>ETW.py</em> : <br /> 
							This node handles the image processing part of the program from initializing the camera, 
							starting video streaming, converting the incoming stream to grayscale, running HOG frontal 
							face detector using the DLib library, extracting the location of the eye, blink detection, 
							gaze detection and finally to decision making ie to publish (send) command to the ros_topic 
							“my_command” via the ros_message “command.msg”
							</li>
							<li><em>move.py</em> : <br />
							This ROS node acts as both a subscriber and a publisher node simultaneously but to 2 
							different topics namely “my_command” and “cmd_vel” respectively. It takes input (subscribes) 
							from the ros_topic “my_command” via the ros_message “command.msg” and publishes a suitable 
							message to the ros_topic “cmd_vel”.
							</li>
							<li><em>wheelchair.launch</em> : <br />
							This is a ros_launch file written in the robot description language(XML format) that can 
							launch multiple ros_nodes/files including the ros_master(by default) at once to avoid launching 
							each individual node separately on different terminals. This file contains the locations of all
							the files required to launch the simulation of the wheelchair in gazebo with all the required 
							ros_gazebo_plugins necessary to move the robot in accordance with eye movements of the user.
							</li>
						</ol>
					</li>
					<li>The below rqt_graph provides the flow of data during the run time of the simulation program.</li>
					<iframe src="https://drive.google.com/file/d/1F4CH7bcz1IkYe3Eu2gDkuifamHXM8OAR/preview" width="640" height="480"></iframe>
				</ol>

				<em>CNN design of the eye-tracking software</em> <br />
				In addition to the above, a CNN model was designed to detect eye gaze <br />
				<ol>
					<li>The dataset that is used to train the CNN model contains 7049 facial images and up to 15 key points are marked on them (6 required for our model).</li>
					<li>The architecture used for the same is:
					<iframe src="https://drive.google.com/file/d/1Kq6IS51eEoesxL1wYoqeEQARfh5gFGrk/preview" width="640" height="480"></iframe>
					</li>
					<li>The following are the layers of the model : 
					<ol>
						<li> Convolutional Layers = 13</li>
						<li> Pooling Layers = 5</li>
						<li> Dense Layers = 3</li>
					</ol>
					</li>
					<li>MSE Loss function was the metric used for calculating loss during training. Adam’s Moment Estimation was used 
						to train the model since the learning rates are adjusted automatically and hence manual tuning becomes less important.</li>
				</ol>
				</div>
			  ),
			res: (
				<div>
					<ol>
					<li>Eye-tracking was implemented with an average execution time of around 40 milliseconds when tested on an Intel Core i7-7500U processor operating at 2.70 GHz.</li>
					<li>If the blinks are consecutive within 750 milliseconds, then the system is turned on/off.</li>
					<li>ROS and Gazebo simulation of the wheelchair was successfully implemented.</li>
					<li>For the CNN model, K Fold Cross Validation gave a training Loss of 0.0979 and Validation Loss of 0.0107.</li>
					</ol>
				</div>
			),
			conc: (
				<div>
					Improving the accuracy of the convolutional neural network used and hardware implementation of the model using microcontrollers.
				</div>
			)
	  
			},
			meetLink: "This is the meet link",
		  },		{
			id: 3,
			name: 'Speech to Text Converter',
			oneline: 'This project on Speech Recognition converts speech (limited) to text with a fairly decent accuracy of about 93% with a processing speed of only 1.5 seconds approximately for an audio clip 2 seconds long on a trained model.',
			logo: 'https://d1sr9z1pdl3mb7.cloudfront.net/wp-content/uploads/2018/01/09162857/voice-biometrics-large2.jpg',
			imgUrl: ['https://drive.google.com/file/d/1bPnu9ec-Q1WzDyGeW81eM4lFqKiGjUfk/preview',
					'https://drive.google.com/file/d/1ULC46VWpLCFEy4FtilZDyTIYmRR3DZsu/preview'],
			members: ["Anshuman Sinha",
					"Anshuman Sinha",
					"Kaveen S",
					"Ria Mishra",
					"Roopam Dhaneria",
					"Vishal Prakash"],
			description: {
				aim: (
					<div>
						Speech Recognition technology has become an increasingly popular concept in recent years.
						From organizations to individuals, the technology is widely used for various utilities it caters
						to. We can already see its applications in Google Assistant, Siri, Alexa, et cetera which have a
						very high accuracy rate of 95-97%. <br />
						This project on Speech Recognition converts speech (limited) to text with a fairly decent
						accuracy of about 93% with a processing speed of only 1.5 seconds approximately for an
						audio clip 2 seconds long on a trained model.
					</div>
				),
				meth: (
					<div>
						Primitive algorithms of speech processing like Hidden Markov Models and Mel-frequency
						cepstral coefficients (MFCCs) were explored theoretically and computationally. A dataset of
						30 English words, amassing 2.21 GB of 64,728 sound recordings in total was chosen. MFCC
						matrices of each recording were generated and stored to ease the computational process
						involved in the 2nd part. <br />
						1D Convolutional Neural Network was deployed on the previously processed MFCCs to
						generate and train the model on the training dataset. Remarkable results rendering
						accuracies as high as 93% were recorded against the pre-trained model of accuracy 89.24%
						on the same dataset. <br />

						<iframe src="https://drive.google.com/file/d/1NaYBbmmz6IPs-8Hjn2qqKTt2zyUuxaXO/preview" width="640" height="480"></iframe>
						<br />
						An inbuilt set of functions was used to accept the input audio file and split it into different
						files according to the word occurrences in the audio segment, that uses the duration of
						pause in between words and the sound of noise in decibels to be treated as zero, as the 2
						hyperparameters. <br />
					</div>
				),
				res: (
					<div>
						This project on Speech Recognition converts speech (limited) to text with a fairly decent
						accuracy of about 93% with a processing speed of only 1.5 seconds approximately for an
						audio clip 2 seconds long on a trained model. <br />

						<iframe src="https://drive.google.com/file/d/1ULC46VWpLCFEy4FtilZDyTIYmRR3DZsu/preview" width="640" height="480"></iframe> 
						<br />

					</div>
				),
				con: (
					<div>
						The Result is also the Conclusion.
					</div>
				)
			},
			meetLink: 'This is the meet link',
		},
		{
			id: 4,
			name: 'Wireless Solar charger',
			oneline: 'To build a 10W portable, wireless solar lithium-ion battery charger. To harness maximum solar energy output, achieve MPPT(Max Power Point Tracking) and charge 8.4V lithium ion cells.',
			logo: 'https://w0.pngwave.com/png/414/632/solar-panels-solar-power-voltaic-system-solar-energy-voltaics-solar-inverter-png-clip-art-thumbnail.png',
			imgUrl: ["https://drive.google.com/file/d/1Ktt7061k5CtmltDpJkWEu9pXEPpT785V/preview",
					"https://drive.google.com/file/d/1kbAaInOYkjIlmnZRbArNxZnYoAexDxFt/preview",
					"https://drive.google.com/file/d/1vDUZ3cCXG8aTbqZwjpEpzi3fw6t1OquT/preview",
					"https://drive.google.com/file/d/1kweJQLZeS9kHct7mFl8me0ABJlG0FlOk/preview",
					"https://drive.google.com/file/d/1TgT_hsuqerjQWJnRmnwasET-lA6pYpvd/preview",
					"https://drive.google.com/file/d/1ojs_-6t9h1ITFE4IkEd8ZNJZV8qWbs5p/preview",
					"https://drive.google.com/file/d/1W7ai43hMkHnzHiqNFjdJSbFKDpEeCAG4/preview",
					"https://drive.google.com/file/d/1nUIQPSwmJTC-pQR_eihdd1r9pvG2YKbh/preview",
					"https://drive.google.com/file/d/1Pl2Lj1mfnXlfHFuQK8CG2guwEHD9Z-Pa/preview",
					"https://drive.google.com/file/d/1sPf5RjFcSPWK5TYFgX1edA-RxBj5pIQ8/preview",
					"https://drive.google.com/file/d/1SE8dyfrmwOy3pYRh75iCZ8ToSuSbC35f/preview"],
			members: ["Prabhansh Pandey",
					"Majji Soma Varun",
					"Nihal",
					"Fouzan tinwala",
					"Amogh Manikkuwar", 
					"Nisarg", 
					"Keesara Vennela",
					"Fidha Palamthalakkal"],
			description: {
				aim: (
					<div>
						To build a 10W portable, wireless solar lithium-ion battery charger. To harness maximum solar energy output, 
						achieve MPPT(Max Power Point Tracking) and charge 8.4V lithium ion cells. 
					</div>
				),
				meth: (
					<div>
						The project was divided into various blocks -
						<ol>
							<li>Solar Panel</li>
							<li>MPPT tracker and Controller Block</li>
							<li>Transmitter block and Inverter</li>
							<li>Reciever block and Rectifier</li>
							<li>CCCV (Constant Current Constant Voltage) Battery Charger Block</li>
						</ol>

						<em>The Main Aim of this project was to build a 10 Watt Portable, Solar, Wireless Lithium Ion Charger.</em> <br />
						To achieve this, we took the following steps:-
						<ol>
							<li>Achieve Maximum Power Point Tracking</li>
							<li>Implement Wireless Transmitter and Receiver</li>
							<li>Implement CCCV (Constant Current - Constant Voltage) Battery Charging</li>
						</ol> <br />
						The project was divided into various blocks - solar panel, mpp tracker and controller block, 
						transmitter block, reciever block and finally the CCCV (Constant Current Constant Voltage) battery charger block.
						A 10W Solar panel of short circuit current of 0.6A and open circuit voltage of 22V was chosen. The mppt tracker was 
						using a buck converter. The microcontroller - ATMEGA328P was used to provide control signals to the MPP tracker and 
						own signals for the transmitter. <br />
						The DC was converted to AC using an inverter and tansmission of power was achieved using a series RLC circuit. 
						The receiver block consisted of a coil for receiving power and a rectifier in the next stage. The battery controller 
						circuit ensures a constant charging current of 1A till the li-ion battery voltage reaches 8.4V and thereafter the 
						battery is charged while maintaining a constant voltage of 8.4V across it. <br />
						Solar Panel : We are using a 10 Watt solar panel with mppt current of 0.7amp and 20 voltage.
					</div>
				),
				res: (
					<div>
						We performed a full Wireless solar charger model simulation in Simulink.
						<iframe src="https://drive.google.com/file/d/1TgT_hsuqerjQWJnRmnwasET-lA6pYpvd/preview" width="640" height="480"></iframe>
						<br />
						Here Yellow colour line represents the input power which slowly get saturated to 10 watt and blue colour line 
						represents output power which saturates to 8.5 watt.
						<iframe src="https://drive.google.com/file/d/1ojs_-6t9h1ITFE4IkEd8ZNJZV8qWbs5p/preview" width="640" height="480"></iframe>
						<br />
						In the below figure yellow plot represents the output voltage received at receiver side which is oscillating at a 
						frequency of 20kHz due to inverter in transmitter side.Blue line represents the output voltage of batter which is 8.4 Volt.
						<iframe src="https://drive.google.com/file/d/1W7ai43hMkHnzHiqNFjdJSbFKDpEeCAG4/preview" width="640" height="480"></iframe>
						<br />
					</div>
				),

				con: (
					<div>The Result is also the Conclusion.</div>
				)
			},
			meetLink: 'This is the meet link',
		},
		{
			id: 5,
			name: 'Hardware Assisted SSL',
			logo: 'https://res.cloudinary.com/dogygnvzl/image/upload/v1597416892/WhatsApp_Image_2020-08-12_at_8.10.31_PM_fidcuq.jpg',
			oneline: "Build a novel architecture for AES-128 cryptographic algorithm and implement on FPGA from scratch for improved speed performance.",
			imgUrl: ['https://drive.google.com/file/d/1bzG7xY9jAvip2WlCCxkaGiFtN61fncTE/preview',
					'https://drive.google.com/file/d/1NgX_R7gkVxzcJOWWmaFF788Dr5y8rwxo/preview',
					'https://drive.google.com/file/d/1UH_pU2WjG4QvBL5inkhn9cdJPEhbJ_uZ/preview',
					'https://drive.google.com/file/d/1iC7yKouuXrfk-RAln_ThpuK6NcfNlr7H/preview',
					'https://drive.google.com/file/d/1M2gdEHiixJ6k4NIHcjOzCdTM3UBr4asB/preview',
					'https://drive.google.com/file/d/1rhYZZBZxH4Gx1AT4y_SL3dwc-4JqmYbp/preview',
					'https://drive.google.com/file/d/1UAWxKadNVsZeLiVGzPYWSf2arCmAt4GV/preview',
					'https://drive.google.com/file/d/1hgoESKZmBr-bCajcUc5D9HbCpuhkz_4b/preview',
					'https://drive.google.com/file/d/1V8GbpPBBVENnTGnCXafkbKTbSGFFUkhQ/preview'],
			members: ["Aaron Sequeira",
					"Aditya Manjunath",
					"P. Priyankaa",
					"Divesh Sakhuja",
					"Ayush Agarwal",
					"Shridevi Kumar"],
			description: {
				aim: (
					<div>
						Build a novel architecture for AES-128 cryptographic algorithm and implement on FPGA from scratch for improved speed performance.
					</div>
				),
				meth: (
					<div>
						Github: <a href="https://github.com/PriyankaPeri/AES_FPGA-">https://github.com/PriyankaPeri/AES_FPGA-</a> <br />
						AES-128 is a symmetric key encryption algorithm that acts on 128 bits of data. The message is encrypted in 10 rounds.
						AES implemented on a FPGA dedicates special resources hence speeding up the process. <br />
						The implementation of AES is done using pipelining to increase throughput. All blocks with the exception of 
						SubBytes consist of only combinational logic as opposed to a look up table, reducing the delay. The architecture 
						is as shown above. It includes blocks that execute the various stages which are substitution box, shift rows, mix 
						columns and add round key. The keys for the next round are processed alongside the blocks while the messages are 
						being encrypted, and hence there is no need to have a reserved resource to perform key expansion process. <br />
						The data is read 128 bits at a time from the memory. Data that precedes a null (or data with only zeroes) is interpreted
						as the key and the data that follows the key are interpreted as the message until the next null is encountered. <br />
						The project is coded in Verilog, a widely used Hardware Description Language. The link on the top contains the 
						repository to the source code along with a README giving a short description of each of the sub-blocks.
					</div>
				),
				res: (
					<div>
						The simulation results for the various sub-block is given. The original and encrypted messages 
						are shown in the console log. Architecture of the complete design is also given.
					</div>
				),
				con: (
					<div>
						We successfully managed to implement the function of AES-128 on Verilog and the simulations were verified 
						and design was synthesised. The results can be easily extended to AES-192 and AES- 256. Due to the Covid-19 
						pandemic and lack of access to hardware components, the block wasn’t implemented on a FPGA board. Future scope 
						for the project includes implementing on VLSI, and integrating it with the other encryption methods for a 
						unified SSL/TLS on chip. 
					</div>
				)
			},
			meetLink: 'This is the meet link',
		},
		{
			id: 6,
			name: 'Medical Image Segmentation',
			logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/MI_with_contraction_bands_very_high_mag.jpg',
			oneline: 'To segment nuclei from histopathology images for effective diagnosis and treatment of cancer.',
			imgUrl: ['https://drive.google.com/file/d/1bUuCLucFijQZ-E2oLmWIxD9bHmdKr-eq/preview',
					'https://drive.google.com/file/d/1LdtLceU7ZvafR2neamQImmA3sOsScT2b/preview',
					'https://drive.google.com/file/d/1nTBQTyWclm88-63e1IkdgNJ8K_NZFxDI/preview',
					'https://drive.google.com/file/d/1YUzuflHQttK6fMqFk_9wv6C_EfR04G97/preview',
					'https://drive.google.com/file/d/1p-bfoufwdkFnmf-EH0KWGARXAbhdGFde/preview'],
			members: ["Rohith Yatgiri",
					"Aditya Manjunath",
					"Shrutha D",
					"Sai Rohit P"],
			description: {
				aim: (
					<div>
						To segment nuclei from histopathology images for effective diagnosis and treatment of cancer.
					</div>
				),
				meth: (
					<div>
						<ol>
							<li>Preprocessing stage includes data augmentation to avoid over fitting.</li>
							<li>Building standard mobile architectures as reference models.</li>
							<li>These include UNET,Segnet,DANet.</li>
							<li>Training and testing on above mentioned architectures.</li>
							<li>Build other segmentation algorithm like deeplabv3, encoder-decoder etc</li>
							<li>Compare the results obtained from above algorithm with above architectures. </li>
							<li>Post Processing stage used to separate the boundaries of adjacent cells.</li>
						</ol>
					</div>
				),
				res: (
					<div>
						The following results have been obtained from various architectures. <br />
						The table shown below is a comparison between the train and test accuracies of different models. <br />
						<iframe src="https://drive.google.com/file/d/1p-bfoufwdkFnmf-EH0KWGARXAbhdGFde/preview" width="640" height="480"></iframe>
						<br />
						It can be seen that UNET yielded the highest results in both test and train sets.
						Following is a set of images which include Original Images(from the dataset), Ground Truth
						(Expected outcome which is also available in the dataset) and outputs from different
						architectures.
						<iframe src="https://drive.google.com/file/d/1YUzuflHQttK6fMqFk_9wv6C_EfR04G97/preview" width="640" height="480"></iframe>
					</div>
				),
				con: (
					<div>
						This work addresses some of the typical segmentation algorithms for medical images.
						Segmentation plays a vital role in telemedicine applications for the analysis of the region of
						interest. The algorithms are grouped into three generations, and the rank is assigned based on
						the comparative analysis of their features. The algorithms are tested on real-time data sets, and
						this work will be a guidance for the researchers in medical image segmentation. The hybrid
						segmentation algorithms are gaining much importance, as they produce superior results by
						overwhelming the limitations of conventional algorithms. A segmentation technique will not
						yield efficient result for all medical imaging modalities; based on the image modality and region
						of interest, appropriate algorithm has to be chosen. The outcome of this work will be an aid for
						the identification of diseases like cyst and tumor in medical images. Our future work will be a
						detailed analysis of hybrid segmentation models for the delineation of anatomical organs and
						anomalies.
					</div>
				)
			},
			meetLink: 'This is the meet link',
		},
	],
	chronicle: [
		{
			id: 1,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 2,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 3,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
	],
	clutch: [
		{
			id: 1,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 2,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 3,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 4,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
	],
	concrete: [
		{
			id: 1,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 2,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 3,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 4,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 5,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
	],
	create: [
		{
			id: 1,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 2,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
	],
	credit: [
		{
			id: 1,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 2,
			name: 'Project Name ',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 3,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 4,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 5,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 6,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 7,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
	],
	crypt: [
		{
			id: 1,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 2,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 3,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 4,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 5,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 6,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
		{
			id: 7,
			name: 'Project Name',
			imgUrl: '',
			members: [],
			description: <div>this is the description</div>,
			meetLink: 'This is the meet link',
		},
	],
};
export const sigNames = [
	{
		name: 'catalyst',
		id: 1,
		logo: 'https://iste.nitk.ac.in/api/media/sig_pictures/8_catalyst.jpg',
	},
	{
		name: 'charge',
		id: 2,
		logo: 'https://iste.nitk.ac.in/api/media/sig_pictures/2_charge.jpg',
	},
	{
		name: 'chronicle',
		id: 3,
		logo: 'https://iste.nitk.ac.in/api/media/sig_pictures/4_chronle.jpg',
	},
	{
		name: 'clutch',
		id: 4,
		logo: 'https://iste.nitk.ac.in/api/media/sig_pictures/5_cluych.jpg',
	},
	{
		name: 'concrete',
		id: 5,
		logo: 'https://iste.nitk.ac.in/api/media/sig_pictures/6_concreye.jpg',
	},
	{
		name: 'create',
		id: 6,
		logo: 'https://iste.nitk.ac.in/api/media/sig_pictures/7_create.jpg',
	},
	{
		name: 'credit',
		id: 7,
		logo: 'https://iste.nitk.ac.in/api/media/sig_pictures/3_crediy.jpg',
	},
	{
		name: 'crypt',
		id: 8,
		logo: 'https://iste.nitk.ac.in/api/media/sig_pictures/1_crypt.jpg',
	},
];
export const offsetCoefficient = -3 / 8;
