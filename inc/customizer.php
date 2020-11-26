<?php
/**
 * wp_base Theme Customizer
 *
 * @package wp_base
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function wp_base_customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';
	
	if ( isset( $wp_customize->selective_refresh ) ) {
		$wp_customize->selective_refresh->add_partial(
			'blogname',
			array(
				'selector'        => '.site-title a',
				'render_callback' => 'wp_base_customize_partial_blogname',
			)
		);
		$wp_customize->selective_refresh->add_partial(
			'blogdescription',
			array(
				'selector'        => '.site-description',
				'render_callback' => 'wp_base_customize_partial_blogdescription',
			)
		);
	}
}
add_action( 'customize_register', 'wp_base_customize_register' );

/**
 * Render the site title for the selective refresh partial.
 *
 * @return void
 */
function wp_base_customize_partial_blogname() {
	bloginfo( 'name' );
}

/**
 * Render the site tagline for the selective refresh partial.
 *
 * @return void
 */
function wp_base_customize_partial_blogdescription() {
	bloginfo( 'description' );
}

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function wp_base_customize_preview_js() {
	wp_enqueue_script( 'wp_base-customizer', get_template_directory_uri() . '/js/customizer.js', array( 'customize-preview' ), _S_VERSION, true );
}
add_action( 'customize_preview_init', 'wp_base_customize_preview_js' );


function loopdash_add_background_section($wp_customize) {
	$wp_customize->add_section('loopdash_backgrounds', array(
		'title' => 'Loopdash Backgrounds',
		'priority' => 300
	));
}
add_action('customize_register', 'loopdash_add_background_section');

function background_customizer($wp_customize) {
	$wp_customize->add_setting( 'header_background' , array(
		'default'     => '#ffffff'
	));
	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'header_background', array(
        'label' => 'Header Background Color',
        'section' => 'loopdash_backgrounds',
        'settings' => 'header_background'
	)));
	
	
	$wp_customize->add_setting( 'footer_background' , array(
		'default'     => '#ffffff'
	));
	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'footer_background', array(
        'label' => 'Footer Background Color',
        'section' => 'loopdash_backgrounds',
        'settings' => 'footer_background'
    )));
}
add_action('customize_register', 'background_customizer');