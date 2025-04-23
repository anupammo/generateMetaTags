<?php
function mtg_add_meta_box() {
    add_meta_box(
        'mtg_meta_box',
        'Meta Tag Generator',
        'mtg_meta_box_callback',
        ['post', 'page'],
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'mtg_add_meta_box');

function mtg_meta_box_callback($post) {
    $pageTitle = get_the_title($post->ID);
    $metaDescription = get_post_meta($post->ID, '_mtg_meta_description', true);
    $pageUrl = get_permalink($post->ID);
    $ogImage = get_post_meta($post->ID, '_mtg_meta_image', true) ?: get_the_post_thumbnail_url($post->ID, 'full');
    $ogType = get_post_meta($post->ID, '_mtg_meta_ogtype', true) ?: 'website';
    $twitterCard = get_post_meta($post->ID, '_mtg_meta_twitter_card', true) ?: 'summary_large_image';

    ?>
    <div class="mtg-meta-box">
        <label>Page Title:</label>
        <input type="text" name="mtg_title" value="<?php echo esc_attr($pageTitle); ?>" readonly>

        <label>Meta Description:</label>
        <textarea name="mtg_meta_description"><?php echo esc_attr($metaDescription); ?></textarea>

        <label>Page URL:</label>
        <input type="text" name="mtg_url" value="<?php echo esc_url($pageUrl); ?>" readonly>

        <label>Featured Image URL:</label>
        <input type="text" name="mtg_meta_image" value="<?php echo esc_url($ogImage); ?>" readonly>

        <label>Open Graph Type:</label>
        <select name="mtg_og_type">
            <option value="website" <?php selected($ogType, 'website'); ?>>Website</option>
            <option value="article" <?php selected($ogType, 'article'); ?>>Article</option>
        </select>

        <label>Twitter Card Type:</label>
        <select name="mtg_twitter_card">
            <option value="summary" <?php selected($twitterCard, 'summary'); ?>>Summary Card</option>
            <option value="summary_large_image" <?php selected($twitterCard, 'summary_large_image'); ?>>Large Summary Card</option>
        </select>
    </div>
    <?php
}

function mtg_save_meta_tags($post_id) {
    if (array_key_exists('mtg_meta_description', $_POST)) {
        update_post_meta($post_id, '_mtg_meta_description', sanitize_text_field($_POST['mtg_meta_description']));
    }
}
add_action('save_post', 'mtg_save_meta_tags');
?>
