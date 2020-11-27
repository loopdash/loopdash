<?php
/**
* Template Name: Home 
*/
get_header();
?>

	<main id="primary" class="site-main">
		<?php include 'hero-image.php'; ?>
		
		<section>
			<div class="py-24 bg-white">
				<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				
					<?php 
						$h2 = 'What we do';
						$h3 = 'We build better apps';
						$p = 'Leveraging modern approaches to web development, we bring front-end, back-end, and architecture together to meet your business needs.';
						include 'text-set.php';
					?>

					<div class="mt-10">
						<dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-8 md:gap-y-10">
							<?php 
								$featureIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-layout'><rect x='3' y='3' width='18' height='18' rx='2' ry='2'></rect><line x1='3' y1='9' x2='21' y2='9'></line><line x1='9' y1='21' x2='9' y2='9'></line></svg>";
								$featureTitle = "Web design";
								$featureDescription = "Boost your brand's online presence with site customized to your business. Our sites are user-friendly, responsive, and obtain more qualified leads.";
								include 'feature-callout.php';
							?>

							<?php 
								$featureIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check-circle'><path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path><polyline points='22 4 12 14.01 9 11.01'></polyline></svg>";
								$featureTitle = "Website evaluation";
								$featureDescription = "Having website problems? Discover how to get more traffic, leads, and better performance through our complimentary website evaluation.<a href='#form' class='mt-6 block rounded-md shadow mb-3 flex items-center justify-center px-3 py-1 border border-transparent text-base font-bold rounded-md text-white bg-blue-600 hover:bg-blue-700'>Get your free review</a>";
								include 'feature-callout.php';
							?>

							<?php 
								$featureIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-code'><polyline points='16 18 22 12 16 6'></polyline><polyline points='8 6 2 12 8 18'></polyline></svg>";
								$featureTitle = "Application development";
								$featureDescription = "Focus on the important parts of your business by automating time-consuming tasks. We save your business time and money by using the latest technology to meet your business needs.";
								include 'feature-callout.php';
							?>

							<?php 
								$featureIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-hard-drive'><line x1='22' y1='12' x2='2' y2='12'></line><path d='M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z'></path><line x1='6' y1='16' x2='6.01' y2='16'></line><line x1='10' y1='16' x2='10.01' y2='16'></line></svg>";
								$featureTitle = "Hosting & support";
								$featureDescription = "Changes are inevitable, therefore application are never truly finished. Our software support team keeps your product secure, maintained, and enhanced regardless of what happens.";
								include 'feature-callout.php';
							?>
						</dl>
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
						$h3 = 'Let’s Work Together';
						$p = 'Get in touch to let us know what you’re looking for and one of our solutions architects will get back to you soon.';
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