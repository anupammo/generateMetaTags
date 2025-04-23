<?php
/**
 * Plugin Name: Meta Tag Generator
 * Plugin URI: https://yourwebsite.com
 * Description: A WordPress plugin to auto-fetch and edit meta tags with Open Graph, Twitter, and Schema Markup.
 * Version: 1.2.0
 * Author: Anupam Mondal
 * Author URI: https://anupammondal.in
 * License: GPL2
 */

defined('ABSPATH') or die('No direct access allowed!');

// Include meta box and settings functions
require_once plugin_dir_path(__FILE__) . 'includes/meta-box.php';
require_once plugin_dir_path(__FILE__) . 'includes/settings.php';

// Inject meta tags into page headers
function mtg_add_meta_tags() {
    if (is_single() || is_page()) {
        global $post;
        $pageTitle = get_the_title($post->ID);
        $metaDescription = get_post_meta($post->ID, '_mtg_meta_description', true) ?: get_bloginfo('description');
        $pageUrl = get_permalink($post->ID);
        $ogImage = get_post_meta($post->ID, '_mtg_meta_image', true) ?: get_the_post_thumbnail_url($post->ID, 'full');
        $ogType = get_post_meta($post->ID, '_mtg_meta_ogtype', true) ?: get_option('mtg_default_og_type', 'website');
        $twitterCard = get_post_meta($post->ID, '_mtg_meta_twitter_card', true) ?: get_option('mtg_default_twitter_card', 'summary_large_image');

        echo "\n<!-- Primary Meta Tags -->\n";
        echo "<title>$pageTitle</title>\n";
        echo "<meta name='title' content='$pageTitle'>\n";
        echo "<meta name='description' content='$metaDescription'>\n";

        echo "\n<!-- Open Graph / Facebook -->\n";
        echo "<meta property='og:type' content='$ogType'>\n";
        echo "<meta property='og:url' content='$pageUrl'>\n";
        echo "<meta property='og:title' content='$pageTitle'>\n";
        echo "<meta property='og:description' content='$metaDescription'>\n";
        echo "<meta property='og:image' content='$ogImage'>\n";

        echo "\n<!-- Twitter -->\n";
        echo "<meta property='twitter:card' content='$twitterCard'>\n";
        echo "<meta property='twitter:url' content='$pageUrl'>\n";
        echo "<meta property='twitter:title' content='$pageTitle'>\n";
        echo "<meta property='twitter:description' content='$metaDescription'>\n";
        echo "<meta property='twitter:image' content='$ogImage'>\n";

        echo "\n<!-- Schema Markup (JSON-LD) -->\n";
        $jsonLD = [
            "@context" => "https://schema.org",
            "@type" => $ogType === "article" ? "Article" : "WebPage",
            "name" => $pageTitle,
            "url" => $pageUrl,
            "description" => $metaDescription,
            "image" => $ogImage
        ];
        echo "<script type='application/ld+json'>" . json_encode($jsonLD, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) . "</script>\n";
    }
}
add_action('wp_head', 'mtg_add_meta_tags');
?>
