<?php
  /* Template Name: Regular template*/
?>

<?php get_header(); ?>
<main class="content-wrapper">
  <div class="content-hero">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
      <?php the_content(); ?>
    <?php endwhile; endif; ?>
  </div>
</main>
<?php get_footer(); ?>
