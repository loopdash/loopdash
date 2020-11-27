<?php
/**
* Template Name: About template 
*/
get_header();
?>

	<main id="primary" class="site-main">
		
		<section>
			<div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px- lg:text-center my-12">
				<h1 class="text-base text-blue-600 font-semibold tracking-wide uppercase">
					About Loopdash
				</h1>
				<h2 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
						We try to <span class="text-blue-500">not write software</span>
				</h2>
			</div>
		</section>

		<section>
			<div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-lg text-gray-500 pb-8 divide-y divide-blue-50">
				<p class="py-5">At Loopdash, we don’t write software we don't have to. It’s not because we don’t enjoy what we do, quite the opposite. But for us software is a means to an end - a way to solve a problem. We've been around a while, so we have a few guidelines to ensure we leave things better than we found them.</p>

				<p class="py-5"><span class="text-blue-600 font-bold">If a solution exists, we won’t rebuild it.</span> Simply because there's no reason for us to. If we know of a SaaS product that solves 95% of the problem, we will tell you about it. Simple as that. We won’t rebuild our own version just because we can. And frankly, we think it’s bad business to even try.</p>

				<p class="py-5"><span class="text-blue-600 font-bold">We try to not code.</span> So before we do, we think of all other practical solutions. We're not lazy, we just act in our clients' best interest. That’s how we’ve always operated and how we always will.</p>

				<p class="py-5"><span class="text-blue-600 font-bold">Is maintaining it worthwhile?</span> We don't write code where the costs outweighs the value. We keep this top of mind throughout the project lifecycle.</p>
			</div>
		</section>

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
						<?php echo do_shortcode('[contact-form-7 id="6" title="Contact form 1"]'); ?>
					</div>
				</div>
			</div>
		</section>

	</main><!-- #main -->

<?php
//get_sidebar();
get_footer();