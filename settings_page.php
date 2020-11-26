<?php
/**
 * @internal never define functions inside callbacks.
 * these functions could be run multiple times; this would result in a fatal error.
 */
 
/**
 * custom option and settings
 */
function ldoptions_settings_init() {
    // Register a new setting for "ldoptions" page.
    register_setting( 'ldoptions', 'loopdash_options' );
 
    // Register a new section in the "ldoptions" page.
    add_settings_section(
        'ldoptions_section_developers',
        __( '', 'ldoptions' ), 'ldoptions_section_developers_callback',
        'ldoptions'
    );
    // Register a new section in the "ldoptions" page.
    // add_settings_section('id', 'title', 'callback', 'page');
    add_settings_section(
        'default',
        'General',
        '',
        'ldoptions'
    );
    add_settings_section(
        'ldoptions_section_developers',
        __( '', 'ldoptions' ), 'ldoptions_section_developers_callback',
        'ldoptions'
    );
    add_settings_field(
        'loopdash_show_post_author', 
        'Show Post Author',
        'post_author_callback',
        'ldoptions',
        'default', // section name if we have multiple sections
        [
            // any arguments
            'label_for' => 'loopdash_show_post_author',
            'class' => 'ldoptions_row',
            'ldoptions_custom_data' => 'custom'
        ]
    );
    /*
    // Register a new field in the "ldoptions_section_developers" section, inside the "ldoptions" page.
    add_settings_field(
        'ldoptions_field_name', // As of WP 4.6 this value is used only internally.
                                // Use $args' label_for to populate the id inside the callback.
            __( 'Title for Field', 'ldoptions' ),
        'ldoptions_field_callback_function',
        'ldoptions',
        'ldoptions_section_developers',
        array(
            'label_for'         => 'field_id',
            'class'             => 'ldoptions_row',
            'ldoptions_custom_data' => 'custom',
        )
    );
    */
}
 
/**
 * Register our ldoptions_settings_init to the admin_init action hook.
 */
add_action( 'admin_init', 'ldoptions_settings_init' );
 
 
/**
 * Custom option and settings:
 *  - callback functions
 */
 
 
/**
 * Developers section callback function.
 *
 * @param array $args  The settings array, defining title, id, callback.
 */
function ldoptions_section_developers_callback( $args ) {
    // This doesn't need to do anything
}

function post_author_callback($args) {
    ?>
    <input type="text" id="<?php echo esc_attr($args['labor_for']); ?>" />
    <?php
}
 
/**
 * Pill field callbakc function.
 *
 * WordPress has magic interaction with the following keys: label_for, class.
 * - the "label_for" key value is used for the "for" attribute of the <label>.
 * - the "class" key value is used for the "class" attribute of the <tr> containing the field.
 * Note: you can add custom key value pairs to be used inside your callbacks.
 *
 * @param array $args
 */
function ldoptions_field_callback_function( $args ) {
    // Get the value of the setting we've registered with register_setting()
    ?>
    Custom theme options can go here.
    <?php
}
 
/**
 * Add the top level menu page.
 */
function ldoptions_options_page() {
    add_menu_page(
        'ldoptions',
        'Theme Options',
        'manage_options',
        'ldoptions',
        'ldoptions_options_page_html'
    );
}
 
 
/**
 * Register our ldoptions_options_page to the admin_menu action hook.
 */
add_action( 'admin_menu', 'ldoptions_options_page' );
 
 
/**
 * Top level menu callback function
 */
function ldoptions_options_page_html() {
    // check user capabilities
    if ( ! current_user_can( 'manage_options' ) ) {
        return;
    }
 
    // add error/update messages
 
    // check if the user have submitted the settings
    // WordPress will add the "settings-updated" $_GET parameter to the url
    if ( isset( $_GET['settings-updated'] ) ) {
        // add settings saved message with the class of "updated"
        add_settings_error( 'ldoptions_messages', 'ldoptions_message', __( 'Settings Saved', 'ldoptions' ), 'updated' );
    }
 
    // show error/update messages
    settings_errors( 'ldoptions_messages' );
    ?>
    <div class="wrap">
        <h1>Theme Settings</h1>
        <form action="options.php" method="post">
            <?php
            // output security fields for the registered setting "ldoptions"
            settings_fields( 'ldoptions' );
            // output setting sections and their fields
            // (sections are registered for "ldoptions", each field is registered to a specific section)
            do_settings_sections( 'ldoptions' );
            
            //submit_button( 'Save Settings' );
            ?>
        </form>
    </div>
    <?php
}