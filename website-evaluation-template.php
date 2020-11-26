<?php
/**
* Template Name: Website evaluation template 
*/
get_header();
?>

	<main id="primary" class="site-main">
		<section>
			<div class="bg-gray-100 py-12 px-3">
				<div class="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:py-20 lg:px-12 p-4 mt-12">
					<h1 class="text-base text-blue-600 font-semibold tracking-wide uppercase">Website Evaluation</h1>
					<h2 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
						Grow your website traffic
					</h2>
					<p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
					Does your website have issues that are hurting your business? Get your complimentary website evaluation to find out.
					</p>

					<div class="mt-5 sm:mt-8 sm:flex sm:justify-start">
						<div class="rounded-md shadow mb-3">
							<a href="#form" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
								Get your free evaluation
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section>
			<div class="py-24 bg-white">
				<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				
					<?php 
						$h2 = 'Boost your website';
						$h3 = 'Uncover how to make your site more profitable';
						$p = 'Identity opportunities within our site to improve your conversion rate, SEO, and performance. Our evaluation ensures that your brand is in the best position for future growth.';
						include 'text-set.php';
					?>

					<div class="mt-10">
						<dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-8 md:gap-y-10">
							<?php 
								$featureIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-award'><circle cx='12' cy='8' r='7'></circle><polyline points='8.21 13.89 7 23 12 20 17 23 15.79 13.88'></polyline></svg>";
								$featureTitle = "Expert analysis";
								$featureDescription = "Improve your site with a free 30-minute technical analysis with one of our engineers.";
								include 'feature-callout.php';
							?>

							<?php 
								$featureIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-star'><polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'></polygon></svg>";
								$featureTitle = "Best Practices";
								$featureDescription = "Maximize your conversion rate with a thorough technical analysis of your website’s health.";
								include 'feature-callout.php';
							?>

							<?php 
								$featureIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-search'><circle cx='11' cy='11' r='8'></circle><line x1='21' y1='21' x2='16.65' y2='16.65'></line></svg>";
								$featureTitle = "SEO";
								$featureDescription = "Get more organic traffic and qualified leads by improving your brand's online presence.";
								include 'feature-callout.php';
							?>

							<?php 
								$featureIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-bar-chart'><line x1='12' y1='20' x2='12' y2='10'></line><line x1='18' y1='20' x2='18' y2='4'></line><line x1='6' y1='20' x2='6' y2='16'></line></svg>";
								$featureTitle = "Performance";
								$featureDescription = "Stop worrying about your site crashing. Find out how to eliminate downtime and unplanned outages.";
								include 'feature-callout.php';
							?>
						</dl>
					</div>
					<div class="mt-5 sm:mt-8 sm:flex sm:justify-start lg:justify-center">
						<div class="rounded-md shadow mb-3">
							<a href="#form" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
								Get your free review
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>

		<?php 
			$testimonialBody = 'My team has been working with Gary for over two years now and he has been a tremendous partner. He has created a software tool web application for us that continues to evolve and is a big asset to our offering. Gary has done a great job of listening to our goals and needs, staying organized, being transparent, and ensuring he hits deadlines.';
			$testimonialName = 'Sam Jennings';
			$testimonialPosition = 'Founder';
			$testimonialCompany = 'Marketplace Strategy';
			include 'testimonial.php';
		?>


		<section>
			<div class="py-12">
				<div class="mt-5 sm:mt-8 max-w-4xl mx-auto px-4 lg:px-8">
					<?php 
						$h2 = 'Contact Us';
						$h3 = 'Setup your website evaluation<br/><span class="text-blue-400">in under 23 seconds</span>';
						$p = 'Get more from your website. Fill out the form below and we\'ll give you a free website evaluation within 48 hours.';
						include 'text-set.php'; 
					?>
					<div class="mt-8 md:flex md:justify-center max-w-3xl mx-auto lg:px-8" id="form">
						<?php echo do_shortcode('[contact-form-7 id="6" title="Contact form 1"]'); ?>
					</div>
				</div>
			</div>
		</section>

	</main><!-- #main -->

<?php
//get_sidebar();
get_footer();