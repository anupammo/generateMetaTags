<?php
/**
 * Plugin Name: Meta Tag Generator
 * Description: Automatically generates meta tags and Open Graph tags for WordPress pages.
 * Version: 1.0
 * Author: Your Name
 */

// Enqueue the JavaScript file
function mtg_enqueue_scripts() {
    wp_enqueue_script('meta-tag-generator', plugin_dir_url(__FILE__) . 'meta-tag-generator.js', array(), '1.0', true);
}
add_action('wp_enqueue_scripts', 'mtg_enqueue_scripts');

?>