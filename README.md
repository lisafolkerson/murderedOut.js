# murderedOut-js

<header>
			<img src="assets/imgs/heart.png" class="heart" alt="A beautiful rainbow heart">
			<h1>murderedOut.js</h1>
			<h2>"Lights Out for Earth Day"</h2>
		</header>
		<section class="docs">
			<img class="kat" src="assets/imgs/smileKat.gif" alt="">
			<h2>Why Murdered Out?</h2>
			<p>Sometimes when we are on websites our screens produce a hefty amount of light. Industry front runners have addressed this issue through the creation of visually darker sites (Blackl, The Dark Side of Google, etc.).
			<p>These alternatives are cognizant that the artificial light emitted by your computer contributes to the degradation of photic habitats and to the average levels of natural light. This light is human generated. Accordingly, it is up to us, on earth day and every day, to reduce the amount of artificial light we are producing. </p>
			<p>People may choose to Murder Out their own websites on Earth Day, April 22, to encourage users to use less energy.</p>
			<p>Also as Rick Ross once said "Success in my possession, had you murdered out of karma".</p>
			<p> Basically murdering out your site successfully results in good karma.</p>
		</section>
		<section>	
			<h2>How to Murder Out</h2>
			<h3>Murder out any site from your browser</h3>
			<p>Drag the bookmarklet from the site [murderedOutjs.com](http://murderedoutjs.com) into your bookmarks tab or right-click add to bookmarks. From there you can click it while you are on any site to simply and easily Murder It Out</p>
		</section>
		<section>	
			<h3>Murder Out your own site (for Earth Day)</h3>
			<p>Murdering out your website is simple. The first step is to include the muderedOut.js file and link to it in your HTML. It will look a little something like this:</p>
			<pre>
<code class="code">
	&lt;script src="murderedOut.js"&gt;&lt;/script&gt;
</code>
			</pre>
			<p>Once you have linked the murderedOut.js file you need to call the murderedOut() function in your main scripts file. That looks like this:</p>
			<pre>
<code class="code">
	$(function(){
		murdered();	
	});//end doc ready
</code>
			</pre>
		<p>If you have colourful before and after pseudo elements in your code give them a class of "murder" and add the following CSS to your styles sheet.</p>
		<pre>
<code class="code">
	.murder:before, .murder:after {
		background-color: black;
		background-image: none;
		color: #333;
		text-shadow: 0 0 0 black;
		border: 1px solid black;
		box-shadow: 0 0 0 black;
		border-color: black;
		fill: black;
	}
</code>		
		</pre>	
		<footer>
		<div class="tweet">
				<a href="https://twitter.com/intent/tweet?text=I%20murdered%20out%20my%20site%20for%20earth%20day%20with%20&url=http%3A%2F%2Fmurderedoutjs.com" target="_">
					<i class="fa fa-twitter" class= "twitterLogo"></i>
					<p>tweet</p>
				</a>
			</div>	
					<p class="credits">made with &#9825; by <a href="http://lisafolkerson.com/" target="_">Lisa</a>  &#38; <a href="http://jordandeutsch.com/" target="_">Jordan</a></p>