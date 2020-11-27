<?php
/**
* Template Name: Contact
*/
get_header();
?>

	<main id="primary" class="site-main">
		
		<section>
			<div class="bg-gray-100 bg-gray-100 py-12 px-3">
				<div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
          <h1 class="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Contact
					</h1>
					<h2 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              We build more than <span class="text-blue-500">apps and websites</span>
					</h2>
				</div>
			</div>
		</section>

		<section class="mt-12">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-lg text-gray-500 pb-8 grid md:grid-cols-2 lg:grid-cols-2 md:gap-x-8 md:gap-y-10">
        <div>
					<h3 class="text-2xl text-blue-500 font-bold">Let's work together</h3>
					<p>As a consultancy, Loopdash offers more than just code; we provide project leadership and <a href="http://loopdash.com/about">technical expertise</a>. We don't just write code - we'll guide you toward a maintainable and sustainable product, and ensure your business needs are met every step of the way.</p>
        </div>

        <div class="max-w-4xl mx-auto">
					<div class="mt-8 md:flex md:justify-center max-w-3xl mx-auto" id="form">
						<?php echo do_shortcode('[contact-form-7 id="6" title="Contact form"]'); ?>
					</div>
				</div>
			</div>
		</section>

	</main><!-- #main -->

<?php
//get_sidebar();
get_footer();
