<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width" />
    <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?>>
  <header class="header-wrapper">
    <div class="header">
      <h1 class="header-brand">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_html( get_bloginfo( 'name' ) ); ?>" rel="home">
          <?php echo esc_html( get_bloginfo( 'name' ) ); ?>
        </a>
      </h1>
      <nav class="nav">
        <?php wp_nav_menu( array( 'theme_location' => 'main-menu' ) ); ?>
      </nav>
    </div>
  </header>
