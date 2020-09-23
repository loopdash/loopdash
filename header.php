<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width" />
    <?php wp_head(); ?>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-177470860-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-177470860-1');
    </script>
  </head>
  <body <?php body_class(); ?> style="background: #ffffff; background-color: #ffffff;">
  <header class="header-wrapper">
    <div class="header">
      <div class="header-brand">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_html( get_bloginfo( 'name' ) ); ?>" rel="home">
          <?php echo esc_html( get_bloginfo( 'name' ) ); ?>
        </a>
      </div>
      <nav class="nav">
        <?php wp_nav_menu( array( 'theme_location' => 'main-menu' ) ); ?>
      </nav>
    </div>
  </header>
