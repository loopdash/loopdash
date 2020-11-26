<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package wp_base
 */

$footer_background = get_theme_mod('footer_background');
?>
</main>
	<footer id="colophon" class="pa-5 site-footer" style="background-color:<?php echo $footer_background; ?>;">
		<div class="flex flex-row">

		</div>
		<div class="site-info text-center">
				<?php
				/* translators: 1: Theme name, 2: Theme author. */
				printf( esc_html__( 'Website by %2$s.', 'wp_base' ), 'wp_base', '<a href="https://loopdash.com/" target="_blank">Loopdash</a>' );
				?>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
