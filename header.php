<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package wp_base
 */

$header_background = get_theme_mod('header_background');
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">

	<header id="masthead" class="flex-row site-header pa-5 align-center" style="background-color:<?php echo $header_background; ?>;">
		<?php
			if (!isset($_GET['lp'])) {
				include 'nav.php';
			} else {
				return;
			}
		?>
	</header><!-- #masthead -->
	<main>
