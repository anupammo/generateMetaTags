<div class="meta-tag-generator">
    <form id="metaForm">
        <label>Page Title:</label>
        <input type="text" id="pageTitle" readonly>

        <label>Meta Description:</label>
        <textarea id="metaDescription"></textarea>

        <label>Page URL:</label>
        <input type="text" id="url" readonly>

        <label>Featured Image URL:</label>
        <input type="text" id="mtg_meta_image">

        <label>Open Graph Type:</label>
        <select id="mtg_og_type">
            <option value="website">Website</option>
            <option value="article">Article</option>
        </select>

        <label>Twitter Card Type:</label>
        <select id="mtg_twitter_card">
            <option value="summary">Summary Card</option>
            <option value="summary_large_image">Large Summary Card</option>
        </select>

        <button type="button" onclick="generateMetaTags()">Generate Meta Tags</button>
    </form>
    <textarea id="output" readonly></textarea>
    <button type="button" onclick="copyToClipboard()">Copy</button>
</div>
