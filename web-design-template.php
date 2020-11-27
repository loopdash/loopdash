<?php
/**
* Template Name: Web design 
*/
get_header();
?>

	<main id="primary" class="site-main">
		<section>
			<div class="bg-gray-100 py-12 px-3">
				<div class="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:py-20 lg:px-12 p-4">
					<h1 class="text-base text-blue-600 font-semibold tracking-wide uppercase">Website Design &amp; Development</h1>
					<h2 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
						Get a new site in 8 weeks
					</h2>
					<p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
						We build sites that work for your business and your users — be it a complex intranet platform, a progressive web app, or a marketing site.
					</p>

					<div class="mt-5 sm:mt-8 sm:flex sm:justify-start">
						<div class="rounded-md shadow mb-3">
							<a href="#form" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
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
								$featureIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-smartphone'><rect x='5' y='2' width='14' height='20' rx='2' ry='2'></rect><line x1='12' y1='18' x2='12.01' y2='18'></line></svg>";
								$featureTitle = "Responsive";
								$featureDescription = "Your website will look good on any screen, including mobile and tablets.";
								include 'feature-callout.php';
							?>

							<?php 
								$featureIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-lock'><rect x='3' y='11' width='18' height='11' rx='2' ry='2'></rect><path d='M7 11V7a5 5 0 0 1 10 0v4'></path></svg>";
								$featureTitle = "Security";
								$featureDescription = "Get peace of mind knowing we'll prevent suspicious activity and proactively stop hackers from accessing your site.";
								include 'feature-callout.php';
							?>

							<?php 
								$featureIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-eye'><path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path><circle cx='12' cy='12' r='3'></circle></svg>";
								$featureTitle = "Visitor Tracking";
								$featureDescription = "See who is visiting your site, at what time, and from what location.";
								include 'feature-callout.php';
							?>

							<?php 
								$featureIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-database'><ellipse cx='12' cy='5' rx='9' ry='3'></ellipse><path d='M21 12c0 1.66-4 3-9 3s-9-1.34-9-3'></path><path d='M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5'></path></svg>";
								$featureTitle = "Automatic backups";
								$featureDescription = "Never lose content again. We save your site throughout the month and can restore it at a moment's notice.";
								include 'feature-callout.php';
							?>
						</dl>
					</div>
					<div class="mt-5 sm:mt-8 sm:flex sm:justify-start lg:justify-center">
						<div class="rounded-md shadow mb-3">
							<a href="#form" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
								Get your free review
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>

		<?php 
			$testimonialBody = 'My team has been working with Loopdash for over two years now and he has been a tremendous partner. He has created a software tool web application for us that continues to evolve and is a big asset to our offering. Loopdash has done a great job of listening to our goals and needs, staying organized, being transparent, and ensuring he hits deadlines.';
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
						$p = 'Get more from your website. Fill out the form below and we will provide a free website evaluation within 3 days.';
						include 'text-set.php'; 
					?>
					<div class="mt-8 md:flex md:justify-center max-w-3xl mx-auto lg:px-8" id="form">
						<?php echo do_shortcode('[contact-form-7 id="471" title="Contact form"]'); ?>
					</div>
				</div>
			</div>
		</section>

	</main><!-- #main -->

<?php
//get_sidebar();
get_footer();